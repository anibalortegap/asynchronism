let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API_URL = 'https://rickandmortyapi.com/api/character/';

//función para traer información de la API y recibe un callback
function fetchData(url_api, callback) {
    //crear un instancia del objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest();
    //metodo = GET  -- URL -- Async = true          
    xhttp.open('GET', url_api, true);
    //escuchamos los cambios de la conexión
    xhttp.onreadystatechange = function(event) {
        /* AJAX - server response 
            0: requesrt not initialized
            1: server connection established
            2: request received*
            3: processing request
            4: request finished and response is ready 
        */
        //validar si se la conexión es exitosa
        if(xhttp.readyState === 4){
            /* HTTP Sttus
                200: OK
                400: Bad Request
                401: Unauthorized
                403: Forbidden
                404: Page not found
                500: Internal server error
                502: Bad Gateway
                503: Service unavailable
            */
            //validar http status
            if(xhttp.status === 200){
                /* ejecutamos nuestro callback, en node el primer parametro es el error. 
                    parsemos nuestra respuesta de string -json
                */
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}


fetchData(API_URL, (error, data) => {
    if(error) return console.error(error);
    fetchData(API_URL + data.results[0].id, (error1, data1) => {
        if(error1) return console.error(error1)
        fetchData(data1.origin.url, (error2, data2) => {
            if(error2) return console.error(error2)
            console.log(data.info.count);
            console.log(data1.name);
            console.log(data2.dimension);
        })
    })
})