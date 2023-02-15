module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'sql12.freemysqlhosting.net'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'sql12598393'),
      user: env('DATABASE_USERNAME', 'sql12598393'),
      password: env('DATABASE_PASSWORD', 'JztmNw99zA'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
