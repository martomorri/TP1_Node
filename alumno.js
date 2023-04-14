export class Alumno {
    constructor(username, dni) {
        this.username = username;
        this.dni = dni;
    }

    mostrar = () => {
        return "Username: " + this.username + "\nDni: " + this.dni;
    }
}