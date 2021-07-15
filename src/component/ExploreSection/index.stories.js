/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import ExploreSection from '@/pesayetu/component/ExploreSection';
import { exploreTools } from '@/pesayetu/config';

export default {
  title: 'Section/ExploreSection',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <ExploreSection {...args} />;

export const Default = Template.bind({});

Default.args = exploreTools;
