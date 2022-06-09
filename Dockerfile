# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_TELEMETRY_DISABLED=1 \
    WORDPRESS_URL \
    WORDPRESS_APPLICATION_USERNAME \
    WORDPRESS_APPLICATION_PASSWORD \
    WORDPRESS_MULTISITE_PREFIX \
    NEXT_PUBLIC_IMAGE_DOMAINS  \
    HURUMAP_API_URL="https://ng.hurumap.org/api/v1/"

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED=${NEXT_TELEMETRY_DISABLED} \
    WORDPRESS_URL=${WORDPRESS_URL} \
    WORDPRESS_APPLICATION_USERNAME=${WORDPRESS_APPLICATION_USERNAME} \
    WORDPRESS_APPLICATION_PASSWORD=${WORDPRESS_APPLICATION_PASSWORD} \
    WORDPRESS_MULTISITE_PREFIX=${WORDPRESS_MULTISITE_PREFIX} \
    HURUMAP_API_URL=${HURUMAP_API_URL} \
    NEXT_PUBLIC_IMAGE_DOMAINS=${NEXT_PUBLIC_IMAGE_DOMAINS}

RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
