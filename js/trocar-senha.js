const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("senha");
const campoConfirmacao = document.getElementById("confirmacao");
const mensagem = document.getElementById("mensagem");

document.getElementById("regras").innerHTML = textoRegrasSenha();

function mostrarErro(texto, campo) {
  mensagem.textContent = texto;
  campo.focus();
}

document.getElementById("btnTrocar").addEventListener("click", function () {
  mensagem.textContent = "";
  const login = campoLogin.value.trim();
  const senha = campoSenha.value;
  const confirmacao = campoConfirmacao.value;

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
  if (confirmacao === "") {
    mostrarErro("Preencha a confirmação de senha.", campoConfirmacao);
    return;
  }
  const erroSenha = validarSenha(senha);
  if (erroSenha !== "") {
    mostrarErro(erroSenha, campoSenha);
    return;
  }
  if (senha !== confirmacao) {
    mostrarErro("A confirmação de senha é diferente da senha.", campoConfirmacao);
    return;
  }

  alert("Validação realizada com sucesso");
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "login.html";
  }
});

document.getElementById("btnLimpar").addEventListener("click", function () {
  campoLogin.value = "";
  campoSenha.value = "";
  campoConfirmacao.value = "";
  mensagem.textContent = "";
  campoLogin.focus();
});
