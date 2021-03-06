// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const TipoUsuarios = require('./db.modelo.tipoUsuarios');

// Definir el modelo de la tabla para la DB
const Usuarios = sequelize.define('usuarios',{
    id_usuario:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombres:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellidos:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    fecha_nacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    activo:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    contrasena:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    fk_tipo_usuarios:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});
Usuarios.belongsTo(TipoUsuarios,{foreignKey: 'fk_tipo_usuarios'});

// Exportar el modelo
module.exports = Usuarios
