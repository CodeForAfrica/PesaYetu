import unsplashOne from "@/pesayetu/assets/images/adomas-aleno-unsplash.png";
import DataVisualOne from "@/pesayetu/assets/images/DataVisualOne.png";
import DataVisualThree from "@/pesayetu/assets/images/DataVisualThree.png";
import DataVisualTwo from "@/pesayetu/assets/images/DataVisualTwo.png";
import FaithOnkundi from "@/pesayetu/assets/images/Faith-Onkundi.png";
import Group3964 from "@/pesayetu/assets/images/Group 3964@2x.png";
import Group3973 from "@/pesayetu/assets/images/Group 3973@2x.png";
import Group4619 from "@/pesayetu/assets/images/Group 4619@2x.png";
import Jacopo from "@/pesayetu/assets/images/Jacopo.png";
import unsplashTwo from "@/pesayetu/assets/images/josh-sorenson-unsplash.png";
import LewisChalo from "@/pesayetu/assets/images/Lewis-Chalo.png";
import unsplashThree from "@/pesayetu/assets/images/marita-kavelashvili-unsplash.png";
import MercyKaragi from "@/pesayetu/assets/images/Mercy-Karagi.png";
import Piero from "@/pesayetu/assets/images/Piero.png";
import Tricia from "@/pesayetu/assets/images/Tricia-Govindasamy.png";
import Facebook from "@/pesayetu/assets/nav-desktop-fb.svg";
import Twitter from "@/pesayetu/assets/nav-desktop-tw.svg";
import { ReactComponent as SearchClose } from "@/pesayetu/assets/search-close.svg";
import { ReactComponent as SearchOpen } from "@/pesayetu/assets/search-open.svg";

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
      url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-3049.svg",
      alt: "Instagram",
    },
  },
  {
    url: "https://www.facebook.com/CodeForAfrica/",
    image: {
      url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-3048.svg",
      alt: "Facebook",
    },
  },
  {
    url: "https://twitter.com/Code4Africa",
    image: {
      url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-3047.svg",
      alt: "Twitter",
    },
  },
  {
    url: "https://github.com/codeforafrica",
    image: {
      url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-3184.svg",
      alt: "LinkedIn",
    },
  },
];

