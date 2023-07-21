export default function getNavigationMenu(data) {
  const socialMedia = data?.length ? data[data.length - 1] : undefined;
  const { children } = socialMedia || {};
  const menuProps = data.slice(1, 5).map(({ label, path }) => {
    return {
      label: label.toUpperCase(),
      href: path,
    };
  });
  const socialLinks = children?.map(({ label, title, url }) => {
    return {
      href: url,
      src: title,
      label: label.toLowerCase(),
    };
  });
  return {
    menuProps,
    socialLinks,
  };
}
