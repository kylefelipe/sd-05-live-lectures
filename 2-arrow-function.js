const add = function(a, b) {
  return a + b;
};

console.log(criarPessoa("Leandro", 19).nome);

const criarPessoa = (nome, idade) => ({ nome, idade });
