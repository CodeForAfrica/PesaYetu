// import { getPlaiceholder } from "plaiceholder";

export default async function getImagePlaceholder(image) {
  if (!image) {
    return null;
  }
  const placeholder = {};
  try {
    // placeholder.blurDataURL = await getPlaiceholder(image).then(
    //   ({ base64 }) => base64
    // );
    placeholder.blurDataURL = "data:null";

    placeholder.placeholder = "blur";
  } catch (err) {
    // do nothing;
  }
  return placeholder;
}
