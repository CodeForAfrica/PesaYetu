import React from "react";

import Newsletter from ".";

export default {
  title: "Components/Newsletter",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    embedCode: {
      control: {
        type: "text",
      },
    },
  },
};

function Template({ ...args }) {
  return <Newsletter {...args} />;
}
export const Default = Template.bind({});

Default.args = {
  description:
    "Keep up with the latest data and most popular content by signing up to our newsletter.",
  title: "Stay up to date",
  embedCode: `  <!-- Begin Mailchimp Signup Form -->
  <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
  <style type="text/css">
    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
  </style>
  <div id="mc_embed_signup">
  <form action="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&amp;id=286e6e3985" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
    <label for="mce-EMAIL">Subscribe</label>
    <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" required>
      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: relative; left: -5000px;" aria-hidden="true"><input type="text" name="b_65e5825507b3cec760f272e79_286e6e3985" tabindex="-1" value=""></div>
      <div class="clear"><input type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
      </div>
  </form>
  </div>
  <!--End mc_embed_signup-->`,
};
