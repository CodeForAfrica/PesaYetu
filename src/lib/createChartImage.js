import AWS from "aws-sdk";
import sharp from "sharp";
import * as vega from "vega";

import configureScope from "@/pesayetu/components/HURUmap/Chart/configureScope";
import config from "@/pesayetu/config";

function uploadAsync(s3, params) {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.Location);
      }
    });
  });
}

const ACL = "public-read";
const CacheControl = "max-age=630720000, public";
const ContentType = "image/png";

export default async function createChartImage(
  geoCode,
  chartId,
  indicator,
  secondaryIndicator,
  isCompare,
  profileNames,
  background = "#ffffff",
  width = 1200,
  height = 600
) {
  const spec = configureScope(
    indicator,
    secondaryIndicator,
    profileNames,
    isCompare
  );
  const Key = `media/images/pesayetu-${geoCode}-${chartId}.png`;
  const view = new vega.View(vega.parse(spec), { renderer: "none" });
  if (background) {
    view.background(background);
  }
  await view.runAsync();
  const svg = await view.toSVG(config.images.scaleFactor);
  const Body = await sharp(Buffer.from(svg))
    .extend({
      left: 100,
      right: 100,
      background,
    })
    .resize(width, height, {
      background,
      fit: sharp.fit.contain,
    })
    .png()
    .toBuffer();
  const clientConfig = {
    accessKeyId: process.env.S3_UPLOAD_KEY,
    secretAccessKey: process.env.S3_UPLOAD_SECRET,
    region: process.env.S3_UPLOAD_REGION,
  };
  const Bucket = process.env.S3_UPLOAD_BUCKET;
  const params = {
    ACL,
    Bucket,
    Key,
    Body,
    CacheControl,
    ContentType,
  };
  const s3 = new AWS.S3(clientConfig);
  const url = await uploadAsync(s3, params);
  return { url, width, height, type: ContentType };
}
