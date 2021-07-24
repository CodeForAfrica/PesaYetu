import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import LogoNavigation from '.';

export default {
  title: 'Components/LogoNavigation',
  decorators: [withNextRouter],
  argTypes: {
    firstTitle: {
      control: {
        type: 'text',
      },
    },
    secondTitle: {
      control: {
        type: 'text',
      },
    },
    firstSubtitle: {
      control: {
        type: 'text',
      },
    },
    secondSubtitle: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => <LogoNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {
  firstTitle: 'Pesa',
  secondTitle: 'Yetu',
  firstSubtitle: 'Our County',
  secondSubtitle: 'Our Responsibility',
};
