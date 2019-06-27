
const express = require('express');
const compression = require('compression');
const next = require('next');
const helmet = require('helmet');
const log4js = require('log4js');

const routes = require('../src/common/routes');

const PORT = parseInt(process.env.PORT, 10) || 3100;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const logger = log4js.getLogger();

const handle = app.getRequestHandler();
const handler = routes.getRequestHandler(app, ({
  req, res, route, query,
}) => {
  app.render(req, res, route.page, query);
});

logger.level = log4js.levels.INFO.levelStr;

app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(compression());

  server.use(handler);
  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, () => {
    logger.info(`> Ready on http://localhost:${PORT}`);
  });
}).catch((ex) => {
  logger.error(ex.stack);
  process.exit(1);
});
