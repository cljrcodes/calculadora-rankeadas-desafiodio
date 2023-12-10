// Criando as funções: 1º) função de calculo e 2º) Função de determinação de rank.


function calcRank(victory = "no_value", defeat = "no_value") {
    return victory-defeat;
}

function currentRank(rank = "no_value") {
    let result = calcRank(89, 15)
    if(result<10) {
        console.log("O Heroi tem saldo de vitórias " + result + " e está no nível Ferro.")
    } else if (result>=11&&result<=20) {
        console.log("O Heroi tem saldo de vitórias " + result + " e está no nível Bronze.")
    } else if (result>=21&&result<=50) {
        console.log("O Heroi tem saldo de vitórias " + result + " e está no nível Prata.")
    } else if (result>=51&&result<=80) {
        console.log("O Heroi tem saldo de vitórias " + result + " e está no nível Ouro.")
    } else if (result>=81&&result<=90) {
        console.log("O Heroi tem saldo de vitórias " + result + " e está no nível Diamante.")
    } else if (result>=91&&result<=100) {
        console.log("O Heroi tem saldo de vitórias " + result + " e está no nível Lendário.")
    } else if (result>=101) {
        console.log("O Heroi tem saldo de vitórias " + result + " e está no nível Imortal.")
    }
}

currentRank();

