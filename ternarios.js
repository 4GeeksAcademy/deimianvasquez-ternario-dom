// condicionales
let age = 17

// if (age >= 18) {
//     console.log("Puedes entrar")
// } else {
//     console.log("NO aceptamos menores de edad")
// }


// for (let num = 1; num <= 100; num++) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("FIZZBUZZ")
//     } else if (num % 3 == 0) {
//         console.log("FIIZ")
//     } else if (num % 5 == 0) {
//         console.log("BUZZ")
//     } else {
//         console.log(num)
//     }
// }

// Ternarios 
// condición ? (lo que ejecutamos si es verdadero) : (Lo que se ejecuta si es falso)

age >= 18 ?
    console.log("Puedes entrar") :
    console.log("No aceptamos menores de edad")


for (let num = 1; num <= 100; num++) {
    (num % 3 == 0 && num % 5 == 0) ?
        console.log("FIZZBUZZ") :
        (num % 3 == 0) ?
            console.log("FIIZ") :
            (num % 5 == 0) ?
                console.log("BUZZ") :
                console.log(num)
}