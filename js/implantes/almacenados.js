(function(){
    var file = new FileReader(),soundCounter = true, divTipo = document.getElementById("divTipo"),
    divOpciones = document.getElementById("divOpciones");
    document.getElementById('inputFile').addEventListener('change', function() {
        file.onload = () => {
          document.getElementById('output').textContent = file.result;
        }
        file.readAsText(this.files[0]);
      });
      
      var loadButton = document.getElementById("btn_saved");

    function loadSavedImplant(){
      if(file.result == null){
        failOnImplantLoad();
        reload();
        document.getElementById("btn_saved").addEventListener("click", loadSavedImplant);
        return;
      }
      if(soundCounter){ 
        new Audio('../sounds/knowMeSon.mp3').play();
        soundCounter = false;
      }else{
        new Audio('../sounds/carryTheBoat.mp3').play();
        soundCounter = true;
      }
      clearBox("divOpciones");
      divOpciones.innerHTML += file.result;
      divOpciones.innerHTML += "<br><div><img src='../images/biblio1.jpg' alt='Estudio con librería' class='library'></div>";
      if(document.getElementById("fallo_carga_img") != null){
        document.getElementById("fallo_carga_img").parentNode.removeChild(document.getElementById("fallo_carga_img"));
      }
      if(document.getElementById("implantado") == null){
        divTipo.innerHTML += "<br><br><div><img src='../images/implantado.jpg' alt='Crazy doctor' class='library' id='implantado'></img></div>";
      }
      reload();
      document.getElementById("btn_saved").addEventListener("click", loadSavedImplant);
    }
    //Función que borra contenido del div actual
    function clearBox(elementID) {
      var div = document.getElementById(elementID);  
      while(div.firstChild) {
          div.removeChild(div.firstChild);
      }
  }
  function failOnImplantLoad(){
    if(document.getElementById("fallo_carga") == null){
      new Audio('../sounds/glass.mp3').play();
      clearBox("divOpciones");
      divOpciones.innerHTML += "<div id='fallo_carga'><h1 class='error' id='fallo_carga'><br>Fallo en la carga del archivo.</h1><br><br>" +
                                "<p class='error'>Pruebe seleccionando archivos .txt o .html</p><br></div>";
      divOpciones.innerHTML += "<div><img src='../images/biblio1.jpg' alt='Estudio con librería' class='library'></div>";
      divTipo.innerHTML += "<div id='fallo_carga_img'><br><br><img src='../images/fail.jpg' alt='Crazy doctor' class='library'></img></div>";
    }
  }
  function reload(){
    document.getElementById('inputFile').addEventListener('change', function() {
      file.onload = () => {
        document.getElementById('output').textContent = file.result;
      }
      file.readAsText(this.files[0]);
    });
  }

    //Eventos
    loadButton.addEventListener("click", loadSavedImplant);

}());