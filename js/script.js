// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función muestra elementos de un array 
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}
// Se nos han colado algunos elementos de tipos extraños, los cuales debemos filtrar, para luego mostrar sólo los elementos de tipo String ordenados alfabéticamente.

document.addEventListener("DOMContentLoaded", (e) => {
  let arrayFiltrada = strangeArray.filter(element => typeof element === 'string')
  let filtradaLower = [];

  for (let index = 0; index < arrayFiltrada.length; index++) {
    let element = arrayFiltrada[index];
    element = element.toLowerCase()
    filtradaLower.push(element)
  }
  
  showList(filtradaLower.sort());
});
