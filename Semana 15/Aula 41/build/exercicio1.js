"use strict";
//Resposta A 
var frase = "teste";
//O VSCode diz que há um erro e um número não pode ser atribuido a uma variável do tipo string
//Resposta B
var numero = "teste";
//Resposta C 
var objeto = {
    nome: "Thomas",
    idade: 23,
    corFavorita: "Preto"
};
var pessoaUm = {
    nome: "Antonio",
    idade: 33,
    corFavorita: "Azul"
};
var pessoaDois = {
    nome: "Claudia",
    idade: 22,
    corFavorita: "Verde"
};
var pessoaTrês = {
    nome: "Paula",
    idade: 44,
    corFavorita: "Amarelo"
};
//Resposta E 
var arcoIris;
(function (arcoIris) {
    arcoIris["AMARELO"] = "Amarelo";
    arcoIris["AZUL"] = "Azul";
    arcoIris["LARANJA"] = "Laranja";
    arcoIris["VERDE"] = "Verde";
    arcoIris["VIOLETA"] = "Violeta";
})(arcoIris || (arcoIris = {}));
var pessoaQuatro = {
    nome: "Beto",
    idade: 55,
    corFavorita: arcoIris.AMARELO
};
