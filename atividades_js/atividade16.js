class Produto {
  constructor(nome, estoque) {
    this.nome = nome;
    this.estoque = estoque;
  }

  vender(qtd) {
    if (qtd <= this.estoque) {
      this.estoque -= qtd;
      return true;
    }
    return false;
  }

  repor(qtd) {
    this.estoque += qtd;
  }
}

const p = new Produto("Camiseta", 10);
p.vender(3);
console.log("Estoque após venda:", p.estoque);
p.repor(5);
console.log("Estoque após reposição:", p.estoque);