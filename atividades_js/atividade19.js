class SistemaLogin {
  constructor() {
    this.usuarios = [];
  }

  cadastrar(email, senha) {
    if (this.usuarios.some(u => u.email === email)) {
      return false; // já existe
    }
    this.usuarios.push({ email, senha });
    return true;
  }

  login(email, senha) {
    return this.usuarios.some(u => u.email === email && u.senha === senha);
  }
}

const sistema = new SistemaLogin();
console.log("Cadastro João:", sistema.cadastrar("joao@email.com", "1234"));
console.log("Cadastro duplicado:", sistema.cadastrar("joao@email.com", "9999"));
console.log("Login válido:", sistema.login("joao@email.com", "1234"));  