import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import MenuNavigation from '.';

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

export default {
  title: 'Components/MenuNavigation',
  decorators: [withNextRouter],
  argTypes: {
    links: {
      control: {
        type: 'array',
      },
    },
  },
};

const Template = ({ ...args }) => <MenuNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
  links: menuButtons,
};
