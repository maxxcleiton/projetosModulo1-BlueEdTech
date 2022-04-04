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
}

let adicionarHora = {
    maisHora: function(hora){
    alteraTempo.somarArrayHora(tempo,hora)
    }, 
}

let personagem = {
    nome: ``,
    fome: 15,
    vida: 10,
    segurança: 5
}

let tempo = [1, 7] // dia e hora
let playagain;

// let whiles = {
//     morreu: function(){
//         while (personagem.vida < 0){ 
//             console.log('voce morreu de vida (< 0)!');   
//             meusIfs.jogarNovamente() 
//         } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)
//         while (personagem.fome > 20){ console.log('voce morreu de fome! (> 20)');  meusIfs.jogarNovamente() } // enquanto a vida for maior que 20, repete
//         while (personagem.segurança < 0){ console.log('a segurança da sua casa foi embora e os zumbis invadiram! (< 0)'); meusIfs.jogarNovamente() } // enquanto a segurança for menor que 0
        
//     }
// }

// let meusIfs = {
//     jogarNovamente: function(){
//         if (personagem.vida < 0 || personagem.fome > 20 || personagem.segurança < 0 ){
//         console.log('deseja jogar novamente? 1. sim 2. nao');
//         playagain = +prompt();
//         }
//         if (playagain == 2) {rodarPrograma = false;}
//         while (playagain == 1) {playagain = 0; tempo[0] = 1 };
//         tempo[0] = 1; tempo[1] = 7; personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5;
    
//     },
// }
while (tempo[0] == 1){ // enquanto o dia for 1

        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}:00`);
        console.log(`Vida: ${personagem.vida} | Segurança: ${personagem.segurança} | Fome: ${personagem.fome}`);
        console.log('O tempo vai andar de acordo com suas escolhas, não deixe o personagem morrer\nEstatísticas de morte: vida (< 0) | segurança (< 0) | fome (> 20)');

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


        tempo[1] = +prompt('digite uma hora: ')
        personagem.vida = +prompt('bote um valor de vida: ') //alterar pra variaveis que modificam a vida
        personagem.fome = +prompt('bote um valor de fome: ')
        personagem.segurança = +prompt(`bote um valor de segurança (atual: ${personagem.segurança}): `)


        if (tempo[1] > 23){
            tempo[0] = 2
            tempo[1] = 0
        }



        // Variaveis de encerramento -- funcionando!

        if (personagem.vida < 0){
            console.log('voce morreu de vida (< 0)!');
            console.log(`voce deseja jogar nuevamiente? 1 pra sim e 2 pra nao`);
            let joganuevamiente = +prompt();
            if (joganuevamiente == 1){
                tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5;
                continue
            } else if (joganuevamiente == 2) {
                break
            };
            // break
        } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)

        if (personagem.segurança < 0){
            console.log('a segurança da sua casa foi embora e os zumbis invadiram! (< 0)!');
            console.log(`voce deseja jogar nuevamiente? 1 pra sim e 2 pra nao`);
            let joganuevamiente = +prompt();
            if (joganuevamiente == 1){
                tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5;
                continue
            } else if (joganuevamiente == 2) {
                break
            };
            // break
        } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)

        if (personagem.fome > 20){
            console.log('voce morreu de fome! (>20)');
            console.log(`voce deseja jogar nuevamiente? 1 pra sim e 2 pra nao`);
            let joganuevamiente = +prompt();
            if (joganuevamiente == 1){
                tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5;
                continue
            } else if (joganuevamiente == 2) {
                break
            };
            // break
        } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)

        // while (personagem[1] > 20){ console.log('voce morreu de fome! (>20)');  tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5; break } // enquanto a vida for maior que 20, repete
        // while (personagem[2] < 0){ console.log('a segurança da sua casa foi embora e os zumbis invadiram! (< 0)');  tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5; break } // enquanto a segurança for menor que 0
        

        // if (personagem.vida < 10){
        //     console.log('voce morreu de vida (<10)!')
        //     console.log('deseja jogar novamente? 1. sim 2. nao')
        //     playagain = +prompt()
        //     if (playagain == 1) { tempo[0] = 1 } else { break }
        // }



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
    }

    // Variaveis de encerramento
    // whiles.morreu()
    // while (personagem[0] < 0){ console.log('voce morreu de vida (< 0)!');  tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5; break } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)
    // while (personagem[1] > 20){ console.log('voce morreu de fome! (>20)');  tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5; break } // enquanto a vida for maior que 20, repete
    // while (personagem[2] < 0){ console.log('a segurança da sua casa foi embora e os zumbis invadiram! (< 0)');  tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5; break } // enquanto a segurança for menor que 0
    // }



    while (tempo[0] == 3){
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}`);
        console.log(`Vida: ${personagem.vida} | Segurança: ${personagem.segurança} | Fome: ${personagem.fome}`);
        tempo[1] = +prompt('bote uma hora: ')
        personagem.vida = +prompt('bote um valor de vida: ') //alterar pra variaveis que modificam a vida
        personagem.fome = +prompt('bote um valor de fome: ')
        personagem.segurança = +prompt(`bote um valor de segurança (atual: ${personagem[2]}): `)

    if (tempo[1] > 23){
        tempo[0] = 4
        tempo[1] = 0
    }

    // Variaveis de encerramento
    whiles.morreu()
    // while (personagem[0] < 0){ console.log('voce morreu de vida (< 0)!');  tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5; break } // enquanto a vida for menor que 10, repete (se morrer ele breaka e repete)
    // while (personagem[1] > 20){ console.log('voce morreu de fome! (>20)');  tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5; break } // enquanto a vida for maior que 20, repete
    // while (personagem[2] < 0){ console.log('a segurança da sua casa foi embora e os zumbis invadiram! (< 0)');  tempo[0] = 1; tempo[1] = 7;  personagem.vida = 10; personagem.fome = 15; personagem.segurança = 5; break } // enquanto a segurança for menor que 0

    if (tempo[0] == 4){
        console.log('parabens, voce conseguiu chegar ate o final e foi resgatato pelo helicoptero')
        console.log('deseja jogar novamente? 1. sim 2. nao')
        playagain = +prompt()
        if (playagain == 1) { tempo[0] = 1 } else { break }
        }
    }
    }
}