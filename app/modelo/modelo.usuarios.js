// Importar los modulos necesarios
const Usuarios = require('../../db/db.modelo.usuarios');

// Exportar los modulos

let inspeccionarUsuario = async(usuario) => {
    try {
        let existeUsuario = await Usuarios.findOne({where: {correo: `${usuario.correo}`}})
        if (existeUsuario != null){
            let validacion = await Usuarios.findOne({where: {contrasena: `${usuario.contrasena}`}})
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
        let existeUsuario = await Usuarios.findOne({where: {correo: `${usuario.correo}`}})
        if (existeUsuario == null) {
            let nuevoUsuario = await Usuarios.create({
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                correo: usuario.correo,
                telefono: usuario.telefono,
                fecha_nacimiento: usuario.fecha_nacimiento,
                activo: usuario.activo,
                contrasena: usuario.contrasena,
                fk_tipo_usuarios: usuario.fk_tipo_usuarios
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
        let borrarUsuario = await Usuarios.destroy({where: {id_usuario: `${idUsuario}`}})
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el modelo')
    }
}
module.exports = {inspeccionarUsuario, consultaUsuarios, crearUsuario, eliminarUsuario}