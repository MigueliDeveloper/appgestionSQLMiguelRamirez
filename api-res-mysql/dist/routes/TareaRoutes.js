"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TareaController_1 = require("../controllers/TareaController");
const validate_token_1 = __importDefault(require("../services/validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, TareaController_1.getTareas);
router.get('/:id', validate_token_1.default, TareaController_1.getTarea);
router.delete('/:id', validate_token_1.default, TareaController_1.deleteTarea);
router.post('/', validate_token_1.default, TareaController_1.postTarea);
router.put('/:id', validate_token_1.default, TareaController_1.updateTarea);
exports.default = router;
