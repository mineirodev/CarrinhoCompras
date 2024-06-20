let totalFone = 0;
let totalCelular = 0;
let totalOculus = 0;
let valorTotal = document.getElementById("valor-total");


function adicionar() { // Função para o botão Adicionar
    let selecao = document.getElementById("produto");
    let produtoSelecionado = selecao.options[selecao.selectedIndex];
    let quantidade = document.getElementById("quantidade").value;
    
    
  
    if (quantidade <= 0) { //Impede que o campo de quantidade fique vazio
        alert('Necessário inserir uma quantidade de produtos');
        return;
    }

    //Bloco condicional que identifica qual produto está selecionado para 
    //adicionar o produto com o carrinho e sua quantidade
    if (produtoSelecionado.value == 'Fone de ouvido - R$100') {
        
        totalFone = totalFone + (quantidade * 100);
        criaElemento ('Fone de Ouvido', '100', quantidade); 
        
         
    } else if (produtoSelecionado.value == 'Celular - R$1400') {
      
        totalCelular = totalCelular + (quantidade * 1400);
        criaElemento ('Celular', '1400', quantidade);
        
    } else if (produtoSelecionado.value == 'Oculus VR - R$5000') {
      
        totalOculus = totalOculus + (quantidade * 5000);
        criaElemento ('Oculus  VR', '5000', quantidade);
        
    }
    //Calcula e mostra na pagina o valor total da compra
    let totalCompras = totalCelular+totalFone+totalOculus;
    valorTotal.textContent = `R$ ${totalCompras}`;
}

function criaElemento(texto, valor, quantidade) { //Funçao que cria tag HTML dinamicamente para inserir os itens no carrinho
    const listaCarrinho = document.querySelector(".carrinho__produtos__produto");
    const novaTag = document.createElement("span");
    novaTag.innerHTML = `<br><span class="texto-azul">${quantidade}x</span> ${texto} <span class="texto-azul">R$${valor}</span>`;
    listaCarrinho.appendChild(novaTag);
}

function limpar() { //Funçao para ação do botão de limpar
    
    //Reinicia os valores das variaveis
    valorTotal.textContent = `R$ 0`;
    totalFone = 0;
    totalCelular = 0;
    totalOculus = 0;
    quantidade.value = '';
    //Limpa os itens do carrinho
    const listaCarrinho = document.querySelector(".carrinho__produtos__produto");
    listaCarrinho.innerHTML = '';

}