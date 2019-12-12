import React from 'react';

// Dependencies
import { object } from 'prop-types';

const BeerList = ({ beer }) => (
  <>
    <h1>Beer details</h1>
    <p>abv: {beer.abv}</p>
    <p>description: {beer.description}</p>
    <p>first brewed: {beer.first_brewed}</p>
    <p>Tips: {beer.brewers_tips}</p>
  </>
);

BeerList.propTypes = {
  beer: object.isRequired
};

export default BeerList;
