import { getPlaiceholder } from "plaiceholder";

export default async function getImagePlaceholder(image) {
  if (!image) {
    return null;
  }
  const placeholder = {};
  try {
    placeholder.blurDataURL = await getPlaiceholder(image, { size: 10 }).then(
      ({ base64 }) => base64
    );

    placeholder.placeholder = "blur";
  } catch (err) {
    // do nothing;
  }
  return placeholder;
}
