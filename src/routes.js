import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import RecipientController from './app/controllers/RecipientController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/recipients', RecipientController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.put('/recipients', RecipientController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
