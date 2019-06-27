import React, { Component, Fragment } from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';
import { any } from 'prop-types';

// Components
import withLayout from '@/common/layout/with-layout';

@inject('beerStore')
@observer
class BeerDetails extends Component {
  static propTypes = {
    beerStore: any.isRequired,
  };

  static async getInitialProps({ query, mobxStore }) {
    const { id } = query;
    await mobxStore.beerStore.fetchOneBeer(id);
    return { };
  }

  render() {
    const { beerStore } = this.props;
    const { selectedBeer } = beerStore;

    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default withLayout(BeerDetails, 'beer details');
