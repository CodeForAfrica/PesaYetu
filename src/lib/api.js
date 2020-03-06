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
    }
  };
}

export async function getSourceAfricaData() {
  const url =
    'https://dc.sourceafrica.net/api/search.json?q=projectid:483-PesaYetu';
  return axios.get(`https://corsanywhere.devops.codeforafrica.org/${url}`);
}

export async function getOpenAfricaData() {
  const url =
    'https://africaopendata.org/api/3/action/group_package_show?id=pesayetu';
  return axios.get(`https://corsanywhere.devops.codeforafrica.org/${url}`);
}

export async function getOpenAfricaCount() {
  const url = 'https://africaopendata.org/api/3/action/group_show?id=pesayetu';
  return axios.get(`https://corsanywhere.devops.codeforafrica.org/${url}`);
}
