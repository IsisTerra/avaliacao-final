const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();
const dataApi = `${ano}-${mes}-${dia}`

console.log(dataAtual);
console.log(dia);
console.log(mes);
console.log(ano);
/*
Fazer uma lista com os asteroides do dia com as informações necessárias. return 
*/