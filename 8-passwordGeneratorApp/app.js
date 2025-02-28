//1.
const charLength = document.querySelector("#charLength");
const lengthRange = document.querySelector("#lengthRange");

lengthRange.addEventListener("change", function (e) {
  //e es un pointer event, el cual provee información a un evento que se está modificando
  charLength.textContent = e.currentTarget.value;
});

//2.
const pswdOutPut = document.querySelector("#passwordOutput");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");

//5. Generar arrays para letters, numbers, symbols
// 3. Arrays de caracteres
const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~".split("");

//6. Crera un objeto "utils" para crear las funciones que generen los numeros aleatorios.

const utils = {
  generateRandomBetween: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getCharsFromArray: function (array, num) {
    let chars = "";
    for (let i = 0; i < num; i++) {
      const randNumber = utils.generateRandomBetween(0, array.length - 1);
      chars += array[randNumber];
      if (typeof array[randNumber] === "string") {
        randNumber % 2 === 0
          ? (chars += array[randNumber].toLowerCase())
          : (chars += array[randNumber].toUpperCase());
      } else {
        chars += array[randNumber];
      }
    }
    return chars;
  },
};

//3. Evento y la función del botón genrate

function generatePassword() {
  //4. Capturar elementos que condicionan a password
  const passLength = lengthRange.value;
  const includeNumbers = document.querySelector("#numbers").checked;
  const includeSymbols = document.querySelector("#symbols").checked;

  //   console.log(includeNumbers, includeSymbols, passLength);

  //7. Guardar la contraseña generada
  let tempPassword = "";
  if (includeNumbers) {
    tempPassword += utils.getCharsFromArray(
      numbers,
      utils.generateRandomBetween(3, passLength / 3)
    );
  }
  if (includeSymbols) {
    tempPassword += utils.getCharsFromArray(
      symbols,
      utils.generateRandomBetween(3, passLength / 3)
    );
  }

  //8. Añadir letras a la tempPassword
  tempPassword += utils.getCharsFromArray(
    letters,
    utils.generateRandomBetween(3, passLength - tempPassword.length)
  );
  //console.log(tempPassword);

  //9. Para imprimir en pantalla una contraseña que alterne el orden de los numeros, letras y simbolos

  console.log(
    tempPassword
      .split("") //Separa el streing y lo convierte en array
      .sort(() => Math.random() - 0.5) //Sortea el array
      .join("") //Une el array en un string
  );

  pswdOutPut.value = tempPassword;
}
generateButton.addEventListener("click", generatePassword);

//10. Función para copiar la contraseña
function copyPswd() {
  if (pswdOutPut.value === "") return;
  const psCopy = pswdOutPut.value;
  navigator.clipboard.writeText(psCopy);
}

copyButton.addEventListener("click", copyPswd);
