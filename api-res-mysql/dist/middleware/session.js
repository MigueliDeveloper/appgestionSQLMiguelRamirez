"use strict";
/**
 *
 * TODO:
 *
 * Archivo: session.ts
 *
 * Propósito: Este archivo define un middleware para verificar que la sesión del usuario sea válida.
 *
 * Importaciones:
 *
 * NextFunction: El tipo de datos que representa una función de siguiente paso en Express.
 * Request: La interfaz de Express que representa una solicitud HTTP.
 * Response: La interfaz de Express que representa una respuesta HTTP.
 * JwtPayload: El tipo de datos que representa el payload de un token JWT.
 * Jwt: El tipo de datos que representa un token JWT.
 * RequestExt: La interfaz que extiende la interfaz Request de Express para agregar un campo user que representa el usuario autenticado.
 * verifyToken: Una función que verifica la validez de un token JWT.
 *
 * */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
/**
 *
 * TODO:
 *
 * checkJwt: Un middleware que verifica que la sesión del usuario sea válida.
 *
 * Función checkJwt:
 *
 * La función checkJwt es un middleware que verifica que la sesión del usuario sea válida.
 * Esta función primero verifica que la solicitud tenga un encabezado Authorization válido. Si la solicitud tiene un encabezado Authorization válido,
 * la función extrae el token JWT del encabezado. Luego, la función verifica la validez del token JWT utilizando la función verifyToken. Si el token JWT es válido,
 * la función agrega el usuario autenticado al objeto req y llama a la siguiente función en la cadena de middleware.
 * Si el token JWT no es válido, la función devuelve un error con el código de estado HTTP 401.
 */
const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ")[1];
        const isUser = (0, jwt_handle_1.verifyToken)(`${jwt}`);
        if (!isUser) {
            res.status(401);
            res.send("NO_TIENES_UN_JWT_VALIDO");
        }
        else {
            req.user = isUser;
            next();
        }
    }
    catch (e) {
        console.log({ e });
        res.status(400);
        res.send("SESSION_NO_VALIDA");
    }
};
exports.checkJwt = checkJwt;
