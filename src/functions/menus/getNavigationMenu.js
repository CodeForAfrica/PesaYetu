export default function getNavigationMenu(data) {
  const socialMedia = data[data?.length - 1];
  const { children } = socialMedia;
  const menuProps = data.slice(0, 4).map(({ label, path }) => {
    return {
      label: label.toUpperCase(),
      href: path,
    };
  });
  const socialLinks = children.map(({ label, title, url }) => {
    return {
      href: title,
      src: url,
      label: label.toLowerCase(),
    };
  });
  return {
    menuProps,
    socialLinks,
  };
}
