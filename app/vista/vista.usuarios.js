// Importar los modulos necesarios
const controladorUsuarios = require('../controlador/controlador.usuarios');
const middUsuarios = require('../../middlewares/midd.usuarios');

// Construir y exportar los modulos
module.exports = async (app) => {

    // Endpoints a los que solo podran acceder los administradores
    app.get('/usuarios', async (req,res) => {
        try {
            let consultaUsuarios = await controladorUsuarios.listarUsuarios();
            res.status(200).json({message: 'Consulta exitosa', consultaUsuarios});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.delete('/usuarios/:idUsuario', async (req,res) => {
        let idUsuario = req.params.idUsuario;
        try {
            let eliminarUsuario = await controladorUsuarios.eliminarUsuario(idUsuario);
            res.status(200).json({message: 'El usuario se elimino correctamente'});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    // Enpoints a los que podean acceder los usuarios
    app.post('/usuario/registro', async(req,res) => {
        let usuario = req.body
        try {
            let nuevoUsuario = await controladorUsuarios.crearUsuario(usuario)
            res.status(200).json({message: 'Registro de usuario exitoso', nuevoUsuario})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.post('/usuario/login', async(req,res) => {
        let usuario = req.body
        try {
            let inspeccionarUsuario = await controladorUsuarios.inspeccionarUsuario(usuario);
            if (inspeccionarUsuario){
                let validacion = await controladorUsuarios.generarToken(usuario)
                res.status(200).json({message: 'Se valido el usuario', validacion})
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })
}

