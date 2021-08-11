/* eslint-disable no-shadow */
export default function getFooterMenu(data) {
  const labels = data.map((item) => item.label?.toLowerCase());
  const logoProps = data
    .filter((item) => item?.label?.toLowerCase() === labels[0])
    .map(({ label, url, title, description }) => {
      return {
        src: url,
        alt: label?.toLowerCase(),
        href: title,
        description,
      };
    })[0];
  const copyrightProps = data
    .filter((item) => item?.label?.toLowerCase() === labels[1])
    .map(({ url, description, title }) => {
      return {
        icon: url,
        copyright: description,
        copyrightUrl: title,
      };
    })[0];
  const quickLinks = data
    .filter((item) => item?.label?.toLowerCase() === labels[2])
    .map(({ label, children }) => {
      return {
        title: label,
        links: children?.map(({ label, path }) => {
          return {
            label,
            href: path,
          };
        }),
      };
    })[0];
  const socialMedia = data
    .filter((item) => item?.label?.toLowerCase() === labels[3])
    .map(({ label, children }) => {
      const links = children?.map(({ label, url, description }) => {
        return {
          url,
          image: {
            url: description,
            alt: label?.toLowerCase(),
          },
          label,
        };
      });
      return {
        label,
        links,
      };
    })[0];
  return {
    logoProps,
    quickLinks,
    copyrightProps,
    title: socialMedia?.label,
    description: logoProps?.description,
    socialMedia: socialMedia?.links,
  };
}
