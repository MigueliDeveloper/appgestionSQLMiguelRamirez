"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminServiceController_1 = require("../controllers/AdminServiceController");
const validate_token_1 = __importDefault(require("../routes/validate-token"));
const router = (0, express_1.Router)();
router.get('/', validate_token_1.default, AdminServiceController_1.getAdminServices);
router.get('/:id', validate_token_1.default, AdminServiceController_1.getAdminService);
router.delete('/:id', validate_token_1.default, AdminServiceController_1.deleteAdminService);
router.post('/', validate_token_1.default, AdminServiceController_1.postAdminService);
router.put('/:id', validate_token_1.default, AdminServiceController_1.updateAdminService);
exports.default = router;
