import { action, observable } from 'mobx';

import tvShowApi from '@/common/api/tv-shows-api';

class TvShowStore {
  @observable shows = null;

  @observable selectedShow = null;

  constructor(initialData = {}, beerStore) {
    try {
      Object.assign(this, initialData);
      this.beerStore = beerStore;
    } catch (err) {
      Promise.reject(err);
    }
  }

  @action fetchData = async () => {
    try {
      const response = await tvShowApi.fetchShows();
      this.shows = response.data;
    } catch (err) {
      Promise.reject(err);
    }
  }

  @action fetchOneShow = async (id) => {
    try {
      const response = await tvShowApi.fetchOneShow(id);
      this.selectedShow = response.data;
    } catch (err) {
      Promise.reject(err);
    }
  }

  @action fetchShowsWithBeers= async () => {
    try {
      const response = await tvShowApi.fetchShows();
      const beers = await this.beerStore.fetchOfferedBeers();
      const shows = response.data;

      shows.map((show, index) => {
        const offeredBeer = {
          id: beers[index].id,
          name: beers[index].name,
        };

        show.offeredBeer = offeredBeer;
        return show;
      });

      this.shows = shows;
    } catch (err) {
      Promise.reject(err);
    }
  }
}

export default TvShowStore;
