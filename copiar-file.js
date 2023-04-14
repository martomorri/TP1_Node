import fs from 'fs';

export const copiar = (path, newFile) => {
    fs.copyFile(path, newFile, error => {
        if (error) {
            console.log("Error: ", error);
        } else {
            console.log("Archivo creado");
        }
    })
}