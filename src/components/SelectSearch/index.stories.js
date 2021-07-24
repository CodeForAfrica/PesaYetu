import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import SearchSelect from '.';

export default {
  title: 'Components/SelectSearch',
  decorators: [withNextRouter],
  argTypes: {
    title: {
      control: {
        type: 'array',
      },
    },
    placeholder: {
      control: {
        type: 'array',
      },
    },
    selectId: {
      control: {
        type: 'array',
      },
    },
    inputBaseId: {
      control: {
        type: 'array',
      },
    },
    selectLabel: {
      control: {
        type: 'array',
      },
    },
    inputBaseLabel: {
      control: {
        type: 'array',
      },
    },
    menuitems: {
      control: {
        type: 'array',
      },
    },
  },
};

const Template = ({ ...args }) => (
  <div style={{ backgroundColor: '#0067A3', padding: '1rem' }}>
    <SearchSelect {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Search for Location',
  placeholder: 'Search...',
  selectId: 'select-grouped-id',
  inputBaseId: 'inputbase-grouped-id',
  selectLabel: 'select-grouped-label',
  inputBaseLabel: 'inputbase-grouped-label',
  menuitems: [
    {
      countryName: 'country 1',
      countryUrl: '/country 1',
      items: [
        {
          name: 'subcounty-1',
          url: '/subcounty-1',
        },
        {
          name: 'subcounty-2',
          url: '/subcounty-2',
        },
        {
          name: 'subcounty-2',
          url: '/subcounty-2',
        },
      ],
    },
    {
      countryName: 'country 2',
      countryUrl: '/country 2',
      items: [
        {
          name: 'subcounty-4',
          url: '/subcounty-4',
        },
        {
          name: 'subcounty-5',
          url: '/subcounty-5',
        },
      ],
    },
    {
      countryName: 'country 3',
      countryUrl: '/country 3',
      items: [
        {
          name: 'subcounty-6',
          url: '/subcounty-6',
        },
        {
          name: 'subcounty-7',
          url: '/subcounty-7',
        },
      ],
    },
  ],
};
