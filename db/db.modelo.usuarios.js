// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conexion');
const TipoUsuarios = require('./db.modelo.tipoUsuarios');

// Definir el modelo de la tabla para la DB
const Usuarios = sequelize.define('Usuarios',{
    Id_usuario:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Nombres:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Apellidos:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Correo:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    Telefono:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    Fecha_Nacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Activo:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Contrasena:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    Fk_Tipo_Usuarios:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'Fecha_Registro',
    updatedAt: 'Fecha_Actualizacion'
});
Usuarios.belongsTo(TipoUsuarios,{foreignKey: 'Fk_Tipo_Usuarios'});

// Exportar el modelo
module.exports = Usuarios
