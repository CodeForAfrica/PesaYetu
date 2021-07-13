import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Logo from '.';

import footerLogo from '@/pesayetu/assets/footer-logo.svg';

export default {
  title: 'Components/Logo',
  decorators: [withNextRouter],
  argTypes: {
    alt: {
      control: {
        type: 'text',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    src: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  href: 'https://nigeria.hurumap.org/',
  alt: 'codeforafrica',
  src: footerLogo,
};
