import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Hero from '.';

export default {
  title: 'Sections/Hero',
  decorators: [withNextRouter],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    tagline: {
      control: {
        type: 'text',
      },
    },
    comment: {
      control: {
        type: 'text',
      },
    },
    searchLabel: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
  title:
    'Data to hold <br /> your government <span class="highlight">accountable</span>',
  tagline:
    'PesaYetu helps journalists, researchers and activists transform their work with in-depth county-specific information. Get started now with datasets from Kenya.',
  searchLabel: 'Search for a location',
  comment:
    '* Eight counties are currently available. We will soon implement additional ones.',
};
