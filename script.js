const quadrinho1 = {
  collection: "Tio Patinhas",
  title: "O Tesouro dos Dez Avatares", 
}

const author = "Don Rosa";

quadrinho1.author = author;
quadrinho1["publishingCompany"] = "Editora Abril";

const quadrinho2 = {
  collection: "The Order of the Stick",
  title: "No Cure for Paladin Blues",
}

const authorObject = { 
  author: "Rich Burlew",
};

const quadrinho3 = Object.assign({}, quadrinho2, authorObject);

quadrinho3.friends = "HAHA";
console.log(quadrinho2);
console.log(quadrinho3);
