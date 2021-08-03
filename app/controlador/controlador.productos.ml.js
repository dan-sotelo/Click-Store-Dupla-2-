// Importar los modulos necesarios
const fetch = require('node-fetch');

// Crear y exportar lo modulos
let consultaApi = async(urlApi) => {
    try {
        let consulta = await fetch(urlApi);
        let datos = await consulta.json()
        return datos;
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo realizar la consulta a la API de MLM');
    }
}

let listarCategorias = async() => {
    try {
        let categorias = await consultaApi(process.env.CATEGORIAS);
        return categorias;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador: No se puede realizar la consulta');
    }
}

let listarSubcategorias = async(idCategoria) => {
    try {
        let subCategorias = await consultaApi(process.env.SUBCATEGORIAS + idCategoria);
        return subCategorias.children_categories;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador: No se puede realizar la consulta');
    }
}

let listarProductos = async(idSubcategoria) => {
    try {
        let productos = await consultaApi(process.env.PRODUCTOS + idSubcategoria);
        return productos.results;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador: No se puede realizar la consulta');
    }
}

module.exports = {listarCategorias, listarSubcategorias, listarProductos}