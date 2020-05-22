const fs = require('fs');

let listadoToDo = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoToDo);
    fs.writeFile('DB/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });

};

const cargarDB = () => {

    try {
        listadoToDo = require('../DB/data.json');
    } catch (error) {
        listadoToDo = [];
    }

}

const crear = (descripcion) => {

    cargarDB();

    let ToDo = {
        descripcion,
        completado: false
    };

    listadoToDo.push(ToDo);
    guardarDB();

    return ToDo;

};

const getListado = () => {

    cargarDB();
    return listadoToDo;

};

const actualizar = (descripcion, completado = false) => {

    cargarDB();
    let index = listadoToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {

    cargarDB();
    let nuevoListado = listadoToDo.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoToDo.length === nuevoListado.length) {
        return false;
    } else {
        listadoToDo = nuevoListado;
        guardarDB();
        return true;
    }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}