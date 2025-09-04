document.addEventListener("DOMContentLoaded", () => {
    
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recargar la página

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errores = [];

    if (!email) {
      errores.push("El correo electrónico es obligatorio.");
    } else if (!emailRegex.test(email)) {
      errores.push("El formato del correo electrónico no es válido.");
    }

    if (!password) {
      errores.push("La contraseña es obligatoria.");
    } else if (password.length < 4) {
      errores.push("La contraseña debe tener al menos 4 caracteres.");
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


//VALIDACIÓN CORREO EN FOOTER
document.addEventListener("DOMContentLoaded", function () {
  const formBoletin = document.getElementById("formBoletin");
  const emailInput = document.getElementById("email");
  const mensaje = document.getElementById("mensajeSuscripcion");

  formBoletin.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    const email = emailInput.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
      mensaje.textContent = "¡Gracias por suscribirte al boletín!";
      mensaje.style.color = "white";
      emailInput.value = ""; 
    } else {
      mensaje.textContent = "Por favor ingresa un correo válido.";
      mensaje.style.color = "red";
    }
  });
});
