import axios from 'axios';

const _API_KEY = '34a43f339fc525a162aaaaf303a0071a';

const fetchMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: _API_KEY,
  },
});

export default fetchMovie;