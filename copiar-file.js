import fs from 'fs';

export const copiar = (path) => {
    fs.copyFile(path, './copia.txt', error => {
        if (error) {
            console.log("Error: ", error);
        } else {
            console.log("Archivo creado");
        }
    })
}