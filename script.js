/*
Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo. Tu objetivo es encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

Usar el algoritmo de los dos punteros para identificar rápidamente el primer par de invitados cuyos nombres comienzan con la misma letra.
*/

// Lista de invitados (ya ordenados alfabéticamente)
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Compara las iniciales de los nombres en los punteros
        if(invitados[inicio].charAt(0) === invitados[siguiente].charAt(0)){
            return [invitados[inicio], invitados[siguiente]];  // Si coinciden, devuelve el par
        }
        // Avanza los punteros si no coinciden
        inicio++;
        siguiente++;
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]