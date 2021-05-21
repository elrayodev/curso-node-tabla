/* const fs = require('fs');

// imprimir la tabla del 5 en consola
console.clear();
console.log('====================');

let salida = ''

const multiplicar = (x) =>{
    for (let i = 0; i<10; i++){
        r = x * (i+1)
        salida += `${x} * ${i+1} = ${r}\n`
    }
    console.log(`    Tabla del ${x}   `);
    console.log('====================');
    console.log(salida)
    return salida;
}

const escribirFichero = (salida) =>{
    fs.writeFileSync(`tabla-${r[0]}.txt`, salida);
    console.log(`tabla-${r[0]}.txt creado`)
} */

const {crearArchivo} = require('./helpers/multiplicar');

let reBase = /b..e[^s]/; //busca base sin s

console.clear();

// Iteramos en argumentos de consola
for(i=0; i<process.argv.length; i++){

    // Regresa True argumento matchea con RegEx reBase entra a if
    if(process.argv[i].match(reBase)){
        let base = process.argv[i].split('=')[1]; // Asignamos el valor delante de = del arg

        console.log(process.argv[i].split('=')); // Regresa strings antes y despues de '='


        return crearArchivo(base)
            .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
            .catch(err => console.log(err));

    }

    // Regresa True si nos encontramos en ultimo argumento
    if(process.argv.length == i+1){
        let base = 5;
        return crearArchivo(base)
            .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
            .catch(err => console.log(err));
    }


}
