 // Función para escapar entidades html
 function escapeHTML(html) {
    var fn = function(tag) {
      var charsToReplace = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&#34;'
      };
      return charsToReplace[tag] || tag;
    }
    return html.replace(/[&<>"]/g, fn);
  }

  // Función para leer archivos de texto
  function leerArchivos() {   
    // Obtenemos los archivos del form y creamos un lector para cada archivo
    var files = document.getElementById("myFiles").files;
    for(var i=0; i<files.length; i++) {     
      var reader = new FileReader();
      
      reader.fileName = files[i].name;
      // Hay que crear un evento onload para mostrar el contenido una vez leído
      reader.onload = function(e) {
        // Mostramos los datos leídos y "filtrados" a HTML en un nuevo párrafo
        var p = document.createElement("p");
        document.body.appendChild(p);
        p.innerHTML =  escapeHTML(e.target.result).replaceAll("\n", "<br>");
      };
      // Leemos el archivo
      reader.readAsText(files[i]);
    }
    document.getElementById("btn").style.visibility = "visible";

  } 
