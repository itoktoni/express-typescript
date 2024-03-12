import express, { Router } from 'express';
import { validateData } from '../middleware/validationMiddleware';
import { userDataSchema } from '../schemas/userSchemas';
import UserController from '../controllers/UserController';
import BaseRoutes from '../contract/BaseRoute';

class UserRoutes extends BaseRoutes {
    public routes():void {
        this.router.post('/create', validateData(userDataSchema), UserController.create);
    }
}

export default new UserRoutes().router;