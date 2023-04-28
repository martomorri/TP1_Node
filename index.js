import {reverseString, concatOnly} from './manejo-string.js';
import {sumar, restar, multiplicar, dividir} from './matematica.js';
import {Alumno} from './alumno.js';
import {copiar} from './copiar-file.js';
import { parseUrl } from './parse-url.js';
import { obtenerMoneda } from './country-code.js';
import { PizzaService } from './pizza-service.js';

/*//EJ1
let string1 = "Alote";
let string2 = "Morro";
console.log(concatOnly(string1, string2))
console.log(reverseString(string1, string2));

//EJ2
console.log(sumar(1,2));
console.log(restar(1,2));
console.log(multiplicar(1,2));
console.log(dividir(1,2));

//EJ3
let alumno = new Alumno("martomorri", 46873102);
console.log(alumno.mostrar());

//EJ4
copiar('./boca.txt', './copia.txt');

//EJ5 y EJ6
console.log(parseUrl("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/1931303/tp2-nodejs-basico"));
console.log(parseUrl(5));

//EJ7
let countryCode = "UZA";
console.log("La moneda del pais " + countryCode + " es: " + obtenerMoneda(countryCode));
countryCode = "AR";
console.log("La moneda del pais " + countryCode + " es: " + obtenerMoneda(countryCode));*/

//EJ8: GetById de Pizzas
console.log(await PizzaService.getById(1));
