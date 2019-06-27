import axios from 'axios';

const ROOT_API = 'https://api.punkapi.com/v2/beers';

const fetchBeers = () => axios.get(`${ROOT_API}?page=1&per_page=20`);
const fetchOfferedBeers = () => axios.get(`${ROOT_API}?page=2&per_page=10`);
const fetchOneBeer = id => axios.get(`${ROOT_API}/${id}`);

export default {
  fetchBeers,
  fetchOneBeer,
  fetchOfferedBeers,
};
