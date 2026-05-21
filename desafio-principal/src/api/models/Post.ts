import sequelize from "../database/connection.js";
import { DataTypes } from "sequelize";

const Post = sequelize.define('Post', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

export default Post;