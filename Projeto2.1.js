var prompt = require('prompt-sync')();
console.clear();

let l = ['pedra', 'papel', 'tesoura'] // Lista
let u = []; // Escolha do usuário
let c = []; // Escolha do computador
let r = 0; // Rodadas (quantidade)
let uw = 0; // Contador de vitórias do usuário
let cw = 0; // Contador de vitórias do computador
let pa = ''; // Jogar novamente

do {

r = +prompt('Quantas rodadas iremos fazer? ');

for (let x = 0; x < r; x++) { // Criei um contador que gira até ficar menor que r.
// Posso usar while (r--)

u = prompt('Qual elemento que você escolhe? ');
console.log(u)

c = Math.floor(Math.random()*3);
console.log(l[c])

// if do usuário
if (u == 'tesoura' && l[c] == 'papel') {
    console.log('Vitória para você! ');
    uw++
} else if (u == 'pedra' && l[c] == 'tesoura') {
    console.log('Vitória para você! ');
    uw++
} else if (u == 'papel' && l[c] == 'pedra') {
    console.log('Vitória para você! ');
    uw++
}

// if do computador
if (l[c] == 'tesoura' && u == 'papel') {
    console.log('Vitória para o computador! ')
    cw++
} else if (l[c] == 'pedra' && u == 'tesoura') {
    console.log('Vitória para o computador! ')
    cw++
} else if (l[c] == 'papel' && u == 'pedra') {
    console.log('Vitória para o computador! ')
    cw++
}

console.log(`Total pontos usuário: ${uw}`);
console.log(`Total pontos computador: ${cw}`)

}

pa = prompt(`Deseja jogar novamente? Digite sim ou não: `)

} while (pa == 'sim');

