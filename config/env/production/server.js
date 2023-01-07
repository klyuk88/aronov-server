module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: 8081,
  url: 'http://server3.1096137-cd86361.tmweb.ru/',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
