/*
Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.
*/

let librosLeidos = [];

//-----------Parte uno (Consola) ----------------\\
/*
function agregarLirbro(libro) {
  librosLeidos.push(libro);
  return libro;
}

function mostrarLibrosLeidos() {
  for (let i = 0; i < librosLeidos.length; i++) {
    console.log(`${i + 1}.- ${librosLeidos[i]}`);
  }
}
*/

//-----------Parte dos (Interfaz del navegador) ----------------\\
function agregarLirbro() {
  let libro = prompt("Añade un libro que hayas leído");

  while (libro != "salir") {
    librosLeidos.push(libro);
    libro = prompt("Añade un libro que hayas leído");
  }

  return "Libros agregados";
}

function mostrarLibrosLeidos() {
  document.write(`<h1>Libros léidos:</h1>`);
  for (let i = 0; i < librosLeidos.length; i++) {
    // console.log(`${i + 1}.- ${array[i]}`);
    document.write(`<h2>${1 + i}.- ${librosLeidos[i]}</h2>`);
  }
  return "Lista mostrada";
}
