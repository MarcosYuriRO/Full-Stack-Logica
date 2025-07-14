// Projeto base Alura
alert("Boas-vindas ao Jogo do Número Secreto!");
let numeroSecreto = 20;
console.log (numeroSecreto)
let chute
let tentativas = 1

//enquanto chute nao for igual ao n.s.;
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 30");

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert ("O Número Secreto é menor que " + chute);
        } else {
            alert ("O Número Secreto é maior que " + chute);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
};

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert("Isso aí! Você descobriu o Número Secreto " + numeroSecreto + " com " + tentativas + " " + palavraTentativa + ".");


// Desafio Tópico 1 Alura (01 ao 07)
/*alert ("Boas-vindas ao nosso site!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos";
 alert (mensagemDeErro);*/

 // Desafio Tópico 1 Alura (08 ao 10)
/*let nome = prompt ("Digite o seu nome:");
let idade = prompt ("Digite a sua idade:");

if (idade >= 18) {
   alert ("Pode tirar a habilitação!");
};*/

//Desafio Tópico 2 (01)
/*let diaSemana = prompt ("Escreva o dia da semana");
if (diaSemana == "Domingo" || diaSemana == "Sabado") {
   alert ("Bom fim de semana!");
}  else {
   alert ("Boa semana!");
    };*/

//Desafio Tópico 2 (02)
/*let numero = prompt ("Informe um número");
if (numero >= 0) {
    alert (numero + " é positivo");
} else {
    alert (numero + " é negativo");
};*/

//Desafio Tópico 2 (03)
/*let pontuacao = prompt ("Qual foi a sua pontuação?");
if (pontuacao >= 100) {
    alert ("Parabéns, você ganhou!");
} else {
    alert ("Tente novamente para ganhar.");
};*/
 
//Desafio Tópico 2 (04)
/*let saldoConta = 100;
alert (`Você tem ${saldoConta} reais em sua conta.`);*/

//Desafio Tópico 2 (05)
/*let nome = prompt ("Digite o seu nome:");
alert ("Boas vindas, " + nome);*/

//Desafio Tópico 3 (01)
/*let contador = 1;

while (contador <= 10) {
    alert (contador);
    contador++;
};*/

//Desafio Tópico 3 (02)
/*let contador = 10;

while (contador >= 0) {
    alert (contador);
    contador--;
};*/

//Desafio Tópico 3 (03)
/*let numeroNatural = prompt ("Digite um Número Natural");

while (numeroNatural >= 0) {
    console.log (numeroNatural);
    numeroNatural--;
};*/

//Desafio Tópico 3 (04)
/*let numeroEscolhido = prompt ("Escolha um Número Natural");
let contador = 0;

while (contador <= numeroEscolhido) {
    console.log (contador);
    contador++;
};*/