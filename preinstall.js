const fs = require("graceful-fs");

const packages = require("./package.json");

if (process.env.ENVIRONMENT === "vercel") {
  delete packages.dependencies.canvas;
  fs.writeFileSync("./package.json", JSON.stringify(packages, null, 2));
}
