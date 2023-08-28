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
  
  //Otra forma con tosorted() o sort(), con una funcion como parametro

  let showArr = arrayFiltrada.toSorted((a, b) => { 
    return a.localeCompare(b) // metodo de string
  });
  showList(showArr);
  /*puedo cambiar toSorted() por sort(), la diferencia esta en que toSorted no modifica el array original (arrayFiltrada) al hacer las siguientes pruebas lo comprobe: 
  
  console.log(arrayFiltrada)
  console.log(showArr)
  console.log(arrayFiltrada)*/

//Primer forma de hacerlo: 
  //let filtradaLower = [];

  /*for (let index = 0; index < arrayFiltrada.length; index++) {
    let element = arrayFiltrada[index];
    element = element.toLowerCase()
    
    filtradaLower = [...filtradaLower, element]; // filtradaLower.push(element)
    
    
  }*/
  
  //showList(filtradaLower.sort());
});
  
