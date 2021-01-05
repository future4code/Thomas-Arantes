const operation = process.argv[2]
const numberOne = Number(process.argv[3])
const numberTwo = Number(process.argv[4])

switch( operation ){
    case 'add': 
        const addition = numberOne + numberTwo;
        console.log(`Resposta: ${addition}`);
        break;
    case 'sub': 
        const subtraction = numberOne - numberTwo;
        console.log(`Resposta: ${subtraction}`);
        break;
    case 'mult':
        const multiplication = numberOne * numberTwo;
        console.log(`Resposta: ${multiplication}`);
        break;
    case 'div':
        const division = numberOne / numberTwo;
        console.log(`Resposta: ${division}`);
        break;
}

