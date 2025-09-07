document.addEventListener("DOMContentLoaded", () => {
    
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recargar la página

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const emailRegex = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;


    let errores = [];

    if (!email) {
      errores.push("El correo electrónico es obligatorio.");
      } else if (!emailRegex.test(email)) {
    errores.push("El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    } else if (email.length > 100){
      errores.push("EL correo debe tener como máximo 100 caracteres")
      }

    if (!password) {
      errores.push("La contraseña es obligatoria.");
    } else if (password.length < 4) {
      errores.push("La contraseña debe tener al menos 4 caracteres.");
    } else if (password.length > 10){
      errores.push("La contraseña debe tener como máximo 10 caracteres")
    }

    if (errores.length > 0) {
      alert("Corrige los siguientes errores:\n\n" + errores.join("\n"));
    } else {
      alert("Datos correctos. Inicio de sesión exitoso.");
    }
  });
});









//VALIDACIÓN RESEÑA DETALLE PRODUCTO
document.addEventListener("DOMContentLoaded", function () {
  // --- Formulario de reseña ---
  const formResena = document.getElementById("formResena");
  const comentario = document.getElementById("comentario");
  const calificacion = document.getElementById("calificacion");
  const mensajeResena = document.getElementById("mensajeResena");

  formResena.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío real (por ahora)

    const texto = comentario.value.trim();

    if (texto === "") {
      mensajeResena.textContent = "Por favor escribe un comentario antes de enviar.";
      mensajeResena.style.color = "red";
    } else {
      mensajeResena.textContent = "¡Gracias por tu reseña de " + calificacion.value + " estrellas!";
      mensajeResena.style.color = "green";

      // Limpia el formulario
      comentario.value = "";
      calificacion.value = "5";
    }
  });
});




// VALIDACIÓN CORREO EN FOOTER
document.addEventListener("DOMContentLoaded", function () {
  const formBoletin = document.getElementById("formBoletin");
  const emailInput = document.getElementById("emailBoletin"); // <- corregido
  const mensaje = document.getElementById("mensajeSuscripcion");

  formBoletin.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    const email = emailInput.value.trim();
    const regexEmail = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

    if (!regexEmail.test(email)) {
      mensaje.textContent = "Por favor ingresa un correo válido (@duoc.cl, @profesor.duoc.cl o @gmail.com).";
      mensaje.style.color = "red";
    } else if (email.length > 100) {
      mensaje.textContent = "El correo no puede tener más de 100 caracteres.";
      mensaje.style.color = "red";
    } else {
      mensaje.textContent = "¡Gracias por suscribirte al boletín!";
      mensaje.style.color = "white";
      emailInput.value = "";
    }
  });
});


// VALIDACIÓN FORMULARIO DE CONTACTO ---
document.addEventListener("DOMContentLoaded", () => {
  const contactoForm = document.getElementById("contactoForm");
  if (contactoForm) {
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const mensajeInput = document.getElementById("mensaje");

    contactoForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita recargar la página

      let errores = [];
      const nombre = nombreInput.value.trim();
      const correo = correoInput.value.trim();
      const mensaje = mensajeInput.value.trim();
      const regexCorreo = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

      // nombre
      if (!nombre) {
        errores.push("El nombre es obligatorio.");
      } else if (nombre.length > 100) {
        errores.push("El nombre no puede tener más de 100 caracteres.");
      }

      //  correo
      if (!correo) {
        errores.push("El correo electrónico es obligatorio.");
      } else if (!regexCorreo.test(correo)) {
        errores.push("Por favor ingresa un correo válido (@duoc.cl, @profesor.duoc.cl o @gmail.com.");
      } else if (correo.length > 100) {
        errores.push("El correo no puede tener más de 100 caracteres.");
      }

      // Validar comentario
      if (!mensaje) {
        errores.push("El comentario es obligatorio.");
      } else if (mensaje.length > 500) {
        errores.push("El comentario no puede tener más de 500 caracteres.");
      }

      // Mostrar errores o éxito
      if (errores.length > 0) {
        alert("Corrige los siguientes errores:\n\n" + errores.join("\n"));
      } else {
        alert("¡Mensaje enviado correctamente!");
        contactoForm.reset(); // Limpia el formulario
      }
    });
  }
});



//Cupón
const boton = document.getElementById('aplicarCupon')
const inputCupon = document.getElementById('elcupon')
const mensaje = document.getElementById('mensajecupon')

boton.addEventListener('click', function(){
  if(inputCupon.value.trim() !== ""){
    mensaje.textContent = "Cupón aplicado";
    mensaje.style.color = "green";
  } else{
    mensaje.textContent = "Cupón inválido";
    mensaje.style.color = "red";
  }
});







