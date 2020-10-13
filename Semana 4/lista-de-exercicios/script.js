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

/*Resposta 3

A solução do colega infelizmente não funciona, para fazer isso ele precisaria de uma função que 
recebe como parametro o numero N, o while loop feito por ele também não funciona, ele precisa de um
loop que para de rodar assim que temos num array o mesmo tanto de elementos que o parametro da funcao

numerosPares(3)
*/

function numerosPares(numero){
    let arrayDeNumeros = []
    for (i = 0; arrayDeNumeros.length  < numero; i++) {
        if( i % 2 === 0 ){
            arrayDeNumeros.push(i)
        }
    }
    console.log(arrayDeNumeros)
}



// Resposta 4 

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




// Resposta 5 

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


// Exercícios de Funções **Incompleto**
/*
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

console.log(maiorNumero)

*/

// Exercícios de objetos

/* Resposta 1
    Um objeto são como varáveis que podem guardar mais de uma informação, devemos usa-los quando temos dados mais complexos e precisamos de uma maneira de nos organizar melhor
*/

// Resposta 2

const lado1 = 0
const lado2 = 0 
criaRetangulo(5, 8)


function criaRetangulo(lado1, lado2){
    let objetoRetangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
    console.log(objetoRetangulo)
    return objetoRetangulo
}

// Resposta 3

const filme = {
    nome: "Blade Runner",
    anoDeLacamento: 1982,
    diretor: "Ridley Scott",
    ator1: "Harrison Ford",
    ator2: "Sean Young",
    ator3: "Rutger Hauer"
}

console.log(`Venha assistir ao filme ${filme.nome}, de ${filme.anoDeLacamento}, dirigido por ${filme.diretor} e estrelado por ${filme.ator1}, ${filme.ator2}, ${filme.ator3}`)

// Resposta 4

const usuario = {
    nome: "thomas",
    idade: 23,
    email: "thomas-arantes@outlook.com",
    endereco: "rua sei la 178"
}

anonimo(usuario)

function anonimo(usuario)
{
    const usuarioAnonimo = {
        ...usuario,
        nome: "anonimo"
    }
    console.log(usuario)
}


// Exercícios de Array de Função 

// Resposta 1 

const arrayDePessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

arrayAdultos (arrayDePessoas)
arrayCriancas (arrayDePessoas)

function arrayAdultos(array){
    const adultos = (usuario, index, array) => {
        if(usuario.idade >= 18) {
            return true
        }
        return false
    }
    const soAdultos = arrayDePessoas.filter(adultos)
    console.log(soAdultos)
}

function arrayCriancas(array){
    const criancas = (usuario, index, array) => {
        if(usuario.idade < 18) {
            return true
        }
        return false
    }
    const soCriancas = arrayDePessoas.filter(criancas)
    console.log(soCriancas)
}


// Resposta 2 

const arrayDeNumeros = [1, 2, 3, 4, 5, 6]

multiplicarPorDois(arrayDeNumeros)
multiplicarPorTres(arrayDeNumeros)
stringArray(arrayDeNumeros)

function multiplicarPorDois(array){
    const multiplicacao = array.map((numero)=>{
        return numero * 2
    })
    console.log(multiplicacao)
}

function multiplicarPorTres(array){
    const multiplicacaoTres = array.map((numero)=>{
        return numero * 3
    })
    console.log(multiplicacaoTres)
}

function stringArray(array){
    const string = array.map((numero, ) =>{
        if(numero % 2 === 0){
            return `${numero} é par`
        }
        return `${numero} é impar`

    })
    console.log(string)
}


// Resposta 3 

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

temPermissao(pessoas)
naoTemPermissao(pessoas)

function temPermissao(array){
const podeEntrar = (pessoa) => {
    if((pessoa.idade > 14) && (pessoa.idade < 60) && (pessoa.altura > 1.5)){
        return true
    }
    return false
}
const soPodeEntrar = pessoas.filter(podeEntrar)
console.log(soPodeEntrar)
}

function naoTemPermissao(array){
    const naoPodeEntrar = (pessoa) => {
        if(pessoa.idade < 14){
            return true
        }
        else if(pessoa.idade > 60){
            return true
        }
        else if(pessoa.altura < 1.5){
            return true
        }
        return false
        
    }
    const naoEntra = pessoas.filter(naoPodeEntrar)
    console.log(naoEntra)
    }


// Resposta 4 

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

function consultaMarcada(array) {
    const emailMarcado = array.filter((nome) => {
        if(nome.cancelada = true){
            return `Olá ${array.nome}. Estamos enviando esse email para lembrar da sua consulta no dia ${array.dataDaConsulta}. Por favor, acuse o recebimento desse email `
        }
        const marcado = consultas.filter(emailMarcado)
        console.log(marcado)
    })
}






