const readline = require('readline');

// Configurando a interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacciSequence(n) {
    let sequence = [0, 1];
    while (sequence[sequence.length - 1] < n) {
        let nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextValue);
    }
    return sequence;
}

// Pergunta o número ao usuário
rl.question("Informe um número: ", (input) => {
    let number = parseInt(input); // Converte a entrada para um número
    let fibSequence = fibonacciSequence(number);

    console.log(`A sequência de Fibonacci até ${number} é: ${fibSequence.join(', ')}`);

    if (fibSequence.includes(number)) {
        console.log(`O número ${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
    }

    rl.close(); // Fecha a interface readline
});


// PARA RODAR O CODIGO NO TERMINAL: node Questao2.js
