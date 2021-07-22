/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import InsightCard from '@/pesayetu/component/InsightCard';

export default {
  title: 'Components/InsightCard',
  decorators: [withNextRouter],
  argTypes: {},
};

const Template = ({ ...args }) => <InsightCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  item: [],
};
