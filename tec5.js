const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Informe uma string para ser invertida: ", (input) => {
  const inverterString = (str) => {
    let inverso = "";

    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
      inverso += str[i];
    }

    return inverso;
  };

  const invertida = inverterString(input);
  console.log("String invertida:", invertida);

  rl.close();
});
