# Desafio Técnico – Desenvolvedor de Sistemas Jr  
## Target Sistemas

Este repositório contém a implementação dos três desafios propostos para a vaga de **Desenvolvedor de Sistemas Jr** na **Target Sistemas**.  
O foco da solução é:

- Código limpo e organizado
- Separação de responsabilidades (HTML, CSS e JavaScript)
- Interface simples, moderna e responsiva
- Regra de negócio bem destacada e fácil de entender

---

## 🧱 Estrutura do projeto

```text
desafio-target/
├─ index.html                # Portal com resumo dos desafios
├─ pages/
│  ├─ comissao.html          # Desafio 01 - Comissão de Vendas
│  ├─ estoque.html           # Desafio 02 - Movimentação de Estoque
│  └─ juros.html             # Desafio 03 - Juros por Atraso
├─ assets/
│  ├─ css/
│  │  └─ style.css           # Estilo compartilhado
│  └─ js/
│     ├─ comissao.js         # Lógica do desafio 01
│     ├─ estoque.js          # Lógica do desafio 02
│     └─ juros.js            # Lógica do desafio 03
└─ README.md
```

---

## 🚀 Como executar o projeto

### Opção 1 – Abrir localmente

1. Faça o clone do repositório:

   ```bash
   git clone https://github.com/SEU-USUARIO/desafio-target.git
   cd desafio-target
   ```

2. Abra o arquivo `index.html` diretamente no navegador (Chrome, Edge, etc).

### Opção 2 – GitHub Pages (recomendado)

1. Suba o projeto para um repositório público no GitHub.
2. Acesse **Settings > Pages**.
3. Em **Source**, selecione a branch `main` e o diretório `/ (root)`.
4. Salve e aguarde o link ser gerado.

---

## 🧮 Desafio 01 – Cálculo de comissão por vendedor

**Enunciado (resumo):** Dado um JSON com registros de vendas de um time comercial, calcular a comissão de cada vendedor de acordo com as regras:

- Vendas **abaixo de R$ 100,00** → **0%**
- Vendas **abaixo de R$ 500,00** → **1%**
- Vendas **a partir de R$ 500,00** → **5%**

📄 Página: `pages/comissao.html`  
📂 Script: `assets/js/comissao.js`

### Lógica implementada

1. Os dados são mantidos em um objeto `dadosVendas`, respeitando o JSON do enunciado.
2. A função `calcularComissao(valor)` aplica a regra de faixa para uma venda individual.
3. A função `agruparComissoesPorVendedor(vendas)` soma o total de vendas e de comissões por vendedor.
4. O resultado é exibido em uma tabela no próprio navegador.

Trecho principal:

```js
function calcularComissao(valor) {
  if (valor < 100) return 0;
  if (valor < 500) return valor * 0.01;
  return valor * 0.05;
}
```

---

## 📦 Desafio 02 – Movimentação de estoque

**Enunciado (resumo):** Dado um JSON com produtos e seus estoques, implementar um programa que permita:

- Lançar **entradas** ou **saídas** de mercadoria
- Gerar um **número identificador único** para cada movimentação
- Registrar uma **descrição** da operação
- Retornar a **quantidade final em estoque** do produto movimentado

📄 Página: `pages/estoque.html`  
📂 Script: `assets/js/estoque.js`

### Lógica implementada

1. Os produtos são carregados a partir do objeto `dadosEstoque`.
2. O usuário seleciona:
   - Produto
   - Tipo de movimentação (entrada / saída)
   - Quantidade
   - Descrição
3. A função `movimentarEstoque(codigoProduto, quantidade, tipo, descricao)`:
   - Localiza o produto
   - Atualiza o estoque (`+` para entrada, `-` para saída)
   - Cria um registro com:
     - ID único incremental
     - Tipo, quantidade, descrição
     - Estoque final
4. As movimentações são exibidas em uma lista cronológica.

---

## 📅 Desafio 03 – Juros por atraso

**Enunciado (resumo):** Dado um valor e uma data de vencimento, calcular o valor dos juros na data de hoje considerando uma multa de **2,5% ao dia**.

📄 Página: `pages/juros.html`  
📂 Script: `assets/js/juros.js`

### Lógica implementada

1. O usuário informa:
   - Valor original
   - Data de vencimento
2. A função `calcularJuros(valor, dataVencimento)`:
   - Calcula a diferença de dias entre hoje e a data de vencimento
   - Se não houver atraso (`<= 0` dias), juros = 0
   - Caso contrário:
     - Aplica a fórmula:  
       `juros = valor * taxaDiaria * diasAtraso`  
       onde `taxaDiaria = 0.025` (2,5% ao dia)
     - Retorna:
       - `diasAtraso`
       - `juros`
       - `total` (valor + juros)

---

## 🛠️ Tecnologias utilizadas

- **HTML5** – Estrutura das páginas
- **CSS3** – Estilização, layout responsivo, componentes visuais
- **JavaScript (ES6+)** – Regras de negócio e manipulação do DOM
- Nenhum framework foi utilizado para manter o código mais próximo do dia a dia e fácil de analisar.

---

## 👨‍💻 Autor

**Matheus Dutra**  
Desenvolvedor em constante evolução, focado em construir soluções limpas, organizadas e orientadas à regra de negócio.
