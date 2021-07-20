import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Search from '.';

export default {
  title: 'Components/Search',
  decorators: [withNextRouter],
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = ({ ...args }) => <Search {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: '....',
};
