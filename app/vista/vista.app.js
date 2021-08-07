// Importar los modulos necesarios

// Construir y exportar los modulos
module.exports = async(app) => {
    app.get('/inicio', async (req,res) => {
        try {
            res.render("index")
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.get('/registro/usuarios', async(req,res) => {
        try{
            res.render("registro_usuarios")
        } catch(error){
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })
}