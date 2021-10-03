export default function getNavigationMenu(data) {
  const labels = data.map((item) => item.label?.toLowerCase());
  const socialMedia = data[data?.length - 1];
  const { children } = socialMedia;
  const menuProps = data.slice(1, 5).map(({ label, path }) => {
    return {
      label: label.toUpperCase(),
      href: path,
    };
  });
  const socialLinks = children.map(({ label, title, url }) => {
    return {
      url,
      src: title,
      label: label.toLowerCase(),
    };
  });
  const desktopLogoProps = data
    .filter((item) => item?.label?.toLowerCase() === labels[6])
    .map(({ label, title, url }) => {
      return {
        url,
        src: title,
        label: label.toLowerCase(),
      };
    })[0];

  const drawerLogoProps = data
    .filter((item) => item?.label?.toLowerCase() === labels[7])
    .map(({ label, title, url }) => {
      return {
        url,
        src: title,
        label: label.toLowerCase(),
      };
    })[0];

  const mobileLogoProps = data
    .filter((item) => item?.label?.toLowerCase() === labels[8])
    .map(({ label, title, url }) => {
      return {
        url,
        src: title,
        label: label.toLowerCase(),
      };
    })[0];
  return {
    menuProps,
    socialLinks,
    desktopLogoProps,
    mobileLogoProps,
    drawerLogoProps,
  };
}
