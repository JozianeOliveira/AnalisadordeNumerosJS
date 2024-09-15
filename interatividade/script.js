// Seleciona o input de número, o select da lista e a div de resultados do HTML
let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = []; // Array para armazenar os números adicionados

// Função para verificar se o número está no intervalo de 1 a 100
function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

// Função para verificar se o número já está na lista
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

// Função para adicionar um número à lista
function adicionar() {
    // Verifica se o número é válido e não está na lista
    if (isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value)); // Adiciona o número ao array 'valores'
        let item = document.createElement('option'); // Cria um novo elemento 'option'
        item.text = `Valor ${num.value} adicionado.`; // Define o texto do item
        lista.appendChild(item); // Adiciona o item à lista
        res.innerHTML = ''; // Limpa a área de resultados
    } else {
        window.alert('Valor inválido ou já encontrado na lista.'); // Alerta se o valor for inválido ou duplicado
    }
    num.value = ''; // Limpa o campo de entrada
    num.focus(); // Coloca o foco de volta no campo de entrada
}

// Função para finalizar a análise dos números
function finalizar() {
    // Verifica se a lista está vazia
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length; // Total de números adicionados
        let maior = valores[0]; // Inicializa o maior número como o primeiro da lista
        let menor = valores[0]; // Inicializa o menor número como o primeiro da lista
        let soma = 0; // Soma de todos os números
        let media = 0; // Média dos números

        // Percorre todos os números da lista
        for (let pos in valores) {
            soma += valores[pos]; // Soma os números
            if (valores[pos] > maior) // Verifica se o número atual é maior que o maior encontrado
                maior = valores[pos];
            if (valores[pos] < menor) // Verifica se o número atual é menor que o menor encontrado
                menor = valores[pos];
        }
        media = soma / tot; // Calcula a média dos números

        // Exibe os resultados na div 'res'
        res.innerHTML = ''; // Limpa o conteúdo anterior da div
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`;
        res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`;
    }
}
