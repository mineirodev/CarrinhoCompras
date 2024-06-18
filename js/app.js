function adicionar() { // Função para o botão Adicionar
    let selecao = document.getElementById("produto");
    let produtoSelecionado = selecao.options[selecao.selectedIndex];
    let quantidade = document.getElementById("quantidade").value;

    console.log(produtoSelecionado.value);
    console.log(quantidade);
}