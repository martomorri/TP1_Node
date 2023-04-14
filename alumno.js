export class Alumno {
    constructor(username, dni) {
        this.username = username;
        this.dni = dni;
    }

    static mostrar = (alumno) => {
        return "Username: " + alumno.username + "\nDni: " + alumno.dni;
    }
}