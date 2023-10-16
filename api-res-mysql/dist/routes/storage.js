"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerFile = void 0;
const express_1 = require("express");
const storage_1 = require("../controllers/storage");
const file_1 = __importDefault(require("../middleware/file"));
const routerFile = (0, express_1.Router)();
exports.routerFile = routerFile;
routerFile.post("/", file_1.default.single("myfile"), storage_1.getFile);
