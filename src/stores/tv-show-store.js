import { action, observable } from 'mobx';

import tvShowApi from '@/common/api/tv-shows-api';

class TvShowStore {
  @observable shows = null;

  @observable showsWithBeers = null;

  @observable selectedShow = null;

  constructor(initialData = {}, beerStore) {
    Object.assign(this, initialData);
    this.beerStore = beerStore;
  }

  @action fetchShows = async () => {
    try {
      const response = await tvShowApi.fetchShows();
      this.shows = response.data;
    } catch (err) {
      Promise.reject(err);
    }

    return this.shows;
  }

  @action fetchOneShow = async (id) => {
    try {
      const response = await tvShowApi.fetchOneShow(id);
      this.selectedShow = response.data;

      return this.selectedShow;
    } catch (err) {
      Promise.reject(err);
    }
  }

  @action fetchShowsWithBeers= async () => {
    try {
      const [tvShows, offeredBeers] = await Promise.all([this.fetchShows(), this.beerStore.fetchOfferedBeers()]);

      this.showsWithBeers = tvShows.map((show, index) => {
        const offeredBeer = {
          id: offeredBeers[index].id,
          name: offeredBeers[index].name,
        };
        show.offeredBeer = offeredBeer;

        return show;
      });
    } catch (err) {
      Promise.reject(err);
    }
  }
}

export default TvShowStore;
