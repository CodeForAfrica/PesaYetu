import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import SearchSelect from '.';

export default {
  title: 'Components/SelectSearch',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <SearchSelect {...args} />;

export const Default = Template.bind({});

Default.args = {};
