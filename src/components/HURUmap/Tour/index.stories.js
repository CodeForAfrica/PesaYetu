import React from "react";

import screenshot1 from "@/pesayetu/assets/images/Screenshot 2021-06-14 at 12.51.45@2x.png";
import Tour from "@/pesayetu/components/HURUmap/Tour";

export default {
  title: "Components/HURUmap/Tour",
  argTypes: {},
};

const Template = ({ ...args }) => <Tour {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      selector: ".makeStyles-help-21",
      description:
        "<p>Now that your location is selected you can open the Rich Data dashboard, using the button on the left.</p> <p>Browse the charts by scrolling the data dashboard. You can share and download the data using the buttons by the side of each chart.</p>",
      title: "BROWSE THE CHARTS",
      image: screenshot1,
    },
  ],
};
