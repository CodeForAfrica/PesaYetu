/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Group3973 from '@/pesayetu/assets/Group 3973.png';
import ExploreCard from '@/pesayetu/component/ExploreCard';

const exploreItem = {
  title: 'Promise Tracker',
  description:
    'The Promise Tracker is a platform citizens can use to track promises made by governors, institutions and political parties in their manifestos during campaigns.',
  image: Group3973,
};

export default {
  title: 'Components/ExploreCard',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <ExploreCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  item: exploreItem,
};
