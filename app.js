// imprimir tabla del 5 por consola
//import fs from 'fs';
//const fs = require('fs');
//const { boolean } = require('yargs');
const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs");
//console.clear();
/*console.log('===================');
console.log('   Tabla del 3     ');
console.log('===================');*/
//const base = 3;

console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log('base : yargs',argv.base);
//abreviatura en consola de una versión o entrada : ejemplo : -b 5
/*const [,,arg3='base=3'] = process.argv;
const [,baseArg =5] = arg3.split('=');
console.log(baseArg);*/
/*let salida = '';
//const tablaCinco =()=>{
    for(let i = 1; i<11;i++){
        let valor = base*i;
        salida += `${base} x ${i}  = ${valor}\n`;
     //  console.log(`${base} x ${i}  = ${valor}`); 
    }*/
//}
crearArchivo(argv.b, argv.l, argv.h)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
//tablaCinco();
/*console.log(salida);
fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
    if (err) throw err;
    console.log('Archivo creado');
});*/
//console.log(salida);

// error denegación permisos de escritura

/*
 if (err) throw err;
             ^

[Error: EPERM: operation not permitted, open 'C:\Users\danie\Desktop\Node\03-bases-node\tabla-2.txt'] { 
  errno: -4048,
  code: 'EPERM',
  syscall: 'open',
  path: 'C:\\Users\\danie\\Desktop\\Node\\03-bases-node\\tabla-2.txt'
}
*/
