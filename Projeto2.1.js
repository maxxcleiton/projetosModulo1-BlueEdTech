var prompt = require('prompt-sync')();
console.clear();

let l = ['pedra', 'papel', 'tesoura'] // Lista
let u = []; // Escolha do usuário
let c = []; // Escolha do computador

u = prompt('Qual elemento que você escolhe? ');
console.log(u)

c = Math.floor(Math.random()*3);
console.log(l[c])

