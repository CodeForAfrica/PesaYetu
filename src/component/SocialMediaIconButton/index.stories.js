import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import SocialMediaIcons from '.';

export default {
  title: 'Components/SocialMediaButtons',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <SocialMediaIcons {...args} />;

export const Default = Template.bind({});

Default.args = {};
