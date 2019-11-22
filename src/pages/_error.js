import React from 'react';

// Dependencies
import { string } from 'prop-types';

// Components
import Header from '@/common/layout/head';

const Error = ({ pathName }) => (
  <div>
    <Header />
    <p>
    This path(
      {JSON.stringify(pathName)}
    ) should not be rendered via SSR
    </p>
  </div>
);

Error.propTypes = {
  pathName: string.isRequired,
};

Error.getInitialProps = ({ req }) => {
  const pathName = req ? req.path : window.location.pathname;
  return { pathName };
};

export default Error;
