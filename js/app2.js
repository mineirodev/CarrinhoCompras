let total;
limpar();

function adicionar() {
    //Recuperar valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantitade = document.getElementById('quantidade').value; 
  
    //Calcular subtotal
    let preco = quantitade * valorUnitario;

    if (quantitade <= 0) { //Impede que o campo de quantidade fique vazio
        alert('Necessário inserir uma quantidade de produtos');
        return;
    }
      
    //adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantitade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    //Atualizar o valor total
    total = total + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `RS ${total}`
    document.getElementById('quantidade').value = '';

}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0 ';
}