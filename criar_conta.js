// ── Seletores ────────────────────────────────────────────────
const inputs       = document.querySelectorAll('.inputt');
const botao        = document.querySelector('.botao');
const inputNome    = inputs[0];
const inputEmail   = inputs[1];
const inputSenha   = inputs[2];
const inputConfirm = inputs[3];

// ── Validações ───────────────────────────────────────────────
function validarNome() {
  return inputNome.value.trim().length >= 3;
}

function validarEmail() {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(inputEmail.value.trim());
}

function validarSenha() {
  return inputSenha.value.length >= 6;
}

function validarConfirmacao() {
  return inputConfirm.value === inputSenha.value && inputConfirm.value !== '';
}

// ── Mensagem de erro simples ─────────────────────────────────
function mostrarErro(mensagem) {
  alert('⚠️ ' + mensagem);
}

// ── Mensagem de sucesso ──────────────────────────────────────
function mostrarSucesso() {
  alert('✅ Cadastro concluído com sucesso! Bem-vindo ao sistema, Professor.');
  window.location.href = './index.html';
}

// ── Função principal ─────────────────────────────────────────
function verificarCadastro(e) {
  e.preventDefault();

  if (!validarNome()) {
    mostrarErro('Nome deve ter pelo menos 3 caracteres.');
    return;
  }

  if (!validarEmail()) {
    mostrarErro('Insira um e-mail válido. Ex: professor@escola.com');
    return;
  }

  if (!validarSenha()) {
    mostrarErro('A senha deve ter pelo menos 6 caracteres.');
    return;
  }

  if (!validarConfirmacao()) {
    mostrarErro('As senhas não coincidem. Verifique e tente novamente.');
    return;
  }

  // Tudo certo — exibe sucesso
  mostrarSucesso();
}

// ── Interceptar o botão ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const linkBotao = botao.closest('a');
  if (linkBotao) linkBotao.replaceWith(botao);

  botao.addEventListener('click', verificarCadastro);
});