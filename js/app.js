// /js/app.js

// 1. Importa o que é necessário dos outros módulos
import { Gasto } from './classes.js';
import { formatarMoeda } from './utils.js';

// 2. Estado da Aplicação (a lista de todos os gastos adicionados)
const gastos = [];
const categorias = ['Alimentação', 'Transporte', 'Lazer', 'Outros'];

// 3. Seleciona os elementos do HTML com os quais vamos interagir
const gastoForm = document.querySelector('#gasto-form');
const valorInput = document.querySelector('#valor');
const categoriaSelect = document.querySelector('#categoria');

/**
 * Atualiza a interface do usuário com os totais de gastos.
 * Usa programação funcional (filter e reduce) para os cálculos.
 */
function atualizarUI() {
    let totalGeral = 0;

    // Itera sobre cada categoria para calcular seu total
    categorias.forEach(categoria => {
        // filter(): cria um novo array apenas com os gastos da categoria atual
        const gastosDaCategoria = gastos.filter(gasto => gasto.categoria === categoria);
        
        // reduce(): soma o valor de cada gasto no array filtrado
        const totalCategoria = gastosDaCategoria.reduce((soma, gasto) => soma + gasto.valor, 0);

        // Atualiza o parágrafo correspondente no HTML
        const pElement = document.querySelector(`#${categoria}`);
        pElement.textContent = `${categoria}: ${formatarMoeda(totalCategoria)}`;

        // Soma o total da categoria ao total geral
        totalGeral += totalCategoria;
    });

    // Atualiza o total geral no HTML
    const totalElement = document.querySelector('#Total');
    totalElement.textContent = `Total: ${formatarMoeda(totalGeral)}`;
}

/**
 * Manipula o evento de envio do formulário.
 * @param {Event} event - O objeto do evento.
 */
function adicionarGasto(event) {
    // Impede que a página recarregue ao enviar o formulário
    event.preventDefault();

    const valor = valorInput.value;
    const categoria = categoriaSelect.value;

    // Validação da entrada
    if (!valor || valor <= 0) {
        alert("Por favor, insira um valor válido e positivo.");
        return;
    }

    // Cria um novo objeto Gasto usando a nossa classe (POO)
    const novoGasto = new Gasto(valor, categoria);

    // Adiciona o novo gasto à nossa lista de estado
    gastos.push(novoGasto);
    
    // Atualiza a tela com os novos valores
    atualizarUI();

    // Limpa o campo de valor e foca nele para a próxima entrada
    valorInput.value = '';
    valorInput.focus();
}

// 5. Adiciona o "ouvinte" de eventos ao formulário
gastoForm.addEventListener('submit', adicionarGasto);

// Garante que a interface comece com os valores zerados e formatados
atualizarUI();