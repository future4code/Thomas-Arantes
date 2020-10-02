/* Resposta 1 
    O código testa se o usuario passou no teste, passa no teste quem inserir um número par, pois a mensagem de aprovação só é mostrada para números que dividos por 2 não tenham resto

   Resposta 2 
    a. O código serve para mostrar o preço da fruta que o usuário inseriu no prompt
    b. O preço da fruta maçã é R$ 2.25
    c. seria mostrado tanto preço da pera quanto o preço de R$5;00 destinado para produtos que não foram previstos pelo código;

   Reposta 3
    a. Ela cria uma váriavel constante para um numero que vai ser inserido pelo usuário
    b. Se fosse inserido o número 10 o console iria imprimir uma mensagem dizendo que o numero passou no teste
    c. existiria um erro no console.log que exibiria uma mensagem secreta, pois a variavel que armazena as informações da mensagem não foi declarada em escopo global e sim dentro do if{}

*/

/*Resposta 4 
    
    let idade = Number(prompt("qual é a sua idade?"))
    
    if(idade >= 18){
        console.log("Você pode dirigir")
    }
    else{
        console.log("Você não pode dirigir")
    }
*/

/* Resposta 5

    let turno = prompt("Qual turno você estuda? Insira apenas a letra inicial")
    
    if(turno === "M"){
        console.log("Bom dia")
    }
    else if(turno === "V"){
        console.log("Boa tarde")
    }
    else if(turno === "N"){
        console.log("Boa noite")
    }
    else{
        console.log("Você não estuda aqui")
    }
*/

/* Resposta 6

    let turno = prompt("Qual turno você estuda? Insira apenas a letra inicial")
    switch(turno){
        case 'M':
            console.log("Bom dia")
            break
        case 'V':
            console.log("Boa tarde")
            break
        case 'N':
            console.log("Boa noite")
            break
        default:
            console.log("Você não estuda aqui")
            break

    }
*/

/* Resposta 7 

    let genero = prompt("Qual o gênero do filme que você quer assistir?")
    let preco = Number(prompt("Qual o preço do ingreço?"))
    
    if( genero === "fantasia" && preco <= 15){
        console.log("Bom Filme")
    }
    else{
        console.log("Escolha outro filme :c")
    }
*/ 
    
/* Desafio 1 
    
    let genero = prompt("Qual o gênero do filme que você quer assistir?")
    let preco = Number(prompt("Qual o preço do ingreço?"))
    
    
        if( genero === "fantasia" && preco <= 15){
            let snack = prompt("Qual lanche você vai comprar?")
            console.log("Bom Filme com ", snack)
        }
        else{
            console.log("Escolha outro filme :c")
        }
*/