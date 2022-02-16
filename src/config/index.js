import profile from "./profile";

import richDataIcon from "@/pesayetu/assets/Component121.svg";
import pinIcon from "@/pesayetu/assets/Component122.svg";
import panelPinIcon from "@/pesayetu/assets/icons/Component 95 – 2.svg";
import pinBlack from "@/pesayetu/assets/icons/Component 96 – 12.svg";
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
import Layout1 from "@/pesayetu/assets/icons/Group922.svg";
import Layout2 from "@/pesayetu/assets/icons/Group923.svg";
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
import screenshot1 from "@/pesayetu/assets/images/Screenshot 2021-06-14 at 12.51.45@2x.png";
import Tricia from "@/pesayetu/assets/images/Tricia-Govindasamy.png";
import desktopLogo from "@/pesayetu/assets/logos/Component61.svg";
import drawerLogo from "@/pesayetu/assets/logos/Group 4188@2x-white.png";
import mobileLogo from "@/pesayetu/assets/logos/Group 4188@3x.png";
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
  desktopLogoProps: {
    width: 237,
    height: 55,
    alt: "desktop logo",
    href: "https://codeforafrica.org",
    src: desktopLogo,
  },

  mobileLogoProps: {
    width: 254,
    height: 40,
    alt: "mobile logo",
    href: "https://codeforafrica.org",
    src: mobileLogo,
  },

  drawerLogoProps: {
    width: 254,
    height: 40,
    alt: "drawer logo",
    href: "https://codeforafrica.org",
    src: drawerLogo,
  },
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

export const documentsArgs = {
  filterProps: {
    countLabel: "Count",
    count: 65,
    orderLabel: "Order By",
    orderOptions: ["Most recently updated", "Least recently updated"],
    paginationOptions: [10, 25, 50],
    paginationLabel: "Show",
  },
  items: [
    {
      date: "2020",
      href: "https://courses.academy.africa/courses/data-visualization/",
      title: "The County Integrated Development Plan (CIDP) in Kenya",
    },
    {
      date: "2021",
      href: "https://courses.academy.africa/courses/data-visualization/",
      title: "The County Integrated Development Plan (CIDP) in Kenya",
    },
    {
      date: "2019",
      href: "https://courses.academy.africa/courses/data-visualization/",
      title: "The County Integrated Development Plan (CIDP) in Kenya",
    },
    {
      date: "2020",
      href: "https://courses.academy.africa/courses/data-visualization/",
      title: "The County Integrated Development Plan (CIDP) in Kenya",
    },
    {
      date: "2017",
      href: "https://courses.academy.africa/courses/data-visualization/",
      title: "The County Integrated Development Plan (CIDP) in Kenya",
    },
    {
      date: "2018",
      href: "https://courses.academy.africa/courses/data-visualization/",
      title: "The County Integrated Development Plan (CIDP) in Kenya",
    },
  ],
  type: "documents",
};

