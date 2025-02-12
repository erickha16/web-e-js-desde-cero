//Pregunta de cultura general
/*
let capital = prompt(
  "¿Cuál es el juego más característico de Xbox?"
).toLowerCase();
while (capital != "halo") {
  if (capital == "gears" || capital == "gears of war" || capital == "gears") {
    console.log("Casi bro, es otro aún mas viejo");
  } else {
    console.log("Respuesta Equivocada ");
  }
  capital = prompt("¿Cuál es el juego más característico de Xbox?");
}
*/
//Expresión regular para eliminar diacrtíticos (acentos, tildes, etc)
//console.log( "bogotá".normalize('NFD').replace(/[\u0300-\u036f]/g,"") )

/* 
//Ciclo while
let num = 1;

while (num <= 10) {
  console.log("7x" + num + "=" + 7 * num);
  num++;
}

*/

/* 
//Ciclo for

for (let i = 0; i <= 10; i++) {
    console.log(`9x${i} = ${9*i}`)
    
}
*/

/*
// Arrays

let colores = ["Rojo", "red", "Azul","blue", "Naranja", "orange", "Verde"];
let conttador = 0;

for (let i = 0; i < colores.length; i++) {
    console.log(`${i+1}. ${colores[i]}`)
}
*/

//Array de objetos de frutas

let frutas = [
  {
    nombre: "Fresa",
    color: "rojo",
  },
  {
    nombre: "Naranja",
    color: "naranja",
  },
  {
    nombre: "Manzana",
    color: "rojo",
  },
  {
    nombre: "Limón",
    color: "verde",
  },
  {
    nombre: "Mora",
    color: "morado",
  },
  {
    nombre: "Pepino",
    color: "verde",
  },
  {
    nombre: "Uva",
    color: "morado",
  },
  {
    nombre: "Plátano",
    color: "amarillo",
  },
];
for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i];
  console.log(`${i + 1}. ${element.nombre}`);

  if (element.color === "verde") {
    console.log(element.nombre + " 💚 ");
  }
}
