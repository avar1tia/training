const os = require('os');
const fs = require('fs');
const pb = require('./prueba.js');


let cpu = os.cpus();
let sistem = os.platform();
let usuario = os.hostname()
//let cpu_string = JSON.stringify(cpu);

//console.log(pb.sub);
//pb.saludar();


/*
fs.appendFile("text.txt",`info del cpu: ${cpu_string}` , function(error){
    if (error) {
        console.log('error de creacion')
    }
});*/

let respuesta = pb.sumar(3,3);
console.log(respuesta);

let respuesta2 = pb.mostrar(10);
console.log(respuesta2);
