// Exercícios de Interpretação de código 

/*Resposta 1 
    Essa função pega um valor referente a cotação do dolar pelo prompt e 
    então calcula o valor do dolar vezes a cotação para entregar um valor em reais,
    quando chamam a função linhas abaixo colocam como parametro o numero 100, então seria esse o
    valor em dolares que será convertido para reais. O valor impresso no console será 100 vezes o 
    numero inserido pelo usuário no prompt
*/

/*Resposta 2
    Essa função faz o calculo de quando você ganharia de dinheiro optando por 4 tipo de investimento
    diferentes, existe um switch case para cada um. Seria impresso no console os seguintes valores:
    154,5 para poupança;
    157,5 para renda fixa;
    159 para CDB;
    165 para ações.
    Já para o segundo montante seriam impressos os seguintes valores:
    206 para poupança;
    210 para renda fixa;
    212 para CDB;
    220 para ações.
*/

/*Resposta 3 
    Essa função checa vários numero de um array e verifica se eles são pares ou impares, daí ele 
    separa em 2 arrays diferentes os pares dos impares
    seria impresso no console os seguintes valores:
    "Quantidade total de numeros 14"
    [12, 64, 44, 84, 48, 14]
    [25, 55, 121, 11, 51, 73, 111, 283]
*/

/*Resposta 4  **Incompleto**

*/

//
// Exercícios de lógica de programação
//

/*Resposta 1 **Incompleto**

*/

/*Resposta 2
    a. false
    b. true
    c. true
    d. false 
    e. false
    f. false

*/

/*Resposta 3 **Incompleto**

const quantidadeDeNumerosPares
let i = 4
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)

}

*/

/* Resposta 4 

ladosDoTriangulos(3, 3, 3)

const a = 0
const b = 0
const c = 0

function ladosDoTriangulos(a, b, c){

    if((a === b) && (a === c) && (b === c)){
        alert("Esse triangulo é equilátero")
    }
    else if((a === b) && (a!== c)){
        alert("Esse triangulo é isóceles")
    }
    else if((a === c) && (a !== b)) {
        alert("Esse triangulo é isóceles")
    }
    else if ((b === c) &&(b !== a)){
        alert("Esse triangulo é isóceles")
    }
    else{
        alert("Esse triangulo é escaleno")
    }
   
}
*/



/* Resposta 5 

const numeroUm = 0
const numeroDois = 0

qualMaior(20, 25)
saoDivisiveis(20, 25)
diferença(20, 25)

function qualMaior(numeroUm, numeroDois){

    if(numeroUm > numeroDois){
        console.log(`O maior é ${numeroUm}`)
    }
    else{
        console.log(`O maior é ${numeroDois}`)
    }
}

function saoDivisiveis(numeroUm, numeroDois){
    if(numeroUm % numeroDois === 0){
        console.log(`${numeroUm} é divisível por ${numeroDois} `)
    }
    else{
        console.log(`${numeroUm} não é divisível por ${numeroDois}`)
    }
}

function diferença(numeroUm, numeroDois) {
    const divisao = numeroUm - numeroDois
    if(divisao >= 0){
        console.log(`A diferença entre eles é ${divisao}`)
    }
    else{
        console.log("Não foi possivel calcular a diferença")
    }
}
*/

// Exercícios de Funções **Incompleto**

let i = 0
let maiorNumero = 0
let menorNumero = 0
let segundo = 0
const arrayNumeros = [2, 8, 13, 9, 7]

segundoMaior(arrayNumeros)

function segundoMaior (array)

for (i = 0; i < array.length; i++){
    if(array[i] > maiorNumero){
        maiorNumero = array[i]
    }
}

i = 0

while(segundo < maiorNumero){
    segundo = array[i]
    i++
}

return segundo


