import { useStaticRendering } from 'mobx-react';

import TvShowStore from '@/stores/tv-show-store';
import BeerStore from '@/stores/beer-store';

const isServer = typeof window === 'undefined';
// This makes sure the component won't try to react to any future data changes.
useStaticRendering(isServer); // avoid leaking memory when being rendered server side

let store = null;

const getStores = (initialData) => {
  const beerStore = new BeerStore(initialData.beerStore);
  const tvShowStore = new TvShowStore(initialData.tvShowStore, beerStore);

  return { tvShowStore, beerStore };
};

export default function initializeStore(initialData = { tvShowStore: {}, beerStore: {} }) {
  if (isServer) {
    return { ...getStores(initialData) };
  }
  if (store === null) {
    store = { ...getStores(initialData) };
  }

  return store;
}
