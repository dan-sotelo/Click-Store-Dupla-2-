// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');

// Definir el modelo de la tabla para la DB

const TipoUsuarios = sequelize.define('tipo_usuarios',{
    id_tipo_usuarios:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_usuarios:{
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
    timestamps: false
});

// Exportamos el modelo
module.exports = TipoUsuarios