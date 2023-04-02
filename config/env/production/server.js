module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: 1337,
  url: 'http://api.aronovlaw.ru/',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
