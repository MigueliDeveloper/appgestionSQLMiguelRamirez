import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

/**  
 * 
 * TODO:
 * 
 * Interfaz: RequestExt
 * 
 * Propósito: Esta interfaz extiende la interfaz Request de Express para agregar un campo user que representa el usuario autenticado.
 * 
 * Importaciones:
 * 
 * JwtPayload: El tipo de datos que representa el payload de un token JWT.
 * Request: La interfaz de Express que representa una solicitud HTTP.
 * 
 * Campos:
 * user?: JwtPayload | { id: string }: El campo user es opcional y puede representar un objeto JwtPayload o un objeto con un campo id de tipo string.
 * 
 * */

export interface RequestExt extends Request {
  user?: JwtPayload | { id: string };
}
