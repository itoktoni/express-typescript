"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validationMiddleware_1 = require("../middleware/validationMiddleware");
const userSchemas_1 = require("../schemas/userSchemas");
const userRouter = express_1.default.Router();
const userController_1 = require("../controllers/userController");
userRouter.post('/register', (0, validationMiddleware_1.validateData)(userSchemas_1.userRegistrationSchema), userController_1.registerUser);
userRouter.post('/login', (0, validationMiddleware_1.validateData)(userSchemas_1.userLoginSchema), userController_1.loginUser);
exports.default = userRouter;
