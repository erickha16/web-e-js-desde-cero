//Capturamos los objetos
const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0]; //captura el primer button en caso de haber varios
const boxComments = document.getElementsByClassName("comentarios")[0];

const comments = [];
let i = 0;

let comentar = (event) => {
  event.preventDefault(); //Previene el refresh de la página que trae por default del formulario

  if (inputComment.value === "") return; // Evitar comentarios vacíos

  //1. Se crea la instancia de date y se guerda en variable
  const fecha = new Date().toLocaleString();
  //2. Obtener formato de fecha actual
  //const hoy = fecha.toDateString();
  //3. Se crea el objeto con la info del comentario
  const comment = {
    id: i++,
    date: fecha,
    comment: inputComment.value,
    user: "Erick",
  };
  //5. Añadir comentario al array
  comments.push(comment);
  //6. Llamar a la función printcomment y pasar comments como argumento
  printComment(comments);

  inputComment.value = "";
};

//Función para eliminar comentarios
function eliminarComentario(i) {
  // Buscar el índice real en el array usando findIndex
  const index = comments.findIndex((item) => item.id === i);
  //Si el di se encuentra en el array
  if (index !== -1) {
    comments.splice(index, 1); // Eliminar comentario correctamente
    printComment(comments); // Volver a renderizar la lista
  }
}

//5. Crear función para imprimir comentario
let printComment = (array) => {
  //Limpiamos el espacio de los comentarios
  boxComments.innerHTML = "";
  // Iteramos y agregamos los comentarios
  array.forEach((item) => {
    //Factorizamos el item
    const { id, date, comment, user } = item;
    //Creamos la etiqueta li y la configuramos
    let li = document.createElement("li");
    li.id = id;
    li.innerHTML = `${id + 1}.- ${comment}. Redactado por: ${user}.
         <p class="fechaHora">Fecha y hora de creación: ${date}</p>`;
    //boxComments.innerHTML += `<li>${comment}. Escrito por: ${user}. --Fecha: ${date}</li>`;

    // Creamos el botón de eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.classList.add("eliminar");
    btnEliminar.innerHTML = `<img src="./delete.png" alt="delete">`;
    //agregarmos el evento para eliminar el comentario:
    btnEliminar.addEventListener("click", () => eliminarComentario(id));

    //Agregamos el boton a li y depués li lo agregamos a boxcomment:
    li.appendChild(btnEliminar);
    boxComments.appendChild(li);
  });
};

btnComment.addEventListener("click", comentar);
