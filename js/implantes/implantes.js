(function(){
    //VARIABLES
    var botonTipo = document.getElementById("btn_tipo"),
        divTipo = document.getElementById("divTipo"),
        divOpciones = document.getElementById("divOpciones"),
        roooooxaneUDontHaveToPutOnTheRedLight = "",englishManInNewYork = "", deDoDoDoDeDaDaDa ="",
        tipo = "",salvador ="",inSound = false,modNumber = 0;

    //FUNCIONES
    var elegirTipo = function(){
        
        if(document.getElementById("tipo_implante").value === "nada"){
            var imgDoc = document.getElementById("img_doctor1");
            removeElementsByClass("error");
            if(imgDoc != null){
                imgDoc.parentNode.removeChild(imgDoc);
                divTipo.innerHTML += "<p class = 'error'><br>- Selecciona algún tipo de implante.</p>";
                divTipo.innerHTML += "<div class='text-center'  id='img_doctor1'><img src='../images/doctor.png' alt='Crazy doctor' class='doctor'></div>";
            }else{
                divTipo.innerHTML += "<p class = 'error'><br>- Selecciona algún tipo de implante.</p>";
            }
            document.getElementById("btn_tipo").addEventListener("click", elegirTipo);
            document.getElementById("btn_seleccion1").addEventListener("click", resultados);
            return;
        }
        if(!inSound){
            inSound = true;
            new Audio('../sounds/risa_maligna.mp3').play();
            setTimeout(function(){
                new Audio('../sounds/flesh.mp3').play();
            }, 6000)
        }
        setTimeout(function(){
            inSound = false
        }, 10000)

        if(document.getElementById("tipo_implante").value === "segundo_cerebro"){
            tipo = "SEGUNDO CEREBRO";
            segundoCerebro();
        }else if(document.getElementById("tipo_implante").value === "fibra_neuronal"){
            tipo = "FIBRA NEURONAL";
            fibraNeuronal();
        }else if(document.getElementById("tipo_implante").value === "piel_goliath"){
            tipo = "PIEL DE GOLIATH";
            pielGoliath();
        }else if(document.getElementById("tipo_implante").value === "ojo"){
            tipo = "OJO DE INGENIERO/ESPÍA";
            ojo();
        }else if(document.getElementById("tipo_implante").value === "oido"){
            tipo = "OÍDO INALÁMBRICO";
            oido();
        }else if(document.getElementById("tipo_implante").value === "papilas"){
            tipo = "SINTE PAPILAS OLFATO-GUSTATIVAS";
            papilas();
        }else if(document.getElementById("tipo_implante").value === "organos"){
            tipo = "CIBER ÓRGANOS INTERNOS";
            organos();
        }else if(document.getElementById("tipo_implante").value === "extremidades"){
            tipo = "CIBER EXTREMIDADES";
            extremidades();
        }else if(document.getElementById("tipo_implante").value === "monturas"){
            tipo = "MONTURAS DE ARMAMENTO O HERRAMIENTAS";
            monturas();
        }else if(document.getElementById("tipo_implante").value === "bomba"){
            tipo = "BOMBA QUÍMICA";
            bomba();
        }else if(document.getElementById("tipo_implante").value === "escudo"){
            tipo = "ESCUDO ENERGÉTICO INTERNO";
            escudo();
        }else if(document.getElementById("tipo_implante").value === "vuelo"){
            tipo = "SISTEMA DE VUELO IMPLANTADO";
            vuelo();
        }
        else if(document.getElementById("tipo_implante").value === "luz"){
            tipo = "LUZ INTEGRADA";
            luz();
        }
        
        generarCirugía();
        generarExtras();
        document.getElementById("btn_seleccion1").addEventListener("click", resultados);
    };
    function segundoCerebro(){
        generarOpciones(segundoCerebroArray,segundoCerebroArrayTri);
    }
    function fibraNeuronal(){
        generarOpciones(fibraNeuronalArray,fibraNeuronalArrayTri);
    }
    function pielGoliath(){
        generarOpciones(pielGoliathArray,pielGoliathArrayTri);
    }
    function ojo(){
        generarOpciones(ojoIngEspArray,ojoIngEspArrayTri);
    }
    function oido(){
        generarOpciones(oidoInalambricoArray,oidoInalambricoArrayTri);
    }
    function papilas(){
        generarOpciones(sintePapilasArray,sintePapilasArrayTri);
    }
    function organos(){
        generarOpciones(ciberOrganosArray,ciberOrganosArrayTri);
    }
    function extremidades(){
        generarOpciones(ciberExtremidadesArray,ciberExtremidadesArrayTri);
    }
    function monturas(){
        generarOpciones(monturasArmamentoArray,monturasArmamentoArrayTri);
    }
    function bomba(){
        generarOpciones(bombaQuimicaArray,bombaQuimicaArrayTri);
    }
    function escudo(){
        generarOpciones(escudoEnergéticoArray,escudoEnergéticoArrayTri);
    }
    function vuelo(){
        generarOpciones(sistemaVueloArray,sistemaVueloArrayTri);
    }
    function luz(){
        generarOpciones(luzIntegradaArray,luzIntegradaArrayTri);
    }

    function generarOpciones(arr,arrTri){
        var aux = "";
        clearBox("divTipo");
        clearBox("divOpciones");

        aux += "<h4 class='text-center'>OPCIONES IMPLANTE</h4><br>" + 
                "<div><form class='formulario' action=''>";

        for(var i = 0;i<arrTri.length;i++){

            aux+="<div class='float-start divSelectOpci'><label for='"+ arr[i][1] +"' title='"+arr[i][2]+"' class='float-start'>"+ arr[i][0] +"&emsp; </label>" +
                "<select name='" + arr[i][1] + "' class='opciones1 float-end' id='" + arr[i][1] + "'>";
    
            for(var j = 0;j<arrTri[i].length;j++){
                aux+= "<option value='"+ arrTri[i][j][0] +"' title='"+ arrTri[i][j][2] +"'>"+ arrTri[i][j][1] +"</option>";
            }
            aux+= "</select></div>";     
        }

        aux+="</form></div><br><br>";
        divOpciones.innerHTML += aux; 
        
        
        divTipo.innerHTML +="<h2 class='text-center'>" + tipo + "</h2><br>";
        if(tipo === "OJO DE INGENIERO/ESPÍA" || tipo === "OÍDO INALÁMBRICO" || tipo === "SINTE PAPILAS OLFATO-GUSTATIVAS"){
            divTipo.innerHTML += "<p class='text-center'>(Requiere de aprender una habilidad especial para poder utilizarse)</p>";
        }
        else if(tipo === "CIBER EXTREMIDADES"){
            divTipo.innerHTML += "<p class = 'text-center'>Tenga en cuenta esta tabla al aplicar la fuerza, la extremidad tendrá 1/2 FUE " +  
            "del personaje + el extra que se quiera aplicar, y según el NT no podrá superar ciertos valores.</p><br>" +
                            "<div class='text-center'><img src='../images/fuerza_extremidad.jpg' alt='Tabla fuerza extremidad'></div><br>";
        }else if(tipo === "MONTURAS DE ARMAMENTO O HERRAMIENTAS"){
            divTipo.innerHTML += "<p class='text-center'>( Al precio del implante hay que añadirle el coste del arma/herramienta que se quiera " +
                            "instalar multiplicado por dos)</p>";
        }else if(tipo === "ESCUDO ENERGÉTICO INTERNO"){
            divTipo.innerHTML += "<p class='text-center'>(Al precio del implante hay que añadirle el coste del escudo que se quiera instalar multiplicado por dos.)</p>";
            divTipo.innerHTML += "<p class = 'text-center'>Los diferentes valores de los escudos son los que se pueden ver en la tabla de la derecha.</p><br>";
            divOpciones.innerHTML +="<div class='text-center'><img src='../images/escudo_opciones.jpg' alt='Tabla opciones de los escudos'  class='imagenes'></div><br>";
        }else if(tipo === "CIBER ÓRGANOS INTERNOS"){
            divTipo.innerHTML += "<p class='text-center'>(Recuerde sólo seleccionar un órgano, cada órgano es un implante diferente. Zona de la página que se readaptará lo antes posible.Disculpen las molestias.)</p>";
        }
        divTipo.innerHTML +="<div class='text-center'><input type='button' class='boton' id='btn_seleccion1' value='Implantar'></input></div><br>";
        writeSelectTipo();
        divTipo.innerHTML +="<br><div class='text-center' id='img_doctor1'><img src='../images/doctor.png' alt='Crazy doctor'></div>";
        document.getElementById("btn_tipo").addEventListener("click", elegirTipo);
    }

    function generarCirugía(){
        var aux = "";
        aux += "<br><h4 class='text-center'>TIPO DE MATERIAL</h4><br>" +
                                "<div class='text-center'><form class='formulario' action=''>" +
                                "<label for='material' title='Tipo de material para el implante'>Material &emsp; </label>" +
                                "<select name='material' id='material'>";

        for(var i=0;i<materialArray.length;i++){

            aux += "<option value='" + materialArray[i][0] + "' title='"+ materialArray[i][2] +"'>" + materialArray[i][1] + "</option>";
        }
        
        aux +="</select></form>";

        divOpciones.innerHTML += aux;                     
    }

    function generarExtras(){
        var aux ="";
        aux += "<br><h4 class='text-center'>EXTRAS</h4><br>" +
                                "<form class='formulario' action=''>";

        for(var i = 0;i<extrasArray.length;i++){

            aux += "<div class='all_extras float-start'><input type='checkbox' class='boxes float-start' id='" + extrasArray[i][1] + "' name='" + extrasArray[i][1] +
                "' value='" + extrasArray[i][2] + "'>" +
                "<label for='" + extrasArray[i][1] + "' title='" + extrasArray[i][3] + "'class='float-start'> &emsp;" + extrasArray[i][0] +
                "</label></div>";                        
        }
        aux += "</form><br>";
        divOpciones.innerHTML += aux;
        divOpciones.innerHTML += "<div class='text-center'><img src='../images/surgery.jpg' class='surgry_img' alt='surgery'></div>";
    }

    //FUNCION DE CÁLCULO FINAL DE RESULTADOS
    var resultados = function(){
        var precio_base = 0, incomp = 0, max_nt = 0, precio_extras = 0, incomp_extras = 0,precio_total_mas_cirugia = 0,precio_cirugia_operacion = 0;precio_implante_sin_aplicar = 0, 
        incomp_cirugia = 0,causa_nt = "Las causas del nt actual son: ", precio_total = 0,incomp_total = 0,p="",cleared = -1,exit = -1, control1 = -1,
        control2=-1,control3=-1,control4 = -1,contro5=-1,control6=-1,control7=-1,control8=-1,control9=-1,control10=-1,control11=-1,control12 = -1,control13 = -1,
        cancer = false;
       
        var elementos_opc = document.getElementsByClassName("opciones1");

        //ZONA DE LLAMADAS 
        //      A
        //   CONTROLES
        control1 = thingsNeeded1();control2 = thingsNeeded2("1500,0,3,5,Metal","Evidente");
        control3 = thingsNeeded2("3000,0.5,1,7,Sintecarne","Orgánico");control4 = thingsNeeded3();
        control5 = thingsNeeded4(["Buena calidad","Muy buena calidad","Mala calidad","Muy mala calidad"]);
        control6 = thingsNeeded4(["Evidente","Incógnito","Oculto","Imitación"]);control7 = thingsNeeded5("SEGUNDO CEREBRO",2,1),
        control8 = thingsNeeded5("BOMBA QUÍMICA",0,1),control9 = thingsNeeded5("BOMBA QUÍMICA",0,2),
        control10 = thingsNeeded6("SISTEMA DE VUELO IMPLANTADO",0),control11 = thingsNeeded5("SISTEMA DE VUELO IMPLANTADO",3,2),
        control12 = thingsNeeded5("LUZ INTEGRADA",1,0);if(tipo === "CIBER ÓRGANOS INTERNOS"){control13 = thingsNeeded7();};

        if(control1 == 0){
            p = "- Necesitas elegir alguna opción principal.";
            paint(p,0);
            exit = 0;
            cleared = 0;   
        }
        if(control2 == 0){
            p = "- Si el implante es metálico, necesitas el extra evidente.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control3 == 0){
            p="- Si el implante es de sintecarne, necesitas seleccionar el extra orgánico.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control4 == 0){
            p="- Si el implante es de plástico simpático, no puedes tener el extra imitación.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control5 == 0){
            p="- No puedes seleccionar más de un tipo de calidad de implante.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control6 == 0){
            p="- No puedes seleccionar más de un tipo de nivel de ocultación del implante.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control7 == 0){
            p="- Para tener multitareas, necesitas tener interfaz de datos.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control8 == 1 && control9 == 1){
            p="- No puede haber una bomba química sin dosis.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control8 == 0 && control9 == 0){
            p="- La bomba química necesita al menos un tipo de inyector.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control10 == 0){
            p="- Hay que elegir algún tipo de alas obligatoriamente.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control11 == 0){
            p="- No puedes añadir impulsos al chorro, sin tener instalada la opción chorro en el implante.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control12 == 0){
            p="- Es necesario el foco para poder equipar la flash.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        if(control13 == 0){
            p="- Cada órgano es un implante diferente, seleccione uno sólo.";
            if(cleared == -1){
                paint(p,0);
                exit = 0;
                cleared = 0;
            }else{
                paint(p,1);
            }
        }
        document.getElementById("btn_seleccion1").addEventListener("click", resultados);
        document.getElementById("btn_tipo").addEventListener("click", elegirTipo);
        if(exit == 0){return}

        //HA PASADO EL 
        // CONTROL
        // NOS DISPONEMOS A 
        // SEGUIR CON LOS CÁLCULOS

        new Audio('../sounds/money.mp3').play();

        roooooxaneUDontHaveToPutOnTheRedLight += "<b>Modificadores: </b>"
        for(var i=0;i<elementos_opc.length;i++){
            var aux_array = elementos_opc[i].value.split(",");
            //Transformo los strings en números multiplicando por 1 :D
            aux_array[0] = aux_array[0]*1;aux_array[1] = aux_array[1]*1;aux_array[2] = aux_array[2]*1;

            precio_base += aux_array[0];
            incomp += aux_array[1];

            if(aux_array[0] != 0){
                modNumber++;
                    roooooxaneUDontHaveToPutOnTheRedLight +=aux_array[3] + ": " + aux_array[4] + ", ";
                if(aux_array[5] === "Cáncer"){
                    cancer = true;
                }
            }

            if(aux_array[2]>max_nt){
                max_nt = aux_array[2];
            }
        }
        var elementos_ext = document.getElementsByClassName("boxes"),
        cont = 0;
        

        for(var i=0;i<elementos_ext.length;i++){
            if(elementos_ext[i].checked){
                cont++;
            }
        }

        if(cont>1){
            deDoDoDoDeDaDaDa += "<b>Rasgos: </b>";
        }else if(cont >0){
            deDoDoDoDeDaDaDa += "<b>Rasgo: </b>";
        } 

        for(var i=0;i<elementos_ext.length;i++){
            if(elementos_ext[i].checked){

                var aux_array = elementos_ext[i].value.split(",");
                aux_array[0] = aux_array[0]*1;aux_array[1] = aux_array[1]*1;aux_array[2] = aux_array[2]*1;

                deDoDoDoDeDaDaDa +=extrasArray[i][0] + ", ";

                if(aux_array[0]>50){
                    precio_extras += aux_array[0];
                    incomp_extras += aux_array[1];
                    if(aux_array[2]>max_nt){
                        max_nt = aux_array[2];
                    }
                }else{
                    precio_extras += precio_base*aux_array[0];
                    incomp_extras += aux_array[1];
                    if(aux_array[2]>max_nt){
                        max_nt = aux_array[2];
                        causa_nt = extrasArray[i][0] + "; ";
                    }else if(aux_array[2] == max_nt){
                        causa_nt += extrasArray[i][0] + "; ";
                    }

                }
            }
        }

        precio_total = precio_base + precio_extras;
        incomp_total = incomp + incomp_extras;

        var cirugia = document.getElementById("material"), precio_multiplicante_cirugia = 0;

        cirugia.value
        var cirugia_array = cirugia.value.split(",");
        cirugia_array[0] = cirugia_array[0]*1;cirugia_array[1] = cirugia_array[1]*1;cirugia_array[2] = cirugia_array[2]*1;cirugia_array[3] = cirugia_array[3]*1;

        precio_multiplicante_cirugia = precio_total * cirugia_array[1];
        precio_cirugia_operacion = cirugia_array[0];
        incomp_cirugia = cirugia_array[2];

        if(cirugia_array[3]>max_nt){
            max_nt = cirugia_array[3];
            causa_nt = cirugia_array[4] + "; ";
        }else if(aux_array[3] == max_nt){
            causa_nt += cirugia_array[4] + "; ";
        }
        precio_implante_sin_aplicar = precio_total + precio_multiplicante_cirugia;
        precio_total_mas_cirugia = precio_implante_sin_aplicar + precio_cirugia_operacion;
        incomp_total = incomp_total + incomp_cirugia;

        var incoWord = "Incompatibilidades";
        if(modNumber<=1){
            roooooxaneUDontHaveToPutOnTheRedLight.replace("Modificadores","Modificador");
        }
        if(incomp_total == 1){
            incoWord = "Incompatibilidad";
        }
        roooooxaneUDontHaveToPutOnTheRedLight = roooooxaneUDontHaveToPutOnTheRedLight.slice(0,-2);
        deDoDoDoDeDaDaDa = deDoDoDoDeDaDaDa.slice(0,-2);

        englishManInNewYork ="<h5><b>" + tipo + " de " + cirugia_array[4] + ".</b></h5><br>";
        englishManInNewYork += "<p><b>NT: </b>" + max_nt + ".</p>";
        if(deDoDoDoDeDaDaDa != ""){
            englishManInNewYork += "<p>" + deDoDoDoDeDaDaDa + ".</p>";
        }
        englishManInNewYork += "<p>" + roooooxaneUDontHaveToPutOnTheRedLight + ".</p>";
        englishManInNewYork += "<p><b>"+ incoWord +": </b>" + incomp_total + ".</p>";
        englishManInNewYork += "<p><b>Coste del implante: </b>" + precio_implante_sin_aplicar + 
                                " <b>Coste cirugía: </b>" + precio_cirugia_operacion + ".</p>";
        englishManInNewYork +="<p><b>Precio total: </b>" + precio_total_mas_cirugia + " fénix.</p><br>"
    
        divTipo.replaceChildren();
        divOpciones.replaceChildren();
        

        salvador = "<div class='roxane' id='roxane'>" + englishManInNewYork;
        if(cancer){
            salvador += "<p class='peque'>El implante genera cáncer en un 100% de los casos.</p>"
        }else if(tipo === "MONTURAS DE ARMAMENTO O HERRAMIENTAS"){
            salvador += "<p class='peque'>Al precio del implante hay que añadirle el coste del arma/herramienta que se quiera " +
                            "instalar multiplicado por dos.</p>";
        }
        salvador += "</div>";

        //Aquí divido en dos columnas el resultado texto ---- imagén tabla ego. Introduzco ambas cosas tb aquí.
        divOpciones.innerHTML += '<div class="col-8 floatLeft" id="divTextResult">'+ salvador + '</div>' +
                                '<div class="col-4 floatLeft" id="divEgotResult"><div class="text-center">'+
                                '<img src="../images/ego.png" class="emperor_img" alt="Ego tabla"></div></div>';
        divOpciones.innerHTML += "<div class='text-center'><img src='../images/emperor.jpg' class='emperor_img' alt='Knights'></div>";    
        divTipo.innerHTML +="<br><br><h2 class='text-center'>" + tipo + "</h4><br><br>";
        writeSelectTipo();
        divTipo.innerHTML +="<br><div class='text-center' id='img_doctor1'><img src='../images/doctor.png' alt='Crazy doctor'></div>";

        divTipo.innerHTML += "<br><div class='d-flex justify-content-center galaxy-button'><button class='d-flex justify-content-center buttonChange' id='download'>" +
                            '<span class="spark"></span>'+
                            '<span class="backdrop"></span>'+
                            '<span class="galaxy__container">'+
                            '<span class="star star--static"></span>'+
                            '<span class="star star--static"></span>'+
                            '<span class="star star--static"></span>'+
                            '<span class="star star--static"></span>'+
                            '</span>'+
                            '<span class="galaxy">'+
                            '<span class="galaxy__ring">'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                                '<span class="star"></span>'+
                            '</span>'+
                            '</span>'+
                            '<span class="text">Almacenar</span>'+
                            "</button></div>";
        document.getElementById("download").addEventListener("click", downloadFile);
        document.getElementById("btn_tipo").addEventListener("click", elegirTipo);    
    };
    //Función de control opciones principales
    function thingsNeeded1(){
        var elementos_opc = document.getElementsByClassName("opciones1"),control = 0;
        for(var i=0;i<elementos_opc.length;i++){
            if(elementos_opc[i].value != "0,0,0"){
                control = -1;
                return control;
            }
        }
        return control;
    }
    //Función control material metálico con evidente y material sintecarne con orgánico.
    function thingsNeeded2(d,s){
        var elementos_ext = document.getElementsByClassName("boxes"), control = -1;
        if(document.getElementById("material").value === d){
            control = 0;
            for(var i=0;i<elementos_ext.length;i++){
                if(elementos_ext[i].checked){
                    if(extrasArray[i][0] === s){
                        control = -1;
                        return control;
                    }
                }
            }
        }
        return control;
    } 
    //Función control material plástico simpático sin Imitación.
    function thingsNeeded3(){
        var elementos_ext = document.getElementsByClassName("boxes"), control = -1;
        if(document.getElementById("material").value === "2000,0.25,2,6,Plástico simpatico"){
            for(var i=0;i<elementos_ext.length;i++){
                if(elementos_ext[i].checked){
                    if(extrasArray[i][0] === "Imitación"){
                        control = 0;
                        return control;
                    }
                }
            }
        }
        return control;
    }
    //Función control extras que juntos no tienen sentido
    function thingsNeeded4(arr){
        var elementos_ext = document.getElementsByClassName("boxes"),cont = 0; control = -1;
            for(var i=0;i<elementos_ext.length;i++){
                if(elementos_ext[i].checked){
                    for(var j=0;j<arr.length;j++){
                        if(extrasArray[i][0] === arr[j]){
                            cont++;
                        }
                    }
            }
        }
        if(cont>1){
            control = 0;
        }
        return control;
    }
    //Control de ver si habiendo una opción, está otro necesario para el primero también. 
    function thingsNeeded5(t,x,y){
        var control = -1,elem = document.getElementsByClassName("opciones1");
        if(tipo === t && elem[x].value != "0,0,0"){
            if(elem[y].value === "0,0,0"){
                control = 0;
            }    
        }else if(tipo === t){
            control = 1;
        }
        return control;
    }
    //Control tiene que haber una opción sí o sí.
    function thingsNeeded6(t,x){
        var control = -1,elem = document.getElementsByClassName("opciones1");
        if(tipo === t){
            if(elem[x].value === "0,0,0"){
                control = 0;
            }
        }
        return control;
    }
    //Control de ciber órganos internos, sólo se puede coger 1
    function thingsNeeded7(){
        var control = -1,cont = 0,elem = document.getElementsByClassName("opciones1");
        for(var i = 0;i<elem.length;i++){
            if(elem[i].value != "0,0,0"){
                cont ++;
            }
        }
        if(cont > 1){
            control=0;
        }
        return control;
    }
    //Función pintado de resultados de errores de usuario
    function paint(p,c){
        var imgDoc = document.getElementById("img_doctor1"),selecc = document.getElementById("btn_reeleccion");
        if(c==0){
            removeElementsByClass("error");
            new Audio('../sounds/error.mp3').play();
        }
        selecc.parentNode.removeChild(selecc);
        imgDoc.parentNode.removeChild(imgDoc);
        divTipo.innerHTML += "<p class='error'>"+p+"</p>";
        writeSelectTipo();
        divTipo.innerHTML += "<div class='text-center' id='img_doctor1'><img src='../images/doctor.png' alt='Crazy doctor' class='doctor'></div>";  
    }
    //Función que borra contenido del div actual
    function clearBox(elementID) {
        var div = document.getElementById(elementID);  
        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
    function removeElementsByClass(className){
        const elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
    function writeSelectTipo(){
        divTipo.innerHTML += "<form action='' class='text-center' id='btn_reeleccion'><br><h4>SELECCIONE TIPO DE IMPLANTE</h4><br>" +
            "<select name='tipo_implante' id='tipo_implante'><option value='nada'></option><option value='segundo_cerebro'>Segundo Cerebro</option>" +
              "<option value='fibra_neuronal'>Fibra Neuronal</option><option value='piel_goliath'>Piel de Goliath</option><option value='ojo'>Ojo de Ingeniero/Espía</option>" +
              "<option value='oido'>Oído Inhalambrico</option><option value='papilas'>Sinte Papilas Olfato-Gustativas</option><option value='organos'>Ciber Órganos Internos</option>" +
              "<option value='extremidades'>Ciber Extremidades</option><option value='monturas'>Monturas de Armamento o Herramientas</option><option value='bomba'>Bomba Química</option>" +
              "<option value='escudo'>Escudo Energético Interno</option><option value='vuelo'>Sistema de Vuelo Implantado</option>" +
              "<option value='luz'>Luz Integrada</option>" +
              "</select><br><br><input type='button' class='boton' id='btn_tipo' value='Otro Tipo Implante'></form>";
    }
    function downloadFile(){
        var saved = salvador;

        const link = document.createElement("a");
        const file = new Blob([saved], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = tipo+".html";
        link.click();
        URL.revokeObjectURL(link.href);
     }
    //Eventos
    botonTipo.addEventListener("click", elegirTipo);

}());

