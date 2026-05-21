import sequelize from "../database/connection.js";
import { DataTypes } from "sequelize";
import Post from "./Post.js";


const Comentario = sequelize.define('Comentario', {
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Post,
            key: 'id'
        }
    }
});

Post.hasMany(Comentario, {
    foreignKey: 'postId',
});

Comentario.belongsTo(Post, {
    foreignKey: 'postId'
})

export default Comentario;