import { Router } from "express";
import PostController from "./controllers/PostController.js";

const routes = Router();

routes.post('/posts', PostController.create);
routes.get('/posts', PostController.findAll);
routes.delete('/posts/:id', PostController.delete);


export default routes;