/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Copyright from '.';

import cc from '@/pesayetu/assets/cc.svg';

export default {
  title: 'Components/Copyright',
  decorators: [withNextRouter],
  argTypes: {
    copyright: {
      control: {
        type: 'text',
      },
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

const Template = ({ ...args }) => <Copyright {...args} />;

export const Default = Template.bind({});

Default.args = {
  copyright: 'Copyright',
  icon: cc,
  copyrightUrl: 'https://dev.pesayetu.pesacheck.org',
  copyrightVariant: 'caption',
  year: '2021',
};
