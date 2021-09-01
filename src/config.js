import richDataIcon from "@/pesayetu/assets/Component121.svg";
import pinIcon from "@/pesayetu/assets/Component122.svg";
import Group4646 from "@/pesayetu/assets/icons/Group 4646-white.svg";
import developmentHover from "@/pesayetu/assets/icons/Group 4646.svg";
import Group4656 from "@/pesayetu/assets/icons/Group 4656-white.svg";
import revenueHover from "@/pesayetu/assets/icons/Group 4656.svg";
import Group4657 from "@/pesayetu/assets/icons/Group 4657-white.svg";
import overviewHover from "@/pesayetu/assets/icons/Group 4657.svg";
import Group4658 from "@/pesayetu/assets/icons/Group 4658-white.svg";
import summaryHover from "@/pesayetu/assets/icons/Group 4658.svg";
import Group4659 from "@/pesayetu/assets/icons/Group 4659-white.svg";
import implementHover from "@/pesayetu/assets/icons/Group 4659.svg";
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
import Metric1 from "@/pesayetu/assets/Metric1@2x.png";
import Metric2 from "@/pesayetu/assets/Metric2@2x.png";
import Facebook from "@/pesayetu/assets/nav-desktop-fb.svg";
import Twitter from "@/pesayetu/assets/nav-desktop-tw.svg";

export const dataIndicator = {
  title: "Data <span class='highlight'>Indicators</span>",
  items: [
    {
      title: "Overview",
      image: Group4657,
      hover: overviewHover,
      description:
        "<p class='paragraph'>This includes general county data.</p> Topics include administrative and political units, population size and composition, land use, tourism and wildlife, industry and trade, finance, and education.",
    },
    {
      title: "Revenue",
      image: Group4656,
      hover: revenueHover,
      description:
        "<p>This looks at the review of the implementation of the previous County Integrated Development Plan for the period of 2014 to 2017.</p> Datasets include county revenue streams and expenditure analysis.",
    },
    {
      title: "Development",
      image: Group4646,
      hover: developmentHover,
      description:
        "<p>This highlights the county development priorities and strategies.</p> It looks at the programmes and associated budgets the county has proposed for the period 2018 to 2022.",
    },
    {
      title: "Implement",
      image: Group4659,
      hover: implementHover,
      description:
        "<p>This showcases the implementation framework for the county as published in the County Integrated Development Plan.</p> It covers the resource mobilisation framework on the proposed and predicted revenue and expenditure.",
    },
    {
      title: "Summary",
      image: Group4658,
      hover: summaryHover,
      description:
        "<p>The summary takes a look at the monitoring and evaluation framework as published in the County Integrated Development Plan.</p> This includes the outcome indicators for each of the sector plans proposed.",
    },
  ],
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
      href: "/stories/news",
      label: "STORIES",
    },
    {
      href: "/how-it-works",
      label: "HOW IT WORKS",
    },
  ],
  selectProps: {
    label: "Search for location",
    counties: [
      {
        name: "Nairobi",
        code: 47,
      },
      {
        name: "Marsabit",
        code: 10,
      },
      {
        name: "Meru",
        code: 6,
      },
    ],
  },
  socialLinks: [
    {
      href: "https://twitter.com/",
      src: Twitter,
      label: "twitter",
    },
    {
      href: "https://web.facebook.com/?_rdc=1&_rdr",
      src: Facebook,
      label: "facebook",
    },
  ],
};

export const ourCourses = {
  title: "Our Courses",
  items: [
    {
      image: unsplashTwo,
      title: "Data Visualization",
      description:
        "Learn the basics and all the tips and tricks needed to excel in data visualisation with this free, online course.",
      ctaText: "Read More",
      href: "https://courses.academy.africa/courses/data-visualization/",
    },
    {
      image: unsplashTwo,
      title: "Reporting on Human Trafficking",
      description:
        "Want to make a difference? This course will introduce you to the fundamentals of reporting on human trafficking.",
      ctaText: "Read More",
      href: "https://courses.academy.africa/courses/reporting-on-human-trafficking/",
    },
    {
      image: unsplashTwo,
      title: "Reporting on Endemic Problems",
      description:
        "From this course you’ll learn everything you need to know about using solutions journalism to report on endemic problems.",
      ctaText: "Read More",
      href: "https://courses.academy.africa/courses/reporting-endemic-problems-solutions-journalism/",
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
      ctaText: "Read More",
      href: "www.test.com",
    },
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashTwo,
      ctaText: "Read More",
      href: "www.test.com",
    },

    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashThree,
      ctaText: "Read More",
      href: "www.test.com",
    },
  ],
};
export const searchArgs = {
  label: "Search for Location",
  counties: [
    {
      name: "Nairobi",
      code: 47,
    },
    {
      name: "Marsabit",
      code: 10,
    },
    {
      name: "Meru",
      code: 6,
    },
  ],
};

