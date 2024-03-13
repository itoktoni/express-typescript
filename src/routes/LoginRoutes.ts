import express, { Router, Request, Response } from 'express';
import { validateData } from '../middleware/validationMiddleware';
import { userRegistrationSchema, userLoginSchema } from '../schemas/loginSchemas';
import { registerUser, loginUser } from '../controllers/LoginController';
import BaseRoutes from '..//contract/BaseRoute';

class LoginRoutes extends BaseRoutes {

    public routes():void {
        this.router.post('/register', validateData(userRegistrationSchema), registerUser);
        this.router.post('/login', validateData(userLoginSchema), loginUser);
    }
}

export default new LoginRoutes().router;