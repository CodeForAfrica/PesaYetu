import unsplashOne from "@/pesayetu/assets/images/adomas-aleno-unsplash.png";
import DataVisualOne from "@/pesayetu/assets/images/DataVisualOne.png";
import DataVisualThree from "@/pesayetu/assets/images/DataVisualThree.png";
import DataVisualTwo from "@/pesayetu/assets/images/DataVisualTwo.png";
import Group3964 from "@/pesayetu/assets/images/Group 3964@2x.png";
import Group3973 from "@/pesayetu/assets/images/Group 3973@2x.png";
import Group4619 from "@/pesayetu/assets/images/Group 4619@2x.png";
import unsplashTwo from "@/pesayetu/assets/images/josh-sorenson-unsplash.png";
import unsplashThree from "@/pesayetu/assets/images/marita-kavelashvili-unsplash.png";

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

export const insightData = {
  title: "Stories",
  subtitle: "Data Driven <span class='highlight'>Insights</span>",
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

export default footerArgs;
