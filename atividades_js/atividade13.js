class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(nome, preco, quantidade) {
    this.produtos.push({ nome, preco, quantidade });
  }

  removerProduto(nome) {
    this.produtos = this.produtos.filter(p => p.nome !== nome);
  }

  calcularTotal() {
    return this.produtos.reduce((total, p) => total + p.preco * p.quantidade, 0);
  }
}

const c = new Carrinho();
c.adicionarProduto("Arroz", 20, 2);
c.adicionarProduto("Feijão", 10, 3);
console.log("Total do carrinho:", c.calcularTotal());
c.removerProduto("Arroz");
console.log("Total após remover arroz:", c.calcularTotal());  