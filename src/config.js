/* eslint-disable import/prefer-default-export */ // To be Removed

import cc from '@/pesayetu/assets/cc.svg';
import footerLogo from '@/pesayetu/assets/footer-logo.svg';
import facebook from '@/pesayetu/assets/footer-social-fb.svg';
import instagram from '@/pesayetu/assets/footer-social-ig.svg';
import linkedin from '@/pesayetu/assets/footer-social-in.svg';
import twitter from '@/pesayetu/assets/footer-social-tw.svg';
import Group3964 from '@/pesayetu/assets/images/Group 3964.png';
import Group3973 from '@/pesayetu/assets/images/Group 3973.png';
import Group4619 from '@/pesayetu/assets/images/Group 4619.png';

const CFA = {
  image: {
    src: footerLogo,
    alt: 'Code for Africa',
  },
  url: 'https://codeforafrica.org',
};

const ABOUT = {
  about:
    'This site is an openAFRICA project of Code for Africa.\n' +
    '        All content is released under a Creative Commons 4 Attribution Licence. \n' +
    '        Reuse it to help empower your own community.\n' +
    '        The code is available on GitHub and data is available on openAFRICA.\n',
};

const QUICK_LINKS = [
  {
    title: 'Resources',
    links: [
      { href: '/about', label: 'About the Project' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of service' },
    ],
  },
];

const socialMedia = [
  {
    url: 'https://www.instagram.com/code4africa__/',
    image: {
      url: instagram,
      alt: 'Instagram',
    },
  },
  {
    url: 'https://www.facebook.com/CodeForAfrica/',
    image: {
      url: facebook,
      alt: 'Facebook',
    },
  },
  {
    url: 'https://twitter.com/Code4Africa',
    image: {
      url: twitter,
      alt: 'Twitter',
    },
  },
  {
    url: 'https://github.com/codeforafrica',
    image: {
      url: linkedin,
      alt: 'LinkedIn',
    },
  },
];

export const exploreTools = {
  title: 'EXPLORE OUR OTHER TOOLS',
  items: [
    {
      title: 'Promise Tracker',
      description:
        'The Promise Tracker is a platform citizens can use to track promises made by governors, institutions and political parties in their manifestos during campaigns.',
      image: Group3973,
    },
    {
      title: 'Pesa Check',
      description:
        'PesaCheck is the largest fact-checking organisation in Africa, working in 12 countries and providing up to date fact-checks in four languages.',
      image: Group4619,
    },
    {
      title: 'Tax Clock',
      description:
        'TaxClock shows how public budget data can be used to help citizens better understand how governments spend their tax.',
      image: Group3964,
    },
    {
      title: 'DebunkBot',
      description:
        'DebunkBot was created to fight the spread of misinformation on social media by responding to tweets sharing questionable links.',
      image: Group3964,
    },
  ],
};

export const footerArgs = {
  title: 'Stay in touch with us',
  socialMedia,
  quickLinks: QUICK_LINKS[0],
  description: ABOUT.about,
  logoProps: {
    image: CFA.image,
    url: CFA.url,
  },
  aboutVariant: 'subtitle1',
  copyrightProps: {
    icon: cc,
    copyright: '2021 PesaYetu',
    copyrightUrl: 'https://dev.pesayetu.pesacheck.org',
    copyrightVariant: 'subtitle1',
  },
};

export default footerArgs;
