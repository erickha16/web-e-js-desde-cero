//Declarar una función

function suma(n1, n2) {
  let total = n1 + n2;
  return `El total de la suma es ${total}`;
}

console.log(suma(5, 7));

let cajaDeDrutas = [];

// function agregarFruta(fruta) {
//   cajaDeDrutas.push(fruta);
//   return fruta;
// }

function agregarFruta() {
  let fruta = prompt("Añade una fruta");

  while (fruta != "salir") {
    cajaDeDrutas.push(fruta);
    fruta = prompt("Añade una fruta");
  }
}

function mostrarFrutas(array) {
  for (let i = 0; i < array.length; i++) {
    // console.log(`${i + 1}.- ${array[i]}`);
    document.write(`<h1>${1 + i}.- ${array[i]}</h1>`);
  }
}
