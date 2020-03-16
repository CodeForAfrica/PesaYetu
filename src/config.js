const config = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://takwimu.africa',
  MAPIT: {
    url: 'https://mapit.hurumap.org',
    codeType: 'AFR',
    zoom: 5,
    centre: [0.3051933453207569, 37.908818734483155]
  },
  geoLevels: {
    country: {
      name: 'Country'
    },
    level1: {
      name: 'County'
    }
  },
  about: {
    heading: 'About Us',
    intro:
      'PesaYetu is a budget data portal and data visualization tool that shows how much money each county has received from the national government, and how this money is allocated and utilized based on each county’s priorities',
    body:
      'PesaYetu aims to create an easy to use visualization on allocations made to the counties annually since 2013, tracking the changes in total allocation, conditional allocations and the equitable share so that the relevant stakeholders (journalists) can use this data to quickly find analyse and compare complex government budget data to help fact-check claims about resource allocations, public procurement and development plans or services.'
  },
  showCaseStories: [
    {
      index: 0,
      title: 'Fact-checking claims on Uganda’s trade with Kenya',
      author: 'Arthur Kakande',
      brief:
        'How true are these claims by General Katureebe Tayebwa on Uganda’s trade with Kenya?',
      link:
        'https://pesacheck.org/fact-checking-claims-on-ugandas-trade-with-kenya-8797b87844f0',
      date: '06 Sep 2019',
      mediaSrc: 'img/showcase/image.png',
      media: 'img',
      country: 'KE'
    },
    {
      index: 1,
      title:
        'Did Uganda earn more from gold than coffee for the first time in March 2019?',
      author: 'Arthur Kakande',
      brief:
        'How true is a claim that Uganda earned more from gold exports than from coffee in the month of March 2019?',
      link:
        'https://pesacheck.org/did-uganda-earn-more-gold-than-from-coffee-for-the-first-time-in-march-2019-1f7f4bb71f6b',
      mediaSrc: 'img/showcase/image_2.png',
      date: '29 Aug 2019',
      media: 'img',
      country: 'KE'
    },
    {
      index: 2,
      title: 'Can the Government of Uganda afford to run a national airline?',
      author: 'Emma Laura N Kisa',
      brief:
        'How viable is Uganda’s plan to revive the country’s flag carrier?',
      link:
        'https://pesacheck.org/can-the-government-of-uganda-afford-to-run-an-airline-47288e3e559f',
      mediaSrc: 'img/showcase/image.png',
      date: '23 Aug 2019',
      media: 'img',
      country: 'KE'
    },
    {
      index: 3,
      title: 'How much do we share online?',
      author: 'PesaCheck',
      brief:
        'Revelations that apps like FaceApp could acquire and monetise users’ data without their consent are only a tip of the iceberg.',
      link:
        'https://city-press.news24.com/News/a-farmers-15-year-wait-for-land-justice-20180822',
      mediaSrc: 'img/showcase/image.png',
      date: '21 Aug 2019',
      media: 'img',
      country: 'KE'
    }
  ],
  populationTables: ['allPopulationSex2019S']
};

export default config;
