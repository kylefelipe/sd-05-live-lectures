const to = `Lucas`;
const value = `22`;

const email =
"Olá " + to + "\n\n" +
"O valor da sua cobrança é R$ " + value + " Reais.\n\n" +
"Esta é uma mensagem automática.";

console.log(email);

const email =
`Olá ${to},

O valor da sua cobrança é ${value} Reais.

Esta é uma mensagem automática.`;
