"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_Auth_1 = require("../services/user.Auth");
const router = (0, express_1.Router)();
router.post('/registro', user_Auth_1.newUser);
router.post('/acceso', user_Auth_1.loginUser);
exports.default = router;
