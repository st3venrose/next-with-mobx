import React, { Component } from 'react';

// Components
import Head from '@/common/layout/head';
import Nav from '@/common/layout/nav';

function withLayout(WrappedComponent, title = '') {
  return class extends Component {
    static getInitialProps(ctx) {
      return WrappedComponent.getInitialProps(ctx);
    }

    render() {
      return (
        <>
          <Head title={title} />
          <Nav />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
}

export default withLayout;
