"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdminService = exports.postAdminService = exports.deleteAdminService = exports.getAdminService = exports.getAdminServices = void 0;
const AdminServiceModel_1 = __importDefault(require("../models/AdminServiceModel"));
const getAdminServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listAdminServices = yield AdminServiceModel_1.default.findAll();
    res.json(listAdminServices);
});
exports.getAdminServices = getAdminServices;
const getAdminService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const adminservice = yield AdminServiceModel_1.default.findByPk(id);
    if (adminservice) {
        res.json(adminservice);
    }
    else {
        res.status(404).json({
            msg: `No existe un servicio con ese ${id}`
        });
    }
});
exports.getAdminService = getAdminService;
const deleteAdminService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const adminservice = yield AdminServiceModel_1.default.findByPk(id);
    if (!adminservice) {
        res.status(404).json({
            msg: `No existe un curso con ese ${id}`
        });
    }
    else {
        yield adminservice.destroy();
        res.json({
            msg: 'El servicio fue eliminado con exito'
        });
    }
});
exports.deleteAdminService = deleteAdminService;
const postAdminService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield AdminServiceModel_1.default.create(body);
        res.json({
            msg: '¡El seervicio fue agregado con exito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        });
    }
});
exports.postAdminService = postAdminService;
const updateAdminService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const adminservice = yield AdminServiceModel_1.default.findByPk(id);
        if (adminservice) {
            yield adminservice.update(body);
            res.json({
                msg: 'El servicio fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un servicio con ese ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ha ocurrido un error'
        });
    }
});
exports.updateAdminService = updateAdminService;
