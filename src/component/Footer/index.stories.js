/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Footer from '.';

import cc from '@/pesayetu/assets/cc.svg';
import footerLogo from '@/pesayetu/assets/footer-logo.svg';
import facebook from '@/pesayetu/assets/footer-social-fb.svg';
import instagram from '@/pesayetu/assets/footer-social-ig.svg';
import linkedin from '@/pesayetu/assets/footer-social-in.svg';
import twitter from '@/pesayetu/assets/footer-social-tw.svg';

const ABOUT = {
  about:
    'This site is an openAFRICA project of Code for Africa.\n' +
    '        All content is released under a Creative Commons 4 Attribution Licence.\n' +
    '        Reuse it to help empower your own community.\n' +
    '        The code is available on GitHub and data is available on openAFRICA.\n',
};

const INITIATIVE_LOGO = {
  image: {
    src: footerLogo,
    alt: 'Pulitzer Center',
  },
  logoUrl: 'https://pulitzercenter.org/',
};

const QUICK_LINKS = [
  {
    title: 'Resources',
    links: [
      { href: '/about', label: 'About the Project' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of service' },
    ],
  },
];

const socialMedia = [
  {
    url: 'https://www.instagram.com/code4africa__/',
    image: {
      url: instagram,
      alt: 'Instagram',
    },
  },
  {
    url: 'https://www.facebook.com/CodeForAfrica/',
    image: {
      url: facebook,
      alt: 'Facebook',
    },
  },
  {
    url: 'https://twitter.com/Code4Africa',
    image: {
      url: twitter,
      alt: 'Twitter',
    },
  },
  {
    url: 'https://github.com/codeforafrica',
    image: {
      url: linkedin,
      alt: 'LinkedIn',
    },
  },
];

export default {
  title: 'Components/Footer',
  decorators: [withNextRouter],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    socialMedia: {
      control: {
        type: 'object',
      },
    },
    quickLinks: {
      control: {
        type: 'array',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    copyright: {
      control: {
        type: 'text',
      },
    },
    image: {
      control: {
        type: 'object',
      },
    },
    logoUrl: {
      control: {
        type: 'text',
      },
    },
    aboutVariant: {
      control: {
        type: 'select',
      },
      options: ['caption', 'body1'],
    },
    icon: {
      control: {
        type: 'text',
      },
    },
    copyrightUrl: {
      control: {
        type: 'text',
      },
    },
    copyrightVariant: {
      control: {
        type: 'select',
      },
      options: ['caption', 'body1'],
    },
    year: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Stay in touch with us',
  socialMedia,
  quickLinks: QUICK_LINKS[0],
  description: ABOUT.about,
  image: INITIATIVE_LOGO.image,
  logoUrl: INITIATIVE_LOGO.logoUrl,
  aboutVariant: 'body1',
  copyrightVariant: 'body1',
  copyright: 'Copyright',
  icon: cc,
  copyrightUrl: 'https://dev.pesayetu.pesacheck.org',
  year: '2021',
};
