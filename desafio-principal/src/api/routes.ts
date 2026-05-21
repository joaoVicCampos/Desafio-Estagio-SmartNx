import { Router } from "express";
import PostController from "./controllers/PostController.js";
import ComentarioController from "./controllers/ComentarioController.js";

const routes = Router();

routes.post('/posts', PostController.create);
routes.get('/posts', PostController.findAll);
routes.delete('/posts/:id', PostController.delete);
routes.post('/posts/:postId/comentarios', ComentarioController.create);
routes.delete('/posts/:postId/comentarios/:comentarioId', ComentarioController.delete);


export default routes;