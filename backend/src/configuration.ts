if (process.env.BACK_PORT === undefined) throw new Error('Missing BACK_PORT in .env file');
if (process.env.BACK_ALLOWED_ORIGIN === undefined) throw new Error('Missing BACK_ALLOWED_ORIGIN in .env file');

const conf = {
  baseUrl: '/api',
  dbCollectionName: 'my-badass-app',
  port: process.env.BACK_PORT,
  origin: process.env.BACK_ALLOWED_ORIGIN.split(' '),
};

export default conf;
