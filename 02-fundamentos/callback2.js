let empleados = [{
    id: 1,
    nombre: 'Alejandro'
}, {
    id: 2,
    nombre: 'Sergio'
}, {
    id: 3,
    nombre: 'Catalina'
}];


let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

/*let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id
    })
}*/


let getEmpleado = (id, callback) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            callback(`No existe un empleado con el ID : ${id}`);
        } else {
            callback(null, empleadoDB);
        }
    }
    /*
    getEmpleado(1, (error, empleado) => {
        if (error) {
            return console.log(error);
        }
        console.log(empleado);
    });*/


/*{
    nombre: 'Melissa',
    salario: '3000'
}*/

//No se encontro un salario para el usuario FERNANDO

/*let getSalario = (empleado, callback) => {
    let datoEmpleadoDB = empleados.find(emplea => emplea.nombre === empleado);
    if (datoEmpleadoDB) {
        let salarioDB = salarios.find(salario => salario.id === datoEmpleadoDB.id);
        callback(null, {
            nombre: datoEmpleadoDB.nombre,
            salario: (salarioDB ? salarioDB.salario : '')
        });
    } else {
        callback(`No se encontro un salario para el usuario: ${empleado}`);
    }
}

getSalario('Alejandro', (error, empleado) => {
    if (error) {
        return console.log(error);
    }
    console.log(empleado);
});*/

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontro un salario para el usuario: ${empleado}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
};

getEmpleado(1, (error, empleado) => {
    if (error) {
        return console.log(error);
    }
    //console.log(empleado);
    getSalario(empleado, (error, response) => {
        if (error) {
            return console.log(error);
        }
        console.log(`El salario de ${response.nombre} es de ${response.salario}`);
    });

});