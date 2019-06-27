import React, { Component } from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';
import { any } from 'prop-types';

// Components
import withLayout from '@/common/layout/with-layout';
import BeerList from '@/components/beer/beer-list';

@inject('beerStore')
@observer
class Beer extends Component {
  static propTypes = {
    beerStore: any.isRequired,
  };

  static async getInitialProps({ mobxStore }) {
    await mobxStore.beerStore.fetchBeers();
    return { };
  }

  render() {
    const { beerStore } = this.props;
    const { beers } = beerStore;

    return (
      <div>
        <h1>Beers</h1>
        <BeerList beers={beers} />
      </div>
    );
  }
}

export default withLayout(Beer, 'some-good-beer');
