class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }
}

const r = new Retangulo(10, 5);
console.log("Área do retângulo:", r.calcularArea());
console.log("Perímetro do retângulo:", r.calcularPerimetro());
    