import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import cors from 'cors';
import MemoryStore from 'memorystore';
import mongoose from 'mongoose';
import getEcho from 'routes/echo';
import conf from './configuration';

const { log } = console;

dotenv.config();

const app = express();

app.use(express.json());

// Session
const MemoryStoreSession = MemoryStore(session);

app.use(cors({
  origin: conf.origin,
  credentials: true,
}));

app.use(session({
  secret: 'well, i really think you should quit smoking',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000,
    secure: false,
  },
  store: new MemoryStoreSession({
    checkPeriod: 3600000, // prune expired entries every hour
  }),
}));

// Middlewares
// app.use(someMiddleware);

// Routes
log('conf.baseUrl', conf.baseUrl);
app.get(`${conf.baseUrl}/echo`, getEcho);

// Start backend api
const start = async () => {
  try {
    // Connecting to db
    await mongoose.connect(
      `mongodb://database/${conf.dbCollectionName}`,
    );
    // Start server
    app.listen(conf.port, () => {
      log(`Backend listening at http://localhost:${conf.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  }
};

start();
