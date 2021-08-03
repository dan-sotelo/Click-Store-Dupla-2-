// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');

// Definir el modelo de la tabla para la DB

const TipoUsuarios = sequelize.define('TipoUsuarios',{
    Id_tipoUsuarios:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Tipo_Usuarios:{
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
    timestamps: false
});

// Exportamos el modelo
module.exports = TipoUsuarios