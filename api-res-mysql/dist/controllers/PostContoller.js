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
exports.updatePost = exports.postPost = exports.deletePost = exports.getPost = exports.getPosts = void 0;
const PostModel_1 = __importDefault(require("../models/PostModel"));
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
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPosts = yield PostModel_1.default.findAll();
    res.json(listPosts);
});
exports.getPosts = getPosts;
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
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield PostModel_1.default.findByPk(id);
    if (post) {
        res.json(post);
    }
    else {
        res.status(404).json({
            msg: `No existe un post con el id ${id}`
        });
    }
});
exports.getPost = getPost;
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
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield PostModel_1.default.findByPk(id);
    if (!post) {
        res.status(404).json({
            msg: `No existe un post con el id ${id}`
        });
    }
    else {
        yield post.destroy();
        res.json({
            msg: 'El post fue eliminado con exito!'
        });
    }
});
exports.deletePost = deletePost;
/**
 * TODO:
 *
 * postPost()
 * Este método usa el método create() de la clase PostModel para crear un nuevo post. El método body de la clase Request
 * se usa para obtener los datos del post a crear. Luego, el método json() de la clase Response se usa para serializar el
 * post recién creado en formato JSON y enviarlo como respuesta a la solicitud.
 */
const postPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield PostModel_1.default.create(body);
        res.json({
            msg: `¡El post fue publicado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.postPost = postPost;
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
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const post = yield PostModel_1.default.findByPk(id);
        if (post) {
            yield post.update(body);
            res.json({
                msg: 'El post fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un post con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.updatePost = updatePost;