export const datasetsArgs = {
  ctaText: "View",
  filterProps: {
    countLabel: "Count",
    count: 65,
    orderLabel: "Order By",
    orderOptions: ["Most recently updated", "Least recently updated"],
    paginationOptions: [10, 25, 50],
    paginationLabel: "Show",
  },
  items: [
    {
      title: "Health facilities in Africa",
      date: "Updated: 2020-04-20",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      date: "Updated: 2020-04-16",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      date: "Updated: 2020-04-17",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      date: "Updated: 2020-04-19",
      href: "https://courses.academy.africa/courses/data-visualization/",
      types: [
        {
          name: "csv",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "xls",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
        {
          name: "json",
          href: "https://courses.academy.africa/courses/data-visualization/",
        },
      ],
    },
    {
      title: "Health facilities in Africa",
      date: "Updated: 2020-04-18",
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
      date: "Updated: 2020-04-13",
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
  type: "datasets",
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

export const documentsAndDatasetsArgs = {
  items: [
    { label: "DOCUMENTS & SPEECHES", ...documentsArgs },
    { label: "DATASETS", ...datasetsArgs },
  ],
};

export const treeViewArgs = {
  items: [
    {
      title: "Overview",
      icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3e%3cdefs%3e%3cstyle%3e.a%7bfill:%23fff;%7d.b%7bfill:none;%7d.c%7bfill:%230067a3;%7d%3c/style%3e%3c/defs%3e%3cg transform='translate(23388 15259)'%3e%3ccircle class='a' cx='70' cy='70' r='70' transform='translate(-23388 -15259)'/%3e%3cg transform='translate(-23359 -15230)'%3e%3crect class='b' width='82' height='82'/%3e%3cg transform='translate(0.962 17.938)'%3e%3cpath class='c' d='M79.494,30.078C78.776,29.114,61.651,6.5,40.029,6.5S1.284,29.114.563,30.078l-.571.766.571.766c.72.963,17.843,23.578,39.465,23.578S78.776,32.573,79.494,31.61l.571-.766ZM40.029,52.625c-18.168,0-33.61-17.832-36.805-21.781C6.419,26.895,21.86,9.062,40.029,9.062S73.641,26.895,76.834,30.844C73.641,34.793,58.2,52.625,40.029,52.625Z' transform='translate(0.008 -6.5)'/%3e%3cpath class='c' d='M25.772,9.5A16.656,16.656,0,1,0,42.428,26.156,16.675,16.675,0,0,0,25.772,9.5Zm0,30.75A14.094,14.094,0,1,1,39.866,26.156,14.109,14.109,0,0,1,25.772,40.25Z' transform='translate(14.264 -1.813)'/%3e%3cpath class='c' d='M19.522,13.5a6.406,6.406,0,1,0,6.406,6.406A6.414,6.414,0,0,0,19.522,13.5Zm0,10.25a3.844,3.844,0,1,1,3.844-3.844A3.848,3.848,0,0,1,19.522,23.75Z' transform='translate(20.514 4.438)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
      description:
        "<p>Population, Political, Land Use Type, Agriculture, Industries &amp; Trade, Health Access, Education And Literacy</p>",
      children: [
        {
          title: "Population",
          description: "",
        },
        {
          title: "Political",
          description: "",
        },
        {
          title: "Agriculture",
          description: "",
        },
        {
          title: "Health Access",
          description: "",
        },
        {
          title: "Education & Literacy",
          description: "",
        },
      ],
    },
    {
      title: "Revenue",
      icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3e%3cdefs%3e%3cstyle%3e.a%7bfill:%23fff;%7d.b%7bfill:none;%7d.c%7bfill:%230067a3;%7d%3c/style%3e%3c/defs%3e%3cg transform='translate(23388 15259)'%3e%3ccircle class='a' cx='70' cy='70' r='70' transform='translate(-23388 -15259)'/%3e%3cg transform='translate(-23359 -15230)'%3e%3crect class='b' width='82' height='82'/%3e%3cg transform='translate(0.962 17.938)'%3e%3cpath class='c' d='M79.494,30.078C78.776,29.114,61.651,6.5,40.029,6.5S1.284,29.114.563,30.078l-.571.766.571.766c.72.963,17.843,23.578,39.465,23.578S78.776,32.573,79.494,31.61l.571-.766ZM40.029,52.625c-18.168,0-33.61-17.832-36.805-21.781C6.419,26.895,21.86,9.062,40.029,9.062S73.641,26.895,76.834,30.844C73.641,34.793,58.2,52.625,40.029,52.625Z' transform='translate(0.008 -6.5)'/%3e%3cpath class='c' d='M25.772,9.5A16.656,16.656,0,1,0,42.428,26.156,16.675,16.675,0,0,0,25.772,9.5Zm0,30.75A14.094,14.094,0,1,1,39.866,26.156,14.109,14.109,0,0,1,25.772,40.25Z' transform='translate(14.264 -1.813)'/%3e%3cpath class='c' d='M19.522,13.5a6.406,6.406,0,1,0,6.406,6.406A6.414,6.414,0,0,0,19.522,13.5Zm0,10.25a3.844,3.844,0,1,1,3.844-3.844A3.848,3.848,0,0,1,19.522,23.75Z' transform='translate(20.514 4.438)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
      description:
        "<p>Dolor aliquam dolor dolor aliquam aliquam aliquam quisquam. Eius quisquam porro est magnam consectetur. Neque numquam magnam numquam sed neque adipisci etincidunt. Dolor aliquam dolor dolor aliquam aliquam aliquam quisquam.</p>",
      children: [
        {
          title: "Resource Mobilisation",
          description: "",
        },
      ],
    },
    {
      title: "General County Information",
      icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3e%3cdefs%3e%3cstyle%3e.a%7bfill:%23fff;%7d.b%7bfill:none;%7d.c%7bfill:%230067a3;%7d%3c/style%3e%3c/defs%3e%3cg transform='translate(23388 15259)'%3e%3ccircle class='a' cx='70' cy='70' r='70' transform='translate(-23388 -15259)'/%3e%3cg transform='translate(-23359 -15230)'%3e%3crect class='b' width='82' height='82'/%3e%3cg transform='translate(0.962 17.938)'%3e%3cpath class='c' d='M79.494,30.078C78.776,29.114,61.651,6.5,40.029,6.5S1.284,29.114.563,30.078l-.571.766.571.766c.72.963,17.843,23.578,39.465,23.578S78.776,32.573,79.494,31.61l.571-.766ZM40.029,52.625c-18.168,0-33.61-17.832-36.805-21.781C6.419,26.895,21.86,9.062,40.029,9.062S73.641,26.895,76.834,30.844C73.641,34.793,58.2,52.625,40.029,52.625Z' transform='translate(0.008 -6.5)'/%3e%3cpath class='c' d='M25.772,9.5A16.656,16.656,0,1,0,42.428,26.156,16.675,16.675,0,0,0,25.772,9.5Zm0,30.75A14.094,14.094,0,1,1,39.866,26.156,14.109,14.109,0,0,1,25.772,40.25Z' transform='translate(14.264 -1.813)'/%3e%3cpath class='c' d='M19.522,13.5a6.406,6.406,0,1,0,6.406,6.406A6.414,6.414,0,0,0,19.522,13.5Zm0,10.25a3.844,3.844,0,1,1,3.844-3.844A3.848,3.848,0,0,1,19.522,23.75Z' transform='translate(20.514 4.438)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
      description:
        "<p>Dolor aliquam dolor dolor aliquam aliquam aliquam quisquam. Eius quisquam porro est magnam consectetur. Neque numquam magnam numquam sed neque adipisci etincidunt.</p>",
      children: [
        {
          title: "Employment",
          description:
            "<p>Employment Etincidunt velit porro modi. Porro ut ut adipisci ipsum neque dolor. Neque quaerat quiquia porro ipsum etincidunt etincidunt ipsum.</p>",
        },
        {
          title: "Land",
          description: "",
        },
        {
          title: "Trade and Industry",
          description: "",
        },
      ],
    },
    {
      title: "Monitoring and Evaluation Framework",
      icon: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3e%3cdefs%3e%3cstyle%3e.a%7bfill:%23fff;%7d.b%7bfill:none;%7d.c%7bfill:%230067a3;%7d%3c/style%3e%3c/defs%3e%3cg transform='translate(23388 15259)'%3e%3ccircle class='a' cx='70' cy='70' r='70' transform='translate(-23388 -15259)'/%3e%3cg transform='translate(-23359 -15230)'%3e%3crect class='b' width='82' height='82'/%3e%3cg transform='translate(0.962 17.938)'%3e%3cpath class='c' d='M79.494,30.078C78.776,29.114,61.651,6.5,40.029,6.5S1.284,29.114.563,30.078l-.571.766.571.766c.72.963,17.843,23.578,39.465,23.578S78.776,32.573,79.494,31.61l.571-.766ZM40.029,52.625c-18.168,0-33.61-17.832-36.805-21.781C6.419,26.895,21.86,9.062,40.029,9.062S73.641,26.895,76.834,30.844C73.641,34.793,58.2,52.625,40.029,52.625Z' transform='translate(0.008 -6.5)'/%3e%3cpath class='c' d='M25.772,9.5A16.656,16.656,0,1,0,42.428,26.156,16.675,16.675,0,0,0,25.772,9.5Zm0,30.75A14.094,14.094,0,1,1,39.866,26.156,14.109,14.109,0,0,1,25.772,40.25Z' transform='translate(14.264 -1.813)'/%3e%3cpath class='c' d='M19.522,13.5a6.406,6.406,0,1,0,6.406,6.406A6.414,6.414,0,0,0,19.522,13.5Zm0,10.25a3.844,3.844,0,1,1,3.844-3.844A3.848,3.848,0,0,1,19.522,23.75Z' transform='translate(20.514 4.438)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
      description:
        "<p>Monitoring Etincidunt est sed labore numquam. Tempora quisquam amet est ipsum eius magnam dolore. Eius dolorem numquam est. Ipsum non etincidunt magnam. Dolorem dolor velit numquam. Sed est quaerat ut adipisci quaerat quaerat quaerat. Etincidunt sit sed voluptatem. Velit aliquam amet numquam consectetur. Quaerat quaerat non quisquam adipisci dolore.</p>",
      children: [
        {
          title: "Agriculture, Rural and Urban Development",
          description:
            "<p>Sub olorem dolore est sit amet adipisci. Magnam porro voluptatem consectetur non modi. Modi numquam dolor tempora. Magnam dolore tempora amet magnam est porro. Quiquia eius aliquam quisquam adipisci neque tempora. Eius aliquam labore ut tempora quisquam. Modi quiquia amet voluptatem numquam. Porro labore quaerat labore porro sit quaerat consectetur. Ipsum consectetur tempora magnam etincidunt sit ut.</p>",
        },
      ],
    },
  ],
};

export const panelArgs = {
  panelItems: [
    {
      value: "rich-data",
      icon: panelPinIcon,
      children: "1",
      tree: treeViewArgs,
    },
    {
      value: "pin",
      icon: pinBlack,
      children: "2",
      pin: true,
      tree: treeViewArgs,
    },
  ],
  scrollToTopLabel: "Back To Top",
  logo: {
    image:
      "https://wazimap-ng.s3.amazonaws.com/logos/youthexplorer.png?AWSAccessKeyId=AKIAYIFP5EK2I6PADW2R&Signature=63W%2F43NSETtdv3a9ZgTSfNh9%2FHA%3D&Expires=1632748980",
    url: "https://youthexplorer.org.za",
  },
  primaryProfile: profile,
  secondaryProfile: profile,
};

export const hurumapArgs = {
  location: {
    highlights: [
      {
        title: "Population",
        value: 280002,
        formattedValue: "280,002",
      },
      {
        title: "Statistics Two",
        value: 30.5,
        formattedValue: "30.5%",
      },
      {
        title: "Statistics Three",
        value: 280002,
      },
    ],
    isLoading: false,
    tags: [
      {
        href: "/explore",
        level: "Country",
        name: "Kenya",
      },
      {
        href: "/explore/county-11",
        level: "County",
        name: "Isiolo",
      },
    ],
  },
  tutorial: {
    sampleElements: [
      `<button id= "location-search">Location Search </button>`,
      `<button id= "nav-help">Help </button>`,
    ],
    defaultOpen: true,
    items: [
      {
        selector: "#location-search",
        description:
          "<p>Now that your location is selected you can open the Rich Data dashboard, using the button on the left.</p> <p>Browse the charts by scrolling the data dashboard. You can share and download the data using the buttons by the side of each chart.</p>",
        title: "BROWSE THE CHARTS",
        image: screenshot1,
      },
      {
        selector: "#nav-help",
        description:
          "<p>Now that your location is selected you can open the Rich Data dashboard, using the button on the left.</p> <p>Browse the charts by scrolling the data dashboard. You can share and download the data using the buttons by the side of each chart.</p>",
        title: "BROWSE THE CHARTS",
        image: screenshot1,
      },
    ],
  },
  locationCodes: [
    "47",
    "4",
    "6",
    "34",
    "25",
    "43",
    "8",
    "11",
    "KE",
    "47276",
    "47284",
    "47284",
    "47288",
    "47280",
    "47278",
    "43249",
    "43245",
    "8037",
    "11050",
    "25134",
    "25133",
    "8033",
    "4019",
    "4018",
    "6023",
    "6026",
    "6024",
    "34184",
    "34187",
    "34183",
  ],
  pinAndCompare: {
    helperText: "Pin and compare",
    placeholder: "Select a location",
    options: ["Municipality", "Municipality One", "Municipality Two"],
  },
  indicatorTitle: {
    download: {
      values: ["Percentage", "Value"],
      layouts: [Layout1, Layout2],
      imageTypes: ["PNG", "SVG"],
      fileTypes: ["CSV", "XLSX", "JSON"],
    },
  },
  chartFormatting: {
    percentage: ".0%",
    value: ",.0f",
  },
};

export const hurumap = {
  api: {
    url: "http://localhost:8000/api/v1/",
  },
  formatting: {
    decimal: ",.1f",
    integer: ",.2d",
    percentage: ".1%",
  },
};

const config = {
  exploreTools,
  footerArgs,
  navigationArgs,
  url: "http://localhost:3000",
};

export default config;
