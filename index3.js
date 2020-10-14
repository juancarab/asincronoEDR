const { reject } = require("bluebird");

// Creamos funcion que retorna promesa
function PromesaA(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 3300, 'Pepe')
    })
}

// Funcion espera parametro nombre de la Promesa A
function PromesaB(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 2000, 'Mi nombre es: '+nombre)
    })
}

// Encadenamos ambas promesas y retorna objeto dentro del metodo then
PromesaA().then(PromesaB).then(console.log)