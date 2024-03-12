"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validationMiddleware_1 = require("../middleware/validationMiddleware");
const userSchemas_1 = require("../schemas/userSchemas");
const LoginController_1 = require("../controllers/LoginController");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.post('/register', (0, validationMiddleware_1.validateData)(userSchemas_1.userRegistrationSchema), LoginController_1.registerUser);
        this.router.post('/login', (0, validationMiddleware_1.validateData)(userSchemas_1.userLoginSchema), LoginController_1.loginUser);
    }
}
exports.default = new UserRoutes().router;
