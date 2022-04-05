const prompt = require('prompt-sync')();
console.log();

// Código faz:
// Inicia no dia 1, termina no dia 4 (quando é recuperado pelo helicóptero)
// Quando morre de fome, ou perde a vida, recomeça no dia 1 do começo
// Quando vence o jogo, ele pergunta se quer jogar novamente ou não
// Adicionei com sucesso os arrays 
// arrumar a logica de mortes
// código arrumado, agora é adicionar a historia

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
    segurança: 5,
    stats: function(){
        console.log();
        console.log(`------------------------------`);
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}:00`);
        console.log(`Vida: ${personagem.vida} | Segurança: ${personagem.segurança} | Fome: ${personagem.fome}`);
        console.log();
        console.log('- O tempo vai andar de acordo com suas escolhas, não deixe o personagem morrer!\n- Você morre se: vida (< 0) | segurança (< 0) | fome (> 20)');
        console.log();
    },
};

let historias = {
    introdução: function(){
        console.log(`Você acorda numa manhã normal de domingo...
        \nvocê vai, toma um banho, escova seus dentes...
        \nvai até a varanda de casa para sentir o sol no rosto e terminar de acordar...
        \naté que percebe que lá na rua, existem pessoas andando de uma maneira estranha.
        \nNesse momento você fica em alerta, corre pro celular e decide ligar pra alguém.\n
        `);
        
        personagem.nome = prompt('Escolha o nome do seu personagem: ');
        
        console.log(`\n${personagem.nome}, você tem 3 pessoas para ligar: `);
        
        console.log(`
        1. Pai (chefe de gabinete do presidente)
        2. Mãe (vive com seu pai)
        3. Irmão (está fazendo um mochilão pela Argentina)
        `);
    },
    sejaBemVindo: function(){
        console.log(`\n-"Hoje é o primeiro dia de um mundo que agora está sendo tomado por zumbis, o que você irá fazer?"\n`);
        console.log(`"Você no momento está sozinho, e precisa sobreviver 4 dias até que o helicóptero chegue para seu resgate."
- Boa sorte!\n`);
    }
};

function decisao(decisao){
        let repetir = 1;
        while (repetir == 1) {
        console.log(`------------------------------`);
        console.log(`\nQuer ligar pra quem: [1, 2, 3]:\n`);
        let decisao = +prompt();

        if (decisao == 1){
            console.log(`\ntuuuu.........\ntuuuuuu.............\ntuuuuuuuuu....................
            \n-"Filho! onde você está? tudo está uma loucura! pessoas estão virando mortos vivos, eu estou em segurança com o presidente. Fique em casa! daqui a 3 dias um helicóptero vai te busc-" *qrrrrrrrr* *piiiiiiiii*
    *chamada perdida*`);

            console.log(`\n\nDeseja discar para mais alguém?
            1. Sim
            2. Não`);

            repetir = +prompt();

            // if (repetir == 2){
               // se eu quiser puxar uma funcao
            // }

        } else if (decisao == 2){
            console.log(`\ntuuuuuuuuuuuu........\ntuuuuuuuuuuuuuuu............\ntuuuuuuuuuuuuuuuuuuuu..........
    *chamada perdida*`);

            console.log(`\n\nDeseja discar para mais alguém?
            1. Sim
            2. Não`);

            repetir = +prompt();
            // if (repetir == 2){
            // se eu quiser puxar uma funcao
            // }

        } else if (decisao == 3){
            console.log(`\ntuuuuuuuu.....\ntuuuuuuuuuu......
            \n-"Maninho!!! você está vivo? meu Deus! os mortos estão vivos e atacando as pessoas, eu me reuni com um grupo de amigos e estamos num abrigo, papai disse que vai mandar um helicóptero para cá, tenho que sobreviver até lá, garanto que você faça o mesmo! *hurrrrrrrrrrrr*
    Meu Deus! um zumbi! preciso desligar aqui maninho, me liga quando puder!!"
    *chamada encerrada*`);

            console.log(`\n\nDeseja discar para mais alguém?
            1. Sim
            2. Não`);

            repetir = +prompt();
            // if (repetir == 2){
                //se eu quiser puxar uma funcao
            // }
        }
    }
};

let tempo = [1, 7] // Dia e Hora
let jogarNovamente;
let playagain;

// Início da história

historias.introdução();

decisao(decisao);


while (tempo[0] == 1){

        personagem.stats();

        historias.sejaBemVindo();


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
        console.log();
        console.log(`------------------------------`);
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}:00`);
        console.log(`Vida: ${personagem.vida} | Segurança: ${personagem.segurança} | Fome: ${personagem.fome}`);


        tempo[1] = +prompt('bote uma hora: ')
        personagem.vida = +prompt('bote um valor de vida: ') //alterar pra variaveis que modificam a vida
        personagem.fome= +prompt('bote um valor de fome: ')
        personagem.segurança = +prompt(`bote um valor de segurança (atual: ${personagem.segurança}): `)

    if (tempo[1] > 23){
        tempo[0] = 3
        tempo[1] = 0
    };

    // Variaveis de encerramento
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

    while (tempo[0] == 3){
        console.log();
        console.log(`------------------------------`);
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}:00`);
        console.log(`Vida: ${personagem.vida} | Segurança: ${personagem.segurança} | Fome: ${personagem.fome}`);


        tempo[1] = +prompt('bote uma hora: ');
        personagem.vida = +prompt('bote um valor de vida: ') //alterar pra variaveis que modificam a vida
        personagem.fome = +prompt('bote um valor de fome: ')
        personagem.segurança = +prompt(`bote um valor de segurança (atual: ${personagem[2]}): `)

    if (tempo[1] > 23){
        tempo[0] = 4
        tempo[1] = 0
    };

   // Variaveis de encerramento
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