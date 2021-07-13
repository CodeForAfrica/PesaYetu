/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import ExploreCard from '@/pesayetu/component/ExploreCard';

export default {
  title: 'Components/ExploreCard',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = () => <ExploreCard />;

export const Default = Template.bind({});

Default.args = {};
