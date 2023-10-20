"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ArchivoController_1 = require("../controllers/ArchivoController");
const routerarchivos = (0, express_1.Router)();
routerarchivos.post('/cursos/', ArchivoController_1.getArchivo);
