/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Footer from '.';

import { footerArgs } from '@/pesayetu/config';

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
    aboutVariant: {
      control: {
        type: 'select',
      },
      options: ['subtitle1', 'body1'],
    },
    copyrightProps: {
      control: {
        type: 'object',
      },
    },
    logoProps: {
      control: {
        type: 'object',
      },
    },
  },
};

const Template = ({ ...args }) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...footerArgs,
};
