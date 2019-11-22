import React, { Component } from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';
import { any } from 'prop-types';

// Components
import withLayout from '@/common/layout/with-layout';
import TvShowList from '@/components/tv-show/tv-show-list';
import BeerList from '@/components/beer/beer-list';

@inject('tvShowStore', 'beerStore')
@observer
class Home extends Component {
  static async getInitialProps({ mobxStore }) {
    return Promise.all([mobxStore.beerStore.fetchBeers(),
      await mobxStore.tvShowStore.fetchShowsWithBeers()]);

    // return { };
  }

  render() {
    const { tvShowStore, beerStore } = this.props;
    const { showsWithBeers } = tvShowStore;
    const { beers } = beerStore;

    return (
      <div>
        <h1>Batman TV Shows with beers</h1>
        <TvShowList shows={showsWithBeers} />
        <h1>More beers if not enough</h1>
        <BeerList beers={beers} />
      </div>
    );
  }
}

Home.propTypes = {
  tvShowStore: any.isRequired,
  beerStore: any.isRequired,
};

export default withLayout(Home, 'welcome');
