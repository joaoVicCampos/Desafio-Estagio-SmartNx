import type { Request, Response } from 'express';
import Post from '../models/Post.js';
import Comentario from '../models/Comentario.js';

class ComentarioController {
    async create(req: Request, res: Response){
        try {
            const postId = Number(req.params.postId);
            
            const {conteudo} = req.body;
            if (!conteudo) {
                return  res.status(400).json({message: 'Comentário sem conteúdo'})
            }
            const post = await Post.findByPk(postId)
            if (!post) {
                return  res.status(404).json({message: 'Post não encontrado'})
            }

            const comentario = await Comentario.create({
                conteudo,
                postId
            })
            return res.status(201).json(comentario)
        } catch (error) {
            return res.status(500).json({message: 'Erro ao adicionar comentário'})
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const comentarioId = Number(req.params.comentarioId);
            const postId = Number(req.params.postId);
            const comentario = await Comentario.findOne({
                where: {
                    id: comentarioId,
                    postId: postId
                }
            });
            if (!comentario) {
                return res.status(404).json({message: 'Comentário não encontrado'})
            }

            await comentario.destroy();
            return res.status(200).json({message: 'Comentário apagado com sucesso'})

        } catch (error) {
            return res.status(500).json({message: 'Erro ao deletar comentário'})
        }
    }
}

export default new ComentarioController();