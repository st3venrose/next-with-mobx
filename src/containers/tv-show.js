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
  static propTypes = {
    tvShowStore: any.isRequired,
  };

  static async getInitialProps({ mobxStore }) {
    await mobxStore.tvShowStore.fetchData();
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

export default withLayout(TvShow, 'tv shows');
