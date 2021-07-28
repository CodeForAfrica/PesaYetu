/* eslint-disable no-shadow */
export default function getFooterMenu(data) {
  const logosProps = data
    .filter((item) => item.label.toLowerCase() === "logo")
    .map(({ label, url, title, description }) => {
      return {
        image: {
          src: url,
          alt: label?.toLowerCase(),
        },
        url: title,
        description,
      };
    })[0];
  const socialMedia = data
    .filter((item) => item?.label?.toLowerCase() === "stay in touch with us")
    .map(({ label, children }) => {
      const links = children?.map(({ label, url, title }) => {
        return {
          url: title,
          image: {
            src: url,
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
  const copyrightProps = data
    .filter((item) => item?.label?.toLowerCase() === "copyright")
    .map(({ url, description, title }) => {
      return {
        icon: url,
        copyright: description,
        copyrightUrl: title,
      };
    })[0];
  const quickLinks = data
    .filter((item) => item?.label?.toLowerCase() === "resources")
    .map(({ label, children }) => {
      return {
        title: label,
        links: children?.map(({ label, url }) => {
          return {
            label,
            href: url,
          };
        }),
      };
    })[0];
  return {
    title: socialMedia?.label,
    description: logosProps?.description,
    logosProps,
    socialMedia: socialMedia?.links,
    quickLinks,
    copyrightProps,
  };
}
