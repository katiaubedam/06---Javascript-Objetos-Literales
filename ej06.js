let nombre = prompt("Escribe el nombre de la persona de la cual quieres información")
let arrayPersonas = [personas.BridgetteMcGuire, personas.CraneHarris, personas.EleanorStafford, personas.KimberleyRoberson, personas.TessaSellers, personas.WardFulton, personas.melindawheeler]

let contenido = document.createElement('div')
let encontrado = false
let persona

document.body.style.display = `flex`
document.body.style.height = `100vh`
document.body.style.alignItems = `center`

contenido.style.width = `400px`
contenido.style.margin = `auto`
contenido.style.padding = `15px`
contenido.style.boxShadow = `10px 10px 8px #888888`

for (let i = 0; i < arrayPersonas.length; i++) {
    encontrado = false

    if (arrayPersonas[i].name === nombre) {
        encontrado = true
        persona = arrayPersonas[i]
        break
    }
}

if (encontrado) {
    contenido.innerHTML += `<img src="${persona.picture}" alt="${persona.name}">`
    contenido.innerHTML += `<h1>${persona.name}</h1>`
    contenido.innerHTML += `<p>${persona.age}</p>`
    contenido.innerHTML += `<p>${persona.email}</p>`
    contenido.innerHTML += `<p>${persona.address}</p>`
    contenido.style.backgroundColor = persona.eyeColor
} else {
    contenido.innerHTML = "Persona no encontrada"
}

document.body.appendChild(contenido)