export const insightDataTabStories = {
  items: [
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashOne,
      ctaText: "Read More",
      href: "www.test.com",
    },
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashTwo,
      ctaText: "Read More",
      href: "www.test.com",
    },

    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashThree,
      ctaText: "Read More",
      href: "www.test.com",
    },
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashOne,
      ctaText: "Read More",
      href: "www.test.com",
    },
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashTwo,
      ctaText: "Read More",
      href: "www.test.com",
    },

    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashThree,
      ctaText: "Read More",
      href: "www.test.com",
    },
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashOne,
      ctaText: "Read More",
      href: "www.test.com",
    },
    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashTwo,
      ctaText: "Read More",
      href: "www.test.com",
    },

    {
      title: "Dolor sit amet ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, magnis mus etiam nam lectus lobortis varius ultrices, donec dapibus dui felis est penatibus.",
      image: unsplashThree,
      ctaText: "Read More",
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
export const documentsArg = {
  filterProps: {
    datasetLabel: "Dataset",
    datatset: 65,
    orderLabel: "Order By",
    orderOptions: ["Relevance", "Date", "Municipal"],
    paginationOptions: [10, 25, 50],
    paginationlabel: "Show",
  },
  items: [
    {
      title: "2021",
      description: "The County Integrated Development Plan (CIDP) in Kenya",
      href: "https://courses.academy.africa/courses/data-visualization/",
    },
    {
      title: "2021",
      description: "The County Integrated Development Plan (CIDP) in Kenya",
      href: "https://courses.academy.africa/courses/data-visualization/",
    },
    {
      title: "2021",
      description: "The County Integrated Development Plan (CIDP) in Kenya",
      href: "https://courses.academy.africa/courses/data-visualization/",
    },
    {
      title: "2021",
      description: "The County Integrated Development Plan (CIDP) in Kenya",
      href: "https://courses.academy.africa/courses/data-visualization/",
    },
    {
      title: "2021",
      description: "The County Integrated Development Plan (CIDP) in Kenya",
      ctaText: "Read More",
      href: "https://courses.academy.africa/courses/data-visualization/",
    },
    {
      title: "2021",
      description: "The County Integrated Development Plan (CIDP) in Kenya",
      ctaText: "Read More",
      href: "https://courses.academy.africa/courses/data-visualization/",
    },
  ],
};

export const datasetTypeArgs = {
  filterProps: {
    datasetLabel: "Dataset",
    datatset: 65,
    orderLabel: "Order By",
    orderOptions: ["Relevance", "Date", "Municipal"],
    paginationOptions: [10, 25, 50],
    paginationlabel: "Show",
  },
  items: [
    {
      title: "Health facilities in Africa",
      description: "Updated: 20/04/2020",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      description: "Updated: 20/04/2020",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      description: "Updated: 20/04/2020",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      description: "Updated: 20/04/2020",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      description: "Updated: 20/04/2020",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      description: "Updated: 20/04/2020",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          link: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
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

export const metrics = {
  title: "Our Metrics",
  items: [
    {
      icon: richDataIcon,
      title: "Rich Data",
      description:
        "This section includes all the data indicators visualised in interactive charts for a particular location. These charts - as well as the datasets behind them - can be shared, embedded, or downloaded.",
      dataVisualProps: {
        image: Metric1,
      },
    },
    {
      icon: pinIcon,
      title: "Pin to Compare",
      description:
        "Several sets of data exist for different counties and municipalities allowing you to visualise multiple locations side by side and make comparisons where similar datasets exist.",
      dataVisualProps: {
        image: Metric2,
      },
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

export const datasetsAndDocumentsArgs = {
  items: [
    { label: "DOCUMENTS & SPEECHES", children: documentsArg },
    { label: "DATASET", children: datasetTypeArgs },
  ],
};

const config = {
  footerArgs,
  exploreTools,
  navigationArgs,
  url: "http://localhost:3000",
};

export default config;
