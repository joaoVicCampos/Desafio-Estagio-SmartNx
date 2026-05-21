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

    async findAll(req: Request, res: Response) {
        try {
            const posts = await Post.findAll();
            if(!posts){
                return res.status(400).json({message: 'Não existem posts a serem exibidos'})
            }
            return res.status(200).json(posts);
        } catch (error) {
            return res.status(500).json({message: 'Erro ao encontrar posts', error});
        }
    }
      async delete(req: Request, res: Response){
        try {
            const postId = req.params.id;
            const postDeletado = await Post.destroy({
                where: {id: postId}
            })
            if(postDeletado){
                return res.status(200).json({message: 'Post deletado com sucesso'})
            }
            return res.status(404).json({message: 'Post não econtrado'})
        } catch (error) {
            return res.status(500).json({message: 'Erro ao deletar o post', error})
        }
    }
}

export default new PostController();