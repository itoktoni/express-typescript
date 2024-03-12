"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const registerUser = (req, res) => {
    // Handle user registration logic using validated data from req.body
    res.json({ message: 'User registered successfully', data: req.body });
};
exports.registerUser = registerUser;
const loginUser = (req, res) => {
    // Handle user login logic using validated data from req.body
    res.json({ message: 'User logged in successfully', data: req.body });
};
exports.loginUser = loginUser;
