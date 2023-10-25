import { Router } from 'express';
import { deletePost, getPost, getPosts, postPost, updatePost } from '../controllers/PostContoller';

const routerPost = Router();

routerPost.get('/',  getPosts);
routerPost.get('/:id',  getPost);
routerPost.delete('/:id',  deletePost);
routerPost.post('/',  postPost);
routerPost.put('/:id',  updatePost);

export default routerPost;
