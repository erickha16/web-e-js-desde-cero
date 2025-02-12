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

/*
for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i];
  //   console.log(`${i + 1}. ${element.nombre}`);

  //   if (element.color === "verde") {
  //     console.log(element.nombre + " 💚 ");
  //   }
}
*/

/*
//Tipos de fruta presentes
let tipoDeFrutas = [];
for (let i = 0; i < frutas.length; i++) {
  const element = frutas[i];
  if (!tipoDeFrutas.includes(element.nombre)) {
    tipoDeFrutas.push(element.nombre);
  }
}



console.log("Los tipos de frutas disponobles son:");
for (let i = 0; i < tipoDeFrutas.length; i++) {
  console.log(`${i + 1}.- ${tipoDeFrutas[i]}`);
}

*/

//Tipos de fruta presentes y sus cantidades
let frutasEnExistencia = []; //Arreglo para guardar los tipos de frutas y sus cantidades
let tipoDeFrutas = []; //Arreglo para guardar únicamnete los tipos de frutas

//Contador del while
contador = 0;
//Ciclo para recorrer el arreglode todas las frutas
//(Personalmente, me acomodaría utilizando mejor un doble for, pero por cuestiones de aprendizaje, utilicé ambos ciclos)
while (contador < frutas.length) {
  const element = frutas[contador];

  //Si la fruta aún no se encuentra dentro del arreglo "tipoDeFrutas", entra en el if
  if (!tipoDeFrutas.includes(element.nombre)) {
    let cont = 0; //Inicializa el contador para saber la cantidad de dicha fruta

    //Bucle para saber cuantas frutas de ese tipo hay dentro del arreglo
    for (let i = 0; i < frutas.length; i++) {
      const fruta = frutas[i];
      if (element.nombre == fruta.nombre) {
        cont++; //Suma 1 por cada vez que coincida el nombre
      }
    }

    //constante creada para almacenar el tipo de fruta y su cantidad.
    const data = {
      nombre: element.nombre,
      cantidad: cont,
    };

    tipoDeFrutas.push(data.nombre); //Se agrega el nombre de la fruta al arreglo para evitar que se repita
    frutasEnExistencia.push(data); //Se suma data al arreglo objetivo
  }

  contador++;
}
//Imprimimos las frutas en existenica (Nombre y cantidad)
console.log(frutasEnExistencia);
