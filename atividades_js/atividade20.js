class Cliente {
  constructor(nome) {
    this.nome = nome;
  }
}

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Pedido {
  constructor(cliente) {
    this.cliente = cliente;
    this.itens = [];
  }

  adicionarProduto(produto, quantidade) {
    this.itens.push({ produto, quantidade });
  }

  calcularTotal() {
    let total = this.itens.reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0);
    if (total > 100) { // desconto condicional
      total *= 0.9;
    }
    return total;
  }
}

const cliente = new Cliente("Ana");
const pedido = new Pedido(cliente);
pedido.adicionarProduto(new ProdutoPedido("Notebook", 1200), 1);
pedido.adicionarProduto(new ProdutoPedido("Mouse", 50), 2);
console.log("Total pedido com desconto:", pedido.calcularTotal());