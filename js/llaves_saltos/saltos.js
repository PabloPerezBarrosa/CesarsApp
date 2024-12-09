
    const arrayDeObjetos = Object.entries(coordinates).map(([sistema, pos]) => ({sistema, ...pos}));

    var nemetus,abydos,chernobog,daishan,draxus,absolucion,eden,ningunlugar,bannockburn,shaprut,kordeth,aylon,de_moley,severus,cadiz,vril_ya,vau,malignatius,manitu,istakhr,icono,
        ungavorox,criticorum,cadavus,hargard,leminkainen,kun_lun,ravena,gwynneth,asphai,midian,kish,velisamil,byzantium_secundus,pira,madoc,ligahelm,terraplen,pandemonium,grial,
        aragon,vera_cruz,sutek,hira,tethys,delphi,pentateuco,terra_santa,artemis,khayyam,al_fashir,beliah,aspiracion,irem,tsuma,rukh,huevo,khotan,escarcha,hemvald,lamento_del_lobo,
        cuervo,fingisvold,novgorod;

    var id1 = "",id2 = "",crossHalfSize = 20,jumpLimit = 15,coordMultX=1,coordMultY=1,auxMultiX = 1,auxMultiY=1;

    /* var buttonSizes =[{id:"year4996",w:48,h:196,t:475,l:320},
                      {id:"year5035",w:48,h:196,t:677,l:320},
                      {id:"to_pass_modal",w:57,h:35,t:536,l:102}
                    ]; */
                    
    var buttonSizes =[{id:"year4996",w:627,h:196,t:481,l:32},
                    {id:"year5035",w:627,h:196,t:674,l:32},
                    {id:"to_pass_modal",w:57,h:35,t:536,l:102}
                  ];

    var botonesMapa = document.getElementsByClassName("botones_mapa"),cronologyButts = document.getElementsByClassName("imageButtons"), delete_swtch = document.getElementById("flexSwitchCheckDefault"),
    forbidden = [], crossOuts = document.getElementsByClassName("cross"),changeToKey = document.getElementById("keyJump"),
    changeToJump = document.getElementById("keyJump_key"), controlJump = document.getElementById("control_panel"), 
    controlKey = document.getElementById("control_panel_key"), calculate_btn = document.getElementById("btn_calculate_route"),
    titleText = document.getElementById("titleText"),son1 = document.getElementById("son1"),
    son2 = document.getElementById("son2"),centeringPixels=0,imgMap = document.getElementById("mpslt"),allAreas = document.getElementsByTagName("area"),allRoutes = new Array();

    const canvas = document.getElementById("canvas_saltos");
    const ctx = canvas.getContext("2d");

    function responsiveImageAndMaping(){
        allAreas = document.getElementsByTagName("area");
        //le doy altura y anchura en función de la pantalla a la imagen del mapa.
        imgMap.height = window.innerHeight * 0.9;
        imgMap.width = window.innerWidth;
        //Le damos al contenedor del canvas y de la imagen el tamaño de la imagen.
        son1.style.height = imgMap.clientHeight;
        son2.style.height = imgMap.clientHeight;
        //Damos el tamaño correcto al canvas
        canvas.width = imgMap.clientWidth;
        canvas.height = imgMap.clientHeight;
        //Sacamos los multiplicadores que ajustan las coordenadas.
        auxMultiX = coordMultX;
        auxMultiY = coordMultY;
        coordMultX = imgMap.clientWidth/originalImageWidth;
        coordMultY = imgMap.clientHeight/originalImageHeight;
        //Ajustamos las coordenadas del mapeo de html
        var auxX,auxY,auxRadius;
        for(var i = 0;i<allAreas.length;i++){
            var auxX,auxY,coordsAux = allAreas[i].coords.split(",");
            auxX = parseInt(coordsAux[0])/auxMultiX;
            auxX = auxX * coordMultX;
            auxY = parseInt(coordsAux[1]) /auxMultiY;
            auxY = auxY*coordMultY;
            if(coordMultX>coordMultY){
                auxRadius = originalCircleRadious*coordMultX;
            }else{
                auxRadius = originalCircleRadious*coordMultY;
            }
            allAreas[i].coords = auxX + "," + auxY + "," + auxRadius; 
        }

        for(var i = 0;i < buttonSizes.length;i++){

            var auxW, auxH, auxT , auxL, heightSizer = document.getElementById("modCont").offsetHeight/929, widthSizer = document.getElementById("modCont").offsetWidth/688;

            auxW = (buttonSizes[i].w) * widthSizer;
            auxH = (buttonSizes[i].h) * heightSizer;
            auxT = (buttonSizes[i].t) * heightSizer;
            auxL = (buttonSizes[i].l) * widthSizer;

            document.getElementById(buttonSizes[i].id).style.width = auxW + "px";
            document.getElementById(buttonSizes[i].id).style.height = auxH + "px";
            document.getElementById(buttonSizes[i].id).style.top = auxT + "px";
            document.getElementById(buttonSizes[i].id).style.left = auxL + "px";

        }

        //Centramos con js el mapa y el canvas (No lo conseguía con css así como estaba montado sin cargarme todo).
        centeringPixels = (window.innerWidth - imgMap.clientWidth)/2
        son1.style.left = centeringPixels +"px";
        son2.style.left = centeringPixels +"px";
        paintRouteTxt();
        if(allRoutes.length > 0){
            draw(allRoutes);
        }
    }
    responsiveImageAndMaping();
    
    /*setTimeout(function(){
        stopAnimation();
    }, 100)*/
    //Aquí añadimos la ruta (origen y destino).

    var route = function(){
        if(delete_swtch.checked && this.id != id1 && this.id != id2){
            forbidden.push(this.id);
            crossOutForbidden();
            reloadCrossOutEvent();
        }else if(delete_swtch.checked){
            alert( this.id + " es origen o destino de la ruta. No puedes no pasar por ese sistema.")
        }else if(titleText.innerHTML == "RUTAS DE SALTO"){
            if(this.id === id1){
                id1 = "";
            }else if(this.id === id2){
                id2 = "";
            }else if(id1 === ""){
                id1 = this.id;
            }else if(id2 === ""){
                id2 = this.id;
            }
            paintRouteTxt();
            reloadDeleteEvents();
        } 
    }
    var buttonOptions = function(){
        var str1 = document.getElementById("btn_calculate_route").value;
        var str2 = "Nueva Ruta";
        if(str1 === str2){
            remakeJumpCalculator();
        }else{
            calculatingRoute();
        }
    }
    //Función principal de cálculo, aquí se calculará las rutas posibles.
    var calculatingRoute = function(){
        var finalResult = "",otherResults = "",bestRouteCounter = 20,numOfTopRoutes = 0;
            
        if(id1 === "" || id2 === ""){
            alert("Necesitas origen y destino");
            return;
        }else if(id2 === id1){
            alert("No necesitas calcular una ruta si el destino y el origen es el mismo...");
            remakeJumpCalculator();
            return;
        }
        var actualArray = eval(id1),indexArray = [0],routeArray = new Array;

        routeArray.push(traduction[id1]);
        
        while(routeArray.length > 0){
            var reiterative = false;
            var uShallNotPass = false;
            actualArray = eval(((routeArray[routeArray.length-1]).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase().replace(" ","_").replace("-","_").replace(" ","_"));
            if(actualArray[(indexArray[indexArray.length-1])][0] == id2){
                //Llegamos al destino
                routeArray.push(actualArray[(indexArray[indexArray.length-1])][1]);
                if((routeArray.length-1) < bestRouteCounter){
                    //otherResults += finalResult;
                    bestRouteCounter = routeArray.length-1;
                    finalResult = "";
                    finalResult += "<p style ='text-align:left;'>";
                    allRoutes = [];
                    var route = "";
                    for(var i = 0;i<routeArray.length;i++){
                        route+= (i + 1 == routeArray.length)?routeArray[i]:routeArray[i]+",";
                        finalResult += routeArray[i] + " - ";
                    }
                    allRoutes.push(route);
                    finalResult = finalResult.slice(0,-3);
                    finalResult += " = " + (routeArray.length-1) + " saltos.</p>";
                    numOfTopRoutes = 1;
                }else if((routeArray.length-1) == bestRouteCounter){
                    finalResult += "<p style ='text-align:left;'>";
                    var route = "";
                    for(var i = 0;i<routeArray.length;i++){
                        route+= (i + 1 == routeArray.length)?routeArray[i]:routeArray[i]+",";
                        finalResult += routeArray[i] + " - ";
                    }
                    allRoutes.push(route);
                    finalResult = finalResult.slice(0,-3);
                    finalResult += " = " + (routeArray.length-1) + " saltos.</p>";
                    numOfTopRoutes++;
                }
                routeArray.pop();
                actualArray = eval(((routeArray[routeArray.length-1]).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase().replace(" ","_").replace("-","_").replace(" ","_"));
                var noMoreRoutes = true;
                while(noMoreRoutes){
                    if(eval(actualArray[indexArray[indexArray.length-1]][0]).length <2){
                        indexArray.pop();
                        routeArray.pop();
                        if(indexArray.length == 0){
                            break;
                        }
                        actualArray = eval(((routeArray[routeArray.length-1]).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase().replace(" ","_").replace("-","_").replace(" ","_"));
                    }else{
                        var notAdvancing = true;
                        while(notAdvancing){
                            if(actualArray.length - indexArray[indexArray.length-1] > 1){
                                indexArray[indexArray.length-1]++;
                                notAdvancing = false;
                                noMoreRoutes = false;
                            }else{
                                indexArray.pop();
                                routeArray.pop();
                                if(indexArray.length == 0){
                                    noMoreRoutes = false;
                                    break;
                                }
                                actualArray = eval(((routeArray[routeArray.length-1]).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase().replace(" ","_").replace("-","_").replace(" ","_"));
                            }       
                        }  
                    }
                }    
            }else{
                //Si no ha llegado a destino, miro si ya ha pasado por ahí, o si no es un punto ciego sin más ruta que de la que viene
                for(var i = 0;i<routeArray.length;i++){
                    if(routeArray[i] === actualArray[indexArray[indexArray.length-1]][1]){
                        reiterative = true;
                    }
                }
                for(var i = 0;i<forbidden.length;i++){
                    if(traduction[forbidden[i]] == actualArray[indexArray[indexArray.length-1]][1]){
                        uShallNotPass = true;
                    }
                }
                if(uShallNotPass || reiterative || eval(actualArray[indexArray[indexArray.length-1]][0]).length <2){
                    var notAdvancing = true;
                    while(notAdvancing){
                        if(actualArray.length - indexArray[indexArray.length-1] > 1){
                            indexArray[indexArray.length-1]++;
                            notAdvancing = false;
                        }else{
                            indexArray.pop();
                            routeArray.pop();
                            if(indexArray.length == 0){
                                break;
                            }
                            actualArray = eval(((routeArray[routeArray.length-1]).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase().replace(" ","_").replace("-","_").replace(" ","_"));
                        }       
                    }
                //Si no es reiterativo ni llega a su destino ni es un pto ciego, avanza    
                }else{
                    if(routeArray.length<=jumpLimit){
                        routeArray.push(actualArray[indexArray[indexArray.length-1]][1]);
                        indexArray.push(0);
                    }else{
                        var notAdvancing2 = true;
                        while(notAdvancing2){
                            routeArray.pop();
                            indexArray.pop();
                            actualArray = eval(((routeArray[routeArray.length-1]).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase().replace(" ","_").replace("-","_").replace(" ","_"));
                                if(indexArray.length == 0){
                                    notAdvancing2 = false;
                                    break;
                                }
                            if(actualArray.length - indexArray[indexArray.length-1] > 1){
                                indexArray[indexArray.length-1]++;
                                notAdvancing2 = false;
                            }
                        }
                    }
                }
            }
   
        }
        clearBox("divResultados");
        if(numOfTopRoutes == 1){
            document.getElementById("divResultados").innerHTML += "<p style ='text-align:left;'>Ruta más óptima: <br>" + finalResult + "</p>";
        }else if(numOfTopRoutes>1){
            document.getElementById("divResultados").innerHTML += "<p style ='text-align:left;'>Rutas más óptimas: <br>" + finalResult + "</p>";
        }else if(numOfTopRoutes == 0){
            document.getElementById("divResultados").innerHTML += "<p style ='text-align:left;'>No hay rutas posibles, le sugiero echarle un par de pelotas y atravesar algún sistema oscuro</p>";
        }
        animationChange();
        buttonChange("btn_calculate_route","Nueva Ruta");
        setTimeout(function(){
            stopAnimation();
        }, 3000)
        draw(allRoutes);
    }
    //Función para el pintado y repintado de Origen y Destino en la interfaz.
    function paintRouteTxt(){
        if(canvas.getContext){
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        if(id1 != ""){
            circlePaint("#1B5437",id1,originalCircleRadious);
        }
        if(id2 != ""){
            circlePaint("#358AA0",id2,originalCircleRadious);
        }
    }
    //Función que recarga los eventos de los botones de borrar de la interfaz.
    function reloadDeleteEvents(){
        var botonesBorrar = document.getElementsByClassName("delete_btn");
        for (var i = 0; i < botonesBorrar.length; i++) {
            botonesBorrar[i].addEventListener("click",borrar);
        }
    }
    //Borrar elemento pasando su ID
    function clearBox(elementID) {
        var div = document.getElementById(elementID);  
        while(div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
    //Función para pintar en la imagen
    function draw(routes){

        if(canvas.getContext){
            for (let i = 0; i < routes.length; i++){
                ctx.beginPath();
                var aux = [];
                aux = routes[i].split(",");
                for (let j = 0; j < aux.length-1; j++) {
                    paintLine(aux[j],aux[j+1],i);
                }
                
            }

        }
    }
    //Función para tachar en el mapa la lista de prohido el paso
    function crossOutForbidden(){
        const arrayDeObjetos = Object.entries(coordinates).map(([sistema, pos]) => ({sistema, ...pos}));
        var aux = document.getElementById("son2"),x = 0,y = 0;
        document.querySelectorAll(".cross").forEach(e => e.remove());
        for(var i = 0;i < forbidden.length;i++){

            formatName = normalize(forbidden[i]);
            x= (arrayDeObjetos.find(a=>a.sistema===formatName).x) - crossHalfSize;
            y= (arrayDeObjetos.find(a=>a.sistema===formatName).y) - crossHalfSize;
            imgW = originalCircleRadious*coordMultX;
            imgH = originalCircleRadious*coordMultY;

            aux.innerHTML += "<img src='../images/cross-out.png' alt='' id='" + formatName + "_b' class='cross' style='top: " + y*coordMultY + "px;left: "+x*coordMultX+"px;' width='" + imgW +"' height='"+imgH+"'>";
            
        }
        reloadCrossOutEvent();
    }
    //Función para quitar tachados de los sistemas prohibidos y hacerlos accesibles de nuevo.
    function recoverSystem(){
        var ide = this.id.slice(0,-2);
        if(delete_swtch.checked){
        elem = document.getElementById(this.id);
        elem.parentNode.removeChild(elem);
            for(var i = 0;i<forbidden.length;i++){
                if(forbidden[i] == ide){
                forbidden.splice(i,1);
                }
            }   
        }
    }
    //Función para rehacer el calculador de saltos de nuevo para poder hacer otro salto
    function remakeJumpCalculator(){
        document.getElementById("btn_calculate_route").value ="Saltar";
        id1 = "";
        id2 = "";
        allRoutes = new Array();
        document.querySelectorAll(".cross").forEach(e => e.remove());
        new Audio('../sounds/slow.mp3').play();
        var canvas = document.getElementById("canvas_saltos");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,innerWidth,innerHeight);
        clearBox("divResultados");
        paintRouteTxt();
        
    }
    //Función para alternar entre saltos y llaves
    function appChange(whereTo){
        remakeJumpCalculator();
        if(whereTo){
            forbidden = [];
            crossOutForbidden();
            reloadCrossOutEvent();
            delete_swtch.checked = false;
            titleText.innerHTML = "LLAVES DE SALTO";
            controlJump.setAttribute('style', 'display:none !important');
            controlKey.setAttribute('style', 'display:flex !important');
            selectKeyType.value ="nada";
            selectNumber.value ="nada";
        }else{
            titleText.innerHTML = "RUTAS DE SALTO";
            controlJump.setAttribute('style', 'display:flex !important');
            controlKey.setAttribute('style', 'display:none !important');
        }
    }
    var changeMap = function(){
        sessionStorage.setItem("mapValue",this.id);
        location.reload();
    }
    function passwordComprobation(){

        if(passwordContent.value == "DAME PX GRATIS"){
            sessionStorage.setItem("mapValue",this.id);
            location.reload();
        }else{
            document.getElementById("fail").click();
        }
    }
    //Eventos

    calculate_btn.addEventListener("click",buttonOptions);
    for (var i = 0; i < botonesMapa.length; i++) {
        botonesMapa[i].addEventListener("click",route);
    }
    for (var i = 0; i < cronologyButts.length; i++) {
        cronologyButts[i].addEventListener("click",changeMap);
    }
    function reloadCrossOutEvent(){
        for(var i=0;i<crossOuts.length;i++){
            crossOuts[i].addEventListener("click",recoverSystem);
        }
    }
    changeToKey.addEventListener("click",function(){
        appChange(true);
    },false);
    changeToJump.addEventListener("click",function(){
        appChange(false);
    },false);
    //Actualizamos el tamaño del mapa al cambio de tamaño de la pantalla cada vez que se detecte un cambio.
    addEventListener('resize', () => {
        //solución cutre parcial al problema de responsive
        location.reload();
        responsiveImageAndMaping();
      });   
