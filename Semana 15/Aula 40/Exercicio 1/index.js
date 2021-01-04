/*Resposta A
    Temos que pegar o terceiro item do array através do comando process.argv[2]
*/

//Resposta B 

const yourName = process.argv[2]
const yourAge = Number(process.argv[3])
const newAge = Number(process.argv[3]) + 7

console.log(`Olá, ${yourName}! Você tem ${yourAge} anos.`)

//Resposta C 

console.log(`Olá, ${yourName}! Você tem ${yourAge} anos. Em sete anos você terá ${newAge}`)
