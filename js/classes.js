// /js/classes.js

// Exporta a classe para que outros arquivos possam importá-la
export class Gasto {
    constructor(valor, categoria) {
        this.id = Date.now(); // Um ID simples e único
        this.valor = parseFloat(valor); // Garante que o valor é um número
        this.categoria = categoria;
    }
}