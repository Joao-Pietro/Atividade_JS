class Forma {
  calcularArea() {
    throw new Error("Método deve ser implementado!");
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio * this.raio;
  }
}

const q = new Quadrado(4);
const circ = new Circulo(3);
console.log("Área quadrado:", q.calcularArea());
console.log("Área círculo:", circ.calcularArea());