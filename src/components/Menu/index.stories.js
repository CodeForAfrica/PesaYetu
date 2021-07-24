import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Menu from '.';

import { ReactComponent as Facebook } from '@/pesayetu/assets/footer-social-fb.svg';
import { ReactComponent as Twitter } from '@/pesayetu/assets/footer-social-tw.svg';

const menuButtons = [
  {
    href: 'https://dev.pesayetu.pesacheck.org',
    label: 'EXPLORE',
    menuLinks: [
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'DATA',
      },
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'STORIES',
      },
      {
        href: 'https://dev.pesayetu.pesacheck.org',
        label: 'HOW IT WORKS',
      },
    ],
  },
];
const socialLinks = [
  {
    href: '/twitter',
    component: Twitter,
    label: 'twitter',
  },
  {
    href: '/facebook',
    component: Facebook,
    label: 'facebook',
  },
];

export default {
  title: 'Components/Menu',
  decorators: [withNextRouter],
  argTypes: {
    links: {
      control: {
        type: 'array',
      },
    },
    socialLinks: {
      control: {
        type: 'array',
      },
    },
  },
};

const Template = ({ ...args }) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  links: menuButtons,
  socialLinks,
};
