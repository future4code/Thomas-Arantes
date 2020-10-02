/* Resposta 1 
    O código cria um loop que só para quando a variavel valor que tem o valor 0 passa a ter valor 5, no final o console imprime o número 5 

   Respsota 2
    a. Vai ser impresso todos os números maiores que 18. 
    b. Não, para fazer isso seria necessário cria uma váriavel para armazenar o índice do array e assim criar um contador
*/

/* Resposta 3 a.

    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

    for (let a = 0; a < arrayOriginal.length; a++) {
        console.log(arrayOriginal[a]);
    }
*/

/* Resposta 3 b.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let a = 0; a < arrayOriginal.length; a++) {
    console.log(arrayOriginal[a] / 10);
}

*/

/* Resposta 3 c.
 
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let a = 0; a < arrayOriginal.length; a++) {
    if(arrayOriginal[a] % 2 === 0){
    console.log(arrayOriginal[a]);
    }
}
*/

/* Resposta 3d.

    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

        for (let a = 0; a < arrayOriginal.length; a++) {
            console.log("O elemento do índex ", a, "é: ", arrayOriginal[a]);
        }
*/

// Resposta 3e. 

    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    let maiorNumero = 20
    let menorNumero = 22

    for (let a = 0; a < arrayOriginal.length; a++) {
        let item = arrayOriginal[a]

        if (maiorNumero < item) {
            maiorNumero = item
        }
        else if(menorNumero > item){
            menorNumero = item
        }
    
    }
    console.log("O maior numero é:", maiorNumero, "e o menor numero é:", menorNumero)



