const ESPECIAIS_PERMITIDOS = "@#$%&*!?/\\|-_+.=";
const CARACTERES_PROIBIDOS = "¨{}[]´`~^:;<>,\"'“”‘’";

function emailValido(texto) {
  return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(texto);
}

function validarSenha(senha) {
  if (senha.length < 6) {
    return "A senha deve ter pelo menos 6 caracteres.";
  }
  for (const c of senha) {
    if (CARACTERES_PROIBIDOS.includes(c)) {
      return "A senha contém um caractere não permitido: " + c;
    }
  }
  if (!/[0-9]/.test(senha)) {
    return "A senha deve ter pelo menos um número.";
  }
  if (!/\p{Lu}/u.test(senha)) {
    return "A senha deve ter pelo menos uma letra maiúscula.";
  }
  if (![...senha].some(c => ESPECIAIS_PERMITIDOS.includes(c))) {
    return "A senha deve ter pelo menos um caractere especial permitido.";
  }
  return "";
}

function validarNome(nome) {
  const texto = nome.trim();
  if (texto === "") {
    return "Preencha o nome.";
  }
  const palavras = texto.split(/\s+/);
  if (palavras.length < 2) {
    return "O nome deve ter pelo menos duas palavras.";
  }
  if (palavras[0].length < 2) {
    return "A primeira palavra do nome deve ter pelo menos 2 caracteres.";
  }
  const proibidos = ESPECIAIS_PERMITIDOS + CARACTERES_PROIBIDOS;
  for (const c of texto) {
    if (proibidos.includes(c)) {
      return "O nome não pode conter caracteres especiais: " + c;
    }
  }
  return "";
}

function mascaraCPF(valor) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  return d
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

function cpfValido(cpf) {
  const d = cpf.replace(/\D/g, "");
  if (d.length !== 11 || /^(\d)\1{10}$/.test(d)) {
    return false;
  }
  for (let t = 9; t < 11; t++) {
    let soma = 0;
    for (let i = 0; i < t; i++) {
      soma += Number(d[i]) * (t + 1 - i);
    }
    const dv = ((soma * 10) % 11) % 10;
    if (dv !== Number(d[t])) {
      return false;
    }
  }
  return true;
}

function mascaraTelefone(valor) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return "(" + d;
  if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
  if (d.length <= 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
  return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
}

function telefoneValido(telefone) {
  const d = telefone.replace(/\D/g, "");
  return /^[1-9]{2}(9\d{8}|[2-5]\d{7})$/.test(d);
}

function maiorDeIdade(dataISO) {
  const nascimento = new Date(dataISO + "T00:00:00");
  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade >= 18;
}

function textoRegrasSenha() {
  return `
    <strong>Regras da senha</strong>
    <ul>
      <li>Mínimo de 6 caracteres.</li>
      <li>Pelo menos 1 número, 1 letra maiúscula e 1 caractere especial permitido.</li>
      <li>Especiais permitidos: <strong>@ # $ % &amp; * ! ? / \\ | - _ + . =</strong></li>
      <li>Não permitidos: <strong>¨ { } [ ] ´ \` ~ ^ : ; &lt; &gt; , " ' “ ” ‘ ’</strong></li>
    </ul>`;
}
