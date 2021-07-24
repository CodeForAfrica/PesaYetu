import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Logo from '.';

export default {
  title: 'Components/Logo',
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

const Template = ({ ...args }) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {
  firstTitle: 'Pesa',
  secondTitle: 'Yetu',
  firstSubtitle: 'Our County',
  secondSubtitle: 'Our Responsibility',
};
