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
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * newUser: Una función que crea un nuevo usuario en la base de datos.
 *
 * La función newUser() toma los siguientes parámetros:
 *
 * req: El objeto de solicitud de Express.
 * res: El objeto de respuesta de Express.
 *
 * La función valida que el usuario no exista ya en la base de datos. Si el usuario no existe, la función hashea la contraseña y crea un nuevo usuario en la base de datos. La función luego devuelve una respuesta JSON al cliente con un mensaje de éxito.
 * */
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Validamos si el usuario ya existe en la base de datos
    const user = yield user_1.User.findOne({ where: { email: email } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${email}`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 8);
    try {
        // Guardarmos usuario en la base de datos
        yield user_1.User.create({
            email: email,
            password: hashedPassword
        });
        res.json({
            msg: `Usuario ${email} creado exitosamente!`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        });
    }
});
exports.newUser = newUser;
/**
 * loginUser: Una función que autentica a un usuario y genera un JWT.
 *
 * La función loginUser() toma los siguientes parámetros:
 *
 * req: El objeto de solicitud de Express.
 * res: El objeto de respuesta de Express.
 * La función valida que el usuario exista en la base de datos. Si el usuario existe, la función compara la contraseña con la contraseña hash en la base de datos.
 * Si la contraseña es correcta, la función genera un JWT y lo devuelve al cliente.
 */
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Validamos si el usuario existe en la base de datos
    const user = yield user_1.User.findOne({ where: { email: email } });
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${email} en la base datos`
        });
    }
    // Validamos password
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecta`
        });
    }
    // Generamos token
    const token = jsonwebtoken_1.default.sign({
        email: email
    }, process.env.SECRET_KEY || 'pepito123');
    res.json(token);
});
exports.loginUser = loginUser;
