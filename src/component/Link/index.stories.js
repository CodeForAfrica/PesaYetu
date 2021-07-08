import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Link from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Link',
  decorators: [withNextRouter],
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary'],
    },
    href: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ label, ...args }) => <Link {...args}>{label}</Link>;

export const Default = Template.bind({});

Default.args = {
  color: 'primary',
  href: '#',
  label: 'Link',
};
