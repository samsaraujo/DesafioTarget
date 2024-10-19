// Função para inverter uma string
function inverterString(str) {
    let stringInvertida = '';
    
    // Percorre a string do final para o início
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

// String a ser invertida (pode ser alterada)
const stringOriginal = "Olá, eu sou Samira!";
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);



// PARA RODAR O CODIGO NO TERMINAL: node Questao5.js