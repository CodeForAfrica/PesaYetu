import cc from '@/pesayetu/assets/cc.svg';
import footerLogo from '@/pesayetu/assets/footer-logo.svg';
import facebook from '@/pesayetu/assets/footer-social-fb.svg';
import instagram from '@/pesayetu/assets/footer-social-ig.svg';
import linkedin from '@/pesayetu/assets/footer-social-in.svg';
import twitter from '@/pesayetu/assets/footer-social-tw.svg';

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
