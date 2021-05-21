const argv = require('yargs')
                // Primer argumento es el shortcut del flag
                .options({
                    'b': {
                        alias: 'base', // nombre completo de flag
                        type: 'number',
                        demandOption: true, // requerido
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Lista la tabla de multiplicar en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Limite hasta que numero se va a multiplicar la base'
                    }
                })
                // check sirve para verificar los datos, como manejador de errores
                .check( (argv, options) =>{
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número';
                    }
                    
                    return true;
                })
                .argv;

module.exports = argv /* Exportación por defecto del archivo, no un objeto como tal,
                      aunque internamente argv es un objeto y en JS lo que no sea un primitivo es un objeto  */