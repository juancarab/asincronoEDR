const { resolve } = require('bluebird');
const request = require('request');

//console.log('Soy el primero')

function llamada(url){
    return new Promise(function(resolve,reject){
        request(url, function(err, response){
            if(err){
                reject(err)
            }else{
                resolve(response)
            }
        })
    })
}

llamada('http://wikipedia.com').then(function(response){
    console.log('Ya se todo de wikipedia')
}).catch(function(err){
    console.log(err)
})

// Modelo de callback
/*request('https://wikipedia.com', function(){
    console.log("Soy el segundo y Ya se todo de wikipedia")

    /*request('https://google.com', function(){
        console.log("Soy el segundo y Ya se todo de Google")
    })
})

console.log('Soy el primero')

const promesa = require('request-promise')

promesa('https://wikipedia.com').then(function(html){
    console.log('Ya se todo de wikipedia')
}).catch(function(err){
    console.log(err)
})

// **Estados de la promesa**
// fullfiled -> promesa completada
// rejected -> promesa completada con error
// pending -> promesa pendiente
// setled -> promesa finalizada*/
