import { camelCase } from "lodash";

function formatName(name) {
  return camelCase(name.split("/")[1]?.trim()); // converts blocks with other naming conversion to camel case, eg media-text to mediaText
}

function formatLazyBlockImage(image) {
  const data = JSON.parse(decodeURIComponent(image)) || null;
  return data?.url;
}

function formatLazyBlockIteratorContentWithImage(
  { items: itemsProps, ...rest },
  imgField
) {
  const items =
    JSON.parse(decodeURIComponent(itemsProps)).map((item) => {
      return {
        ...item,
        [imgField]: item[imgField]?.url,
      };
    }) || null;
  return { ...rest, items };
}

function formatEnablingPartnersBlock(block) {
  const { attributes, name } = block;
  switch (name) {
    case "lazyblock/main-partner":
      return {
        ...attributes,
        logo: JSON.parse(decodeURIComponent(attributes?.logo)) || null,
      };
    default:
      return attributes;
  }
}

function formatEnablingPartners({
  attributes: { partners, ...rest },
  innerBlocks,
}) {
  const items = innerBlocks.reduce((acc, cur) => {
    acc[formatName(cur.name)] = formatEnablingPartnersBlock(cur);
    return acc;
  }, {});
  return {
    ...rest,
    ...items,
    partners: JSON.parse(decodeURIComponent(partners)) || null,
  };
}

function formatInsightsStories(attr) {
  const { stories, ...attributes } = attr;
  const formattedStories = stories?.map(
    ({ blocks, excerpt: description, uri: href, ...rest }) => {
      const chartBlock = blocks?.find(
        (b) =>
          Object.hasOwnProperty.call(b, "name") &&
          b?.name === "lazyblock/insight-chart"
      );
      return {
        ...rest,
        description,
        href,
        chart: chartBlock?.attributes?.chart ?? "",
      };
    }
  );

  if (!formattedStories) {
    return null;
  }

  return { ...attributes, stories: formattedStories };
}

function format(block) {
  const { attributes, name } = block;
  switch (name) {
    case "acf/insights-stories":
      return formatInsightsStories(attributes);
    case "lazyblock/explore-other-tools":
    case "lazyblock/data-visuals":
    case "lazyblock/data-insights":
      return formatLazyBlockIteratorContentWithImage(attributes, "image");
    case "lazyblock/partners-and-newsletter":
      return formatEnablingPartners(block);
    case "lazyblock/other-hero":
      return {
        ...attributes,
        image: formatLazyBlockImage(attributes?.image),
        accentImage: formatLazyBlockImage(attributes?.accentImage),
      };
    case "lazyblock/hero":
    case "lazyblock/about-hero":
    case "lazyblock/how-it-works":
    default:
      return attributes;
  }
}

export default function formatBlocksForSections(blc) {
  // filter empty block {}
  const blocks = blc?.filter(
    (b) => Object.keys(b).length !== 0 && Object.hasOwnProperty.call(b, "name")
  );

  const texts = blocks?.filter(
    ({ name }) => name === "core/heading" || name === "core/paragraph"
  );
  blocks?.push({ name: "core/texts", attributes: texts });

  return blocks.reduce((acc, cur) => {
    const attr = format(cur);
    if (attr) {
      acc[formatName(cur.name)] = format(cur);
    }
    return acc;
  }, {});
}
