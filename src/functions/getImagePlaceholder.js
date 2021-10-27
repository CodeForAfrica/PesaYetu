import { getPlaiceholder } from "plaiceholder";

export default async function getImagePlaceholder(src) {
  if (!src) {
    return null;
  }
  try {
    const { base64, img } = await getPlaiceholder(src);
    const placeholder = base64?.length ? "blur" : "empty";
    return { ...img, blurDataURL: base64, placeholder };
  } catch (err) {
    // do nothing;
  }
  return null;
}
