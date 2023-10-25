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
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPosts = yield PostModel_1.default.findAll();
    res.json(listPosts);
});
exports.getPosts = getPosts;
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
