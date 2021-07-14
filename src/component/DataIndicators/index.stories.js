/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import DataIndicators from '@/pesayetu/component/DataIndicators';

export default {
  title: 'Section/ExploreSection',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = () => <DataIndicators />;

export const Default = Template.bind({});

Default.args = {};
