// Importar los modulos necesarios
const controladorProductosML = require('../controlador/controlador.productos.ml')

// Construir y exportar los modulos
module.exports = async (app) => {

    // Endpoints para acceder a la API de MLM
    app.get('/MLM/categoria', async(req,res) => {
        try {
            let categorias = await controladorProductosML.listarCategorias();
            res.status(500).json(categorias);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message})
        }
    })

    app.get('/MLM/categoria/:idCategoria', async(req,res) => {
        let idCategoria = req.params.idCategoria;
        try {
            let subCategoria = await controladorProductosML.listarSubcategorias(idCategoria);
            res.status(500).json(subCategoria);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message})
        }
    })

    app.get('/MLM/subcategoria/:idSubcategoria', async(req,res) => {
        let idSubcategoria = req.params.idSubcategoria;
        try {
            let productos = await controladorProductosML.listarProductos(idSubcategoria);
            res.status(500).json(productos);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message})
        }
    })
}