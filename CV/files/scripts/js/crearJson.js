document.getElementById('generar-cv').addEventListener('click', function() {
  // Obtener los datos del formulario
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const direccion = document.getElementById('direccion').value;
  const foto = document.getElementById('url-imagen').value;
  const objetivo = document.getElementById('objetivo').value;
  const experienciaItems = Array.from(document.getElementsByClassName('experiencia-item'));
  const educacionItems = Array.from(document.getElementsByClassName('educacion-item'));
  const habilidadesItems = Array.from(document.getElementsByClassName('habilidades-item'));
  const idiomaItems = Array.from(document.getElementsByClassName('idioma-item'));
  const referenciaItems = Array.from(document.getElementsByClassName('referencia-item'));
  const certificacionItems = Array.from(document.getElementsByClassName('certificacion-item'));

  // Crear el objeto CV
  const cvData = {
    informacion_personal: {
      nombre,
      telefono,
      email,
      direccion,
      foto
    },
    objetivo_profesional: objetivo,
    experiencia_laboral: [],
    educacion: [],
    habilidades: [],
    idiomas: [],
    referencias: [],
    certificaciones: []
  };

  // Llenar la experiencia laboral en el objeto CV
  experienciaItems.forEach((item, index) => {
    const empresa = item.querySelector(`#empresa-${index}`).value;
    const puesto = item.querySelector(`#puesto-${index}`).value;
    const fechas = item.querySelector(`#fechas-${index}`).value;
    const responsabilidades = item.querySelector(`#responsabilidades-${index}`).value;
    const logros = item.querySelector(`#logros-${index}`).value.split(',');

    cvData.experiencia_laboral.push({
      empresa,
      puesto,
      fechas,
      responsabilidades,
      logros
    });
  });

  // Llenar la educación en el objeto CV
  educacionItems.forEach((item, index) => {
    const institucion = item.querySelector(`#institucion-${index}`).value;
    const titulo = item.querySelector(`#titulo-${index}`).value;
    const fechasEducacion = item.querySelector(`#fechas-educacion-${index}`).value;

    cvData.educacion.push({
      institucion,
      titulo,
      fechas: fechasEducacion
    });
  });

  // Llenar las habilidades en el objeto CV
  habilidadesItems.forEach((item, index) => {
    const habilidad = item.querySelector(`#nombre-habilidad-${index}`).value;
    const puntaje = item.querySelector(`#puntaje-habilidad-${index}`).value;

    cvData.habilidades.push({
      habilidad,
      puntaje
    });
  });

  // Llenar los idiomas en el objeto CV
  idiomaItems.forEach((item, index) => {
    const idioma = item.querySelector(`#idioma-${index}`).value;
    const nivel = item.querySelector(`#nivel-idioma-${index}`).value;

    cvData.idiomas.push({
      idioma,
      nivel
    });
  });

  // Llenar las referencias en el objeto CV
  referenciaItems.forEach((item, index) => {
    const nombreReferencia = item.querySelector(`#nombre-referencia-${index}`).value;
    const puestoReferencia = item.querySelector(`#puesto-referencia-${index}`).value;
    const empresaReferencia = item.querySelector(`#empresa-referencia-${index}`).value;
    const telefonoReferencia = item.querySelector(`#telefono-referencia-${index}`).value;
    const emailReferencia = item.querySelector(`#email-referencia-${index}`).value;

    cvData.referencias.push({
      nombre: nombreReferencia,
      puesto: puestoReferencia,
      empresa: empresaReferencia,
      telefono: telefonoReferencia,
      email: emailReferencia
    });
  });

  // Llenar las certificaciones en el objeto CV
  certificacionItems.forEach((item, index) => {
    const nombreCertificacion = item.querySelector(`#nombre-certificacion-${index}`).value;
    const institucionCertificacion = item.querySelector(`#institucion-certificacion-${index}`).value;
    const fechaCertificacion = item.querySelector(`#fecha-certificacion-${index}`).value;

    cvData.certificaciones.push({
      nombre: nombreCertificacion,
      institucion: institucionCertificacion,
      fecha: fechaCertificacion
    });
  });

  // Crear el archivo JSON
  const jsonData = JSON.stringify(cvData, null, 2);

  // Descargar el archivo JSON
  downloadJson(jsonData, 'cv_data.json');
});

// Función para eliminar una sección del formulario
function eliminarSeccion(index) {
  const element = document.getElementsByClassName('cv-card')[index];
  element.remove();
}

// Función para agregar una sección al formulario
function agregarSeccion(seccion) {
  const container = document.getElementById(`${seccion}-container`);
  const count = container.getElementsByClassName(`cv-card ${seccion}-item`).length;

  const newElement = document.createElement('div');
  newElement.classList.add('cv-card', `${seccion}-item`);
  newElement.innerHTML = `
    <div class="cv-card-header">
      ${capitalize(seccion)} #${count + 1}
      <button type="button" class="btn btn-sm btn-remove" onclick="eliminarSeccion(${count})">
        Eliminar
      </button>
    </div>
    <div class="cv-card-body">
      <!-- Agregar campos según la sección -->
    </div>
  `;

  container.appendChild(newElement);
}

// Función para agregar una experiencia laboral
document.getElementById('agregar-experiencia').addEventListener('click', function() {
  agregarSeccion('experiencia');
});

// Función para agregar una educación
document.getElementById('agregar-educacion').addEventListener('click', function() {
  agregarSeccion('educacion');
});

// Función para agregar una habilidad
document.getElementById('agregar-habilidad').addEventListener('click', function() {
  agregarSeccion('habilidades');
});

// Función para agregar un idioma
document.getElementById('agregar-idioma').addEventListener('click', function() {
  agregarSeccion('idioma');
});

// Función para agregar una referencia
document.getElementById('agregar-referencia').addEventListener('click', function() {
  agregarSeccion('referencia');
});

// Función para agregar una certificación
document.getElementById('agregar-certificacion').addEventListener('click', function() {
  agregarSeccion('certificacion');
});

// Función para descargar el archivo JSON
function downloadJson(data, filename) {
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Función para capitalizar la primera letra de una cadena
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}