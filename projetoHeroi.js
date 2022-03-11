var prompt = require('prompt-sync')();
// npm i prompt-sync

console.clear();

let historia = '"O guerreiro intergalático recém chegou de sua aventura, onde ele teve de devolver uma criança poderosa à sua raça originária (que é uma inimiga histórica de sua raca), conseguiu uma armadura do melhor material disponível na galáxia, e também uma lança com o então material encontrado."';

console.log();
console.log(historia);
console.log();
console.log('Responda às perguntas com s ou n (sim ou não):');
console.log();

let pergunta1=prompt('Devolveu a criança a quem o pertencia? ');
let pergunta2=prompt('Reparou sua nave, que estava precisando de uns belos reparos? ');
let pergunta3=prompt('Conseguiu obter o material mais poderoso da galáxia? ');
let pergunta4=prompt('Com este material, produziu com sucesso a sua armadura? ');
let pergunta5=prompt('A lança, por ser um material concentrado, perfuraria sua própria armadura? ');

let nivel = 0;
    if (pergunta1 == 's') {
    nivel++;
}
    if (pergunta2 == 's') {
    nivel++;
}
    if (pergunta3 == 's') {
    nivel++;
}
    if (pergunta4 == 's') {
    nivel++;
}
    if (pergunta5 == 's') {
    nivel++;
}

    if (nivel === 0) {
    console.log();
    console.log("Desculpa guerreiro mas você não conseguiu nada? deixa que eu passo essa missão para alguém mais preparado. ");
} else if (nivel == 1 || nivel == 2) {
    console.log();
    console.log("Olha só, você não concluiu a missão como deveria. Mas pelo menos conseguiu algo feito, então não é um completo desastre.")
} else if (nivel == 3) {
    console.log();
    console.log("Oha guerreiro, às vezes, o que nos faltava era só mais uma pitadinha a mais de resiliência");
} else if (nivel == 4) {
    console.log();
    console.log("Foi uma jornada árdua! então é de se entender não a ter feito com \"pura maestria\". Título esse que só pertence aos melhores dos melhores... bom, lâmina quanto mais afia, mais afiada fica.");
} else if (nivel ==5 ) {
    console.log();
    console.log("É uma satisfação enorme, presenciar em minha miserável vida... tanta glória, persistência, e exemplo de valores íntegros como cidadão deste universo. Você não apenas foi lá e voltou para cá, você mudou o rumo do universo!!! mesmo que não saiba ainda...");
}

// Fim de código.

// Max Cleiton.
// https://github.com/maxxcleiton
// https://www.linkedin.com/in/max-cleiton-4874a21b0/
