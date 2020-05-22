const argv = require('./congif/yargs').argv;
const ToDo = require('./ToDo/toDo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = ToDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listadoToDo = ToDo.getListado();

        for (let tarea of listadoToDo) {
            console.log('-------------- Por hacer --------------'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('---------------------------------------'.green);
        }
        break;

    case 'actualizar':
        let actualziado = ToDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualziado);
        break;

    case 'borrar':
        let borrado = ToDo.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}