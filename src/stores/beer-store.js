
import { action, observable } from 'mobx';

import beerApi from '@/common/api/beer-api';

class BeerStore {
  @observable beers = null;

  @observable selectedBeer = null;

  @observable offeredBeer = null;

  constructor(initialData = {}) {
    Object.assign(this, initialData);
  }

  @action fetchBeers = async () => {
    try {
      const response = await beerApi.fetchBeers();
      this.beers = response.data;
    } catch (err) {
      Promise.reject(err);
    }

    return this.beers;
  }

  @action fetchOneBeer = async (id) => {
    try {
      const response = await beerApi.fetchOneBeer(id);
      [this.selectedBeer] = response.data;
    } catch (err) {
      Promise.reject(err);
    }
  }


  @action fetchOfferedBeers = async () => {
    try {
      const response = await beerApi.fetchBeers();
      this.offeredBeer = response.data;
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default BeerStore;
