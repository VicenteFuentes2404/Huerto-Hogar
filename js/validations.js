document.addEventListener("DOMContentLoaded", () => {

  // --- LOGIN ---
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let errores = [];
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

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
  }

  // --- CONTACTO ---
  const contactoForm = document.querySelector("#contactoForm");
  if (contactoForm) {
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const mensajeInput = document.getElementById("mensaje");

    contactoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let errores = [];
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const nombre = nombreInput.value.trim();
      const correo = correoInput.value.trim();
      const mensaje = mensajeInput.value.trim();

      if (!nombre) {
        errores.push("El nombre completo es obligatorio.");
      } else if (nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres.");
      }

      if (!correo) {
        errores.push("El correo electrónico es obligatorio.");
      } else if (!emailRegex.test(correo)) {
        errores.push("El formato del correo electrónico no es válido.");
      }

      if (!mensaje) {
        errores.push("El mensaje es obligatorio.");
      }

      if (errores.length > 0) {
        alert("Corrige los siguientes errores:\n\n" + errores.join("\n"));
      } else {
        alert("Mensaje enviado correctamente.");
      }
    });
  }

});
