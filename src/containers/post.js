import React, { Component } from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';
import { any } from 'prop-types';

// Components
import withLayout from '@/common/layout/with-layout';

@inject('tvShowStore')
@observer
class Post extends Component {
  static propTypes = {
    tvShowStore: any.isRequired,
  };

  static async getInitialProps({ query, mobxStore }) {
    const { id } = query;
    await mobxStore.tvShowStore.fetchOneShow(id);
    return { };
  }

  render() {
    const { tvShowStore } = this.props;
    const { selectedShow } = tvShowStore;

    return (
      <div>
        <h1>{selectedShow.name}</h1>
        <p>{selectedShow.summary.replace(/<[/]?p>/g, '')}</p>
        <img alt="" src={selectedShow.image.medium} />
      </div>
    );
  }
}

export default withLayout(Post, 'post');
