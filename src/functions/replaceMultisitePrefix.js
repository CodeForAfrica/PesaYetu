export default function replaceMultisitePrefix(url) {
  const multsitePrefix = process.env.WORDPRESS_MULTISITE_PREFIX;
  if (multsitePrefix?.length && url?.startsWith(multsitePrefix)) {
    return url.replace(multsitePrefix, "");
  }
  return url;
}
