const prompt = require('prompt-sync')();
console.clear();

let alteraTempo = {
    somarArrayDia: (array, numero) => {
        let nn = array[0] + numero; // array desejada de alteracao
        array.splice(0, 1, nn); // 0 indice/1 n. itens excluidos/nn variavel operacao
        return array[0];
    },
    somarArrayHora: (array, numero) => {
        let nn = array[1] + numero; // array desejada de alteracao
        array.splice(1, 1, nn); // 0 indice/1 n. itens excluidos/nn variavel operacao
        return array[1];
    },
};

let adicionarHora = {
    maisHora: (hora) => {
    alteraTempo.somarArrayHora(tempo,hora)
    },
    maisDia: () => { // isso aqui valida e aumenta o dia - aplicar em todas perguntas
        if (tempo[0] == 1 && tempo[1] > 23){
            tempo[0] = 2
            tempo[1] = tempo[1] - 24
            };
        if (tempo[0] == 2 && tempo[1] > 23){
            tempo[0] = 3
            tempo[1] = tempo[1] - 24
            };
        if (tempo[0] == 3 && tempo[1] > 23){
            tempo[0] = 4
            tempo[1] = tempo[1] - 24
            };
    },
};

let personagem = {
    nome: ``,
    fome: 10,
    segurança: 5,
    stats: () => {
        console.log();
        console.log(`------------------------------`);
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}:00`);
        console.log(`Fome: ${personagem.fome} | Segurança: ${personagem.segurança}`);
        console.log();
    },
    somaFome: (numero) => {
        personagem.fome = personagem.fome + numero;
    },
    menosFome: (numero) => {
        personagem.fome = personagem.fome - numero;
    },
    somaSegurança: (numero) => {
        personagem.segurança = personagem.segurança + numero
    },
    menosSegurança: (numero) => {
        personagem.segurança = personagem.segurança - numero
    },
};

let historias = {
    ligação: () => {
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
    },
    introdução: () => {
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
    sejaBemVindo: () => {
        console.log();
        console.log(`------------------------------`);
        console.log(`-"Hoje é o primeiro dia de um mundo que agora está sendo tomado por zumbis, o que você irá fazer?"\n`);
        console.log(`"Você no momento está sozinho, e precisa sobreviver até o 4º dia, que é quando o helicóptero virá para seu resgate."
- Boa sorte!`);
        console.log();
        console.log('- O tempo vai andar de acordo com suas escolhas, não deixe o personagem morrer!\n- Você morre se: fome > 20 || segurança < 1');
        console.log();
    },
    escolhas: () => {
        personagem.stats();
        console.log(`\n1.   Comer (com o que tem disponível) (3h)\n  -10 fome  -1 segurança\n\n2.   Assistir Netflix (6h)\n  +5 fome  -2 segurança\n\n3.   Treino físico (3h) \n  +5 fome  -1 segurança\n\n4.   Ficar na cama se lamentando (12h)\n  +10 fome -3 segurança\n\n5.   Reforçar trancas e portas da casa (4h)\n  +5 fome  +5 segurança\n\n6.   Dormir (8h)\n  +5 fome  -2 segurança`);
        let manhaEscolha1 = +prompt();
        if (manhaEscolha1 == 1) {
            adicionarHora.maisHora(3);
            personagem.menosSegurança(1);
            personagem.menosFome(10);
            adicionarHora.maisDia();

            console.log(`\nUfa, agora que eu comi, me sinto melhor para fazer outras coisas.`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 2) {
            adicionarHora.maisHora(6);
            personagem.menosSegurança(2);
            personagem.somaFome(5);
            adicionarHora.maisDia();

            console.log(`\nUm Netflix aqui para esquecer um pouco dos problemas.`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 3) {
            adicionarHora.maisHora(3);
            personagem.menosSegurança(1);
            personagem.somaFome(3);
            adicionarHora.maisDia();

            console.log(`\nUfa, um exercício físico alivia o stress do que está acontecendo.`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 4) {
            adicionarHora.maisHora(12);
            personagem.menosSegurança(3);
            personagem.somaFome(10);
            adicionarHora.maisDia();

            console.log(`\nJá chorei o que tinha que chorar, e agora?`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 5) {
            adicionarHora.maisHora(4);
            personagem.somaSegurança(5);
            personagem.somaFome(5);
            adicionarHora.maisDia();

            console.log(`\nProteção da casa garantida! (por enquanto)`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 6) {
            adicionarHora.maisHora(8);
            personagem.menosSegurança(2);
            personagem.somaFome(5);
            adicionarHora.maisDia();

            console.log(`\nDormi com medo, mas dormi.`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
    };
    },
};

let tempo = [1, 7] // Dia e Hora
let jogarNovamente;

// Início da história
historias.introdução();

historias.ligação();

historias.sejaBemVindo();

// Início do game
while (tempo[0] == 1){
    historias.escolhas();

    // Variáveis de encerramento
    if (personagem.segurança < 1){
        console.log(`\nVocê morreu! A proteção da sua casa foi pro brejo e os zumbis tomaram conta. (Segurança < 0)`);
        console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
        jogarNovamente = +prompt();
        if (jogarNovamente == 1){
            tempo[0] = 1; tempo[1] = 7; personagem.fome = 10; personagem.segurança = 5;
            continue
        } else if (jogarNovamente == 2) {
            break
        };
        };
    if (personagem.fome > 20){
        console.log(`\nVocê morreu de fome! (fome > 20)`);
        console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
        jogarNovamente = +prompt();
        if (jogarNovamente == 1){
            tempo[0] = 1; tempo[1] = 7; personagem.fome = 10; personagem.segurança = 5;
            continue
        } else if (jogarNovamente == 2) {
            break
        };
        };
    
    while (tempo[0] == 2){
    historias.escolhas();

    // Variáveis de encerramento
        if (personagem.segurança < 1){
            console.log(`\nVocê morreu! A proteção da sua casa foi pro brejo e os zumbis tomaram conta. (Segurança < 0)`);
            console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
            jogarNovamente = +prompt();
            if (jogarNovamente == 1){
                tempo[0] = 1; tempo[1] = 7; personagem.fome = 10; personagem.segurança = 5;
                continue
            } else if (jogarNovamente == 2) {
                break
            };
            };
        if (personagem.fome > 20){
        console.log(`\nVocê morreu de fome! (fome > 20)`);
        console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
        jogarNovamente = +prompt();
        if (jogarNovamente == 1){
            tempo[0] = 1; tempo[1] = 7; personagem.fome = 10; personagem.segurança = 5;
            continue
        } else if (jogarNovamente == 2) {
            break
        };
        };

        while (tempo[0] == 3){
        historias.escolhas();

        // Variáveis de encerramento
            if (personagem.segurança < 1){
                console.log(`\nVocê morreu! A proteção da sua casa foi pro brejo e os zumbis tomaram conta. (Segurança < 0)`);
                console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
                jogarNovamente = +prompt();
                if (jogarNovamente == 1){
                    tempo[0] = 1; tempo[1] = 7; personagem.fome = 10; personagem.segurança = 5;
                    continue
                } else if (jogarNovamente == 2) {
                    break
                };
                };
            if (personagem.fome > 20){
                console.log(`\nVocê morreu de fome! (fome > 20)`);
                console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
                jogarNovamente = +prompt();
                if (jogarNovamente == 1){
                    tempo[0] = 1; tempo[1] = 7; personagem.fome = 10; personagem.segurança = 5;
                    continue
                } else if (jogarNovamente == 2) {
                    break
                };
                };

         // Encerramento do game
            if (tempo[0] == 4){
        console.log('\nParabéns!!! Você conseguiu chegar até o 4º dia e foi resgatado pelo helicóptero.');
        console.log('\nDeseja jogar novamente?\n1. Sim 2. Não');
        jogarNovamente = +prompt();
        if (jogarNovamente == 1) { tempo[0] = 1; } else { break; }
            };
        };
    };
};


// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/maxcleiton/