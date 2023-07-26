import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from './middlewares/ErrorHandler';
import { UserRouter } from './routes/UserRouter';

const server = express();
server.use(cors());
server.use(express.json());

// routes
server.use(UserRouter);
server.use(errorHandler);

export default server;
