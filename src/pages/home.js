import React from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';

// Components
import withLayout from '@/common/layout/with-layout';
import TvShowList from '@/components/tv-show/tv-show-list';
import BeerList from '@/components/beer/beer-list';

const Home = ({ tvShowStore: {showsWithBeers}, beerStore: {beers} }) => (
  <>
    <h1>Batman TV Shows with beers</h1>
    <TvShowList shows={showsWithBeers} />
    <h1>More beers if not enough</h1>
    <BeerList beers={beers} />
  </>
);

Home.getInitialProps = ({ mobxStore }) => {
  return Promise.all([
    mobxStore.beerStore.fetchBeers(),
    mobxStore.tvShowStore.fetchShowsWithBeers()
  ]);
};

export default inject('tvShowStore', 'beerStore')(observer(withLayout(Home)));
