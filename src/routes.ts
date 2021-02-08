import { Router } from 'express';
import AuthController from './controllers/AuthController';
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/auth', AuthController.store);

export default routes;
