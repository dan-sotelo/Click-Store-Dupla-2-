// Importar los modulos a utilizar
const jwt = require('jsonwebtoken')
const modeloUsuarios = require('../modelo/modelo.usuarios');

// Exportar los modulos
let generarToken = async(usuario) => {
    try {
        const token = jwt.sign({usuario}, process.env.SECRET_KEY);  //Tiempo máximo de validez de 15 min
        return token;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let verificarUsuario = async(token) =>{
    try {
        const validacion = jwt.verify(token, process.env.SECRET_KEY);
        if(validacion){
            return validacion;
        }else{
            throw new Error('Token no valido')
        }

    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let inspeccionarUsuario = async(usuario) =>{
    try {
        let usuarioValido = await modeloUsuarios.inspeccionarUsuario(usuario);
        if (usuarioValido){
            return usuarioValido;
        }else{
            throw new Error('Usuario no valido')
        }
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let listarUsuarios = async () => {
    try {
        let consultaUsuarios = await modeloUsuarios.consultaUsuarios();
        return consultaUsuarios;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let crearUsuario = async (usuario) => {
    try {
        let nuevoUsuario = await modeloUsuarios.crearUsuario(usuario)
        return nuevoUsuario;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let eliminarUsuario = async (idUsuario) => {
    try {
        let borrarUsuario = await modeloUsuarios.eliminarUsuario(idUsuario);
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

module.exports = {generarToken, verificarUsuario, inspeccionarUsuario, listarUsuarios, crearUsuario, eliminarUsuario}