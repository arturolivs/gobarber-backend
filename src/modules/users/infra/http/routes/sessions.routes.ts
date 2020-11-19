import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const usersRoutes = Router();
const sessionsController = new SessionsController();

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default usersRoutes;
