import { ReactComponent as Facebook } from "@/pesayetu/assets/footer-social-fb.svg";
import { ReactComponent as Twitter } from "@/pesayetu/assets/footer-social-tw.svg";

export const config = {
  footerArgs: {
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
        component: Twitter,
        label: "twitter",
      },
      {
        href: "/facebook",
        component: Facebook,
        label: "facebook",
      },
    ],
  },
};

export default config;
