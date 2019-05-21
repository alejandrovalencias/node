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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID : ${id}`);
        } else {
            resolve(empleadoDB);
        }
    })
}

/*getEmpleado(3).then(empleado => {
    getSalario(empleado).then(response => {
        console.log(`El salario de ${response.nombre} es de ${response.salario}`);
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});*/

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro un salario para el usuario: ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });

};

/*getSalario({ nombre: 'Alejo', id: 4 }).then(response => {
    console.log(response);
}, (error) => {
    console.log(error);
});*/

getEmpleado(2).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(error => {
    console.log(error);
});