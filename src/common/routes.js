const nextRoutes = require('next-routes');

// eslint-disable-next-line no-multi-assign
const routes = module.exports = nextRoutes();

const APP_ROUTES = [{
  page: 'index',
  pattern: '/',
}, {
  page: 'tv-show',
  pattern: '/tv-show',
}, {
  page: 'post',
  pattern: '/p/:id',
}, {
  page: 'about',
  pattern: '/about',
}, {
  page: 'beer',
  pattern: '/beer',
}, {
  page: 'beer-details',
  pattern: '/beer/:id',
}];

APP_ROUTES.forEach(route => routes.add(route));
