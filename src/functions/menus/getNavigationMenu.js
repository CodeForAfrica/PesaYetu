export default function getNavigationMenu(data) {
  const socialMedia = data[data?.length - 1];
  const { children } = socialMedia;
  const menuProps = data.slice(0, 4).map(({ label, path }) => {
    return {
      label: label.toUpperCase(),
      url: path,
    };
  });
  const socialLinks = children.map(({ label, title, url }) => {
    return {
      src: url,
      label: label.toLowerCase(),
      href: title,
    };
  });
  return {
    menuProps,
    socialLinks,
  };
}
