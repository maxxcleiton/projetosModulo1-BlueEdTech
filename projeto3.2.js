const prompt = require('prompt-sync')();
console.clear();

let personagem = {
    nome: ``,
    fome: 15,
    vida: 10,
}

let tempo = {
    dia: 1,
    hora: 0,
}

// function manha7h(){
//     console.log(`\n1.   Tomar café (com o que tem disponível) (3h)\n  -10 fome\n2.   Assistir Netflix (6h)\n	 + 5 fome\n3.   Treino físico (3h) \n  +5 fome\n4.   Ficar na cama se lamentando (12h)\n  +10 fome`);
//     let manhaEscolha1 = +prompt()
//     if (manhaEscolha1 == 1){
//         tempo(3,0)
//         comida(0,2)
//         fome(0,5)
//         console.log(`\nUfa, agora que eu comi, me sinto melhor para fazer outras coisas.`);
//         prompt(`\nVoltar menu principal (qualquer tecla)__`);
//         manha7h()
//         if (time.horas > 23){
//             i++}
//     } else if (manhaEscolha1 == 2){
//         tempo(6,0)
//         fome(2,0)
//         console.log(`\nUm Netflix aqui para esquecer um pouco dos problemas.`);
//         prompt(`\nVoltar menu principal (qualquer tecla)__`);
//         manha7h()
//         if (time.horas > 23){
//             i++}
//     } else if (manhaEscolha1 == 3){
//         tempo(3,0)
//         fome(2,0)
//         console.log(`\nUfa, um exercício físico alivia o stress do que está acontecendo.`)
//         prompt(`\nVoltar menu principal (qualquer tecla)__`);
//         manha7h()
//         if (time.horas > 23){
//             i++}
//     } else if (manhaEscolha1 == 4){
//         tempo(12,0)
//         console.log(`Já chorei o que tinha que chorar, e agora?`)
//         prompt(`\nVoltar menu principal (qualquer tecla)__`);
//         manha7h()
//         if (time.horas > 23){
//             i++}
//     }
// }
function decisao(decisao){
    let repetir = 1;
    while (repetir == 1) {
    console.log(`------------------------------`);
    console.log(`\nVocê decide ligar para [1, 2, 3]:\n`);
    let decisao = +prompt();

    if (decisao == 1){
        console.log(`\ntuuuu.........\ntuuuuuu.............\ntuuuuuuuuu....................
        \n-"Filho! onde você está? tudo está uma loucura! pessoas estão virando mortos vivos, eu estou em segurança com o presidente. Fique em casa! daqui a 3 dias um helicóptero vai te busc-" *qrrrrrrrr* *piiiiiiiii*
*chamada perdida*`);

        console.log(`\n\nDeseja discar para mais alguém?
        1. Sim
        2. Não`);

        repetir = +prompt();

        if (repetir == 2){
        }

    } else if (decisao == 2){
        console.log(`\ntuuuuuuuuuuuu........\ntuuuuuuuuuuuuuuu............\ntuuuuuuuuuuuuuuuuuuuu..........
*chamada perdida*`);

        console.log(`\n\nDeseja discar para mais alguém?
        1. Sim
        2. Não`);

        repetir = +prompt();
        if (repetir == 2){
            console.log(`Aqui eu devo continuar a historia`);
        }

    } else if (decisao == 3){
        console.log(`\ntuuuuuuuu.....\ntuuuuuuuuuu......
        \n-"Maninho!!! você está vivo? meu Deus! os mortos estão vivos e atacando as pessoas, eu me reuni com um grupo de amigos e estamos num abrigo, papai disse que vai mandar um helicóptero para cá, tenho que sobreviver até lá, garanto que você faça o mesmo! *hurrrrrrrrrrrr*
Meu Deus! um zumbi! preciso desligar aqui maninho, me liga quando puder!!"
*chamada encerrada*`);

        console.log(`\n\nDeseja discar para mais alguém?
        1. Sim
        2. Não`);

        repetir = +prompt();
        if (repetir == 2){
        }

    } //fim do else if
    } //fim do while
} //fim da function

// let decisaocall = 0;

