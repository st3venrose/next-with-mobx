import React from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';

// Components
import withLayout from '@/common/layout/with-layout';
import BeerList from '@/components/beer/beer-list';

const Beer = ({ beerStore: { beers } }) => (
  <>
    <h1>Beers</h1>
    <BeerList beers={beers} />
  </>
);

Beer.getInitialProps = ({ mobxStore }) => {
  return mobxStore.beerStore.fetchBeers();
};

export default inject('beerStore')(observer(withLayout(Beer, 'some-good-beer')));

