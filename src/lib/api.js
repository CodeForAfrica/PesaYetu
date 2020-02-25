import axios from 'axios';
import config from '../config';

const GOOGLE_GEOCODE_URL =
  'https://maps.googleapis.com/maps/api/geocode/json?sensor=false&language=en';

export default function createAPI() {
  const { url: mapitUrl, codeType } = config.MAPIT;
  const key = window.GOOGLE_GEOCODE_URL_API_KEY;

  return {
    mapit: { url: mapitUrl, codeType },
    geocode: { url: GOOGLE_GEOCODE_URL, key },
    getGeography: async (countryCode, searchTerm) => {
      const response = await axios.get(
        `${mapitUrl}/areas/${searchTerm}?country=${countryCode}`
      );
      return Object.values(response.data);
    },
    getGeoLevel: async geoId => {
      const response = await axios.get(`${mapitUrl}/code/${codeType}/${geoId}`);
      return response.data.type.toLowerCase();
    },
    getLatestMedium: () => {
      return fetch(`https://stories.hurumap.org/@PesaCheck/latest`).then(
        res => {
          if (!res.ok) {
            return Promise.reject();
          }
          return res.json().then(posts => {
            return posts.map((post, index) => ({
              index,
              title: post.title,
              author: 'Arthur Kakande',
              brief: post.content.subtitle,
              link: `https://pesacheck.org/${post.uniqueSlug}`,
              date: new Date(post.latestPublishedAt).toLocaleString('en-GB', {
                year: 'numeric',
                day: '2-digit',
                month: 'short'
              }),
              mediaSrc: `https://miro.medium.com/${post.virtuals.previewImage.imageId}`,
              media: 'img',
              country: 'KE'
            }));
          });
        }
      );
    }
  };
}

export async function getLatestMedium() {
  return fetch(`https://stories.hurumap.org/@PesaCheck/latest`).then(res => {
    if (!res.ok) {
      return Promise.reject();
    }
    return res.json().then(posts => {
      return posts.map((post, index) => ({
        index,
        title: post.title,
        author: 'Arthur Kakande',
        brief: post.content.subtitle,
        link: `https://pesacheck.org/${post.uniqueSlug}`,
        date: new Date(post.latestPublishedAt).toLocaleString('en-GB', {
          year: 'numeric',
          day: '2-digit',
          month: 'short'
        }),
        mediaSrc: `https://miro.medium.com/${post.virtuals.previewImage.imageId}`,
        media: 'img',
        country: 'KE'
      }));
    });
  });
}

export async function getSourceAfricaData() {
  return axios.get(
    'https://dc.sourceafrica.net/api/search.json?q=projectid:483-PesaYetu'
  );
}

export async function getOpenAfricaData() {
  return axios.get(
    'https://africaopendata.org/api/3/action/group_package_show?id=pesayetu'
  );
}

export async function getOpenAfricaCount() {
  return axios.get(
    'https://africaopendata.org/api/3/action/group_show?id=pesayetu'
  );
}
