const servicos = [
  { nome: "Suporte técnico mensal", preco: 450, prazo: 7 },
  { nome: "Instalação de rede Wi-Fi", preco: 1200, prazo: 15 },
  { nome: "Backup em nuvem", preco: 290, prazo: 7 },
  { nome: "Configuração de firewall", preco: 780, prazo: 10 },
  { nome: "Desenvolvimento de site institucional", preco: 3500, prazo: 30 },
  { nome: "Adequação à LGPD", preco: 2200, prazo: 45 }
];

const selectServico = document.getElementById("servico");
const lblPreco = document.getElementById("lblPreco");
const lblPrazo = document.getElementById("lblPrazo");
const lblPrevisao = document.getElementById("lblPrevisao");
const mensagem = document.getElementById("mensagem");
const corpoTabela = document.querySelector("#tabelaPedidos tbody");

let proximoNumero = 1004;

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatarData(data) {
  return data.toLocaleDateString("pt-BR");
}

function dataISO(data) {
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const dia = String(data.getDate()).padStart(2, "0");
  return data.getFullYear() + "-" + mes + "-" + dia;
}

function somarDias(data, dias) {
  const nova = new Date(data);
  nova.setDate(nova.getDate() + dias);
  return nova;
}

servicos.forEach(function (s, i) {
  const opcao = document.createElement("option");
  opcao.value = i;
  opcao.textContent = s.nome;
  selectServico.appendChild(opcao);
});

selectServico.addEventListener("change", function () {
  mensagem.textContent = "";
  if (selectServico.value === "") {
    lblPreco.textContent = "-";
    lblPrazo.textContent = "-";
    lblPrevisao.textContent = "-";
    return;
  }
  const s = servicos[selectServico.value];
  lblPreco.textContent = formatarMoeda(s.preco);
  lblPrazo.textContent = s.prazo + " dias";
  lblPrevisao.textContent = formatarData(somarDias(new Date(), s.prazo));
});

function ordenarTabela() {
  const linhas = Array.from(corpoTabela.rows);
  linhas.sort(function (a, b) {
    return a.dataset.data.localeCompare(b.dataset.data);
  });
  linhas.forEach(function (linha) {
    corpoTabela.appendChild(linha);
  });
}

document.getElementById("btnIncluir").addEventListener("click", function () {
  if (selectServico.value === "") {
    mensagem.textContent = "Selecione um serviço de TI.";
    selectServico.focus();
    return;
  }
  const s = servicos[selectServico.value];
  const hoje = new Date();

  const linha = corpoTabela.insertRow();
  linha.dataset.data = dataISO(hoje);
  linha.innerHTML =
    "<td>" + formatarData(hoje) + "</td>" +
    "<td>" + proximoNumero + "</td>" +
    "<td>" + s.nome + "</td>" +
    '<td class="status-em-elaboracao">EM ELABORAÇÃO</td>' +
    "<td>" + formatarMoeda(s.preco) + "</td>" +
    "<td>" + formatarData(somarDias(hoje, s.prazo)) + "</td>" +
    '<td><button type="button" class="botao perigo">Excluir</button></td>';
  proximoNumero++;

  ordenarTabela();
  selectServico.value = "";
  selectServico.dispatchEvent(new Event("change"));
  mensagem.textContent = "Solicitação incluída com sucesso.";
});

corpoTabela.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.closest("tr").remove();
  }
});
