async function leerJSON(url){
    const response = await fetch('/data.json');
    return await response.json();
}

function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function ordenarByDate(obj){
    // TODO: Cambiar "campo" por el campo a ordenar
    return obj.sort((a, b) => new Date(a.campo).getTime() - new Date(b.campo).getTime() );
}

// Regresa una fecha en formato "viernes 25 de agosto de 1989"
function transformDate(fecha){
    let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    return new Date(fecha).toLocaleDateString("es-MX", options);
}

// En peticiones POST, mandar formdata en parámetro data
// Ejemplo:
//  var data = new FormData(document.getElementById("id_form"));
// Ejemplo de uso:
    // Ajax('https://google.com', 'GET').onload = function(){
    //     let data = this.responseText;
            // console.log(data);
    // };
function Ajax(url, method, data = null) {
    const xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.send(data);
    return xhttp;
}

function objetoToString(object){
    return `{"${Object.keys(object)}":"${Object.values(object)}"}`;
}

// Para obtener parámetros de la URL
function getGET(){
    // capturamos la url
    var loc = document.location.href;
    // si existe el interrogante
    if(loc.indexOf('?')>0)
    {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}

// Ejemplo de como obtener los valores de getGET
// window.onload = function(){
//     // Cogemos los valores pasados por get
//     var valores=getGET();
//     if(valores)
//     {
//         //recogemos los valores que nos envia la URL en variables para trabajar con ellas
//         var variable = valores['nombreParametro'];
//     }
// }