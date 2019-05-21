/*let getNombre = async() => {
    return 'Fernando';
}*/

/*let getNombre = () => {
    return new Promise((resolve, reject) => {
        resolve('Fernando');
    });
};*/

//console.log(getNombre());
/*getNombre().then(response => {
    console.log(response);
}).catch(error => {
    console.log('Error Async', error);
});*/

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    });
};

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
}).catch(error => {
    console.log('Error Async', error);
});