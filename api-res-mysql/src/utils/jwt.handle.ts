/**
 * 
 *  TODO::
 * 
 * Archivo: jwt.handle.ts
 * 
 * Propósito: Este archivo contiene funciones para el manejo de tokens JWT.
 * 
 * Importaciones:
 * 
 * sign: Una función de la biblioteca jsonwebtoken para generar tokens JWT.
 * verify: Una función de la biblioteca jsonwebtoken para verificar tokens JWT.
 * JWT_SECRET: Una constante que contiene la clave secreta para generar y verificar tokens JWT.
 * 
 * Exportaciones:
 * 
 * generateToken: Una función que genera un token JWT para un usuario.
 * verifyToken: Una función que verifica un token JWT y retorna true si es válido, o false si no lo es.
 * 
 * Documentación detallada:
 * 
 * La función generateToken() toma el siguiente parámetro:
 * 
 * id: El ID del usuario para el que se desea generar el token JWT.
 * La función genera un token JWT con la clave secreta JWT_SECRET y una validez de 2 horas. Luego, retorna el token JWT generado.
 * 
 * La función verifyToken() toma el siguiente parámetro:
 * 
 * jwt: El token JWT a verificar.
 * La función verifica el token JWT con la clave secreta JWT_SECRET. Si el token es válido, la función retorna true. De lo contrario, la función retorna false.
 */

import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.SECRET_KEY || "token.01010101";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };
