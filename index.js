checkElo(200, 20);
​
function checkElo(wins, loses){
    let resultado = wins - loses;
        if(resultado <= 10){
        let rank = "Ferro"
        console.log("o Herói tem saldo de " + resultado + " vitorias e está no nível de " + rank)
}  else if(resultado >= 11 && resultado <=20){
   let rank = "Bronze"
   console.log("o Herói tem saldo de " + resultado + " vitorias e está no nível de " + rank)
   
}  else if(resultado >= 21 && resultado <=50){
   let rank = "Prata"
   console.log("o Herói tem saldo de " + resultado + " vitorias e está no nível de " + rank)
   
}  else if(resultado >= 51 && resultado <=80){
   let rank = "Ouro"
   console.log("o Herói tem saldo de " + resultado + " vitorias e está no nível de " + rank)
   
}  else if(resultado >= 81 && resultado <=90){
   let rank = "Diamante"
   console.log("o Herói tem saldo de " + resultado + " vitorias e está no nível de " + rank)
   
}  else if(resultado >= 91 && resultado <=100){
   let rank = "Lendário"
   console.log("o Herói tem saldo de " + resultado + " vitorias e está no nível de " + rank)
   
}  else if(resultado >= 100){
   let rank = "Imortal"
   console.log("o Herói tem saldo de " + resultado + " vitorias e está no nível de " + rank)
}
   
}