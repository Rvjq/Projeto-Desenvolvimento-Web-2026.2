const linkEntrar = document.getElementById("linkEntrar");
const linkServicos = document.getElementById("linkServicos");
const linkLogout = document.getElementById("linkLogout");
const linkCadastrar = document.getElementById("linkCadastrar");
const linkCadastrarCliente = document.getElementById("linkCadastrarCliente");

function atualizarMenu() {
  const logado = sessionStorage.getItem("logado") === "sim";
  linkEntrar.hidden = logado;
  linkCadastrar.hidden = logado
  linkCadastrarCliente.hidden = !logado;
  linkServicos.hidden = !logado;
  linkLogout.hidden = !logado;
}

document.getElementById("btnLogout").addEventListener("click", function (e) {
  e.preventDefault();
  sessionStorage.removeItem("logado");
  atualizarMenu();
});

atualizarMenu();