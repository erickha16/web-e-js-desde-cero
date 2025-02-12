/*
ACTIVIDAD:

+ Declara un arreglo llamado frutas con varios tipos de frutas.
+ Crea un objeto para almacenar la cantidad de cada tipo de fruta.
+ Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
+ Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).



*/
let frutas = [
  {
    nombre: "Uva",
    color: "morado",
  },
  {
    nombre: "Uva",
    color: "morado",
  },
  {
    nombre: "Uva",
    color: "morado",
  },
  {
    nombre: "Uva",
    color: "morado",
  },
  {
    nombre: "Uva",
    color: "morado",
  },
  {
    nombre: "Fresa",
    color: "rojo",
  },
  {
    nombre: "Fresa",
    color: "rojo",
  },
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
    nombre: "Manzana",
    color: "rojo",
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
    nombre: "Uva",
    color: "morado",
  },
  {
    nombre: "Uva",
    color: "morado",
  },
  {
    nombre: "Plátano",
    color: "amarillo",
  },
  {
    nombre: "Plátano",
    color: "amarillo",
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
