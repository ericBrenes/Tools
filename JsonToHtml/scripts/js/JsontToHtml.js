/**
 * Convierte un JSON ingresado en un textarea en formato HTML y lo muestra en un elemento con id "htmlOutput".
 */
function convertJsonToHtml() {
    var jsonInput = document.getElementById("htmlInput").value;
    var jsonArr = JSON.parse("[" + jsonInput + "]");
    var htmlContent = "";
    for (var i = 0; i < jsonArr.length; i++) {
        htmlContent += "<h2>JSON " + (i + 1) + "</h2>";
        htmlContent += generateHtmlFromJson(jsonArr[i], 0); // Pasar nivel de indentación inicial como 0
        htmlContent += "</br>";
    }
    document.getElementById("htmlOutput").innerHTML = htmlContent;
}

/**
 * Genera contenido HTML a partir de un objeto JSON recursivamente.
 * @param {object} jsonObj - Objeto JSON.
 * @param {number} indentLevel - Nivel de indentación.
 * @returns {string} - Contenido HTML generado.
 */
function generateHtmlFromJson(jsonObj, indentLevel) {
  var htmlContent = "";
  for (var key in jsonObj) {
    if (jsonObj.hasOwnProperty(key)) {
      for (var i = 0; i < indentLevel; i++) {
        htmlContent += "&emsp;";
      }
      htmlContent += "<strong>" + key + "</strong>: ";
      if (typeof jsonObj[key] === "object" && !Array.isArray(jsonObj[key])) {
        // Si el valor es un objeto, llamar recursivamente la función para convertirlo en HTML
        htmlContent += "<br>" + generateHtmlFromJson(jsonObj[key], indentLevel + 1);
      } else if (Array.isArray(jsonObj[key])) {
        // Si el valor es un arreglo, llamar recursivamente la función para convertir cada elemento en HTML
        jsonObj[key].forEach(function (item) {
          htmlContent += "<br>" + generateHtmlFromJson(item, indentLevel + 1);
        });
      } else {
        // Si el valor es un valor primitivo, agregarlo directamente al HTML
        htmlContent += jsonObj[key] + "<br>";
      }
    }
  }
  return htmlContent + "<br>";
}


/**
 * Genera contenido HTML a partir de un array JSON recursivamente.
 * @param {array} jsonArray - Array JSON.
 * @param {number} indentLevel - Nivel de indentación.
 * @returns {string} - Contenido HTML generado.
 */
function generateHtmlFromArray(jsonArray, indentLevel) {
    var htmlContent = "";
    for (var i = 0; i < jsonArray.length; i++) {
        if (typeof jsonArray[i] === "object") {
            htmlContent += generateHtmlFromJson(jsonArray[i], indentLevel);
        } else {
            for (var j = 0; j < indentLevel; j++) {
                htmlContent += "&emsp;";
            }
            htmlContent += jsonArray[i] + "<br>";
        }
    }
    return htmlContent;
}


/**
 * Maneja el evento de selección de archivo y muestra el contenido del archivo JSON en formato de texto.
 * @param {Event} event - Objeto del evento de selección de archivo.
 */
function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var jsonInput = reader.result; // Corrección aquí
        var htmlOutput = document.getElementById('htmlInput');

        try {
            htmlOutput.textContent = jsonInput; // Mostrar el contenido del archivo JSON en formato de texto
        } catch (error) {
            htmlOutput.innerHTML = '<strong>Error:</strong> El archivo seleccionado no es un JSON válido';
        }
    };
    reader.readAsText(file);
}