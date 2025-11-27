// Dados simulando o JSON de vendas
const dadosVendas = {
  vendas: [
    { vendedor: "João Silva", valor: 1200.5 },
    { vendedor: "João Silva", valor: 950.75 },
    { vendedor: "João Silva", valor: 1800.0 },
    { vendedor: "João Silva", valor: 1400.3 },
    { vendedor: "João Silva", valor: 1100.9 },
    { vendedor: "João Silva", valor: 1550.0 },
    { vendedor: "João Silva", valor: 1700.8 },
    { vendedor: "João Silva", valor: 250.3 },
    { vendedor: "João Silva", valor: 480.75 },
    { vendedor: "João Silva", valor: 320.4 },

    { vendedor: "Maria Souza", valor: 2100.4 },
    { vendedor: "Maria Souza", valor: 1350.6 },
    { vendedor: "Maria Souza", valor: 950.2 },
    { vendedor: "Maria Souza", valor: 1600.75 },
    { vendedor: "Maria Souza", valor: 1750.0 },
    { vendedor: "Maria Souza", valor: 1450.9 },
    { vendedor: "Maria Souza", valor: 400.5 },
    { vendedor: "Maria Souza", valor: 180.2 },
    { vendedor: "Maria Souza", valor: 90.75 },

    { vendedor: "Carlos Oliveira", valor: 800.5 },
    { vendedor: "Carlos Oliveira", valor: 1200.0 },
    { vendedor: "Carlos Oliveira", valor: 1950.3 },
    { vendedor: "Carlos Oliveira", valor: 1750.8 },
    { vendedor: "Carlos Oliveira", valor: 1300.6 },
    { vendedor: "Carlos Oliveira", valor: 300.4 },
    { vendedor: "Carlos Oliveira", valor: 500.0 },
    { vendedor: "Carlos Oliveira", valor: 125.75 },

    { vendedor: "Ana Lima", valor: 1000.0 },
    { vendedor: "Ana Lima", valor: 1100.5 },
    { vendedor: "Ana Lima", valor: 1250.75 },
    { vendedor: "Ana Lima", valor: 1400.2 },
    { vendedor: "Ana Lima", valor: 1550.9 },
    { vendedor: "Ana Lima", valor: 1650.0 },
    { vendedor: "Ana Lima", valor: 75.3 },
    { vendedor: "Ana Lima", valor: 420.9 },
    { vendedor: "Ana Lima", valor: 315.4 },
  ],
};

// Regra de comissão
function calcularComissao(valor) {
  if (valor < 100) return 0;
  if (valor < 500) return valor * 0.01;
  return valor * 0.05;
}

// Agrupamento por vendedor
function agruparComissoesPorVendedor(vendas) {
  const resultado = {};

  vendas.forEach((venda) => {
    const comissao = calcularComissao(venda.valor);

    if (!resultado[venda.vendedor]) {
      resultado[venda.vendedor] = {
        totalVendas: 0,
        totalComissao: 0,
      };
    }

    resultado[venda.vendedor].totalVendas += venda.valor;
    resultado[venda.vendedor].totalComissao += comissao;
  });

  return resultado;
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

document
  .getElementById("btnCalcularComissoes")
  .addEventListener("click", () => {
    const resultado = agruparComissoesPorVendedor(dadosVendas.vendas);
    const container = document.getElementById("resultadoComissoes");

    let html = '<table class="table">';
    html += "<thead><tr><th>Vendedor</th><th>Total em vendas</th><th>Total em comissão</th></tr></thead><tbody>";

    Object.keys(resultado).forEach((vendedor) => {
      const { totalVendas, totalComissao } = resultado[vendedor];
      html += `<tr>
        <td>${vendedor}</td>
        <td>${formatarMoeda(totalVendas)}</td>
        <td>${formatarMoeda(totalComissao)}</td>
      </tr>`;
    });

    html += "</tbody></table>";
    container.innerHTML = html;
  });
