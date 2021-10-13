# Install dependencies only when needed
FROM node:14 AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:14 AS builder

ARG NEXT_PUBLIC_APP_URL
ARG WORDPRESS_URL
ARG WORDPRESS_MULTISITE_PREFIX
ARG WORDPRESS_PREVIEW_SECRET
ARG WORDPRESS_APPLICATION_USERNAME
ARG WORDPRESS_APPLICATION_PASSWORD
ARG JWT_SECRET_KEY
ARG NEXT_PUBLIC_IMAGE_DOMAINS
ARG HURUMAP_API_URL
ARG NEXT_PUBLIC_OPENAFRICA_DOMAINS
ARG NEXT_PUBLIC_SOURCEAFRICA_DOMAINS
ARG S3_UPLOAD_KEY
ARG S3_UPLOAD_SECRET
ARG S3_UPLOAD_BUCKET
ARG S3_UPLOAD_REGION

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:14 AS runner

ENV NODE_ENV production

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/next-seo.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]
