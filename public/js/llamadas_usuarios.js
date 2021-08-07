// Declarar la clase para trabajar con localStorage
class Usuarios{
    constructor (correo,contrasena){
        this.correo = correo;
        this.contrasena = contrasena;
        this.token = '';
    }

    static async guardarUsuario(usuario){
        localStorage.setItem('datosUsuario', JSON.stringify(usuario));
    }

    static async recuperarUsuario(){
        let usuario = await JSON.parse(localStorage.getItem('datosUsuario'));
        return usuario;
    }
}

// Función para crear un nuevo usuario y almacenarlo a la base de datos
let registroUsuario = async(usuario) => {
    await Usuarios.guardarUsuario(new Usuarios(usuario.correo, usuario.contrasena));
    try {
        console.log('Impresion desde llamada_usuarios',usuario);
        let nuevoRegistro = await fetch('http://localhost:3000/usuario/registro',{
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        let respuesta = await nuevoRegistro.json();
        return respuesta;
    } catch (error) {
        console.log(error)
        throw new Error ('Error en la llamada para el registro de usuario')
    }
}
