import React from "react";

import Partners from ".";

export default {
  title: "Components/Partners",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    newsletter: {
      control: {
        type: "array",
      },
    },
    partners: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = ({ ...args }) => <Partners {...args} />;
export const Default = Template.bind({});

Default.args = {
  title: "Our Partners",
  mainPartner: {
    name: "Code for Africa",
    description: "This site is a Code for Africa project.",
    logo: {
      alt: "",
      title: "Group 4462",
      caption: "",
      description: "",
      id: 115,
      link: "https://cms.dev.codeforafrica.org/pesayetu/group-4462/",
      url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
      sizes: {
        thumbnail: {
          height: 150,
          width: 150,
          url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
          orientation: "landscape",
        },
        medium: {
          height: 300,
          width: 300,
          url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
          orientation: "landscape",
        },
        large: {
          height: 1024,
          width: 1024,
          url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
          orientation: "landscape",
        },
        full: {
          url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/07/Group-4462.svg",
          height: 123,
          width: 212,
          orientation: "landscape",
        },
      },
    },
    link: "https://codeforafrica.org",
    lazyblock: {
      slug: "lazyblock/main-partner",
    },
    align: "",
    anchor: "",
    blockId: "99Nio",
    blockUniqueClass: "lazyblock-main-partner-99Nio",
    ghostkitSpacings: "",
    ghostkitSR: "",
  },
  newsletter: {
    title: "Stay up to date",
    description:
      "Keep up with the latest data and most popular content by signing up to our newsletter.",
    embedCode:
      '  <!-- Begin Mailchimp Signup Form -->\n        <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">\n        <style type="text/css">\n          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n        </style>\n        <div id="mc_embed_signup">\n        <form action="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&amp;id=286e6e3985" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\n            <div id="mc_embed_signup_scroll">\n          <label for="mce-EMAIL">Subscribe</label>\n          <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" required>\n            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n            <div style="position: relative; left: -5000px;" aria-hidden="true"><input type="text" name="b_65e5825507b3cec760f272e79_286e6e3985" tabindex="-1" value=""></div>\n            <div class="clear"><input type="submit" value="" name="subscribe" id="mc-embedded-subscribe" class="button"></div>\n            </div>\n        </form>\n        </div>\n        <!--End mc_embed_signup-->',
    lazyblock: {
      slug: "lazyblock/newsletter",
    },
    align: "",
    anchor: "",
    blockId: "Z1ASdLW",
    blockUniqueClass: "lazyblock-newsletter-Z1ASdLW",
    ghostkitSpacings: "",
    ghostkitSR: "",
  },
  partners: [
    {
      logo: {
        alt: "",
        title: "pcheck",
        caption: "",
        description: "",
        id: 152,
        link: "https://cms.dev.codeforafrica.org/pesayetu/home/pcheck/",
        url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/pcheck.png",
        sizes: {
          thumbnail: {
            height: 150,
            width: 150,
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/pcheck-150x150.png",
            orientation: "landscape",
          },
          medium: {
            height: 217,
            width: 300,
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/pcheck-300x217.png",
            orientation: "landscape",
          },
          full: {
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/pcheck.png",
            height: 672,
            width: 930,
            orientation: "landscape",
          },
        },
      },
      name: "Pesacheck",
    },
    {
      logo: {
        alt: "",
        title: "kcomnet",
        caption: "",
        description: "",
        id: 151,
        link: "https://cms.dev.codeforafrica.org/pesayetu/home/kcomnet/",
        url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/kcomnet.png",
        sizes: {
          thumbnail: {
            height: 150,
            width: 150,
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/kcomnet-150x150.png",
            orientation: "landscape",
          },
          medium: {
            height: 217,
            width: 300,
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/kcomnet-300x217.png",
            orientation: "landscape",
          },
          full: {
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/kcomnet.png",
            height: 672,
            width: 930,
            orientation: "landscape",
          },
        },
      },
      name: "KCOMNET",
    },
    {
      logo: {
        alt: "",
        title: "germancooperation",
        caption: "",
        description: "",
        id: 149,
        link: "https://cms.dev.codeforafrica.org/pesayetu/home/germancooperation/",
        url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/germancooperation.png",
        sizes: {
          thumbnail: {
            height: 150,
            width: 150,
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/germancooperation-150x150.png",
            orientation: "landscape",
          },
          medium: {
            height: 217,
            width: 300,
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/germancooperation-300x217.png",
            orientation: "landscape",
          },
          full: {
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/germancooperation.png",
            height: 672,
            width: 930,
            orientation: "landscape",
          },
        },
      },
      name: "GIZ",
    },
    {
      logo: {
        alt: "",
        title: "cameco",
        caption: "",
        description: "",
        id: 148,
        link: "https://cms.dev.codeforafrica.org/pesayetu/home/cameco/",
        url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/cameco.png",
        sizes: {
          thumbnail: {
            height: 150,
            width: 150,
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/cameco-150x150.png",
            orientation: "landscape",
          },
          medium: {
            height: 217,
            width: 300,
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/cameco-300x217.png",
            orientation: "landscape",
          },
          full: {
            url: "https://cms.dev.codeforafrica.org/pesayetu/wp-content/uploads/sites/2/2021/08/cameco.png",
            height: 672,
            width: 930,
            orientation: "landscape",
          },
        },
      },
      name: "Cameco",
    },
  ],
};
