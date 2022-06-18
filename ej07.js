let planetasUser = []
let planetasString = []
const cantidadPlanetas = 3
let planetas = [sistemaSolar.mercurio, sistemaSolar.venus, sistemaSolar.tierra, sistemaSolar.marte, sistemaSolar.jupiter, sistemaSolar.saturno, sistemaSolar.urano, sistemaSolar.neptuno, sistemaSolar.pluton]

let contenido = []

document.body.style.display = `flex`
document.body.style.height = `100vh`
document.body.style.alignItems = `center`
document.body.style.justifyContent = `center`

let encontrado = false
let repetido = false

for (let i = 0; i < cantidadPlanetas; i++) {

    // Lo idóneo sería que estos estilos estuvieran en una única clase de CSS
    // Pero aquí hemos venido a hacer JavaScript

    contenido[i] = document.createElement('div')
    contenido[i].style.width = `300px`
    contenido[i].style.margin = `20px`
    contenido[i].style.padding = `15px`
    contenido[i].style.boxShadow = `10px 10px 8px #888888`

    encontrado = false
    planetasString[i] = prompt("Escribe el nombre del planeta")

    for (let j = 0; j < planetas.length; j++) {
        if (planetas[j].nombre === planetasString[i]) {
            encontrado = true
            planetasUser[i] = planetas[j]
            break
        }
    }

    if (!encontrado) {
        alert("planeta no encontrado")
        break
    } else if (i > 0) {
        for (let j = i-1; j >= 0; j--) {
            if (planetasString[i] === planetasString[j]) {
                alert("planeta repetido!")
                repetido = true
                break
            }
        }
    }

    if (repetido) break
}

if (encontrado && !repetido) {
    
    for (let i = 0; i < cantidadPlanetas; i++) {
        contenido[i].innerHTML += `<h1>${planetasUser[i].nombre}</h1>`
        contenido[i].innerHTML += `<img src="${planetasUser[i].imagen}" alt="${planetasUser[i].nombre}" style="width:100%">`
        contenido[i].innerHTML += `<p>${planetasUser[i].color}</p>`
        contenido[i].innerHTML += `<p>${planetasUser[i].temperatura}</p>`

        document.body.appendChild(contenido[i])
    }

} else {
    contenido[0].innerHTML = "<p>Refresca la página para volver a intentarlo</p>"
    document.body.appendChild(contenido[0])
}