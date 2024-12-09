
//Función pinta círculos de origen y destino. 
function circlePaint(color,id,radius1){
    const arrayDeObjetos = Object.entries(coordinates).map(([sistema, pos]) => ({sistema, ...pos}));
    var aux = document.getElementById("son2"),x = 0,y = 0;
    formatName = normalize(id);
    x= (arrayDeObjetos.find(a=>a.sistema===formatName).x)*coordMultX;
    y= (arrayDeObjetos.find(a=>a.sistema===formatName).y)*coordMultY;
    if(canvas.getContext){
        const ctx = canvas.getContext("2d");
        ctx.beginPath()
        ctx.arc(x,y,radius1*coordMultX, 0, Math.PI * 2, false)
        ctx.strokeStyle = color;
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.closePath()
    }

}

    //Función que cambia value de los botones.
    function buttonChange(btnId,newContent){
        document.getElementById(btnId).value = newContent;
    }

    //Función para acoplar los strings de los sistemas al formato de sus ids
    function normalize(str){
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replaceAll(" ","_").replaceAll("-","_");
    }

    /*Función para pintar línea entre 2 puntos sabiendo el nombre del sistema.
    Podremos usar esta llamada para pintar líneas separadas y no tener problemas en 
    la sección de llaves, ya que no estarán siempre en línea*/
    function paintLine(str1,str2,i){
        const colors = ["#DAD32D","#DA962D","#DA392D","#9C2DDA","#FF00ED"];
        var x = 0,y = 0,x2 = 0,y2 =0, formatName = "",formatName2 = "";
        formatName = normalize(str1);
        formatName2 = normalize(str2);
        x= (arrayDeObjetos.find(a=>a.sistema===formatName).x)*coordMultX;
        y= (arrayDeObjetos.find(a=>a.sistema===formatName).y)*coordMultY;
        x2= (arrayDeObjetos.find(a=>a.sistema===formatName2).x*coordMultX);
        y2= (arrayDeObjetos.find(a=>a.sistema===formatName2).y)*coordMultY;
        ctx.moveTo(x,y);
        ctx.lineTo(x2,y2);
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = 7;
        ctx.stroke();
    }

    //Función para sacar un número aleatorio entre 2 valores mínimo y máximo
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

