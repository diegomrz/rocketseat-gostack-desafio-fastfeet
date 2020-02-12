import { Router } from 'express';

import RecipientController from './app/controllers/RecipientController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/recipients', RecipientController.store);

routes.use(authMiddleware);
routes.put('/recipients', RecipientController.update);

export default routes;
