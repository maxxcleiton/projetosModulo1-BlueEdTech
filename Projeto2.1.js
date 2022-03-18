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
console.log();
console.log('Jogo do pedra, papel e tesoura.\nModo: contra o computador\nSerá que você é capaz de derrotar sua própria máquina?\n\nVocê pode escolher: pedra, papel e tesoura.\n\nBoa sorte!');
console.log(`--------`);
console.log();

r = +prompt('Digite o número de rodadas: ');
console.log();

for (let x = 0; x < r; x++) { // Criei um contador que gira até ficar menor que r.
// Poderia usar while (r--) também
console.log();
u = prompt('Qual o elemento de sua escolha? ');
console.log(`Você escolheu: ${u}`);
console.log();

c = Math.floor(Math.random()*3);
console.log();
console.log('... (computador processando...)')
console.log();
console.log(`O computador escolheu: ${l[c]}`);
console.log();

// if do usuário
if (u == 'tesoura' && l[c] == 'papel') {
    console.log('Vitória para você! ');
    console.log();
    uw++
} else if (u == 'pedra' && l[c] == 'tesoura') {
    console.log('Vitória para você! ');
    console.log();
    uw++
} else if (u == 'papel' && l[c] == 'pedra') {
    console.log('Vitória para você! ');
    console.log();
    uw++
} // if do usuário

// if do computador
if (l[c] == 'tesoura' && u == 'papel') {
    console.log('Vitória para o computador! ');
    console.log();
    cw++
} else if (l[c] == 'pedra' && u == 'tesoura') {
    console.log('Vitória para o computador! ');
    console.log();
    cw++
} else if (l[c] == 'papel' && u == 'pedra') {
    console.log('Vitória para o computador! ');
    console.log();
    cw++
} // if do computador

// if de empate
if (u == 'tesoura' && l[c] == 'tesoura') {
    console.log('Empate.');
    console.log();
} else if (u == 'papel' && l[c] == 'papel') {
    console.log('Empate.');
    console.log();
} else if (u == 'pedra' && l[c] == 'pedra') {
    console.log('Empate.');
    console.log();
} // if de empate

console.log(`---------------------`);
console.log(`Total de pontos humano: ${uw}`);
console.log(`Total de pontos máquina: ${cw}`);
console.log(`---------------------`);

} // for

if (uw > cw) { // Vencedor geral
    console.log('Parabéns humano! você venceu a máquina.')
} else if (cw > uw) {
    console.log('O vencedor foi a máquina, é difícil mesmo vencer um super cérebro que processa milhões de informações e blá blá blá...');
} // Vencedor geral

console.log();
pa = prompt(`Deseja jogar novamente? Digite sim ou não: `)
console.log();

} while (pa == 'sim'); 


// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/