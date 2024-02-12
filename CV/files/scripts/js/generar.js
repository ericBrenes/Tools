function eliminarSeccion(elemento) {
  elemento.remove();
}

  document.getElementById('agregar-experiencia').addEventListener('click', function() {
    const experienciaContainer = document.getElementById('experiencia-container');
    const experienciaItem = document.createElement('div');
    const experienciaIndex = experienciaContainer.children.length;

    experienciaItem.className = 'experiencia-item';
    experienciaItem.innerHTML = `
      <hr>
      <div class="cv-card-header">
        Experiencia #${experienciaIndex + 1}
        <button type="button" class="btn btn-sm btn-remove" onclick="eliminarSeccion(this.parentNode.parentNode)">
          Eliminar
        </button>
      </div>
      <div class="cv-card-body">
        <div class="form-group">
          <label for="empresa-${experienciaIndex}" class="form-label">Empresa</label>
          <input type="text" class="form-control" id="empresa-${experienciaIndex}" required>
        </div>
        <div class="form-group">
          <label for="puesto-${experienciaIndex}" class="form-label">Puesto</label>
          <input type="text" class="form-control" id="puesto-${experienciaIndex}" required>
        </div>
        <div class="form-group">
          <label for="fechas-${experienciaIndex}" class="form-label">Fechas</label>
          <input type="text" class="form-control" id="fechas-${experienciaIndex}" required>
        </div>
        <div class="form-group">
          <label for="responsabilidades-${experienciaIndex}" class="form-label">Responsabilidades</label>
          <textarea class="form-control" id="responsabilidades-${experienciaIndex}" rows="3" required></textarea>
        </div>
        <div class="form-group">
          <label for="logros-${experienciaIndex}" class="form-label">Logros (separados por comas)</label>
          <input type="text" class="form-control" id="logros-${experienciaIndex}" required>
        </div>
      </div>
    `;

    experienciaContainer.appendChild(experienciaItem);
  });

  document.getElementById('agregar-educacion').addEventListener('click', function() {
    const educacionContainer = document.getElementById('educacion-container');
    const educacionItem = document.createElement('div');
    const educacionIndex = educacionContainer.children.length;

    educacionItem.className = 'educacion-item';
    educacionItem.innerHTML = `
      <hr>
      <div class="cv-card-header">
        Educación #${educacionIndex + 1}
        <button type="button" class="btn btn-sm btn-remove" onclick="eliminarSeccion(this.parentNode.parentNode)">
          Eliminar
        </button>
      </div>
      <div class="cv-card-body">
        <div class="form-group">
          <label for="institucion-${educacionIndex}" class="form-label">Institución</label>
          <input type="text" class="form-control" id="institucion-${educacionIndex}" required>
        </div>
        <div class="form-group">
          <label for="titulo-${educacionIndex}" class="form-label">Título</label>
          <input type="text" class="form-control" id="titulo-${educacionIndex}" required>
        </div>
        <div class="form-group">
          <label for="fechas-educacion-${educacionIndex}" class="form-label">Fechas</label>
          <input type="text" class="form-control" id="fechas-educacion-${educacionIndex}" required>
        </div>
      </div>
    `;

    educacionContainer.appendChild(educacionItem);
  });

  document.getElementById('agregar-certificacion').addEventListener('click', function() {
    const certificacionesContainer = document.getElementById('certificaciones-container');
    const certificacionItem = document.createElement('div');
    const certificacionIndex = certificacionesContainer.children.length;

    certificacionItem.className = 'certificacion-item';
    certificacionItem.innerHTML = `
      <hr>
      <div class="cv-card-header">
        Certificación #${certificacionIndex + 1}
        <button type="button" class="btn btn-sm btn-remove" onclick="eliminarSeccion(this.parentNode.parentNode)">
          Eliminar
        </button>
      </div>
      <div class="cv-card-body">
        <div class="form-group">
          <label for="nombre-certificacion-${certificacionIndex}" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre-certificacion-${certificacionIndex}" required>
        </div>
        <div class="form-group">
          <label for="institucion-certificacion-${certificacionIndex}" class="form-label">Institución</label>
          <input type="text" class="form-control" id="institucion-certificacion-${certificacionIndex}" required>
        </div>
        <div class="form-group">
          <label for="fecha-certificacion-${certificacionIndex}" class="form-label">Fecha</label>
          <input type="text" class="form-control" id="fecha-certificacion-${certificacionIndex}" required>
        </div>
      </div>
    `;

    certificacionesContainer.appendChild(certificacionItem);
  });

  document.getElementById('agregar-idioma').addEventListener('click', function() {
    const idiomasContainer = document.getElementById('idiomas-container');
    const idiomaItem = document.createElement('div');
    const idiomaIndex = idiomasContainer.children.length;

    idiomaItem.className = 'idioma-item';
    idiomaItem.innerHTML = `
      <hr>
      <div class="cv-card-header">
        Idioma #${idiomaIndex + 1}
        <button type="button" class="btn btn-sm btn-remove" onclick="eliminarSeccion(this.parentNode.parentNode)">
          Eliminar
        </button>
      </div>
      <div class="cv-card-body">
        <div class="form-group">
          <label for="idioma-${idiomaIndex}" class="form-label">Idioma</label>
          <input type="text" class="form-control" id="idioma-${idiomaIndex}" required>
        </div>
        <div class="form-group">
          <label for="nivel-idioma-${idiomaIndex}" class="form-label">Nivel</label>
          <input type="text" class="form-control" id="nivel-idioma-${idiomaIndex}" required>
        </div>
      </div>
    `;

    idiomasContainer.appendChild(idiomaItem);
  });

  document.getElementById('agregar-referencia').addEventListener('click', function() {
    const referenciasContainer = document.getElementById('referencias-container');
    const referenciaItem = document.createElement('div');
    const referenciaIndex = referenciasContainer.children.length;

    referenciaItem.className = 'referencia-item';
    referenciaItem.innerHTML = `
      <hr>
      <div class="cv-card-header">
        Referencia #${referenciaIndex + 1}
        <button type="button" class="btn btn-sm btn-remove" onclick="eliminarSeccion(this.parentNode.parentNode)">
          Eliminar
        </button>
      </div>
      <div class="cv-card-body">
        <div class="form-group">
          <label for="nombre-referencia-${referenciaIndex}" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre-referencia-${referenciaIndex}" required>
        </div>
        <div class="form-group">
          <label for="puesto-referencia-${referenciaIndex}" class="form-label">Puesto</label>
          <input type="text" class="form-control" id="puesto-referencia-${referenciaIndex}" required>
        </div>
        <div class="form-group">
          <label for="empresa-referencia-${referenciaIndex}" class="form-label">Empresa</label>
          <input type="text" class="form-control" id="empresa-referencia-${referenciaIndex}" required>
        </div>
        <div class="form-group">
          <label for="telefono-referencia-${referenciaIndex}" class="form-label">Teléfono</label>
          <input type="text" class="form-control" id="telefono-referencia-${referenciaIndex}" required>
        </div>
        <div class="form-group">
          <label for="email-referencia-${referenciaIndex}" class="form-label">Email</label>
          <input type="email" class="form-control" id="email-referencia-${referenciaIndex}" required>
        </div>
      </div>
    `;

    referenciasContainer.appendChild(referenciaItem);
  });
