class Funcionario {
  constructor(nome, salarioBase) {
    this.nome = nome;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }
}

class Desenvolvedor extends Funcionario {
  calcularSalario() {
    return this.salarioBase * 1.2; // bônus de 20%
  }
}

class Designer extends Funcionario {
  calcularSalario() {
    return this.salarioBase * 1.1; // bônus de 10%
  }
}
 
const dev = new Desenvolvedor("Maria", 5000);
const des = new Designer("Carlos", 4000);
console.log("Salário dev:", dev.calcularSalario());
console.log("Salário designer:", des.calcularSalario());  