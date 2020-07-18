const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {



    for (let i = 1; i <= limite; i++) {
        console.log(colors.green(`${base} * ${i} = ${base*i}\n`))
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${base}-al-${limite}.txt`)
                //console.log(`El archivo table-${base} ha sido creado!`);
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}