console.log(process);

const nome = process.argv.slice(2)[0].split("=")[1];
const idade = process.argv.slice(2)[1].split("=")[1];

console.log(`Olá ${nome}, você tem ${idade} anos.`);
