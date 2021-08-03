// Importar los modulos necesarios
const Usuarios = require('../../db/db.modelo.usuarios');

// Exportar los modulos

let inspeccionarUsuario = async(usuario) => {
    try {
        let existeUsuario = await Usuarios.findOne({where: {Correo: `${usuario.Correo}`}})
        if (existeUsuario != null){
            let validacion = await Usuarios.findOne({where: {Contrasena: `${usuario.Contrasena}`}})
            if (validacion != null){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}

let consultaUsuarios = async() => {
    try {
        let consulta = await Usuarios.findAll();
        return consulta;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo: Error en la consulta')
    }
}

let crearUsuario = async (usuario) => {
    try {
        let existeUsuario = await Usuarios.findOne({where: {Correo: `${usuario.Correo}`}})
        if (existeUsuario == null) {
            let nuevoUsuario = await Usuarios.create({
                Nombres: usuario.Nombres,
                Apellidos: usuario.Apellidos,
                Correo: usuario.Correo,
                Telefono: usuario.Telefono,
                Fecha_Nacimiento: usuario.Fecha_Nacimiento,
                Activo: usuario.Activo,
                Contrasena: usuario.Contrasena,
                Fk_Tipo_Usuarios: usuario.Fk_Tipo_Usuarios
            });
            return nuevoUsuario;
        } else {
            throw new Error('Usuario ya registrado')
        }
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo: Error en la creacion de usuario')
    }
}

let eliminarUsuario = async (idUsuario) => {
    try {
        let borrarUsuario = await Usuarios.destroy({where: {Id_usuario: `${idUsuario}`}})
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}
module.exports = {inspeccionarUsuario, consultaUsuarios, crearUsuario, eliminarUsuario}