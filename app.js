//requireds
// const fs = require('fs');
// const fs = require('express'); require paquete extension, no nativo de node
// const fs = require('./fs'); require que creamoes para utilizar archivos que nosotros creamos en el proyecto

//utilizacion de yargs-------------------------------
// al definir requiere('yargs') nos estamos refiriendo a un paquete
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

// --------------------------------------------------------

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

//let base = '8';

//console.log(multiplicar);

//console.log(process.argv);

//let argv2 = process.argv;

//console.log('Limite', argv.limite); // este es el de yargs
//console.log(argv2); // este es el de argv que recibimos de los procesos

// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(base);


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));