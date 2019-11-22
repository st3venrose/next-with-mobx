import axios from 'axios';
import { ROOT_API } from '@/common/constants';

const fetchBeers = () => axios.get(`${ROOT_API}/beers`);
const fetchOfferedBeers = () => axios.get(`${ROOT_API}/offeredBeers`);
const fetchOneBeer = (id) => axios.get(`${ROOT_API}/beer/${id}`);

export default {
  fetchBeers,
  fetchOneBeer,
  fetchOfferedBeers,
};
