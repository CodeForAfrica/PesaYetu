export default function getNavigationMenu(data) {
  const socialLinks = data[data?.length - 1];
  const { children } = socialLinks;
  const menuProps = data.slice(0, 4).map(({ label, id, path, url }) => {
    return {
      id,
      url,
      label,
      path,
    };
  });
  const socialLinksProps = children.map(({ label, id, path, url }) => {
    return {
      id,
      url,
      label,
      path,
    };
  });
  return {
    menuProps,
    socialLinksProps,
  };
}
