const fs = require('fs');

// Função para ler o arquivo JSON
function readJsonFile(filePath) {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}

// Função para calcular o faturamento
function calcularFaturamento(faturamento) {
    // Filtra apenas os valores maiores que zero
    const valores = faturamento.map(item => item.valor).filter(valor => valor > 0);
    
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const media = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

    // Conta quantos dias tiveram faturamento acima da média
    const diasAcimaDaMedia = valores.filter(valor => valor > media).length;

    console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

// Caminho para o arquivo JSON
const filePath = './faturamento.json'; // Altere para o nome do seu arquivo, se necessário

// Lendo e processando os dados
const faturamento = readJsonFile(filePath);
calcularFaturamento(faturamento);


// PARA RODAR O CODIGO NO TERMINAL: node Questao3.js