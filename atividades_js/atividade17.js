class Livro {
  constructor(titulo) {
    this.titulo = titulo;
    this.disponivel = true;
  }
}

class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  emprestarLivro(titulo) {
    const livro = this.livros.find(l => l.titulo === titulo && l.disponivel);
    if (livro) {
      livro.disponivel = false;
      return true;
    }
    return false;
  }

  devolverLivro(titulo) {
    const livro = this.livros.find(l => l.titulo === titulo);
    if (livro) {
      livro.disponivel = true;
    }
  }
}

const b = new Biblioteca();
const l1 = new Livro("Dom Casmurro");
b.adicionarLivro(l1);
console.log("Emprestar livro:", b.emprestarLivro("Dom Casmurro"));
console.log("Disponível após empréstimo:", l1.disponivel);
b.devolverLivro("Dom Casmurro");
console.log("Disponível após devolução:", l1.disponivel); 