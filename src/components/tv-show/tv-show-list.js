import React from 'react';

// Dependencies
import Link from 'next/link';
import { array } from 'prop-types';

const offeredBearTemplate = (offeredBeer) => {
  if (offeredBeer) {
    return (
      <div className="beer">
        Offered beer:
        {' '}
        {offeredBeer.name}
        {' '}
        <Link href={`/beer/${offeredBeer.id}`}>
          <a>Details</a>
        </Link>
        <style jsx>
          {`
            .beer {
              margin: 0 0 0 50px
            }
          `}
        </style>
      </div>
    );
  }

  return '';
};

const TvShowList = ({ shows }) => (
  <>
    <ul>
      {shows.map(({ show, offeredBeer }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
          {offeredBearTemplate(offeredBeer)}
        </li>
      ))}
    </ul>
    <style jsx>
      {`
      li {
        display: felx
      }
      `}
    </style>
  </>
);

TvShowList.propTypes = {
  shows: array.isRequired,
};

export default TvShowList;
