const input = require("pompt-sync")({ sigint: true })

let esCancelar = true
let numInput

while (!esCancelar) {
    numInput = input ('Introduce tu numero')
    if (numInput === 'cancelar') 

    if (Number(numInput)) {
        num = Number(numInput)
        suma += num
    } else if (numInput !== 'cancelar') {
        console.log('Introduce un numero valido')
    } else {
        esCancelar = true
    }

}  