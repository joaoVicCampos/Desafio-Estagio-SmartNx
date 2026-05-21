import type { Request, Response } from 'express';
import Post from '../models/Post.js';

class PostController {
    async create(req: Request, res: Response) {
        try {
            const {titulo, conteudo} = req.body;
            if(!titulo || !conteudo) {
                return res.status(400).json({message: 'Titulo e conteuto do post são obrigatórios'})
            }

            const post = await Post.create({
                titulo, conteudo
            })

            return res.status(201).json(post)
        } catch (error) {
            return res.status(500).json({message: 'Erro na criação do post',  error});
            
        }
    }
}

export default new PostController();