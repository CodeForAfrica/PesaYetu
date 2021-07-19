/**
 * Format default SEO data for use in `DefaultSeo` component.
 *
 * @param  {object} seoData Fallback SEO data.
 * @return {object}         Formatted SEO data.
 */
export default function formatDefaultSeoData(seoData) {
  const homepage = seoData?.homepageSettings?.frontPage?.seo;
  const siteSeo = seoData?.siteSeo;

  return {
    title: homepage?.title ?? '',
    description: homepage?.metaDesc ?? '',
    noIndex: homepage?.metaRobotsNoindex !== 'index',
    noFollow: homepage?.metaRobotsNofollow !== 'follow',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteSeo?.schema?.siteUrl ?? '',
      siteName: siteSeo?.schema?.siteName ?? '',
      images: [
        {
          url: siteSeo?.openGraph?.defaultImage?.sourceUrl ?? '',
        },
      ],
    },
    social: {
      facebook: siteSeo?.social?.facebook?.url ?? '',
      instagram: siteSeo?.social?.instagram?.url ?? '',
      linkedIn: siteSeo?.social?.linkedIn?.url ?? '',
      mySpace: siteSeo?.social?.mySpace?.url ?? '',
      pinterest: siteSeo?.social?.pinterest?.url ?? '',
      twitter: siteSeo?.social?.twitter?.username
        ? `https://twitter.com/${siteSeo.social.twitter.username}`
        : '',
      wikipedia: siteSeo?.social?.wikipedia?.url ?? '',
      youTube: siteSeo?.social?.youTube?.url ?? '',
    },
  };
}
