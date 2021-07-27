import cc from "@/pesayetu/assets/cc.svg";
import footerLogo from "@/pesayetu/assets/footer-logo.svg";
import facebook from "@/pesayetu/assets/footer-social-fb.svg";
import instagram from "@/pesayetu/assets/footer-social-ig.svg";
import linkedin from "@/pesayetu/assets/footer-social-in.svg";
import twitter from "@/pesayetu/assets/footer-social-tw.svg";
import Group3964 from "@/pesayetu/assets/images/Group 3964@2x.png";
import Group3973 from "@/pesayetu/assets/images/Group 3973@2x.png";
import Group4619 from "@/pesayetu/assets/images/Group 4619@2x.png";
import { ReactComponent as DesktopFacebook } from "@/pesayetu/assets/nav-desktop-fb.svg";
import { ReactComponent as DesktopTwitter } from "@/pesayetu/assets/nav-desktop-tw.svg";
import { ReactComponent as MobileFacebook } from "@/pesayetu/assets/nav-mobile-fb.svg";
import { ReactComponent as MobileTwitter } from "@/pesayetu/assets/nav-mobile-tw.svg";

const CFA = {
  image: {
    src: footerLogo,
    alt: "Code for Africa",
  },
  url: "https://codeforafrica.org",
};

const ABOUT = {
  about:
    "This site is an openAFRICA project of Code for Africa.\n" +
    "        All content is released under a Creative Commons 4 Attribution Licence. \n" +
    "        Reuse it to help empower your own community.\n" +
    "        The code is available on GitHub and data is available on openAFRICA.\n",
};

const QUICK_LINKS = [
  {
    title: "Resources",
    links: [
      { href: "/about", label: "About the Project" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
];

const socialMedia = [
  {
    url: "https://www.instagram.com/code4africa__/",
    image: {
      url: instagram,
      alt: "Instagram",
    },
  },
  {
    url: "https://www.facebook.com/CodeForAfrica/",
    image: {
      url: facebook,
      alt: "Facebook",
    },
  },
  {
    url: "https://twitter.com/Code4Africa",
    image: {
      url: twitter,
      alt: "Twitter",
    },
  },
  {
    url: "https://github.com/codeforafrica",
    image: {
      url: linkedin,
      alt: "LinkedIn",
    },
  },
];

export const navigationArgs = {
  logoProps: {
    firstTitle: "Pesa",
    secondTitle: "Yetu",
    firstSubtitle: "Our County",
    secondSubtitle: "Our Responsibility",
  },
  menuProps: [
    {
      href: "https://dev.pesayetu.pesacheck.org",
      label: "EXPLORE",
      menuLinks: [
        {
          href: "https://dev.pesayetu.pesacheck.org",
          label: "DATA",
        },
        {
          href: "https://dev.pesayetu.pesacheck.org",
          label: "STORIES",
        },
        {
          href: "https://dev.pesayetu.pesacheck.org",
          label: "HOW IT WORKS",
        },
      ],
    },
  ],
  selectProps: {
    title: "Search for Location",
    placeholder: "Search ...",
    selectId: "select-grouped-id",
    inputBaseId: "inputbase-grouped-id",
    selectLabel: "select-grouped-label",
    inputBaseLabel: "inputbase-grouped-label",
    menuItems: [
      {
        countryName: "country 1",
        countryUrl: "/country 1",
        items: [
          {
            name: "subcounty-1",
            url: "/subcounty-1",
          },
          {
            name: "subcounty-2",
            url: "/subcounty-2",
          },
          {
            name: "subcounty-2",
            url: "/subcounty-2",
          },
        ],
      },
      {
        countryName: "country 2",
        countryUrl: "/country 2",
        items: [
          {
            name: "subcounty-4",
            url: "/subcounty-4",
          },
          {
            name: "subcounty-5",
            url: "/subcounty-5",
          },
        ],
      },
      {
        countryName: "country 3",
        countryUrl: "/country 3",
        items: [
          {
            name: "subcounty-6",
            url: "/subcounty-6",
          },
          {
            name: "subcounty-7",
            url: "/subcounty-7",
          },
        ],
      },
    ],
  },
  socialLinks: [
    {
      href: "/twitter",
      desktopComponent: DesktopTwitter,
      mobilepComponent: MobileTwitter,
      label: "twitter",
    },
    {
      href: "/facebook",
      desktopComponent: DesktopFacebook,
      mobileComponent: MobileFacebook,
      label: "facebook",
    },
  ],
};

export const exploreTools = {
  title: "EXPLORE OUR OTHER TOOLS",
  items: [
    {
      title: "Promise Tracker",
      description:
        "The Promise Tracker is a platform citizens can use to track promises made by governors, institutions and political parties in their manifestos during campaigns.",
      image: Group3973,
    },
    {
      title: "Pesa Check",
      description:
        "PesaCheck is the largest fact-checking organisation in Africa, working in 12 countries and providing up to date fact-checks in four languages.",
      image: Group4619,
    },
    {
      title: "Tax Clock",
      description:
        "TaxClock shows how public budget data can be used to help citizens better understand how governments spend their tax.",
      image: Group3964,
    },
    {
      title: "DebunkBot",
      description:
        "DebunkBot was created to fight the spread of misinformation on social media by responding to tweets sharing questionable links.",
      image: Group3964,
    },
  ],
};

export const footerArgs = {
  title: "Stay in touch with us",
  socialMedia,
  quickLinks: QUICK_LINKS[0],
  description: ABOUT.about,
  logoProps: {
    image: CFA.image,
    url: CFA.url,
  },
  aboutVariant: "subtitle1",
  copyrightProps: {
    icon: cc,
    copyright: "2021 PesaYetu",
    copyrightUrl: "https://dev.pesayetu.pesacheck.org",
    copyrightVariant: "subtitle1",
  },
};

export default {
  footerArgs,
  navigationArgs,
  exploreTools,
};
