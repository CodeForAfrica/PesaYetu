/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Footer from '.';

import facebook from '@/pesayetu/assets/footer-social-fb.svg';
import instagram from '@/pesayetu/assets/footer-social-ig.svg';
import linkedin from '@/pesayetu/assets/footer-social-in.svg';
import twitter from '@/pesayetu/assets/footer-social-tw.svg';

const QUICK_LINKS = [
  {
    title: 'MORE',
    links: [
      { href: '/about', label: 'About' },
      { href: '/faqs', label: 'FAQs' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    title: 'CONTACTS',
    links: [
      { href: '/about', label: 'About' },
      { href: '/faqs', label: 'FAQs' },
      { href: '/contact', label: 'Contact Us' },
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
        type: 'object',
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
};
