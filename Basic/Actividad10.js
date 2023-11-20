const scanner = require("prompt-sync")({ sigint: true})

const password = "contraseña"

let intento = scanner("Introduce tu contraseña => ")
let tries = 0
let intentosAgotados = false

while (intento !== password && !intentosAgotados) {
    intento = scanner("Contraseña incorrecta ("+ tries +"). intentelo de nuevo ->")
    tries++
    if (tries>3) {
        intentosAgotados = true
    }
}


if (intentosAgotados) {
    console.log("Agotaste tus intentos.")
} else {
    console.log("Contraseña correcta.")
}

