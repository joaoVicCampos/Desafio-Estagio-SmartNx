import { Router } from "express";
import PostController from "./controllers/PostController.js";

const routes = Router();

routes.post('/posts', PostController.create);


export default routes;