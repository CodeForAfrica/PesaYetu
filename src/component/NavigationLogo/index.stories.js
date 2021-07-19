import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import NavigationLogo from '.';

export default {
  title: 'Components/NavigationLogo',
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
    subtitle: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ label, ...args }) => <NavigationLogo {...args} />;

export const Default = Template.bind({});

Default.args = {
  firstTitle: 'Pesa',
  secondTitle: 'Yetu',
  subtitle: 'Our County Our Responsibility',
};
