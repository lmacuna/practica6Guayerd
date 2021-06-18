//EJERCICIO Nº1 
//a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
/*
let frutas = [];
let fruta;

for (let i = 0; i < 5; i++) {
    fruta = prompt("ingrese 5 frutas");
    frutas.push(fruta);
}
console.log(frutas);
*/



//EJERCICIO Nº2
//b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
/*
let frutas1 = [];
let fruta1;
do {
    fruta1 = prompt("ingresa tus frutas cuando termines ingresa cero");
    if (fruta1 != "0") {
        frutas1.push(fruta1);
    }

} while (fruta1 != "0")
console.log(frutas1);
*/


//EJERCICIO Nº3
//c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.
/*
frutas3 = frutas.concat(frutas1);
console.log(frutas3);
*/


//EJERCICIO Nº4 ARRAY CIUDADES
//Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.

/*
let ciudades = ["nueva york", "Buenos aires", "Bogota", "Ankara", "Budapest", "Tbilisi", "Moscu"];
let ciudad;

for (let i = 0; i < ciudades.length; i++) {
    ciudad = parseInt(prompt("ingrese la posicion de la ciudad a buscar"));

    if (ciudad > ciudades.length) {
        console.log("la posicion buscada no fue encontrada o no existe");

        break;
    } else {
        console.log(ciudades[ciudad]);
        break;
    }

}
//console.log(ciudades[ciudad]);
*/



//EJERCICIOS Nº5
//Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.
/*
let ciudades = ["nueva york", "Buenos aires", "Bogota", "Ankara", "Budapest", "Tbilisi", "Moscu"];
let borrar = parseInt(prompt("ingresar la cantidad de ciudades que quisiara borrar"));
let ciudad;
for (let i = 0; i < borrar; i++) {
    ciudades.pop();

}
console.log(ciudades);
*/



//EJERCICIO Nº6 ARRAY ARTISTAS MUSICALES

/*
El último elemento.
Solo las posiciones pares
todos los elementos
todos los elementos menos el último 
Todos los elementos menos el primero
todos los elementos separados por “*”.
Solicitar al usuario un nuevo artista para reemplazar al útimo ingresado.
//Crear un array de 8 posiciones con nombres de artistas musicales y mostrar:
//Su longitud/
*/

let artistas = ["Gustavo Cerati", "Luis Alberto Spinetta", "Fabiana Cantilo", "Hilda Lizarazu", "Marcela Morelos", "Fito Paez", "Juan carlos Baglietto", "Federico Moura"];
/*
//console.log(artistas.length);
//console.log(artistas[7]);

console.log("posiciones pares:\n\n");
for (i = 0; i < artistas.length; i++) {
    if (i !== 0 && i % 2 == 0) {
        console.log(i + " " + artistas[i]);
    }
}
*/
console.log("\n\n\n");
console.log("todos los elementos: ")
console.log("\n");
/*
for (let i = 0; i < artistas.length; i++) {
    console.log(artistas[i]);
}
*/
console.log("\n\n\n");
console.log("menos el ultimo:");
//console.log("se elimino: " + artistas.pop());
console.log("\n");
/*
for (let i = 0; i < artistas.length; i++) {
    console.log(artistas[i]);
}
*/
console.log("\n\n\n");
console.log("menos el primero: ");
/*
console.log("Se eliminó: " + artistas.shift());
console.log("\n");
for (let i = 0; i < artistas.length; i++) {
    console.log(artistas[i]);
}
*/

console.log("\n\n\n");
console.log("Separados por asteriscos:");
console.log("\n\n");
/*
let separados = 0;
let aste = "*";
for (let i = 0; i < artistas.length - 1; i++) {

    separados += aste + " " + artistas[i] + " ";
    separados = separados.replace("0", "");


}
separados = separados.replace("*", " ");
console.log(separados);
*/
console.log("\n\n\n");
//MUESTRO ARTISTAS PRIMERO Y DESPUES CAMBIO
/*
for (let i = 0; i < artistas.length; i++) {
    console.log(i + " " + artistas[i]);
}
*/
console.log("\n");

console.log("Reemplazar el ultimo: ");
/*
let nuevoArtista = prompt("ingresa tu artista");
console.log("Se reemplazo en la ultima posicion a: " + " " + artistas[7]);
artistas[7] = nuevoArtista;
*/
console.log("\n");
/*
for (let i = 0; i < artistas.length; i++) {
    console.log(artistas[i]);
}
*/

//EJERCICIO Nº7
/*
Crear un array de 8 posiciones con números enteros y mostrar: ¹Su longitud
Solo las posiciones impares.
Solo los NUMEROS impares.
El mayor de ellos
Mostrar la mitad de elementos del array.(Pensar esto como si no supieramos la cantidad de posiciones que tiene.)
*/

//longitud

let numeros = [8, 3, 20, 15, 7, 38, 22, 11];
/*
console.log(numeros.length);
*/
console.log("\n");

//posiciones impares
/*
for (let i = 0; i < numeros.length; i++) {
    if (i % 2 !== 0 && i > 0) {
        console.log("El numero " + numeros[i] + " " + "en la posicion: " + i);
    }

}
*/

//numeros impares
/*
console.log("numeros impares:");
console.log("\n");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
        console.log(numeros[i]);
    }
}
*/
//el mayor
/*
let mayor = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }

}
console.log(mayor);
*/
//mostrar mitad de posiciones 
console.log("Mostrando la mitad del array:");
console.log("\n");
let longitud = numeros.length;
for (let i = 0; i < numeros.length; i++) {
    numeros = numeros.slice(0, longitud / 2);
    console.log("El numero" + " " + numeros[i] + " " + "en la posicion: " + i);
}