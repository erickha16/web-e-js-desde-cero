/*
Actividad:
 + Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
 + Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
 + Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
 + Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)

*/
//Capturamos los objetos
const inputComment = document.getElementById("inputComentario");
const btnComment = document.getElementsByTagName("button")[0]; //captura el primer button en caso de haber varios
const boxComments = document.getElementsByClassName("comentarios")[0];

//Creamos el array para almacenar los comnetarios
let comentarios = [];
//Creamos un array para almacenar las fechas y las horas de los comentarios
let horarios = [];

//fucnión para agregar comentarios v1

/*
let comentar = (event) => {
  event.preventDefault(); //Previene el refresh de la página que trae por default del formulario
  const fechaHora = new Date().toLocaleString(); //Fecha y hora del comentario
  console.log(fechaHora);
  let comentario = inputComment.value;

  if (comentario === "") return; // Evitar comentarios vacíos

  //Agregamos el comentario y la hora y fecha a sus respectivos array
  comentarios.push(comentario);
  horarios.push(fechaHora);

  //Limpiamos el contenido de la caja de comentarios, ya que posteriormente se creó un for que agrega los elementos dentro del array. Si esta línea se omite, se repetirían varias vees los comentarios
  boxComments.innerHTML = "";

  //For para agregar el contenido del array a la caja de comentarios
  for (let i = 0; i < comentarios.length; i++) {
    
    //----- Old way
    boxComments.innerHTML += `<li id="${i + 1}">${i + 1}.- ${
      comentarios[i]
    }.<p class="fehaHora">Fecha y hora de creación: ${
      horarios[i]
    }</p> <button class="eliminar" onclick="eliminarComentario()">X</button></li>`;
    


    //------ New way ----- \\
    //Creamos el elemento li que agregaremos
    let li = document.createElement("li");
    li.id = i + 1;
    li.innerHTML = `${i + 1}.- ${comentarios[i]}
       <p class="fechaHora">Fecha y hora de creación: ${horarios[i]}</p>`;

    // Creamos el botón de eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.classList.add("eliminar");
    btnEliminar.textContent("X");
    //agregarmos el evento para eliminar el comentario:
    btnEliminar.addEventListener("click", () => eliminarComentario(i));

    //Agregamos el boton a li y depués li lo agregamos a boxcomment:
    li.appendChild(btnEliminar);
    boxComments.appendChild(li);
  }

  //Limpiamos el output
  inputComment.value = "";
};

*/
//fucnión para agregar comentarios v2 (Eficiente)
let comentar = (event) => {
  event.preventDefault(); //Previene el refresh de la página que trae por default del formulario
  const fechaHora = new Date().toLocaleString(); //Fecha y hora del comentario
  let comentario = inputComment.value;

  if (comentario === "") return; // Evitar comentarios vacíos

  //Agregamos el comentario y la hora y fecha a sus respectivos array
  comentarios.push(comentario);
  horarios.push(fechaHora);

  //Llamamos a la función que renderiza la lista
  renderizarLista();

  //Limpiamos el output
  inputComment.value = "";
};

//Función para eliminar comentarios
function eliminarComentario(i) {
  //Eliminar el elemento de los arrays
  comentarios.splice(i, 1);
  horarios.splice(i, 1);

  //Volver a renderizar la lista
  renderizarLista();
}

function renderizarLista() {
  //Limpiamos el contenido de la caja de comentarios, ya que posteriormente se creó un for que agrega los elementos dentro del array. Si esta línea se omite, se repetirían varias vees los comentarios
  boxComments.innerHTML = "";

  //For para agregar el contenido del array a la caja de comentarios
  for (let i = 0; i < comentarios.length; i++) {
    //Creamos el elemento li que agregaremos
    let li = document.createElement("li");
    li.id = i + 1;
    li.innerHTML = `${i + 1}.- ${comentarios[i]}
         <p class="fechaHora">Fecha y hora de creación: ${horarios[i]}</p>`;

    // Creamos el botón de eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.classList.add("eliminar");
    btnEliminar.textContent = "X";
    //agregarmos el evento para eliminar el comentario:
    btnEliminar.addEventListener("click", () => eliminarComentario(i));

    //Agregamos el boton a li y depués li lo agregamos a boxcomment:
    li.appendChild(btnEliminar);
    boxComments.appendChild(li);
  }
}

btnComment.addEventListener("click", comentar);
