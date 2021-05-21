const fs = require('fs');
const colors = require('../../config/colors');

const crearArchivo = async(base = 5, list = false, lim) => { //async por defecto regresa una promesa, por lo tanto no es necesario el 'return new Promise'

   
   let salida = ''
   let consola = '';

   for (let i = 0; i<lim; i++){
      r = base * (i+1);
      consola += `${base}`.error + ' x ' + `${i+1}`.warn + ' = ' + `${r}`.res + '\n';
      salida += `${base} x ${i+1} = ${r}\n`;
   }

   if(list){
      console.log('================='.silly);
      console.log(`  Tabla del: ${base}`.silly);
      console.log('================='.silly);
      console.log(consola);
   }

   fs.writeFileSync(`../salida/tabla-${base}.txt`, salida);
   
   return `tabla-${base}.txt`.cyan.italic;
 }

 module.exports = {
    crearArchivo
 }

 //module es un objeto global de node