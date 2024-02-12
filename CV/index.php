<!DOCTYPE html>
<?php
  // Cargar el archivo de configuración de idioma
  $lngCnfg_string = file_get_contents('./files/cfg/lngCnfg.json');
  $lngCnfg = json_decode($lngCnfg_string, true);

  // Cargar el archivo JSON del currículum
  $json_string = file_get_contents('./files/Curriculum.json');
  $datos = json_decode($json_string, true);

  // Función para obtener el idioma seleccionado o establecer el valor predeterminado (español)
  function getSelectedLanguage() {
    if (isset($_GET['language']) && ($_GET['language'] === 'ENG')) {
      return 'en';
    }
    return 'es';
  }

  // Obtener el idioma seleccionado
  $selectedLanguage = getSelectedLanguage();

  // Obtener la configuración de idioma seleccionada
  $lngCnfgSelected = $lngCnfg[$selectedLanguage];
?>
<html lang="<?php echo $selectedLanguage; ?>">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo str_replace('%nombre%', $datos["informacion_personal"]["nombre"], $lngCnfgSelected["labels"]["curriculum_title"]); ?></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="./files/scripts/css/mostrar.css">
</head>
<body>
  <div class="container">
    <div class="row">
      <!-- Barra lateral -->
		<div class="col-md-3 sidebar">
			<div class="sidebar-foto">
			  <?php if($datos["informacion_personal"]["ponerFoto"]){?>
					<img id="foto_principal" src="<?php echo $datos["informacion_personal"]["foto"] ?>" alt="Foto"><br/>
			  <?php }?>
				<h3 id="Nombre_Persona"><?php echo $datos["informacion_personal"]["nombre"]; ?></h3><br/>
				Email: <a id="Correo_Persona" href="mailto:<?php echo $datos['informacion_personal']['email']; ?>"><?php echo $datos['informacion_personal']['email']; ?></a></br>
				Linkedin: <a id="linkedin" href="<?php echo $datos['informacion_personal']['Linkedin']; ?>"><?php echo $datos['informacion_personal']['LinkedinUser']; ?></a>

			</div>
        <br>
        <div id="div_objetivo_profesional" class="lateral-item">
          <div class="lateral"><?php echo $datos["objetivo_profesional"]; ?></div>
        </div>
        
        <div id="div_idiomas" class="lateral-item">
          <?php foreach ($datos["idiomas"] as $idioma): ?>
            <div class="lateral-idioma">
              <?php echo $idioma["idioma"]; ?>
              <?php
                $nivel = $idioma["nivel"];
                if ($nivel === "Nativo")
                  echo '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
                elseif ($nivel === "Avanzado")
                  echo '<i class="fas fa-star"></i><i class="fas fa-star"></i>';
                elseif ($nivel === "Básico")
                  echo '<i class="fas fa-star"></i>';
              ?>
            </div>
          <?php endforeach; ?>
        </div>

        <div id="div_habilidades" class="lateral-item">
          <h5><?php echo $lngCnfgSelected["labels"]["skills"]; ?></h5>
          <?php foreach ($datos["habilidades"] as $habilidad): ?>
            <p><?php echo $habilidad["nombre"]; ?> -  <?php for ($i = 1; $i <= $habilidad["puntaje"]; $i++) {echo '<i class="fas fa-star"></i>';} endforeach; ?>
        </div>
      </div>

      <!-- Contenido principal -->
      <div class="col-md-9 main-content">
        <!-- Código PHP para mostrar experiencia laboral en tablas -->
        <div id="row1" class="row">
          <div class="col-md-12">
            <div class="card">
              <h5><?php echo $lngCnfgSelected["labels"]["experience"]; ?></h5>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th><?php echo $lngCnfgSelected["labels"]["company"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["position"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["dates"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["responsibilities"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["achievements"]; ?></th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach ($datos["experiencia_laboral"] as $experiencia): ?>
                    <tr>
                      <td><?php echo $experiencia["empresa"]; ?></td>
                      <td><?php echo $experiencia["puesto"]; ?></td>
                      <td><?php echo $experiencia["fechas"]; ?></td>
                      <td style="white-space: pre-wrap;"><?php echo $experiencia["responsabilidades"]; ?></td>
                      <td>
                        <ul>
                          <?php foreach ($experiencia["logros"] as $logro): ?>
                            <li><?php echo $logro; ?></li>
                          <?php endforeach; ?>
                        </ul>
                      </td>
                    </tr>
                  <?php endforeach; ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
		        <!-- Código PHP para mostrar experiencia laboral en tablas -->
        <div id="row1_2" class="row">
          <div class="col-md-12">
            <div class="card">
              <h5><?php echo $lngCnfgSelected["labels"]["other_experience"]; ?></h5>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th><?php echo $lngCnfgSelected["labels"]["company"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["position"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["dates"]; ?></th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach ($datos["otra_experiencia_laboral"] as $experiencia): ?>
                    <tr>
                      <td><?php echo $experiencia["empresa"]; ?></td>
                      <td><?php echo $experiencia["puesto"]; ?></td>
                      <td><?php echo $experiencia["fechas"]; ?></td>
                    </tr>
                  <?php endforeach; ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <!-- Código PHP para mostrar educación en tabla -->
        <div id="row2" class="row">
          <div id="educacion" class="col-md-6">
            <div class="card">
              <h5><?php echo $lngCnfgSelected["labels"]["education"]; ?></h5>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th><?php echo $lngCnfgSelected["labels"]["institution"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["title"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["dates"]; ?></th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach ($datos["educacion"] as $educacion): ?>
                    <tr>
                      <td><?php echo $educacion["institucion"]; ?></td>
                      <td><?php echo $educacion["titulo"]; ?></td>
                      <td><?php echo $educacion["fechas"]; ?></td>
                    </tr>
                    <!-- Código PHP para mostrar certificaciones -->
                    <?php if (isset($educacion["certificaciones"])): ?>
                      <tr>
                        <td colspan="3" style="white-space: pre-wrap;">
                          <strong><?php echo $lngCnfgSelected["labels"]["certifications"]; ?>:</strong>
                          <ul>
                            <?php foreach ($educacion["certificaciones"] as $certificacion): ?>
                              <li><?php echo $certificacion; ?></li>
                            <?php endforeach; ?>
                          </ul>
                        </td>
                      </tr>
                    <?php endif; ?>
                  <?php endforeach; ?>
                </tbody>
              </table>
            </div>
          </div>
        
          <div id="certifiacion" class="col-md-6">
            <div class="card">
              <h5><?php echo $lngCnfgSelected["labels"]["certifications"]; ?></h5>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th><?php echo $lngCnfgSelected["labels"]["institution"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["title"]; ?></th>
                    <th><?php echo $lngCnfgSelected["labels"]["certification_dates"]; ?></th>
                  </tr>
                </thead>
                <tbody>
                  <?php foreach ($datos["certificaciones"] as $certificacion): ?>
                    <tr>
                      <td><?php echo $certificacion["institucion"]; ?></td>
                      <td><?php echo $certificacion["nombre"]; ?></td>
                      <td><?php echo $certificacion["fecha"]; ?></td>
                    </tr>
                  <?php endforeach; ?>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer bg-dark text-white mt-5">
    <div class="container text-center">
      <p><?php echo $lngCnfgSelected["labels"]["rights_reserved"]; ?> &copy; <?php echo date('Y'); ?> - EEDS </p>
      <p><?php echo $lngCnfgSelected["labels"]["contact_email"]; ?>: eeds.contact@gmail.com</p>
    </div>
  </footer>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
