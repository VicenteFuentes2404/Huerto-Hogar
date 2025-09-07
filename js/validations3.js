// Diccionario de comunas según región
const comunasPorRegion = {
  rm: ["Santiago", "Las Condes", "Maipú", "Puente Alto", "Ñuñoa"],
  valpo: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"],
  biobio: ["Concepción", "Talcahuano", "Los Ángeles"],
  araucania: ["Temuco", "Padre Las Casas", "Villarrica"],
  antofa: ["Antofagasta", "Calama", "Tocopilla"],
  maule: ["Talca", "Curicó", "Linares"]
};

// Llenado dinámico de comunas
const regionSelect = document.getElementById("region");
const comunaSelect = document.getElementById("comuna");

regionSelect.addEventListener("change", () => {
  const region = regionSelect.value;
  comunaSelect.innerHTML = '<option value="">-- Seleccione la comuna --</option>';
  if (comunasPorRegion[region]) {
    comunasPorRegion[region].forEach(comuna => {
      const option = document.createElement("option");
      option.value = comuna;
      option.textContent = comuna;
      comunaSelect.appendChild(option);
    });
  }
});

// ===== VALIDACIONES =====
const form = document.getElementById("FormRegistroUsuario");

function mostrarError(input, mensaje) {
  input.classList.add("is-invalid");

  let feedback = input.parentElement.querySelector(".invalid-feedback");
  if (!feedback) {
    feedback = document.createElement("div");
    feedback.className = "invalid-feedback";
    input.parentElement.appendChild(feedback);
  }
  feedback.textContent = mensaje;
}

function limpiarError(input) {
  input.classList.remove("is-invalid");
  let feedback = input.parentElement.querySelector(".invalid-feedback");
  if (feedback) feedback.textContent = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valido = true;

  // Nombre
  const nombre = document.getElementById("registroNombre");
  if (!nombre.value.trim()) {
    mostrarError(nombre, "El nombre es obligatorio.");
    valido = false;
  } else if (nombre.value.length > 100) {
    mostrarError(nombre, "Máx. 100 caracteres.");
    valido = false;
  } else {
    limpiarError(nombre);
  }

  // Apellido
  const apellido = document.getElementById("apellido");
  if (!apellido.value.trim()) {
    mostrarError(apellido, "El apellido es obligatorio.");
    valido = false;
  } else if (apellido.value.length > 100) {
    mostrarError(apellido, "Máx. 100 caracteres.");
    valido = false;
  } else {
    limpiarError(apellido);
  }

  // Correo
  const correo = document.getElementById("registroCorreo");
  const correo2 = document.getElementById("correo2");
  const patronCorreo = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

  if (!correo.value.trim()) {
    mostrarError(correo, "El correo es obligatorio.");
    valido = false;
  } else if (correo.value.length > 100) {
    mostrarError(correo, "Máx. 100 caracteres.");
    valido = false;
  } else if (!patronCorreo.test(correo.value)) {
    mostrarError(correo, "Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    valido = false;
  } else {
    limpiarError(correo);
  }

  if (correo.value !== correo2.value) {
    mostrarError(correo2, "Los correos no coinciden.");
    valido = false;
  } else {
    limpiarError(correo2);
  }

  // Contraseña
  const password = document.getElementById("registroPassword");
  const password2 = document.getElementById("password2");

  if (!password.value.trim()) {
    mostrarError(password, "La contraseña es obligatoria.");
    valido = false;
  } else if (password.value.length < 4 || password.value.length > 10) {
    mostrarError(password, "Debe tener entre 4 y 10 caracteres.");
    valido = false;
  } else {
    limpiarError(password);
  }

  if (password.value !== password2.value) {
    mostrarError(password2, "Las contraseñas no coinciden.");
    valido = false;
  } else {
    limpiarError(password2);
  }

  // Región
  if (!regionSelect.value) {
    mostrarError(regionSelect, "Debe seleccionar una región.");
    valido = false;
  } else {
    limpiarError(regionSelect);
  }

  // Comuna
  if (!comunaSelect.value) {
    mostrarError(comunaSelect, "Debe seleccionar una comuna.");
    valido = false;
  } else {
    limpiarError(comunaSelect);
  }

  if (valido) {
    form.submit();
  }
});
