class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.senha = senha;
  }

  login(senhaInformada) {
    return this.senha === senhaInformada;
  }
}

const u = new Usuario("João", "1234");
console.log("Login correto:", u.login("1234"));
console.log("Login errado:", u.login("abcd"));