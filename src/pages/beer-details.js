import React from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';

// Components
import withLayout from '@/common/layout/with-layout';

const BeerDetails = ({ beerStore: { selectedBeer } }) => (
  <>
    <h1>Beer details</h1>
    <p>abv: {selectedBeer.abv}</p>
    <p>description: {selectedBeer.description}</p>
    <p>first brewed: {selectedBeer.first_brewed}</p>
    <p>Tips: {selectedBeer.brewers_tips}</p>
  </>
);

BeerDetails.getInitialProps = ({ query, mobxStore }) => {
  const { id } = query;
  return mobxStore.beerStore.fetchOneBeer(id);
};

export default inject('beerStore')(
  observer(withLayout(BeerDetails, 'beer details'))
);
