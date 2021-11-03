import { camelCase } from "lodash";

import getImagePlaceholder from "./getImagePlaceholder";
import getReusableBlockById from "./getReusableBlockById";

function formatName(name) {
  return camelCase(name?.split("/")[1]?.trim()); // converts blocks with other naming conversion to camel case, eg media-text to mediaText
}

function formatLazyBlockImage(image) {
  if (!image) {
    return null;
  }
  const data = JSON.parse(decodeURIComponent(image)) || null;
  return data?.url;
}

async function formatLazyBlockIteratorContentWithImage(
  attributes,
  imgField,
  itemField = "items"
) {
  const items =
    (await Promise.all(
      JSON.parse(decodeURIComponent(attributes[itemField])).map(
        async (item) => {
          return {
            ...item,
            [imgField]: item[imgField]?.url ?? null,
            [`${imgField}Props`]: await getImagePlaceholder(
              item[imgField]?.url
            ),
          };
        }
      )
    )) || null;
  return { ...attributes, [itemField]: items };
}
function formatDataSource({ items: itemsProps, image, ...rest }) {
  const items = JSON.parse(decodeURIComponent(itemsProps)) || null;
  return { ...rest, image: formatLazyBlockImage(image), items };
}

async function formatLazyBlockIteratorContentWithImages(
  { items: itemsProps, ...rest },
  imgField
) {
  const items =
    (await Promise.all(
      JSON.parse(decodeURIComponent(itemsProps)).map(async (item) => {
        return {
          title: item?.title,
          description: item?.description,
          icon: item.icon?.url,
          dataVisualProps: {
            [imgField]: item[imgField]?.url,
            [`${imgField}Props`]: await getImagePlaceholder(
              item[imgField]?.url
            ),
          },
        };
      })
    )) || null;
  return { ...rest, items };
}

function formatDataIndicators({ items: itemsProps, ...rest }) {
  const items =
    JSON.parse(decodeURIComponent(itemsProps)).map((item) => {
      return {
        ...item,
        image: item?.image?.url ?? null,
        hover: item?.hover?.url ?? null,
      };
    }) || null;
  return { ...rest, items };
}

async function formatPartnersBlock(block) {
  const { attributes, name } = block;
  switch (name) {
    case "lazyblock/main-partner": {
      const logo = JSON.parse(decodeURIComponent(attributes?.logo)) || null;
      return {
        ...attributes,
        logo,
        logoProps: await getImagePlaceholder(logo?.url),
      };
    }
    default:
      return attributes;
  }
}

async function formatPartners({
  attributes: { partners: serializedPartner, ...rest },
  innerBlocks,
}) {
  const items = await innerBlocks.reduce(async (acc, cur) => {
    acc[formatName(cur.name)] = await formatPartnersBlock(cur);
    return acc;
  }, {});
  const partners = await Promise.all(
    JSON.parse(decodeURIComponent(serializedPartner)).map(async (partner) => ({
      ...partner,
      logoProps: await getImagePlaceholder(partner?.logo?.url),
    }))
  );
  return {
    ...rest,
    ...items,
    partners,
  };
}

