// 1. Dados iniciais (tipos básicos)

// Pergunta o nome do usuário (string)
let nome = prompt("Digite seu nome:");

// Pergunta a renda mensal (number) com validação
let renda = Number(prompt("Digite sua renda mensal:"));

while (isNaN(renda)) {
  renda = Number(prompt("Valor inválido! Digite um número válido para a renda mensal:"));
}

// Pergunta a quantidade de despesas (number) com validação
let quantidadeDespesas = Number(prompt("Quantas despesas você deseja informar? (1 a 5)"));

while (isNaN(quantidadeDespesas)) {
  quantidadeDespesas = Number(prompt("Valor inválido! Digite um número válido para a quantidade de despesas (1 a 5):"));
}

// Regra: limitar entre 1 e 5
if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}

// 2 e 3. Lançamento de despesas com for + validação com while
let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  let despesa = Number(prompt("Digite o valor da Despesa " + i + ":"));

  while (isNaN(despesa)) {
    despesa = Number(prompt("Valor inválido! Digite um número válido para a Despesa " + i + ":"));
  }

  totalDespesas += despesa;
}

// 4. Análise com if / else
let sobra = renda - totalDespesas;
let mensagem = "";

if (totalDespesas > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  if (sobra >= renda * 0.3) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}

// 5. Saída final
let resultado =
  "=== RESULTADO DO ORÇAMENTO ===\n" +
  "Nome: " + nome + "\n" +
  "Renda mensal: R$ " + renda.toFixed(2) + "\n" +
  "Total de despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
  "Sobra: R$ " + sobra.toFixed(2) + "\n" +
  "Classificação: " + mensagem;

// Exibe em alert
alert(resultado);

// Exibe no console.log
console.log("=== RESULTADO DO ORÇAMENTO ===");
console.log("Nome: " + nome);
console.log("Renda mensal: R$ " + renda.toFixed(2));
console.log("Total de despesas: R$ " + totalDespesas.toFixed(2));
console.log("Sobra: R$ " + sobra.toFixed(2));
console.log("Classificação: " + mensagem);