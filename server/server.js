
const express = require('express');
const compression = require('compression');
const next = require('next');
const helmet = require('helmet');
const log4js = require('log4js');
const axios = require('axios');

const routes = require('../src/common/routes');

const PORT = parseInt(process.env.PORT, 10) || 3100;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const logger = log4js.getLogger();

logger.level = log4js.levels.INFO.levelStr;
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app, ({
  req, res, route, query,
}) => {
  app.render(req, res, route.page, query);
});

const fetchBeers = async (req, res) => {
  const response = await axios.get(`${process.env.BEER_API_URL}?page=1&per_page=20`);
  res.status(200).send(response.data);
};
const fetchOfferedBeers = async (req, res) => {
  const response = await axios.get(`${process.env.BEER_API_URL}?page=2&per_page=10`);
  res.status(200).send(response.data);
};
const fetchOneBeer = async (req, res) => {
  const response = await axios.get(`${process.env.BEER_API_URL}/${req.params.id}`);
  res.status(200).send(response.data);
};
const fetchShows = async (req, res) => {
  const response = await axios.get(`${process.env.MOVIE_API_URL}/search/shows?q=batman`);
  res.status(200).send(response.data);
};
const fetchOneShow = async (req, res) => {
  const response = await axios.get(`${process.env.MOVIE_API_URL}/shows/${req.params.id}`);
  res.status(200).send(response.data);
};


app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(compression());

  // api
  server.get('/api/beers', fetchBeers);
  server.get('/api/offeredBeers', fetchOfferedBeers);
  server.get('/api/beer/:id', fetchOneBeer);
  server.get('/api/shows', fetchShows);
  server.get('/api/show/:id', fetchOneShow);

  server.use(handler);

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, () => {
    logger.info(`> Ready on http://localhost:${PORT}`);
  });
}).catch((ex) => {
  logger.error(ex.stack);
  process.exit(1);
});
