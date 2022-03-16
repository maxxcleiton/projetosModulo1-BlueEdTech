var prompt = require('prompt-sync')();

console.clear();

//Math.floor(Math.random())

//Início
// Para hoje 15/3
// O projeto é extenso, e temos muito o que fazer! Mas vamos começar por partes. Para hoje seus objetivos são:
// Criar uma lista com os elementos a serem escolhidos;
// Criar as variáveis que receberão as escolhas do usuário e do computador (prompt para o usuário, e aleatório para o computador);
// Fazer a validação da entrada do usuário (o programa só deve aceitar o que foi definido por você como entradas válidas);
// Exibir o elemento da lista correspondente à escolha de cada um;
// Comparar os elementos e exibir quem foi o vencedor dessa rodada.


// Criar uma lista com os elementos a serem escolhidos;
const lista = ['pedra', 'papel', 'tesoura'];

// Criar as variáveis que receberão as escolhas do usuário e do computador (prompt para o usuário, e aleatório para o computador);
let rodadas = 0;
let escolha = '';
let escolhaLow = [];
let escolhaAlt = [];

// escolhas do usuário
rodadas = +prompt('Escolha quantas rodadas iremos fazer: ');

escolha = prompt('Pedra, papel, ou tesoura? ')
escolhaLow = escolha.toLowerCase();

if (escolhaLow == 'pedra') {
    escolhaAlt.push(escolhaLow);
    console.log(escolhaAlt)
} else if (escolhaLow == 'papel') {
    escolhaAlt.push(escolhaLow);
    console.log(escolhaAlt)
} else if (escolhaLow == 'tesoura') {
    escolhaAlt.push(escolhaLow);
    console.log(escolhaAlt)
}


// escolhas do computador
//Math.random gives you a random number between 0 and 1.

// Multiplying this value by the length of your array will give you a number strictly less than the length of your array.

// Calling Math.floor on that will truncate the decimal, and give you a random number within the bounds of your array

// var arr = [1, 2, 3, 4, 5];
// //array length = 5;

// var rand = Math.random();
// //rand = 0.78;
// rand *= arr.length; //(5)
// //rand = 3.9
// rand = Math.floor(rand);
// //rand = 3
// var arr = [1, 2, 3, 4, 5];
// //array length = 5;

// var rand = Math.random();
// //rand = 0.9999;
// rand *= arr.length; //(5)
// //rand = 4.9995
// rand = Math.floor(rand);
// //rand = 4 - safely within the bounds of your array

function randomChoice(lista) {
        return lista[Math.floor(lista.length * Math.random())];  
};

// Variáveis dos if's da máquina
let maqPoints = 0;
let = rMachine = randomChoice(lista)
console.log(rMachine);

// if's da máquina
//resultado da maquina é rMachine, contador maqPoints
//resultado do usuario é escolhaAlt, contador userPoints

if (rMachine == 'tesoura' || escolhaAlt == 'papel') {
    maqPoints++
    console.log(`A máquina ganhou! Total de pontos da máquina: ${maqPoints}`)
}
if (rMachine == 'pedra' || escolhaAlt == 'tesoura') {
    maqPoints++
    console.log(`A máquina ganhou! Total de pontos da máquina: ${maqPoints}`);
}
if (rMachine == 'papel' || escolhaAlt == 'pedra') {
    maqPoints++
    console.log(`A máquina ganhou! Total de pontos da máquina: ${maqPoints}`);
}

let userPoints = 0;

//if's do usuário
if (escolhaAlt == 'tesoura' || rMachine == 'papel') {
    userPoints++
    console.log(`A máquina ganhou! Total de pontos da máquina: ${userPoints}`)
}
if (escolhaAlt == 'pedra' || rMachine == 'tesoura') {
    userPoints++
    console.log(`A máquina ganhou! Total de pontos da máquina: ${userPoints}`);
}
if (escolhaAlt == 'papel' || rMachine == 'pedra') {
    userPoints++
    console.log(`Você ganhou da máquina! Seu total de pontos: ${userPoints}`);
}