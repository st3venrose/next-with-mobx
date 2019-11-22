import axios from 'axios';
import { ROOT_API } from '@/common/constants';

const fetchShows = () => axios.get(`${ROOT_API}/shows`);
const fetchOneShow = (id) => axios.get(`${ROOT_API}/show/${id}`);

export default {
  fetchShows,
  fetchOneShow,
};
