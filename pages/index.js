import React from 'react'

import Link from 'next/link'
import axios from 'axios';

import Head from '../components/head'
import Nav from '../components/nav'

const Home = (props) => (
  <div>
    <Head title="Home" />
    <Nav />

    <h1>Batman TV Shows</h1>
    <ul>
        {props.shows.map(({ show }) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
)

Home.getInitialProps = async function() {
  const res = await axios.get('http://api.tvmaze.com/search/shows?q=batman');

  console.log(`Show data fetched. Count: ${res.data.length}`)

  return {
    shows: res.data
  }
}

export default Home
