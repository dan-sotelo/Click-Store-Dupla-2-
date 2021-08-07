// Dar de alta las variables globales
let btnNuevoRegistro = document.getElementById("sign-in");

// Función para capturar los datos del usuario
btnNuevoRegistro.addEventListener('click', async() => {
    let usuario = {
      nombres: document.getElementById('firstName').value,
      apellidos: document.getElementById('lastName').value,
      correo: document.getElementById('email').value,
      telefono: document.getElementById('phone').value,
      fecha_nacimiento: document.getElementById('date').value,
      activo: true,
      contrasena: document.getElementById('txtPassword').value,
      fk_tipo_usuarios: 2
    }
    try {
      validarTxt(usuario.nombres,'nombres');
      validarTxt(usuario.apellidos,'apellidos');
      console.log(usuario.correo);
      validarEmail(usuario.correo);
      validarContrasena(usuario.contrasena,'contrasena');
      console.log('Impresion desde registro_usuarios',usuario);
      let registro = await registroUsuario(usuario);
      if (registro){
        console.log(registro)
        alert(`Registro exitoso`)
      }
    } catch (error) {
      console.log(error);
      alert(`Error: ${error.message}`);
    }
  }
)