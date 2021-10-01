import { APIRoute } from "next-s3-upload";

import slugify from "@/pesayetu/utils/slugify";

export default APIRoute.configure({
  key(_, originalFilename) {
    const segments = originalFilename.split(".");
    const extension = segments.pop();
    const name = segments.join(".");
    const filename = `${slugify(name)}.${extension}`;

    return `media/images/${filename}`;
  },
});
