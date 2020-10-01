
/* Resposta 1
    a. false
    b. false false
    c. false
    e. boolean
*/
/* Resposta 2 
    a. []
    b. null
    c. 11
    d. 0
    e. 1, 19
    f. 6
*/

/* Resposta 1

    let nome = prompt("Qual é a sua idade?")
    let nome2 = prompt("Qual é a idade de seu melhor amigue?")
    console.log("Sua idade é maior do que a do seu melhor amigo?", nome > nome2)
    console.log("A diferença de idade é de ", nome - nome2, "anos.")

*/

/* Resposta 2 

    let numeroPar = prompt("insira um numero par")
    let resultado = Number(numeroPar) % 2
    console.log(resultado)

    c. O console sempre imprime o numero 0 pois não há diferença na divisão de numeros pares 
    d. O console sempre imprime o numero 1 pois a diferença de qualquer numero impar dividido por 2 é 1
*/
    
/*Resposta 3 

    let listaDeTarefas = null
    listaDeTarefas[0] = prompt("O que você vai fazer as 9:00")
    listaDeTarefas[1] = prompt("O que você vai fazer as 11:00")
    listaDeTarefas[2] = prompt("O que você vai fazer as 16:30")
    console.log(listaDeTarefas)
    let remove = prompt("Qual tarefa você já fez? 0, 1 ou 2?")
    listaDeTarefas.splice(remove, 1)
    console.log(listaDeTarefas)
*/
    
/* Reposta 4 

    let nome = prompt("qual é o seu nome?")
    let email = prompt("qual é seu email?")
    console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome)
*/

/* Desafio 1.c 

    let temperaturaF = 77
    let temperaturaK = (temperaturaF - 32) * 5 / 9 + 273.15
    console.log(temperaturaK + "K")
*/

/* Desafio 1.b

    let temperaturaC = 80
    let temperaturaF = (temperaturaC) * 9 / 5 + 32
    console.log(temperaturaF + "F")
*/

/* Desafio 1.c 

    let temperaturaC = 30
    let temperaturaF = (temperaturaC) * 9 / 5 + 32
    console.log(temperaturaF + "F")
    let temperaturaK = (temperaturaF - 32) * 5 / 9 + 273.15
    console.log(temperaturaK + "K")
*/

/*Desafio 1.d

    let temperaturaC = prompt("Insira uma temperatura em C")
    let temperaturaF = (temperaturaC) * 9 / 5 + 32
    console.log(temperaturaF + "F")
    let temperaturaK = (temperaturaF - 32) * 5 / 9 + 273.15
    console.log(temperaturaK + "K")
*/

/*Desafio 2.a

    let kwh = Number(0.05)
    let consumo = Number(280)
    console.log("R$", kwh * consumo, ",00")
*/

//Desafio 2.b

    let kwh = Number(0.05)
    let consumo = Number(280)
    let desconto = Number(0,15)
    console.log("R$", (kwh * consumo) - (kwh * consumo * desconto),",00")

    

