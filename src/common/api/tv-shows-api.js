import axios from 'axios';

const ROOT_API = 'http://api.tvmaze.com';

const fetchShows = () => axios.get(`${ROOT_API}/search/shows?q=batman`);
const fetchOneShow = id => axios.get(`${ROOT_API}/shows/${id}`);

export default {
  fetchShows,
  fetchOneShow,
};
