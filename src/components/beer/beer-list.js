import React from 'react';

// Dependencies
import Link from 'next/link';
import { array } from 'prop-types';

const BeerList = ({ beers }) => (
  <ul>
    {beers.map(beer => (
      <li key={beer.id}>
        <p>
          {beer.name}
          {' '}
          <Link href={`/beer/${beer.id}`}>
            <a>Details</a>
          </Link>
        </p>
      </li>
    ))}
  </ul>
);

BeerList.propTypes = {
  beers: array.isRequired,
};

export default BeerList;
