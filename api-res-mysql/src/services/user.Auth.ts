/** 
 * 
 * TODO:
 * 
 * Archivo: user.Auth.ts
 * 
 * Propósito: Este archivo contiene los servicios para la autenticación de usuarios.
 * 
 * Importaciones:
 * 
 * Request: El tipo de Express para objetos de solicitud.
 * Response: El tipo de Express para objetos de respuesta.
 * bcrypt: Una biblioteca para el hash y la comparación de contraseñas.
 * User: El modelo para la tabla user en la base de datos.
 * jwt: Una biblioteca para generar y verificar tokens JSON Web (JWT)
 * 
 */
import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';

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
export const newUser = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { email: email } });

    if(user) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${email}`
        })
    } 
 
    const hashedPassword = await bcrypt.hash(password, 8);
    
    try {
        // Guardarmos usuario en la base de datos
        await User.create({
            email: email,
            password: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${email} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

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
export const loginUser = async (req: Request, res: Response) => {

    const { email, password } = req.body;

   // Validamos si el usuario existe en la base de datos
   const user: any = await User.findOne({ where: { email: email } });

   if(!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${email} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(password, user.password)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   // Generamos token
   const token = jwt.sign({
    email: email
   }, process.env.SECRET_KEY || 'pepito123');
   
   res.json(token);
}