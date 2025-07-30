    /*
     1.pegar o valor informado
     2.pegar categoria informada
     3.impedir numeros negativos
     4. de acordo com a categoria, atualizar o valor
        4.1 criar variaveis para controlar ou armazenar os
            valores de cada uma das categorias
     5.atualizar interface
     6. limpar campos
    */
const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]
//função utilitaria
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = '';
const formataMoeda = (valor) => valor.toFixed(2).replace('.',',');

//obter valor do formulario
const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento("categoria").value;

//obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);

// Aualizar valores da matriz
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () => {

    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    })

}





function adicionarGasto() {

    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    if(valorNegativo(valorInformado)){
        alert("Valor invalido. O valor não pode ser negativo.");
        return;
    }
    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "Total");
    atualizaValorCategoria(categoria, valorInformado);
    atualizaValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();    
}

