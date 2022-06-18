let contenido = document.createElement('div')

let num = parseInt(prompt("Introduce un número"))

if (num < 100) {
    contenido.style.color = "green"
} else if (num >= 100 && num < 200) {
    contenido.style.color = "yellow"
} else {
    contenido.style.color = "red"
}

contenido.innerHTML = num.toString()
document.body.appendChild(contenido)