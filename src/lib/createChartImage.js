import AWS from "aws-sdk";
import * as vega from "vega";

import configureScope from "@/pesayetu/components/HURUmap/Chart/configureScope";

function stream2buffer(stream) {
  return new Promise((resolve, reject) => {
    const buf = [];

    stream.on("data", (chunk) => buf.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(buf)));
    stream.on("error", (err) => reject(err));
  });
}

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

export default async function createChartImage(geoCode, chartId, indicator) {
  const spec = configureScope(indicator);
  const view = new vega.View(vega.parse(spec), { renderer: "none" });

  const canvas = await view.toCanvas();
  const stream = canvas.createPNGStream();
  const Body = await stream2buffer(stream);
  const Key = `media/images/pesayetu-${geoCode}-${chartId}.png`;
  const config = {
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
  const s3 = new AWS.S3(config);
  return uploadAsync(s3, params);
}