// console.log(`Você acorda numa manhã normal de domingo...
// \nvocê vai, toma um banho, escova seus dentes...
// \nvai até a varanda de casa para sentir o sol no rosto e terminar de acordar...
// \naté que percebe que lá na rua, existem pessoas andando de uma maneira estranha.
// \nNesse momento você fica em alerta, corre pro celular e decide ligar pra alguém.\n
// `);

// personagem.nome = prompt('Escolha o nome do seu personagem: ');

// console.log(`\n${personagem.nome}, você tem 3 pessoas para ligar: `);

// console.log(`
// 1. Pai (chefe de gabinete do presidente)
// 2. Mãe (vive com seu pai)
// 3. Irmão (está fazendo um mochilão pela Argentina)
// `);

// decisao(decisaocall)

// for (i = 1; i <= 3; i++) {
    //  time.dia++
//      time.horas = time.horas + 7;
//     while(i == 1){ /////////////////// DIA 01

//         console.log(`\nDia 0${i}, ${time.horas}:00`);
//         console.log(`Vida total: ${personagem.vida}`);
//         console.log(`Comida disponível: ${personagem.comida}`);
//         console.log(`Fome: ${personagem.fome}`);
//         console.log(`\nHoje é o primeiro dia de um mundo que agora está sendo tomado por zumbis, o que você irá fazer?\n`);
//         console.log(`Você no momento está sozinho, e precisa sobreviver 3 dias até que o helicóptero chegue para seu resgate.
// Boa sorte!\n`);
//         manha7h()
//         if (i == 2){
//             while(i == 2){
//                 console.log(`\nDia 0${i}, ${time.horas}:00`);
//                 prompt('entrei dia 222!!!')
//                 if (time.horas >23){
//                     i++
//                     prompt('entreii dia 3333333')
//                 }
//                 // tempo.dia++
//                 }
//             }

//     }
// }
    /////////////////////////////////////////////////////////////////////////////////////////////

// Código faz:
// Inicia no dia 1, termina no dia 4 (quando é recuperado pelo helicóptero)
// Quando morre de fome, ou perde a vida, recomeça no dia 1 do começo
// Quando vence o jogo, ele pergunta se quer jogar novamente ou não

let tempo1 = 0
let dia = 1
let hora = 0
let vida = 10
let fome = 15

// Cara: isso aqui é como vou fazer os dias no meu código

while (dia == 1){ // enquanto o dia for 1
    console.log(`Dia`, dia);
    console.log('O tempo vai andar de acordo com suas escolhas, não deixe o personagem morrer de fome (20+)')
    hora = +prompt('bote uma hora: ')
    vida = +prompt('bote um valor de vida: ')
    fome = +prompt('bote um valor de fome: ')

    if (hora > 23){
        dia++
    }

    // Variaveis de encerramento
    while (vida < 10){ console.log('voce morreu!');  dia = 1; break } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)
    while (fome > 20){ console.log('voce morreu de fome! (nao deixar passar de 20)');  dia = 1; break } // enquanto a vida for maior que 20, repete
    // /
while (dia ==2){
    console.log(`Dia`, dia);
    hora = +prompt('bote uma hora: ')
    vida = +prompt('bote um valor de vida: ')

    if (hora > 23){
        dia++
    }

    while (vida < 10){ console.log('voce morreu!');  dia = 1; break } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)
    while (fome > 20){ console.log('voce morreu de fome! (nao deixar passar de 20)');  dia = 1; break } // enquanto a vida for maior que 20, repete
}
while (dia == 3){
    console.log(`Dia`, dia);
    hora = +prompt('bote uma hora: ')
    vida = +prompt('bote um valor de vida: ')


    if (hora > 23){
        dia++
    }

    while (vida < 10){ console.log('voce morreu!');  dia = 1; break } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)
    while (fome > 20){ console.log('voce morreu de fome! (nao deixar passar de 20)');  dia = 1; break } // enquanto a vida for maior que 20, repete

    if (dia == 4){
        console.log('parabens, voce conseguiu chegar ate o final e foi resgatato pelo helicoptero')
        console.log('deseja jogar novamente? 1. sim 2. nao')
        playagain = +prompt()
        if (playagain == 1) { dia = 1 } else { break }
    }
}
}