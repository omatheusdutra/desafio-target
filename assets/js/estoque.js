// Dados simulando o JSON de estoque
const dadosEstoque = {
  estoque: [
    {
      codigoProduto: 101,
      descricaoProduto: "Caneta Azul",
      estoque: 150,
    },
    {
      codigoProduto: 102,
      descricaoProduto: "Caderno Universitário",
      estoque: 75,
    },
    {
      codigoProduto: 103,
      descricaoProduto: "Borracha Branca",
      estoque: 200,
    },
    {
      codigoProduto: 104,
      descricaoProduto: "Lápis Preto HB",
      estoque: 320,
    },
    {
      codigoProduto: 105,
      descricaoProduto: "Marcador de Texto Amarelo",
      estoque: 90,
    },
  ],
};

let movimentacoes = [];
let proximoId = 1;

const selectProduto = document.getElementById("produtoSelect");
const resultadoEstoque = document.getElementById("resultadoEstoque");
const listaMovimentacoes = document.getElementById("listaMovimentacoes");

// Preenche o select de produtos
dadosEstoque.estoque.forEach((produto) => {
  const option = document.createElement("option");
  option.value = produto.codigoProduto;
  option.textContent = `${produto.codigoProduto} — ${produto.descricaoProduto} (Estoque: ${produto.estoque})`;
  selectProduto.appendChild(option);
});

function movimentarEstoque(codigoProduto, quantidade, tipo, descricao) {
  const produto = dadosEstoque.estoque.find(
    (p) => p.codigoProduto === codigoProduto
  );
  if (!produto) return null;

  const fator = tipo === "saida" ? -1 : 1;
  produto.estoque += quantidade * fator;

  const movimentacao = {
    id: proximoId++,
    codigoProduto,
    descricao,
    tipo,
    quantidade,
    estoqueFinal: produto.estoque,
    timestamp: new Date(),
  };

  movimentacoes.push(movimentacao);
  return movimentacao;
}

function atualizarSelectProdutos() {
  Array.from(selectProduto.options).forEach((opt) => {
    const codigo = Number(opt.value);
    const produto = dadosEstoque.estoque.find(
      (p) => p.codigoProduto === codigo
    );
    if (produto) {
      opt.textContent = `${produto.codigoProduto} — ${produto.descricaoProduto} (Estoque: ${produto.estoque})`;
    }
  });
}

function renderizarMovimentacoes() {
  listaMovimentacoes.innerHTML = "";
  movimentacoes
    .slice()
    .reverse()
    .forEach((mov) => {
      const li = document.createElement("li");
      const tipoLabel = mov.tipo === "entrada" ? "Entrada" : "Saída";
      const sinal = mov.tipo === "entrada" ? "+" : "-";

      li.innerHTML = `
        <strong>#${mov.id}</strong> • ${tipoLabel}<br/>
        ${sinal}${mov.quantidade} un. — ${mov.descricao}<br/>
        Estoque final: <strong>${mov.estoqueFinal}</strong>
      `;
      listaMovimentacoes.appendChild(li);
    });
}

document
  .getElementById("btnMovimentarEstoque")
  .addEventListener("click", () => {
    const codigoProduto = Number(selectProduto.value);
    const tipo = document.getElementById("tipoMovimentacao").value;
    const quantidade = Number(
      document.getElementById("quantidadeMovimentacao").value
    );
    const descricao = document
      .getElementById("descricaoMovimentacao")
      .value.trim();

    if (!codigoProduto || !quantidade || quantidade <= 0 || !descricao) {
      resultadoEstoque.innerHTML =
        '<span class="text-danger">Preencha produto, quantidade e descrição para registrar a movimentação.</span>';
      return;
    }

    const mov = movimentarEstoque(codigoProduto, quantidade, tipo, descricao);

    if (!mov) {
      resultadoEstoque.innerHTML =
        '<span class="text-danger">Produto não encontrado.</span>';
      return;
    }

    atualizarSelectProdutos();
    renderizarMovimentacoes();

    const produto = dadosEstoque.estoque.find(
      (p) => p.codigoProduto === codigoProduto
    );

    resultadoEstoque.innerHTML = `
      Movimentação <strong>#${mov.id}</strong> registrada com sucesso.<br/>
      Produto: <strong>${produto.descricaoProduto}</strong><br/>
      Tipo: <strong>${mov.tipo === "entrada" ? "Entrada" : "Saída"}</strong><br/>
      Quantidade: <strong>${mov.quantidade}</strong><br/>
      Estoque final: <strong>${mov.estoqueFinal}</strong>
    `;

    document.getElementById("quantidadeMovimentacao").value = "";
    document.getElementById("descricaoMovimentacao").value = "";
  });
