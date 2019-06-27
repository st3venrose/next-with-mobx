import React, { Fragment } from 'react';

// Dependencies
import Link from 'next/link';

const About = () => (
  <Fragment>
    <Link href="/">
      <a>Home</a>
    </Link>
    <div>
      <div>Hello visitor!</div>
    </div>
  </Fragment>
);

export default About;
