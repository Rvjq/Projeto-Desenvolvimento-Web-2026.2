const form = document.getElementById("formCadastro");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const campoConfirmacao = document.getElementById("confirmacao");
const campoNome = document.getElementById("nome");
const campoCpf = document.getElementById("cpf");
const campoNascimento = document.getElementById("nascimento");
const campoTelefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

document.getElementById("regras").innerHTML = textoRegrasSenha();

campoCpf.addEventListener("keydown", function (e) {
  if (e.key.length === 1 && !/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
  }
});
campoCpf.addEventListener("input", function () {
  campoCpf.value = mascaraCPF(campoCpf.value);
});

campoTelefone.addEventListener("keydown", function (e) {
  if (e.key.length === 1 && !/\d/.test(e.key) && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
  }
});
campoTelefone.addEventListener("input", function () {
  campoTelefone.value = mascaraTelefone(campoTelefone.value);
});

function mostrarErro(texto, campo) {
  mensagem.textContent = texto;
  campo.focus();
}

document.getElementById("btnIncluir").addEventListener("click", function () {
  mensagem.textContent = "";
  const email = campoEmail.value.trim();
  const senha = campoSenha.value;
  const confirmacao = campoConfirmacao.value;

  if (email === "") {
    mostrarErro("Preencha o e-mail.", campoEmail);
    return;
  }
  if (!emailValido(email)) {
    mostrarErro("O e-mail informado não é válido.", campoEmail);
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

  const erroNome = validarNome(campoNome.value);
  if (erroNome !== "") {
    mostrarErro(erroNome, campoNome);
    return;
  }

  if (campoCpf.value === "") {
    mostrarErro("Preencha o CPF.", campoCpf);
    return;
  }
  if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(campoCpf.value)) {
    mostrarErro("O CPF deve estar no formato NNN.NNN.NNN-NN.", campoCpf);
    return;
  }
  if (!cpfValido(campoCpf.value)) {
    mostrarErro("O CPF informado é inválido.", campoCpf);
    return;
  }

  if (campoNascimento.value === "") {
    mostrarErro("Preencha a data de nascimento.", campoNascimento);
    return;
  }
  if (!maiorDeIdade(campoNascimento.value)) {
    mostrarErro("O cliente deve ter 18 anos ou mais.", campoNascimento);
    return;
  }

  if (campoTelefone.value !== "" && !telefoneValido(campoTelefone.value)) {
    mostrarErro("Telefone inválido. Use o formato (DD) 99999-9999.", campoTelefone);
    return;
  }

  alert("Validação realizada com sucesso");
});

document.getElementById("btnLimpar").addEventListener("click", function () {
  form.reset();
  mensagem.textContent = "";
  campoEmail.focus();
});

document.getElementById("btnVoltar").addEventListener("click", function () {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html";
  }
});
