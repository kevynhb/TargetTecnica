const readline = require("readline");

// input pelo terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Informe um número para verificar se pertence à sequência de Fibonacci: ",
  (input) => {
    const numero = parseInt(input);

    const pertenceFibonacci = (num) => {
      let a = 0,
        b = 1;

      while (a <= num) {
        if (a === num) return true;
        [a, b] = [b, a + b];
      }

      return false;
    };

    if (pertenceFibonacci(numero)) {
      console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }

    rl.close();
  }
);
