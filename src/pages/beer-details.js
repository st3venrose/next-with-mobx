import React, { Component } from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';
import { any } from 'prop-types';

// Components
import withLayout from '@/common/layout/with-layout';

@inject('beerStore')
@observer
class BeerDetails extends Component {
  static async getInitialProps({ query, mobxStore }) {
    const { id } = query;
    await mobxStore.beerStore.fetchOneBeer(id);
    return { };
  }

  render() {
    const { beerStore } = this.props;
    const { selectedBeer } = beerStore;

    return (
      <>
        <h1>Beer details</h1>
        <p>
    abv:
          {' '}
          {selectedBeer.abv}
        </p>
        <p>
    description:
          {' '}
          {selectedBeer.description}
        </p>
        <p>
    first brewed:
          {' '}
          {selectedBeer.first_brewed}
        </p>
        <p>
    Tips:
          {' '}
          {selectedBeer.brewers_tips}
        </p>
      </>
    );
  }
}

export default withLayout(BeerDetails, 'beer details');

BeerDetails.propTypes = {
  beerStore: any.isRequired,
};
