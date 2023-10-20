"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MensajeController_1 = require("../controllers/MensajeController");
const validate_token_1 = __importDefault(require("../services/validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, MensajeController_1.getMensajes);
router.get('/:id', validate_token_1.default, MensajeController_1.getMensaje);
router.delete('/:id', validate_token_1.default, MensajeController_1.deleteMensaje);
router.post('/', validate_token_1.default, MensajeController_1.postMensaje);
router.put('/:id', validate_token_1.default, MensajeController_1.updateMensaje);
exports.default = router;
