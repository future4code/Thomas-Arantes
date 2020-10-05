/* Resposta 1 a. 
    Vai ser impresso os valores 10 e 50

   Resposta 1 b. 
    O programa ainda ia calcular os valores 10 e 50 mas esses valores não seriam impressos no console 

   Resposta 2 a. 
    Serão impressos os 2 primeiros indices do array, sendo eles Darvas e Caio
    Seriam impressos so os nomes Caio e Amanda 

   Resposta 3
    
*/

/* Resposta 4 a. 

    let nome = "Thomas"
    let idade = 23
    let cidade = "BH"
    let profissao = "estudante"
    let dadosPessoais = questionario()

    function questionario() {
        console.log ("Eu sou", nome, "tenho", idade, "anos,", "moro em", cidade, "e sou", profissao)
        return questionario
    }
*/


/* Resposta 4 b.

    let nome = prompt("Qual é seu nome?")
    let idade = Number(prompt("Qual é a sua idade?"))
    let cidade = prompt("Em qual cidade você mora?")
    let estudante = confirm("Você é estudante")
    dadosPessoais()
    function dadosPessoais() {
        if(estudante == true){
            console.log("Eu sou", nome, "tenho", idade, "anos,", "moro em", cidade, "e sou estudante")
            return dadosPessoais
        }
        else{
            console.log("Eu sou", nome, "tenho", idade, "anos,", "moro em", cidade, "e não sou estudante")
            return dadosPessoais
        }
        
    }
*/

/* Resposta 5 a. 

    let somaNumeros = (a, b) => {
        return a + b
    }

    const numero = 15
    const numeroDois = 7

    let resultado = somaNumeros(numero, numeroDois)
    
    console.log(resultado)
*/

/* Resposta 5 b.

    let somaNumeros = (a, b) => {
        return a + b
    }

    const numero = Number(prompt("insira um numero"))
    const numeroDois = Number(prompt("insira um numero"))

    let resultado = somaNumeros(numero, numeroDois)
    
    if(numero > numeroDois){
        console.log("o primeiro número é maior")
    }
    else if(numero < numeroDois){
        console.log("o segundo numero é maior")
    }
*/

/* Resposta 6 a.

    const arrayLabenu = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    let interageComArray = (array) => {
        for(let i = 0; i < arrayLabenu.length; i++){
            console.log(arrayLabenu[i])
        }
    return arrayLabenu.length
    }

    let tamanhoDoArray = interageComArray(arrayLabenu)
*/

/* Resposta 6 b.

    const arrayLabenu = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    let interageComArray = (array) => {
        for(let i = 0; i < arrayLabenu.length; i++){
            let numeroPar = arrayLabenu[i] % 2 
            return numeroPar
        }
    
    }

    let tamanhoDoArray = interageComArray(arrayLabenu)

    if(numeroPar = 0){
        console.log("esse numero é par")
    }
    else(
        console.log("esse numero é impar")
    )
*/
   
// Resposta 6 c.

    const arrayLabenu = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
    let interageComArray = (array) => {
        for(let i = 0; i < arrayLabenu.length; i++){
            let numeroPar = arrayLabenu[i] % 2 
            return numeroPar
        }

    }

    let tamanhoDoArray = interageComArray(arrayLabenu)

    if(numeroPar = 0){
        console.log("i")
    }
   
    
    

    

