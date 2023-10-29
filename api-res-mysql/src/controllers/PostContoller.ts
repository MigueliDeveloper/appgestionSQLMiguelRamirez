import { Request, Response } from 'express';
import Post from '../models/PostModel';

/**
 *
 * TODO:
 *
 *  Este código es un ejemplo de una API RESTful que permite realizar operaciones CRUD (Create, Read, Update, Delete) sobre posts.
 */

/**
 *
 * TODO:
 *
 * Los cinco métodos exportados son:
 *
 * getPosts(): Obtiene todos los posts.
 * getPost(): Obtiene un post específico por su ID.
 * deletePost(): Elimina un post específico por su ID.
 * postPost(): Crea un nuevo post.
 * updatePost(): Actualiza un post existente.
 * Cada método usa la clase PostModel para interactuar con la base de datos.
 *
 */

/**
 *
 * TODO:
 *
 * getPosts()
 *
 * Este método usa el método findAll() de la clase PostModel para obtener todos los posts de la base de datos.
 * Luego, el método json() de la clase Response se usa para serializar los posts en formato JSON y enviarlos
 * como respuesta a la solicitud.
 */
export const getPosts = async (req: Request, res: Response) => {
    const listPosts = await Post.findAll()

    res.json(listPosts)
}

/**
 *
 * TODO:
 *
 * getPost()
 * Este método usa el método findByPk() de la clase PostModel para obtener un post específico por su ID.
 * Si el post existe, el método json() de la clase Response se usa para serializar el post en formato JSON y enviarlo
 * como respuesta a la solicitud. De lo contrario, se envía un código de estado 404 (Not Found) como respuesta.
 *
 */
export const getPost = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (post) {
        res.json(post)
    } else {
        res.status(404).json({
            msg: `No existe un post con el id ${id}`
        })
    }
}

/**
 *
 * TODO:
 *
 * deletePost()
 *
 * Este método usa el método destroy() de la clase PostModel para eliminar un post específico por su ID.
 * Si el post existe, se envía un código de estado 200 (OK) como respuesta. De lo contrario, se envía un código de
 * estado 404 (Not Found) como respuesta.
 *
 * */
export const deletePost =  async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
        res.status(404).json({
            msg: `No existe un post con el id ${id}`
        })
    } else {
        await post.destroy();
        res.json({
            msg: 'El post fue eliminado con exito!'
        })
    }
}

/**
 * TODO:
 *
 * postPost()
 * Este método usa el método create() de la clase PostModel para crear un nuevo post. El método body de la clase Request
 * se usa para obtener los datos del post a crear. Luego, el método json() de la clase Response se usa para serializar el
 * post recién creado en formato JSON y enviarlo como respuesta a la solicitud.
 */
export const postPost = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Post.create(body);

        res.json({
            msg: `¡El post fue publicado con exito!`

        })
    } catch (error) {
        console.log(error);
        res.json({
            msg:`Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

/**
 *
 * TODO:
 * updatePost()
 * Este método usa el método update() de la clase PostModel para actualizar un post existente.
 * El método body de la clase Request se usa para obtener los datos del post a actualizar.
 * Si el post existe, se envía un código de estado 200 (OK) como respuesta.
 * De lo contrario, se envía un código de estado 404 (Not Found) como respuesta
 *
 */
export const updatePost = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const post = await Post.findByPk(id);

    if(post) {
        await post.update(body);
        res.json({
            msg: 'El post fue actualizado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un post con el id ${id}`
        })
    }

    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}
