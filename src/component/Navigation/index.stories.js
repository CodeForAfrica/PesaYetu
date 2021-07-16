import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Navigation from '.';

export default {
  title: 'Sections/Navigation',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <Navigation {...args} />;

export const Default = Template.bind({});

Default.args = {};
