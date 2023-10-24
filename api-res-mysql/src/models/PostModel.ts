import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Post = sequelize.define('Post',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    fuente: {
        type: DataTypes.STRING
    },
    texto: {
        type: DataTypes.TEXT
    },
    imagen: {
        type: DataTypes.STRING
    },
    autor: {
        type: DataTypes.STRING
    }
}, {
    modelName: "post",
    timestamps: false 
}
);

export default Post;