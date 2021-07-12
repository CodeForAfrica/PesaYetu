/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Footer from '.';

import footerLogo from '@/pesayetu/assets/footer-logo.svg';
import facebook from '@/pesayetu/assets/footer-social-fb.svg';
import instagram from '@/pesayetu/assets/footer-social-ig.svg';
import linkedin from '@/pesayetu/assets/footer-social-in.svg';
import twitter from '@/pesayetu/assets/footer-social-tw.svg';

const ABOUT = {
  about:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n' +
    '        sed diam nonumy eirmod tempor invidunt ut labore et dolore\n' +
    '        magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
    '        accusam et justo duo dolores et ea rebum. Stet clita kasd\n' +
    '        gubergren, no sea takimata sanctus est',
};

const INITIATIVE_LOGO = {
  image: {
    src: footerLogo,
    alt: 'Pulitzer Center',
  },
  logourl: 'https://pulitzercenter.org/',
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
    image: {
      control: {
        type: 'object',
      },
    },
    logourl: {
      control: {
        type: 'text',
      },
    },
    copyright: {
      control: {
        type: 'text',
      },
    },
    year: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['caption', 'body1'],
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
  logourl: INITIATIVE_LOGO.url,
  copyright: 'Copyright',
  year: '2021',
  variant: 'body1',
};
