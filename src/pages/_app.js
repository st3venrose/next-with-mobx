import App from 'next/app';
import React from 'react';
import { Provider } from 'mobx-react';

import initializeStore from '@/stores/stores';

class MyMobxApp extends App {
  static async getInitialProps(appContext) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const mobxStore = initializeStore();
    // Provide the store to getInitialProps of pages
    appContext.ctx.mobxStore = mobxStore;

    const appProps = await App.getInitialProps(appContext);

    return {
      ...appProps,
      initialMobxState: mobxStore
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.mobxStore = isServer
      ? props.initialMobxState
      : initializeStore(props.initialMobxState);
  }

  render() {
    const { Component } = this.props;

    return (
      <Provider
        beerStore={this.mobxStore.beerStore}
        tvShowStore={this.mobxStore.tvShowStore}
      >
        <React.StrictMode>
          <Component />
        </React.StrictMode>
      </Provider>
    );
  }
}
export default MyMobxApp;
