//Esta función está disponible en cualquer parte del documento
//function saludame() {}

//Esta función existe a partir de donde se declara
let saludame = () => {
  alert("Hola Mundo");
};

//Campura de elementos variables
const parrafo = document.getElementById("txt");

// Creación de funciones para modificar el elemento
let changeText = () => {
  parrafo.innerText = "Arriba el JS DOM y Star wars!!!";
  parrafo.style.color = "tomato";
  parrafo.style.fontSize = "2rem";
  parrafo.style.textDecoration = "underline";
  parrafo.style.fontStyle = "italic";
};

//Caputra de elementos por tag
const listaElements = document.getElementsByTagName("li");
//Por classname
// const listaElements = document.getElementsByClassName("list")

//Actividad:
//Capturamos los objetos
const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0]; //captura el primer button en caso de haber varios
const boxComments = document.getElementsByClassName("comentarios")[0];

let comentar = (event) => {
  event.preventDefault(); //Previene el refresh de la página que trae por default del formulario
  console.log(inputComment.value);
  //   console.log(event);
  boxComments.innerHTML += `<li>${inputComment.value}</li>`;
  inputComment.value = "";
};

btnComment.addEventListener("click", comentar);
