import { RichTypography } from "@commons-ui/core";
import React from "react";

import Tutorial from "@/pesayetu/components/HURUmap/Tutorial";
import { hurumapArgs } from "@/pesayetu/config";

const { tutorial } = hurumapArgs;

export default {
  title: "Components/HURUmap/Tutorial",
  argTypes: {},
};

function Template({ sampleElements, ...args }) {
  return (
    <>
      <Tutorial {...args} />
      {sampleElements.map((sample) => (
        <RichTypography>{sample}</RichTypography>
      ))}
    </>
  );
}

export const Default = Template.bind({});

Default.args = tutorial;
