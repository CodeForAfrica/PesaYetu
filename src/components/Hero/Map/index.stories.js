import React from 'react';
import { withNextRouter } from 'storybook-addon-next-router';

import Map from '.';
import 'leaflet/dist/leaflet.css';

export default {
  title: 'Components/HeroMap',
  decorators: [withNextRouter],
  argTypes: {
    center: {
      control: {
        type: 'object',
      },
    },
    titleLayer: {
      control: {
        type: 'object',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['text', 'contained'],
    },
  },
};

const Template = ({ label, ...args }) => <Map {...args} />;

export const Default = Template.bind({});

Default.args = {
  center: [0.3051933453207569, 37.908818734483155],
  zoom: 6,
  tileLayer: {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
};
