module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '88.99.99.104'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'pushpend_strapi'),
      user: env('DATABASE_USERNAME', 'pushpend_rachauhan'),
      password: env('DATABASE_PASSWORD', 'pcamchauhan'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
