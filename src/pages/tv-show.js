import React, { Component } from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';
import { any } from 'prop-types';

// Components
import withLayout from '@/common/layout/with-layout';
import TvShowList from '@/components/tv-show/tv-show-list';

@inject('tvShowStore')
@observer
class TvShow extends Component {
  static async getInitialProps({ mobxStore }) {
    await mobxStore.tvShowStore.fetchShows();
    return { };
  }

  render() {
    const { tvShowStore } = this.props;
    const { shows } = tvShowStore;

    return (
      <div>
        <h1>Batman TV Shows</h1>
        <ul>
          <TvShowList shows={shows} />
        </ul>
      </div>
    );
  }
}

TvShow.propTypes = {
  tvShowStore: any.isRequired,
};

export default withLayout(TvShow, 'tv shows');
