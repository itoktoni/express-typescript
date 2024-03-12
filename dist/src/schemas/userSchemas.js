"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginSchema = exports.userRegistrationSchema = void 0;
const zod_1 = require("zod");
exports.userRegistrationSchema = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
});
exports.userLoginSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(8),
});
