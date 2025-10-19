// /js/utils.js

/**
 * Formata um número para o padrão de moeda BRL (Real Brasileiro).
 * É uma função pura: para o mesmo número, sempre retorna a mesma string.
 * @param {number} valor O número a ser formatado.
 * @returns {string} O valor formatado como "R$ 0,00".
 */
export function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}