function formatInsightsStories(attr) {
  const { stories, ...attributes } = attr;
  const formattedStories = stories?.map(
    ({ story: { blocks, excerpt, uri: href, ...rest } }) => {
      const chartBlock = blocks?.find(
        (b) =>
          Object.hasOwnProperty.call(b, "name") &&
          b?.name === "lazyblock/insight-chart"
      );
      return {
        ...rest,
        description: excerpt ?? "",
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

async function formatFeaturedStories(attributes) {
  const featuredStory = attributes?.featuredStory;
  if (!featuredStory) {
    return null;
  }

  const { news, insights } = featuredStory;
  const image = news?.featuredImage?.node?.sourceUrl;
  const formattedNews = {
    title: news?.title,
    description: news?.excerpt?.replace(/<[^>]+>/g, ""),
    href: `/stories${news?.uri}`,
    slug: news?.slug,
    image,
    imageProps: await getImagePlaceholder(image),
    ctaText: attributes?.ctaText ?? "",
  };
  const chartBlock = insights.blocks?.find(
    (b) =>
      Object.hasOwnProperty.call(b, "name") &&
      b?.name === "lazyblock/insight-chart"
  );
  const insightImage = insights?.featuredImage?.node?.sourceUrl ?? null;
  const formattedInsights = {
    title: insights?.title,
    description: insights?.excerpt?.replace(/<[^>]+>/g, ""),
    href: `/stories${insights?.uri}`,
    slug: insights?.slug,
    chart: chartBlock?.attributes?.chart ?? "",
    ctaText: attributes?.ctaText ?? "",
    image: insightImage,
    imageProps: await getImagePlaceholder(insightImage),
  };
  return { news: formattedNews, insights: formattedInsights };
}

function formatTypes(typesString) {
  return typesString.split("\n").map((item) => {
    const [name = null, href = null] = item.split(",").map((i) => i.trim());
    return { name, href };
  });
}

function formatDocumentsAndDataSets(
  {
    countLabel,
    count,
    orderLabel,
    orderOptions,
    paginationOptions,
    paginationLabel,
    ...attributes
  },
  innerBlocks
) {
  return innerBlocks.map(({ attributes: { items: itemsString, ...rest } }) => {
    const formattedItems = JSON.parse(decodeURIComponent(itemsString)) || null;
    const items = formattedItems.map(({ types: typesString, ...item }) => {
      if (typesString) {
        return { types: formatTypes(typesString), ...item };
      }
      return item;
    });
    const filterProps = {
      countLabel,
      count,
      orderLabel,
      paginationOptions: paginationOptions?.split(",").map(Number) || [],
      orderOptions:
        orderOptions
          ?.split(",")
          .map((o) => o.trim())
          .filter((o) => o) || [],
      paginationLabel,
    };
    return { items, filterProps, ...attributes, ...rest };
  });
}

async function format(block) {
  const { attributes, name, innerBlocks } = block;
  switch (name) {
    case "acf/insights-stories":
      return formatInsightsStories(attributes);
    case "acf/featured-stories":
      return formatFeaturedStories(attributes);
    case "lazyblock/explore-other-tools":
    case "lazyblock/data-visualisation-guide":
    case "lazyblock/our-courses":
    case "lazyblock/data-insights":
    case "lazyblock/about-team":
      return formatLazyBlockIteratorContentWithImage(attributes, "image");
    case "lazyblock/partners-and-newsletter":
      return formatPartners(block);
    case "lazyblock/metrics":
      return formatLazyBlockIteratorContentWithImages(attributes, "image");
    case "lazyblock/data-source":
      return formatDataSource(attributes);
    case "core/block": {
      // Retrieve reusable block data.
      const reusableBlocks = await getReusableBlockById(attributes.ref);
      // NOTE(Obed) By default recursion falls victim to this rule though functions are hoisted. this enables functions to be called recursively as used here.
      //            see: https://github.com/eslint/eslint/issues/12473
      // eslint-disable-next-line no-use-before-define
      reusableBlocks.blocks = await formatBlocksForSections(
        reusableBlocks.blocks
      );
      return reusableBlocks;
    }
    case "lazyblock/supporting-partners":
      return formatLazyBlockIteratorContentWithImage(attributes, "logo");
    case "lazyblock/other-hero": {
      const image = await formatLazyBlockImage(attributes?.image);
      const accentImage = await formatLazyBlockImage(attributes?.accentImage);
      return {
        ...attributes,
        image,
        imageProps: await getImagePlaceholder(image),
        accentImage,
        accentImageProps: await getImagePlaceholder(accentImage),
      };
    }
    case "lazyblock/share-story":
      return {
        ...attributes,
        socialLinks: JSON.parse(decodeURIComponent(attributes.socialLinks)),
      };
    case "lazyblock/data-indicators":
      return formatDataIndicators(attributes);
    case "lazyblock/tutorial":
      return formatLazyBlockIteratorContentWithImage(attributes, "image");
    case "lazyblock/panel":
      return formatLazyBlockIteratorContentWithImage(
        attributes,
        "icon",
        "panelItems"
      );
    case "lazyblock/documents-and-datasets":
      return formatDocumentsAndDataSets(attributes, innerBlocks);
    case "lazyblock/hero":
    case "lazyblock/about-hero":
    case "lazyblock/how-it-works":
    default:
      return attributes;
  }
}

export default async function formatBlocksForSections(blc) {
  // filter empty block {}
  const blocks = blc?.filter(
    (b) => Object.keys(b).length !== 0 && Object.hasOwnProperty.call(b, "name")
  );

  const texts = blocks?.filter(
    ({ name }) => name === "core/heading" || name === "core/paragraph"
  );
  blocks?.push({ name: "core/texts", attributes: texts });

  let blockObj = {};
  await Promise.all(
    blocks?.map(async (block) => {
      const formattedBlock = await format(block);
      if (block.name === "core/block") {
        blockObj = { ...blockObj, ...formattedBlock?.blocks };
      } else if (formattedBlock) {
        blockObj[formatName(block.name)] = formattedBlock;
      }
    }) || []
  );

  return blockObj;
}
