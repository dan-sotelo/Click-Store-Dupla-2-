// Importar los modulos requeridos
const controladorUsuarios = require('../app/controlador/controlador.usuarios');
const rateLimit = require('express-rate-limit');

// Middleware para limitar las consultas por usuario
const limiteConsultas = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Excedio la cantidad máxima de consultas'
})

// Middleware para validaciones de acceso
let usuarioValido = async (req,res,next) =>{
    try {
        if (req.headers.authorization != undefined){
            const token = req.headers.authorization.split(' ')[1];
            let verificado = await controladorUsuarios.verificarUsuario(token);
            req.params.usuario = verificado.data;
            return next();
        } else {
            throw new Error ('Este es un sistema seguro y requiere autorización');
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Ocurrio un error al validar el usuario', error: error.message});
    }
}

module.exports = {limiteConsultas, usuarioValido}