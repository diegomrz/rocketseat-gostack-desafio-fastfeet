import { Router } from 'express';

import RecipientController from './app/controllers/RecipientController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/recipients', RecipientController.store);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
