let fecha = prompt("Introduce tu fecha de nacimiento:")
let nombre = prompt("Introduce tu nombre:")
let apellido = prompt("Introduce tu apellido:")
let genero = prompt("¿Deseas tu nombre en masculino o en femenino? (M/F)").toUpperCase()

let nombreSuperHeroe = ""

switch (nombre.charAt(0).toLowerCase()) {
    case "a": case "á":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.a.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.a.femenino
        }
        
        break
    case "b":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.b.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.b.femenino
        }
        break
    case "c":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.c.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.c.femenino
        }
        break
    case "d":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.d.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.d.femenino
        }
        break
    case "e": case "é":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.e.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.e.femenino
        }
        break
    case "f":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.f.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.f.femenino
        }
        break
    case "g":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.g.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.g.femenino
        }
        break
    case "h":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.h.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.h.femenino
        }
        break
    case "i": case "í":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.i.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.i.femenino
        }
        break
    case "j":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.j.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.j.femenino
        }
        break
    case "k":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.k.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.k.femenino
        }
        break
    case "l":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.l.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.l.femenino
        }
        break
    case "m":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.m.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.m.femenino
        }
        break
    case "n":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.n.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.n.femenino
        }
        break
    case "o": case "ó":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.o.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.o.femenino
        }
        break
    case "p":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.p.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.p.femenino
        }
        break
    case "q":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.q.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.q.femenino
        }
        break
    case "r":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.r.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.r.femenino
        }
        break
    case "s":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.s.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.s.femenino
        }
        break
    case "t":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.t.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.t.femenino
        }
        break
    case "u": case "ú":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.u.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.u.femenino
        }
        break
    case "v":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.v.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.v.femenino
        }
        break
    case "w":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.w.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.w.femenino
        }
        break
    case "x":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.x.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.x.femenino
        }
        break
    case "y":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.y.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.y.femenino
        }
        break
    case "z":
        if (genero === "M") {
            nombreSuperHeroe += letraNombre.z.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraNombre.z.femenino
        }
}

nombreSuperHeroe += " "

switch (apellido.charAt(apellido.length-1).toLowerCase()) {
    case "a": case "á":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.a.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.a.femenino
        }
        
        break
    case "b":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.b.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.b.femenino
        }
        break
    case "c":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.c.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.c.femenino
        }
        break
    case "d":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.d.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.d.femenino
        }
        break
    case "e": case "é":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.e.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.e.femenino
        }
        break
    case "f":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.f.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.f.femenino
        }
        break
    case "g":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.g.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.g.femenino
        }
        break
    case "h":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.h.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.h.femenino
        }
        break
    case "i": case "í":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.i.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.i.femenino
        }
        break
    case "j":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.j.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.j.femenino
        }
        break
    case "k":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.k.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.k.femenino
        }
        break
    case "l":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.l.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.l.femenino
        }
        break
    case "m":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.m.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.m.femenino
        }
        break
    case "n":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.n.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.n.femenino
        }
        break
    case "o": case "ó":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.o.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.o.femenino
        }
        break
    case "p":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.p.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.p.femenino
        }
        break
    case "q":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.q.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.q.femenino
        }
        break
    case "r":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.r.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.r.femenino
        }
        break
    case "s":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.s.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.s.femenino
        }
        break
    case "t":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.t.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.t.femenino
        }
        break
    case "u": case "ú":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.u.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.u.femenino
        }
        break
    case "v":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.v.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.v.femenino
        }
        break
    case "w":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.w.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.w.femenino
        }
        break
    case "x":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.x.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.x.femenino
        }
        break
    case "y":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.y.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.y.femenino
        }
        break
    case "z":
        if (genero === "M") {
            nombreSuperHeroe += letraApellido.z.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += letraApellido.z.femenino
        }
}

nombreSuperHeroe += " "

switch (parseInt(fecha.charAt(fecha.length-1))) {
    case 0:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num0.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num0.femenino
        }     
        break

    case 1:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num1.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num1.femenino
        }     
        break
    case 2:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num2.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num2.femenino
        }     
        break

    case 3:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num3.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num3.femenino
        }     
        break
    case 4:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num4.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num4.femenino
        }     
        break
    case 5:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num5.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num5.femenino
        }     
        break

    case 6:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num6.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num6.femenino
        }     
        break
    case 7:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num7.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num7.femenino
        }     
        break
    case 8:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num8.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num8.femenino
        }     
        break
    case 9:
        if (genero === "M") {
            nombreSuperHeroe += fechaNacimiento.num9.masculino
        } else if (genero === "F") {
            nombreSuperHeroe += fechaNacimiento.num9.femenino
        }
}

console.log(`Tu nombre de Superhéroe es: ${nombreSuperHeroe}`)