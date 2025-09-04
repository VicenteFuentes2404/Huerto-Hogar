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
