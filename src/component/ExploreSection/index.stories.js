/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import ExploreSection from '@/pesayetu/component/ExploreSection';

export default {
  title: 'Section/ExploreSection',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = () => <ExploreSection />;

export const Default = Template.bind({});

Default.args = {};
