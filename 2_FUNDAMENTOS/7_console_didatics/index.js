const a = 15;
const nome = "Jeff";
const lista = ["Creme de Leite", "Frango", "Maionese"];

//Common data log
console.log(a, nome, lista);

//Data log with count
console.count(`${a} counts`);
console.count(`${a} counts`);
console.count(`${a} counts`);
console.count(`${a} counts`);

//data log between string
console.log("my name is %s", nome);

//clear console
setTimeout(() => {
  console.clear();
}, 2000);
