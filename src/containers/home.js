import React, { Component } from 'react';

// Dependencies
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

// Components
import Head from '@/components/head';
import Nav from '@/components/nav';

@inject('store')
@observer
class Home extends Component {
  static async getInitialProps({ mobxStore }) {
    const res = await mobxStore.fetchData();
    return res;
  }

  async componentDidMount() {
    // do something
  }

  render() {
    const { shows } = this.props.store;

    return (
      <div>
        <Head title="Home" />
        <Nav />

        <h1>Batman TV Shows</h1>
        <ul>
          {shows.map(({ show }) => (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
