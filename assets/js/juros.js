// Cálculo de juros a 2,5% ao dia
function calcularJuros(valor, dataVencimento) {
  const hoje = new Date();
  const venc = new Date(dataVencimento);

  const diffMs = hoje - venc;
  if (diffMs <= 0) {
    return {
      diasAtraso: 0,
      juros: 0,
      total: valor,
    };
  }

  const MILIS_POR_DIA = 1000 * 60 * 60 * 24;
  const diasAtraso = Math.floor(diffMs / MILIS_POR_DIA);
  const taxaDiaria = 0.025; // 2,5% ao dia

  const juros = valor * taxaDiaria * diasAtraso;
  const total = valor + juros;

  return {
    diasAtraso,
    juros,
    total,
  };
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

document.getElementById("btnCalcularJuros").addEventListener("click", () => {
  const valor = Number(document.getElementById("valorOriginal").value);
  const dataVenc = document.getElementById("dataVencimento").value;
  const resultadoBox = document.getElementById("resultadoJuros");

  if (!valor || !dataVenc) {
    resultadoBox.innerHTML =
      '<span class="text-danger">Informe um valor válido e uma data de vencimento.</span>';
    return;
  }

  const { diasAtraso, juros, total } = calcularJuros(valor, dataVenc);

  if (diasAtraso === 0) {
    resultadoBox.innerHTML = `
      <span class="text-success">Nenhum atraso até o momento.</span><br/>
      Valor original: <strong>${formatarMoeda(valor)}</strong><br/>
      Juros: <strong>${formatarMoeda(0)}</strong><br/>
      Total a pagar: <strong>${formatarMoeda(valor)}</strong>
    `;
  } else {
    resultadoBox.innerHTML = `
      Atraso de <strong>${diasAtraso} dia(s)</strong>.<br/>
      Juros calculados: <strong>${formatarMoeda(juros)}</strong><br/>
      Total a pagar: <strong>${formatarMoeda(total)}</strong>
    `;
  }
});
