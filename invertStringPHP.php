<?php
// Implementei em PHP para ver como fica também, fora do tempo
// As demais foram em JS devido ser mais rápido para visualizar o resultado através do console.log
$stringOriginal = "inserir";

// Função para inverter a string manualmente
function inverterString($str) {
    $inverso = "";
    $tamanho = strlen($str);

    // Percorre a string de trás para frente
    for ($i = $tamanho - 1; $i >= 0; $i--) {
        $inverso .= $str[$i];
    }

    return $inverso;
}

$stringInvertida = inverterString($stringOriginal);

echo "String original: " . $stringOriginal . "<br>";
echo "String invertida: " . $stringInvertida;