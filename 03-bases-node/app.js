const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = '9';

// enviar paramtro por consola 
//node app.js --base=10
let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];

//console.log(base);
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch((error) => console.log(error));