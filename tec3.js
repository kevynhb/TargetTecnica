const fs = require("fs");

fs.readFile("dados.json", "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  try {
    const faturamento = JSON.parse(data);

    // Filtra os dias com faturamento maior que 0
    const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);

    // Calcula o menor e maior valor de faturamento
    const menorFaturamento = Math.min(
      ...diasComFaturamento.map((dia) => dia.valor)
    );
    const maiorFaturamento = Math.max(
      ...diasComFaturamento.map((dia) => dia.valor)
    );

    // Calcula a média mensal de faturamento
    const somaFaturamento = diasComFaturamento.reduce(
      (total, dia) => total + dia.valor,
      0
    );
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    // Calcula o número de dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(
      (dia) => dia.valor > mediaMensal
    ).length;

    console.log(
      "Menor valor de faturamento ocorrido em um dia do mês:",
      menorFaturamento.toFixed(2)
    );
    console.log(
      "Maior valor de faturamento ocorrido em um dia do mês:",
      maiorFaturamento.toFixed(2)
    );
    console.log(
      "Número de dias com faturamento acima da média mensal:",
      diasAcimaDaMedia
    );
  } catch (parseError) {
    console.error("Erro ao processar o arquivo JSON:", parseError);
  }
});