export const navigationArgs = {
  logoProps: {
    href: "/",
    firstTitle: "Pesa",
    secondTitle: "Yetu",
    firstSubtitle: "Our County",
    secondSubtitle: "Our Responsibility",
  },
  menuProps: [
    {
      href: "/explore",
      label: "EXPLORE",
    },
    {
      href: "/data",
      label: "DATA",
    },
    {
      href: "/stories",
      label: "STORIES",
    },
    {
      href: "/how-it-works",
      label: "HOW IT WORKS",
    },
  ],
  selectProps: {
    title: "Search for location",
    placeholder: "Abc_",
    selectId: "select-grouped-id",
    inputBaseId: "inputbase-grouped-id",
    selectLabel: "select-grouped-label",
    inputBaseLabel: "inputbase-grouped-label",
    openIcon: SearchOpen,
    closeIcon: SearchClose,
    menuItems: [
      {
        countryName: "country 1",
        countryUrl: "/country-1",
        items: [
          {
            name: "subcounty 1",
            url: "/subcounty-1",
          },
          {
            name: "subcounty 2",
            url: "/subcounty-2",
          },
          {
            name: "subcounty 3",
            url: "/subcounty-3",
          },
        ],
      },
      {
        countryName: "country 2",
        countryUrl: "/country-2",
        items: [
          {
            name: "subcounty 4",
            url: "/subcounty-4",
          },
          {
            name: "subcounty 5",
            url: "/subcounty-5",
          },
        ],
      },
      {
        countryName: "country 3",
        countryUrl: "/country-3",
        items: [
          {
            name: "subcounty 6",
            url: "/subcounty-6",
          },
          {
            name: "subcounty 7",
            url: "/subcounty-7",
          },
        ],
      },
    ],
  },
  socialLinks: [
    {
      href: "/twitter",
      src: Twitter,
      label: "twitter",
    },
    {
      href: "/facebook",
      src: Facebook,
      label: "facebook",
    },
  ],
};
export const insightData = {
  overline: "Stories",
  title: "Data-driven <span class='highlight'>Insights</span>",
  items: [
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashOne,
      linkdescription: "Read More",
      href: "www.test.com",
    },
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashTwo,
      linkdescription: "Read More",
      href: "www.test.com",
    },

    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashThree,
      linkdescription: "Read More",
      href: "www.test.com",
    },
  ],
};
export const searchArgs = {
  selectProps: {
    title: "Search for Location",
    placeholder: "Abc_",
    selectId: "select-grouped-id",
    inputBaseId: "inputbase-grouped-id",
    selectLabel: "select-grouped-label",
    inputBaseLabel: "inputbase-grouped-label",
    openIcon: SearchOpen,
    closeIcon: SearchOpen,
    menuItems: [
      {
        countryName: "country 1",
        countryUrl: "/country-1",
        items: [
          {
            name: "subcounty 1",
            url: "/subcounty-1",
          },
          {
            name: "subcounty 2",
            url: "/subcounty-2",
          },
          {
            name: "subcounty 3",
            url: "/subcounty-3",
          },
        ],
      },
      {
        countryName: "country 2",
        countryUrl: "/country-2",
        items: [
          {
            name: "subcounty 4",
            url: "/subcounty-4",
          },
          {
            name: "subcounty 5",
            url: "/subcounty-5",
          },
        ],
      },
      {
        countryName: "country 3",
        countryUrl: "/country-3",
        items: [
          {
            name: "subcounty 6",
            url: "/subcounty-6",
          },
          {
            name: "subcounty 7",
            url: "/subcounty-7",
          },
        ],
      },
    ],
  },
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

export const dataVisuals = {
  title: "Visualise data for each county and municipality",
  items: [
    {
      image: DataVisualOne,
      description:
        "<span class='bold'>Step 1:</span> Click the search field and select the county or municipality from the dropdown menu.",
    },
    {
      image: DataVisualTwo,
      description:
        "<span class='bold'>Step 2:</span> Explore the map, confirm your selection and click on “Rich Data” to display the data.",
    },
    {
      image: DataVisualThree,
      description:
        "<span class='bold'>Step 3:</span> Browse the charts and download and share the data using the buttons on the right side.",
    },
  ],
};

export const aboutTeam = {
  title: "The Team",
  items: [
    {
      title: "Tricia Govindasamy",
      image: Tricia,
      description:
        "Senior Data Product Manager at Code for Africa, based in South Africa.",
    },
    {
      title: "Jacopo Ottaviani",
      image: Jacopo,
      description: "Chief Data Officer at Code for Africa, based in Italy.",
    },
    {
      title: "Mercy Karagi",
      image: MercyKaragi,
      description: "Data Analyst at Code for Africa, based in Kenya.",
    },
    {
      title: "Lewis Chalo",
      image: LewisChalo,
      description: "Data Analyst at Code for Africa, based in Kenya.",
    },
    {
      title: "Pierro",
      image: Piero,
      description: "UI/UX Designer at Code for Africa, based in South Africa.",
    },
    {
      title: "Faith Onkundi",
      image: FaithOnkundi,
      description: "Data Analyst at Code for Africa, based in Kenya.",
    },
  ],
};

export const footerArgs = {
  title: "Stay in touch with us",
  description: ABOUT.about,
  logoProps: {
    src: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4426.svg",
    alt: "Code for Africa",
    href: "https://codeforafrica.org",
  },
  socialMedia,
  quickLinks: QUICK_LINKS[0],
  copyrightProps: {
    icon: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/cc.svg",
    copyright: "2021 PesaYetu",
    copyrightUrl: "https://dev.pesayetu.pesacheck.org",
    copyrightVariant: "subtitle1",
  },
  aboutVariant: "subtitle1",
};

const config = {
  footerArgs,
  exploreTools,
  navigationArgs,
  url: "http://localhost:3000",
};

export default config;
