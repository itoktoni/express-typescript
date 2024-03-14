import express, { Router } from 'express';
import { validateData } from '../middleware/validationMiddleware';
import { userDataSchema } from '../schemas/userSchemas';
import UserController from '../controllers/UserController';
import BaseRoutes from '../contract/BaseRoute';
import auth from '../middleware/authMiddleware';

class UserRoutes extends BaseRoutes {
    public routes():void {
        this.router.get('/list', auth, UserController.list);
        this.router.get('/profile', auth, UserController.profile);
    }
}

export default new UserRoutes().router;