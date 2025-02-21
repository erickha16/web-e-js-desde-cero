/*

//Creación de un objeto literal
let auto = {
  nombre: "kia",
  color: "azul",
  llantas: 4,
};

const { nombre, color, llantas } = auto;

console.log(llantas);

*/

/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
Objeto de muestra:
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

values = Object.keys(student); // ['name', 'sclass', 'rollno']
console.log("Propiedades de student:");
for (let i = 0; i < values.length; i++) {
  console.log(`${1 + i}.- ${values[i]}`);
}
*/

/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    console.log("¿La propiedad name se encuentra dentro del objeto?");
    console.log(student.hasOwnProperty("name"));
*/

//---------Reto de la clase -----------------\\
/*
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, 
estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. 
Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/
const libro = {
  titulo: "Psicología de STARWARS",
  autor: "Travis Langley",
  anio: 2016,
  estado: "disponible",
  capitulos: [],

  descripcion: function () {
    return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}. El estado es: ${this.estado}.`;
  },

  addCap: function (newCap) {
    this.capitulos.push(newCap);
  },
  popCap: function () {
    this.capitulos.pop();
  },
};

console.log(libro.descripcion());
const cajaTexto = document.getElementById("infoLibro");
const cajaCapitulos = document.getElementsByClassName("capitulos")[0];

function imprimir() {
  cajaTexto.innerText = libro.descripcion();
}
function verCaps() {
  //Limpiamos el contenido de los capítulos
  const { capitulos } = libro;

  if (capitulos.length == 0) {
    let p = document.createElement("p");
    p.innerHTML = "Aún no hay capítulos registrados";
    cajaCapitulos.appendChild(p);
  } else {
    cajaCapitulos.innerHTML = "";

    //For para mostrar los capítulos
    for (let i = 0; i < capitulos.length; i++) {
      //Creamos el elemento li que agregaremos
      let li = document.createElement("li");
      // li.id = i + 1;
      li.innerHTML = `${i + 1}.- ${capitulos[i]}`;

      //Agregamos a la caja
      cajaCapitulos.appendChild(li);
    }
  }
}
function addCap() {
  let cap = prompt("Ingresa el nombre del nuevo capítulo");
  libro.addCap(cap);
  alert("Libro agregado con éxito!");
}

function deleteCap() {
  libro.popCap();
  alert("Se ha eliminado el úlitmo capítulo del libro exitosamente");
}
