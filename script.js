// forma de seleccionar las etiquetas como objetos (Se puede hacer con clases y con ID tambien)

const h1 = document.querySelector("h1")
//const p = document.querySelector("p")
//const parrafito = document.getElementsByClassName("parrafito")
//const pid = document.getElementById("pid")
//const input = document.querySelector("input")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const pResult = document.querySelector("#result")
btn.addEventListener("click", btnOnClick)



// reemplaza lo que ta adentro por HTML
h1.innerHTML = "Patito";
// reemplaza lo que ta adentro por texto plano
h1.innerText = "Patito";
// asi accedes al atributo pantalla, y te devuelve la clase, que en este caso es rojo
h1.getAttribute("class")
// Cambia el primer atributo que le des por el segundo, en este caso la clase roja la cambia por verde
h1.setAttribute("rojo", "verde")
// Agrega la clase violeta, entre las clases ya definidas
h1.classList.add("violeta")
// Borra la clase violeta
h1.classList.remove("violeta")
// Si la tiene se la quita, si no la tiene se la pone
h1.classList.toggle("violeta")
// Te devuelve true o false, dependiendo si tiene la clase o no
h1.classList.contains("violeta")

//////////////////////
// Sirve para crear un elemento nuevo

const imgGatoLlorando = document.createElement("img")
imgGatoLlorando.setAttribute("src", "https://media.tenor.com/THcNixKh2QkAAAAi/banana-cat-crying-cat.gif")

pid.append(imgGatoLlorando) 

//////////////////////
// funciones que cambian cosas, el "btnOnClick" podria haber tenido cualquier nombre

function btnOnClick() {
const valor1 = parseInt(input1.value)
const valor2 = parseInt(input2.value)
const sumaInputs = valor1 + valor2 
pResult.innerText = "Resultado: " + sumaInputs
}

//////////////////////
// 