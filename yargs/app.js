const { crearArchivo } = require('../manejo_argumentos/helpers/multiplicar');
const argv = require('../config/yargs');

console.clear();

//console.log(argv); objeto que devuelve yargs

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));

