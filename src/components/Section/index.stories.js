import { RichTypography } from "@commons-ui/core";
import React from "react";

import Section from ".";

export default {
  title: "Components/Section",
  component: Section,
  argTypes: {
    fixed: {
      control: {
        type: "boolean",
      },
    },
  },
};

function Template(args) {
  return (
    <Section {...args}>
      <RichTypography>
        {`
          <h1>Lorem Ipsum</h1>
          <h4>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4>
          <h5>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5>
          
          
          <hr />
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in lectus ut lectus sagittis aliquet. Phasellus felis metus, suscipit eu ligula vitae, dapibus pretium sapien. Integer feugiat luctus metus, vitae aliquam magna euismod et. Quisque massa augue, hendrerit id pharetra ut, dictum vel elit. Morbi id velit pretium, vestibulum sapien eget, suscipit ex. Quisque varius consequat cursus. Duis vitae nunc vel lacus ullamcorper finibus. Sed lobortis a velit in ultricies. Phasellus eleifend est vel auctor cursus. Ut dapibus posuere aliquam. Mauris scelerisque libero sit amet felis faucibus, vel faucibus dolor suscipit. Maecenas venenatis turpis ut vulputate viverra.
          </p>
          <p>
          Nam sit amet imperdiet erat. Pellentesque eget porttitor erat, et scelerisque elit. Mauris in purus finibus, euismod arcu non, posuere justo. Suspendisse potenti. Suspendisse lacinia sapien ac orci elementum bibendum. In sit amet ante a neque efficitur lobortis. In hac habitasse platea dictumst.
          </p>
          <p>
          Fusce varius posuere nunc, et dictum sem feugiat vitae. Morbi consequat purus suscipit, semper mauris eu, luctus nisi. Vestibulum ultrices massa sit amet venenatis mattis. Ut nec dictum sem. Suspendisse imperdiet tortor at ligula dignissim, ut gravida leo finibus. Phasellus viverra malesuada augue quis sollicitudin. Nullam viverra orci ac augue sollicitudin, quis euismod est porttitor. Nulla nec ligula vitae sem rutrum tincidunt. Aliquam eleifend, risus vitae condimentum egestas, sem sem fermentum diam, et viverra nisl lorem eu ante. Morbi laoreet ultrices nisl a accumsan. Curabitur nec condimentum sem. Vivamus sodales ex vel iaculis faucibus. Suspendisse nisi urna, bibendum quis interdum in, condimentum vel dui. Praesent pharetra ligula ex, quis euismod lorem condimentum tempus. Integer nibh lorem, tristique at purus nec, condimentum feugiat lorem.
          </p>
          <p>
          Nunc iaculis lorem in tincidunt dignissim. Sed sit amet ultrices turpis. Donec tortor lacus, blandit vel dignissim ut, viverra non risus. Integer neque purus, egestas eu molestie vel, auctor ac sapien. Nullam rutrum dui in purus dapibus imperdiet. Vestibulum tortor ante, hendrerit ut erat ac, tincidunt laoreet felis. Etiam condimentum magna id dictum eleifend. Aliquam eros dui, consectetur eget diam eget, tincidunt scelerisque quam. Integer in quam ornare, rhoncus neque eget, condimentum sem. Vestibulum interdum diam et nisi vulputate condimentum. Duis in orci ac neque efficitur sagittis eget eu dui. Donec ut justo metus. Duis augue turpis, dignissim in magna ac, consequat convallis dolor. Donec molestie tincidunt tellus, id finibus nisl pretium a. Nullam sagittis ac nisi molestie aliquet. Nam eu dictum nibh.
          </p>
          <p>
          Phasellus pellentesque erat eu enim venenatis laoreet. Nunc in lobortis libero. Morbi varius suscipit cursus. Sed id tortor sed lacus facilisis eleifend. In hac habitasse platea dictumst. Sed viverra purus nec metus convallis, eget commodo urna volutpat. Morbi ultrices est nec eleifend egestas. Maecenas eget ex nibh. Fusce efficitur faucibus mi vitae tristique.
          </p>
          <hr />
          `}
      </RichTypography>
    </Section>
  );
}

export const Default = Template.bind({});

Default.args = {
  fixed: true,
};
