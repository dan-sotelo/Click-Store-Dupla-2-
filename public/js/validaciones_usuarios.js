//  Función para validar entrada de los campos del formulario de tipo texto
let validarTxt = (datos,tipo) => {
    try {
        if (datos == null || datos == 0 || /^\s+$/.test(datos)) {
            throw new Error (`El campo de ${tipo} no es correcto, ingrese nuevamente un valor valido para este campo`)
        } else {
            return 'Registro valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}

let validarContrasena = (contrasena) => {
    try {
        if (contrasena == null || contrasena == 0 || contrasena.length < 8 || /^\s+$/.test(contrasena)) {
            throw new Error (`El campo de contraseña no cumple con los parametros`)
        } else {
            return 'Registro valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}

let validarEmail = (correo) => {
    try {     
        if (correo == null || correo == 0 || (/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ){
            throw new Error ('El email ingresado no es correcto')
        } else {
            return 'Registro de email valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error ('El email no se valido')
    }
}