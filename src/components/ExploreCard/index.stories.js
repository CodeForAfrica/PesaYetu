/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import ExploreCard from '@/pesayetu/components/ExploreCard';
import { exploreTools } from '@/pesayetu/config';

export default {
  title: 'Components/ExploreCard',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <ExploreCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  item: exploreTools.items[0],
};
