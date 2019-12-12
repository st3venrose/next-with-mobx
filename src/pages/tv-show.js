import React from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';

// Components
import withLayout from '@/common/layout/with-layout';
import TvShowList from '@/components/tv-show/tv-show-list';

const TvShow = ({ tvShowStore: { shows } }) => (
  <>
    <h1>Batman TV Shows</h1>
    <ul>
      <TvShowList shows={shows} />
    </ul>
  </>
);

TvShow.getInitialProps = async ({ mobxStore }) => {
  return await mobxStore.tvShowStore.fetchShows();
};

export default inject('tvShowStore')(observer(withLayout(TvShow, 'tv shows')));
