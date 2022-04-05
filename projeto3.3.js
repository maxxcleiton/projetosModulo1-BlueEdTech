const prompt = require('prompt-sync')();
console.log();

// Código faz:
// Inicia no dia 1, termina no dia 4 (quando é recuperado pelo helicóptero)
// Quando morre de fome, ou perde a vida, recomeça no dia 1 do começo
// Quando vence o jogo, ele pergunta se quer jogar novamente ou não
// Adicionei com sucesso os arrays 
// arrumar a logica de mortes
// 

let alteraTempo = {
    somarArrayDia: function(array,numero){ 
let nn = array[0] + numero // array desejada de alteracao
array.splice(0,1,nn) // 0 indice/1 n. itens excluidos/nn variavel operacao
return array[0] },
    somarArrayHora: function(array,numero){ 
let nn = array[1] + numero // array desejada de alteracao
array.splice(1,1,nn) // 0 indice/1 n. itens excluidos/nn variavel operacao
return array[1] },
    subtrairArrayDia: function(array,numero){ 
let nn = array[0] - numero // array desejada de alteracao
array.splice(0,1,nn) // 0 indice/1 n. itens excluidos/nn variavel operacao
return array[0] },
    subtrairArrayHora: function(array,numero){ 
let nn = array[1] - numero // array desejada de alteracao
array.splice(1,1,nn) // 0 indice/1 n. itens excluidos/nn variavel operacao
return array[1] } 
// encerra alteraTempo
};

let adicionarHora = {
    maisHora: function(hora){
    alteraTempo.somarArrayHora(tempo,hora)
    }, 
};

let personagem = {
    nome: ``,
    fome: 15,
    vida: 10,
    segurança: 5
};

let tempo = [1, 7] // Dia e Hora
let jogarNovamente;
let playagain;

while (tempo[0] == 1){
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}:00`);
        console.log(`Vida: ${personagem.vida} | Segurança: ${personagem.segurança} | Fome: ${personagem.fome}`);
        console.log('O tempo vai andar de acordo com suas escolhas, não deixe o personagem morrer!\nEstatísticas de morte: vida (< 0) | segurança (< 0) | fome (> 20)');

        // como fazer perguntas que impactem na hora ::::
        // let escolha = +prompt('avance 1h digitando 1\navance 2h digitando 2')
        // if (escolha == 1){
        //     adicionarHora.maisHora(1)
        //     console.log('adicionou-se 1 hora')
        //     console.log(tempo[1])
        // } else if (escolha == 2){
        //     adicionarHora.maisHora(2)
        //     console.log('adicionou-se 2 hora')
        //     console.log(tempo[1])
        // } // testar isso mais pra frente hein


        tempo[1] = +prompt('digite uma hora: ');
        personagem.vida = +prompt('bote um valor de vida: ');
        personagem.fome = +prompt('bote um valor de fome: ');
        personagem.segurança = +prompt(`bote um valor de segurança (atual: ${personagem.segurança}): `);


        if (tempo[1] > 23){
            tempo[0] = 2
            tempo[1] = 0
        };


        // Variáveis de encerramento

        if (personagem.vida < 0){
            console.log(`Game over! Motivo: sem vida! (< 0)`);
            console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
            jogarNovamente = +prompt();
            if (jogarNovamente == 1){
                tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5;
                continue
            } else if (jogarNovamente == 2) {
                break
            };
        };

        if (personagem.segurança < 0){
            console.log(`Game over! Motivo: a proteção da sua casa foi pro brejo e os zumbis tomaram conta (x.x') Motivo: Segurança (< 0)`);
            console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
            jogarNovamente = +prompt();
            if (jogarNovamente == 1){
                tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5;
                continue
            } else if (jogarNovamente == 2) {
                break
            };
        };

        if (personagem.fome > 20){
            console.log(`Game over! Motivo: Morreu de fome (kkk)! (> 20)`);
            console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
            jogarNovamente = +prompt();
            if (jogarNovamente == 1){
                tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5;
                continue
            } else if (jogarNovamente == 2) {
                break
            };
        };




    while (tempo[0] == 2){
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}`);
        console.log(`Vida: ${personagem.vida} | Segurança: ${personagem.segurança} | Fome: ${personagem.fome}`);
        tempo[1] = +prompt('bote uma hora: ')
        personagem.vida = +prompt('bote um valor de vida: ') //alterar pra variaveis que modificam a vida
        personagem.fome= +prompt('bote um valor de fome: ')
        personagem.segurança = +prompt(`bote um valor de segurança (atual: ${personagem[2]}): `)

    if (tempo[1] > 23){
        tempo[0] = 3
        tempo[1] = 0
    };

    // Variaveis de encerramento


    while (tempo[0] == 3){
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}`);
        console.log(`Vida: ${personagem.vida} | Segurança: ${personagem.segurança} | Fome: ${personagem.fome}`);
        tempo[1] = +prompt('bote uma hora: ');
        personagem.vida = +prompt('bote um valor de vida: ') //alterar pra variaveis que modificam a vida
        personagem.fome = +prompt('bote um valor de fome: ')
        personagem.segurança = +prompt(`bote um valor de segurança (atual: ${personagem[2]}): `)

    if (tempo[1] > 23){
        tempo[0] = 4
        tempo[1] = 0
    };

    // Encerramento do game
   
    if (tempo[0] == 4){
        console.log('Parabéns!!! Você conseguiu chegar até o 4º dia e foi resgatado pelo helicóptero.');
        console.log('Deseja jogar novamente? 1. Sim 2. Não');
        playagain = +prompt();
        if (playagain == 1) { tempo[0] = 1; } else { break; }
        };
    };
    };
};