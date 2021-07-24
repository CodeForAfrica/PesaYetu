import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Navigation from '.';

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
  title: 'Sections/Navigation',
  decorators: [withNextRouter],
  argTypes: {
    logoProps: {
      control: {
        type: 'object',
      },
    },
    menuProps: {
      control: {
        type: 'array',
      },
    },
    selectProps: {
      control: {
        type: 'array',
      },
    },
  },
};

const Template = ({ ...args }) => <Navigation {...args} />;

export const Default = Template.bind({});

Default.args = {
  logoProps: {
    firstTitle: 'Pesa',
    secondTitle: 'Yetu',
    firstSubtitle: 'Our County',
    secondSubtitle: 'Our Responsibility',
  },
  menuProps: menuButtons,
  selectProps: {
    title: 'Search for Location',
    placeholder: 'Search ...',
    selectId: 'select-grouped-id',
    inputBaseId: 'inputbase-grouped-id',
    selectLabel: 'select-grouped-label',
    inputBaseLabel: 'inputbase-grouped-label',
  },
};
