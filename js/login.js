const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

function mostrarErro(texto, campo) {
  mensagem.textContent = texto;
  campo.focus();
}

document.getElementById("btnLogin").addEventListener("click", function () {
  mensagem.textContent = "";
  const login = campoLogin.value.trim();
  const senha = campoSenha.value;

  if (login === "") {
    mostrarErro("Preencha o login.", campoLogin);
    return;
  }
  if (!emailValido(login)) {
    mostrarErro("O login deve ser um e-mail válido.", campoLogin);
    return;
  }
  if (senha === "") {
    mostrarErro("Preencha a senha.", campoSenha);
    return;
  }

  sessionStorage.setItem("logado", "sim");
  alert("Validação realizada com sucesso");
  window.location.href = "index.html";
});

document.getElementById("btnLimpar").addEventListener("click", function () {
  campoLogin.value = "";
  campoSenha.value = "";
  mensagem.textContent = "";
  campoLogin.focus();
});

document.getElementById("btnVoltar").addEventListener("click", function () {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
});