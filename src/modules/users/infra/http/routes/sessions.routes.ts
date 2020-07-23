import { Router } from 'express';

import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const usersRoutes = Router();
const sessionsController = new SessionsController();

usersRoutes.post('/', sessionsController.create);

export default usersRoutes;
