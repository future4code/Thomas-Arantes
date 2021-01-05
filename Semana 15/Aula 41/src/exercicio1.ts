//Resposta A 

const frase: string = "teste";

//O VSCode diz que há um erro e um número não pode ser atribuido a uma variável do tipo string

//Resposta B

const numero: number | string = "teste"

//Resposta C 

const objeto: {nome: string, idade: number, corFavorita: string} = {
    nome: "Thomas",
    idade: 23,
    corFavorita: "Preto"
}

//para garantir que dentro do objeto tenha propriedades específicas é preciso descrever qual o seu tipo no parametro do objeto

//Resposta D 

type person = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoaUm: person = {
    nome: "Antonio",
    idade: 33,
    corFavorita: "Azul"  
}

const pessoaDois: person = {
    nome: "Claudia",
    idade: 22,
    corFavorita: "Verde"  
}

const pessoaTrês: person = {
    nome: "Paula",
    idade: 44,
    corFavorita: "Amarelo"  
}

//Resposta E 

enum arcoIris {
    AMARELO = "Amarelo",
    AZUL = "Azul",
    LARANJA = "Laranja",
    VERDE = "Verde",
    VIOLETA = "Violeta"
}

type personEnum = {
    nome: string,
    idade: number,
    corFavorita: arcoIris
}

const pessoaQuatro: personEnum = {
    nome: "Beto",
    idade: 55,
    corFavorita: arcoIris.AMARELO
}
