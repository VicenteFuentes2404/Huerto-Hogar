//Validaciones registro de usuario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener valores al momento de enviar
    const nombre = document.getElementById("registroNombre");
    const correo = document.getElementById("registroCorreo");
    const password = document.getElementById("registroPassword");
    const confirmPassword = document.getElementById("registroConfirmPassword");
    const telefono = document.getElementById("registroTelefono");
    const region = document.getElementById("registroRegion");
    const comuna = document.getElementById("registroComuna");

    const emailRegex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    const telefonoRegex = /^[0-9]{7,15}$/;

    // Limpiar errores previos
    [nombre, correo, password, confirmPassword, telefono, region, comuna].forEach(campo => {
      campo.classList.remove("is-invalid");
    });

    let errores = [];

    // Validaciones
    if(!nombre.value.trim()) 
        errores.push({campo: nombre, mensaje: "El nombre completo es obligatorio"});
    if(!correo.value.trim())
        errores.push({campo: correo, mensaje: "El correo electrónico es obligatorio"});
    else if(!emailRegex.test(correo.value.trim())) 
        errores.push({campo: correo, mensaje: "El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com"});
    else if(correo.value.trim().length > 100) 
        errores.push({campo: correo, mensaje: "El correo debe tener como máximo 100 caracteres"});

    if(!password.value.trim()) 
        errores.push({campo: password, mensaje: "La contraseña es obligatoria"});
    else if(password.value.trim().length < 4) 
        errores.push({campo: password, mensaje: "La contraseña debe tener al menos 4 caracteres"});
    else if(password.value.trim().length > 10) 
        errores.push({campo: password, mensaje: "La contraseña debe tener como máximo 10 caracteres"});

    if(password.value.trim() !== confirmPassword.value.trim()) 
        errores.push({campo: confirmPassword, mensaje: "La contraseña y su confirmación no coinciden"});

    if(telefono.value.trim() && !telefonoRegex.test(telefono.value.trim())) 
        errores.push({campo: telefono, mensaje: "El teléfono debe contener solo números (7 a 15 dígitos)"});

    if(region.value === "-- Región --") 
        errores.push({campo: region, mensaje: "Debes seleccionar una región"});
    if(comuna.value === "-- Comuna --") 
        errores.push({campo: comuna, mensaje: "Debes seleccionar una comuna"});

    // Mostrar errores
    if(errores.length > 0){
      errores.forEach(err => {
        err.campo.classList.add("is-invalid");
        const feedback = err.campo.nextElementSibling;
        if(feedback && feedback.classList.contains("invalid-feedback")){
          feedback.textContent = err.mensaje;
        }
      });
    } else {
      form.submit(); 
    }
  });
});


