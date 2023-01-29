module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: 1337,
  url: 'http://sub.1219795-cb97382.tw1.ru/',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
