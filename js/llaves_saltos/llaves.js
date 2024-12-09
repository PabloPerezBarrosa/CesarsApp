
var keyButton = document.getElementById("btn_calculate_route_key"),
    selectNumber = document.getElementById("key_number"),
    aleatoryArray = ["suelto","arbol","cadena"],
    divResult = document.getElementById("divResultados"),
    selectKeyType = document.getElementById("key_type");
function calculateKey(){
    const canvas = document.getElementById("canvas_saltos");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,innerWidth,innerHeight);

    var index = 0,str1_key = "",str2_key = "",arrayNotRepeating = [],repeated = false,stringKeyRoute = "",
    complementaryKeyRoute = "",optionsArray = [],circleArray = [],aleatoryValue = "",resultKey = "",
    iter = 0;

    if(selectKeyType.value == "nada"){
        alert("¡¡Mastuerzo!! ¡¡Has de elegir un tipo de llave!!");
    }else if(selectNumber.value == "nada"){
        alert("¡¡Marinero de espacio soleado!! Elige el número de rutas de la llave");
    }else{
        //Aquí resolvemos el aleatorio del modo de llave
        if(selectKeyType.value == "aleatorio"){
            aleatoryValue = aleatoryArray[randomIntFromRange(0,2)];
        }
        //Para ver si el número de saltos también es aleatorio.
        if(selectNumber.value == "?"){
           var aux = randomIntFromRange(1,100);
           if(aux<=50){iter=1;}else if(aux<=75){iter=2;}else if(aux<=90){iter=3;}else if(aux<=100){iter=4;}
        }else{
            iter = parseInt(selectNumber.value);
        }
        //Para resultados singulares o plurales.
        if(iter>1){
            resultKey="La llave de salto consta de las siguientes rutas: <br>";
        }else{
            resultKey="La llave de salto consta de la siguiente ruta: <br>";
        }
    
        if(selectKeyType.value == "suelto" || aleatoryValue == "suelto"){
            
            for(var i = 0;i<iter;i++){
    
                repeated = false;
                index = randomIntFromRange(0,arrayDeObjetos.length-1);
                str1_key = Object.values(arrayDeObjetos[index])[0];
        
                posibilitiesArray = eval(((str1_key).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase()
                                    .replace(" ","_").replace("-","_").replace(" ","_"));

                console.log(str1_key);                    
                console.log(eval(((str1_key).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase()
                .replace(" ","_").replace("-","_").replace(" ","_")));
                console.log(posibilitiesArray);                    
                console.log(posibilitiesArray.length);
        
                index = randomIntFromRange(0,posibilitiesArray.length-1);
                str2_key = posibilitiesArray[index][0];
        
                stringKeyRoute = str1_key + "-" + str2_key;
                complementaryKeyRoute = str2_key + "-" + str1_key;
        
                for(var j = 0;j<arrayNotRepeating.length;j++){
                    if(arrayNotRepeating[j] == stringKeyRoute){
                        repeated = true;
                    }
                }
                if(!repeated){
                    paintLine(str1_key,str2_key,0);
                    resultKey+= "-"+traduction[str1_key] + " <-> " + traduction[str2_key] + ".<br>";
                    circlePaint("yellow",str1_key,originalCircleRadious);
                    circlePaint("yellow",str2_key,originalCircleRadious);
                    arrayNotRepeating.push(stringKeyRoute);
                    arrayNotRepeating.push(complementaryKeyRoute);
                }else{
                    i--;
                }
            }
                
        }else if(selectKeyType.value == "arbol" || aleatoryValue == "arbol"){
            
            for(var i = 0;i<iter;i++){
                repeated = false;
                if(i==0){
                    index = randomIntFromRange(0,arrayDeObjetos.length - 1);
                    str1_key = Object.values(arrayDeObjetos[index])[0];
                    optionsArray.push(str1_key);
                }else{
                    index = randomIntFromRange(0,optionsArray.length-1);
                    str1_key = optionsArray[index];
                }
                posibilitiesArray = eval(((str1_key).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase()
                                    .replace(" ","_").replace("-","_").replace(" ","_"));
        
                index = randomIntFromRange(0,posibilitiesArray.length-1);
                str2_key = posibilitiesArray[index][0];
        
                stringKeyRoute = str1_key + "-" + str2_key;
                complementaryKeyRoute = str2_key + "-" + str1_key;
        
                for(var j = 0;j<arrayNotRepeating.length;j++){
                    if(arrayNotRepeating[j] == stringKeyRoute){
                        repeated = true;
                    }
                }
                if(!repeated){
                    paintLine(str1_key,str2_key,0);
                    resultKey+= "-"+traduction[str1_key] + " <-> " + traduction[str2_key] + ".<br>";
                    //circlePaint("yellow",str1_key);
                    //circlePaint("yellow",str2_key);
                    arrayNotRepeating.push(stringKeyRoute);
                    arrayNotRepeating.push(complementaryKeyRoute);
                    optionsArray.push(str2_key);
                    var aux1 = false;
                    var aux2 = false;
                    for(var k = 0;k<circleArray.length;k++){
                        if(circleArray[k] == str1_key){
                            aux1 = true;
                        }
                        if(circleArray[k] == str2_key){
                            aux2 = true;
                        }
                    }
                    if(!aux1){circleArray.push(str1_key);}
                    if(!aux2){circleArray.push(str2_key);}
                }else{
                    i--;
                }
            }
            for(var i = 0;i<circleArray.length;i++){
                circlePaint("yellow",circleArray[i],originalCircleRadious);
            }
        }else if(selectKeyType.value == "cadena" || aleatoryValue == "cadena"){
            var blocked = 0,saveOurLivesBigOne = "",bigOneSize = 0,fullBlocked=0;
            for(var i = 0;i<iter;i++){
                repeated = false;
                if(i==0){
                    index = randomIntFromRange(0,arrayDeObjetos.length-1);
                    str1_key = Object.values(arrayDeObjetos[index])[0];
                    console.log(str1_key);
                    optionsArray.push(str1_key);
                }else{
                    index = randomIntFromRange(0,optionsArray.length-1);
                    str1_key = optionsArray[index];
                }
                posibilitiesArray = eval(((str1_key).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase()
                                    .replace(" ","_").replace("-","_").replace(" ","_"));
                if(posibilitiesArray.length>bigOneSize){
                    saveOurLivesBigOne=str1_key;
                    bigOneSize = posibilitiesArray.length;
                }
        
                index = randomIntFromRange(0,posibilitiesArray.length-1);
                str2_key = posibilitiesArray[index][0];
        
                stringKeyRoute = str1_key + "-" + str2_key;
                complementaryKeyRoute = str2_key + "-" + str1_key;
        
                for(var j = 0;j<arrayNotRepeating.length;j++){
                    if(arrayNotRepeating[j] == stringKeyRoute){
                        repeated = true;
                    }
                }
                if(!repeated){
                    var arrayLengthComprobator = eval(((str2_key).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).toLowerCase()
                    .replace(" ","_").replace("-","_").replace(" ","_"));
                    resultKey+= "-"+traduction[str1_key] + " <-> " + traduction[str2_key] + ".<br>";
                    paintLine(str1_key,str2_key,0);
                    //circlePaint("yellow",str1_key);
                    //circlePaint("yellow",str2_key);
                    arrayNotRepeating.push(stringKeyRoute);
                    arrayNotRepeating.push(complementaryKeyRoute);
                    if(arrayLengthComprobator.length>1){
                        console.log(str2_key);
                        optionsArray.push(str2_key);
                        for(var h = 0;h<optionsArray.length;h++){
                            if(optionsArray[h] == str1_key){
                                optionsArray.splice(h,1);
                                break;
                            }
                        }
                    }
                    
                    var aux1 = false;
                    var aux2 = false;
                    for(var k = 0;k<circleArray.length;k++){
                        if(circleArray[k] == str1_key){
                            aux1 = true;
                        }
                        if(circleArray[k] == str2_key){
                            aux2 = true;
                        }
                    }
                    if(!aux1){circleArray.push(str1_key);}
                    if(!aux2){circleArray.push(str2_key);}
                }else{
                    i--;
                    blocked++;
                    if(blocked >100){
                        optionsArray=[];
                        optionsArray.push(saveOurLivesBigOne);
                        blocked = 0;
                        fullBlocked++;
                        if(fullBlocked >3){
                            alert("¡¡Bloqueado!!");
                            break;
                        }
                    }
                }
            }
             for(var i = 0;i<circleArray.length;i++){
                circlePaint("yellow",circleArray[i],originalCircleRadious);
            }
        }
        divResult.innerHTML = "<p style ='text-align:left;'>" + resultKey + "</p>";

    }
    
}

//Eventos
keyButton.addEventListener("click",calculateKey);