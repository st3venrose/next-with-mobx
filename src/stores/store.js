import axios from 'axios';
import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';

const isServer = !process.browser
useStaticRendering(isServer)

class Store {
  @observable shows = null;

  constructor(isServer, initialData = {}) {
    console.log('initialData', initialData);
    Object.assign(this, initialData);
  }

  @action fetchData = async () => {
    const res = await axios.get('http://api.tvmaze.com/search/shows?q=batman');
    console.log('fetchData')
    this.shows = res.data;
    return res.data
  }
}

let store = null

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}