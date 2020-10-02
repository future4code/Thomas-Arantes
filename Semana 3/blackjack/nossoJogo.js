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
const carta1 = comprarCarta();
const carta2 = comprarCarta();
const resultadoUsuario = carta1.valor + carta2.valor;
console.log("Usuário - Cartas: ", carta1.texto, carta2.texto, " - pontuação: ", resultadoUsuario);

//Cartas do Computador
const carta3 = comprarCarta();
const carta4 = comprarCarta();
const resultadoComputador = carta3.valor + carta4.valor;
console.log("Computador - Cartas: ", carta3.texto, carta4.texto, " - pontuação: ", resultadoComputador);


if(resultadoUsuario > resultadoComputador){
   console.log("O usuário ganhou!");
   }
else if(resultadoUsuario < resultadoComputador){
   console.log("O computador ganhou!");
   }
else{
   console.log("Foi empate!")
   }
}