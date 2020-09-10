//Librerias
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');
//FIN Librerias


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`  Tabla del ${argv.base}\n===============\n${tabla}`.red))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log(`comando [${comando}] no reconocido`);
        break;
}



/* let parametro = argv[2];
let base = parametro.split('=')[1] */