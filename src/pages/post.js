import React from 'react';

// Dependencies
import { inject, observer } from 'mobx-react';

// Components
import withLayout from '@/common/layout/with-layout';

const removeHtmlPTags = (text) => {
  return text.replace(/<[/]?p>/g, '');
}

const Post = ({ tvShowStore: { selectedShow } }) => (
  <>
    <h1>{selectedShow.name}</h1>
    <p>{removeHtmlPTags(selectedShow.summary)}</p>
    <img alt='' src={selectedShow.image.medium} />
  </>
);

Post.getInitialProps = ({ query, mobxStore }) => {
  const { id } = query;
  return mobxStore.tvShowStore.fetchOneShow(id);
};

export default inject('tvShowStore')(observer(withLayout(Post, 'post')));
