/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack");

if(confirm("Quer iniciar uma nova rodada?")){
  console.log("O jogo começou");
  Rodada();
}
else{
   console.log("O jogo acabou");
}

function Rodada(){

//Cartas do Usuário
let carta1 = comprarCarta();
let carta2 = comprarCarta();
let cartaExtra = 0;
let cartaExtra1 =0;
let resultadoUsuario = carta1.valor + carta2.valor;

if((carta1 === "A") && (carta2 === "A")){
   carta1 = comprarCarta();
   carta2 = comprarCarta();
   resultadoUsuario = carta1.valor + carta2.valor;
   console.log("Usuário - Cartas: ", carta1.texto, carta2.texto, " - pontuação: ", resultadoUsuario);
}
else{
   let resultadoUsuario = carta1.valor + carta2.valor;
   console.log("Usuário - Cartas: ", carta1.texto, carta2.texto, " - pontuação: ", resultadoUsuario);
}

//Cartas do Computador
let carta3 = comprarCarta();
let carta4 = comprarCarta();
let cartaExtraPC = 0;
let cartaExtraPC1 = 0;
let resultadoComputador = carta3.valor + carta4.valor;

if((carta3 === "A") && (carta4=== "A")){
   carta3 = comprarCarta();
   carta4 = comprarCarta();
   resultadoComputador = carta3.valor + carta4.valor;
   console.log("Computador - Cartas: ", carta3.texto, carta4.texto, " - pontuação: ", resultadoComputador);
}
else{
   console.log("Computador - Cartas: ", carta3.texto, carta4.texto, " - pontuação: ", resultadoComputador);
}

//Sacar mais cartas
if(confirm("Suas cartas são " + carta1.texto + " e " + carta2.texto + " A carta revelada do computador é " + carta3.texto + "\n" + "Deseja sacar mais uma carta?")){
   cartaExtra = comprarCarta();
   cartaExtraPC = comprarCarta();
   resultadoUsuario = resultadoUsuario + cartaExtra.valor
   resultadoComputador = resultadoComputador + cartaExtraPC.valor
}

while(resultadoUsuario < 21){
   if(confirm("Suas cartas são " + carta1.texto + " e " + carta2.texto + cartaExtra.texto + " A carta revelada do computador é " + carta3.texto + "\n" + "Deseja sacar mais uma carta?")){
      cartaExtra1 = comprarCarta();
      cartaExtraPC1 = comprarCarta();
      resultadoUsuario = resultadoUsuario + cartaExtra1.valor
      resultadoComputador1 = resultadoComputador + cartaExtraPC1.valor
   }
}

//Resultado
alert("As cartas do computador são: " + carta3.texto + carta4.texto + cartaExtraPC.texto + cartaExtraPC1.texto)

if(resultadoUsuario > resultadoComputador){
  console.log("O usuário ganhou!");
  }
else if(resultadoUsuario < resultadoComputador){
  console.log("O computador ganhou!");
  }
  else if(resultadoUsuário > 21){
     console.log("O computador ganhou!") 
  }
  else if((resultadoUsuário < 21) && (resultadoComputador > 21) ){
      console.log("O usuário ganhou!")
  }
else{
  console.log("Foi empate!");
  }
}