import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import MenuNavigation from '.';

export default {
  title: 'Components/MenuNavigation',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ label, ...args }) => <MenuNavigation {...args} />;

export const Default = Template.bind({});

Default.args = {};
