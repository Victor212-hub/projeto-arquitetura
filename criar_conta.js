// ── Seletores ────────────────────────────────────────────────
const inputs      = document.querySelectorAll('.inputt');
const botao       = document.querySelector('.botao');
const inputNome   = inputs[0];
const inputEmail  = inputs[1];
const inputSenha  = inputs[2];
const inputConfirm = inputs[3];

// ── Injetar estilos dinâmicos ────────────────────────────────
function injetarEstilos() {
  const style = document.createElement('style');
  style.textContent = `
    .inputt.valido {
      border: 1px solid #27ae60;
      outline: none;
    }

    .inputt.invalido {
      border: 1px solid #c0392b;
      outline: none;
      animation: shake 0.3s ease;
    }

    @keyframes shake {
      0%   { transform: translateX(0); }
      25%  { transform: translateX(-6px); }
      50%  { transform: translateX(6px); }
      75%  { transform: translateX(-4px); }
      100% { transform: translateX(0); }
    }

    .mensagem-erro {
      color: #c0392b;
      font-size: 0.78rem;
      margin-top: 8px;
      margin-bottom: 12px;
      padding-left: 4px;
      display: block;
      animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .forca-senha-wrap {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    .forca-barra {
      height: 5px;
      border-radius: 4px;
      background: #e0e0e0;
      overflow: hidden;
    }

    .forca-progresso {
      height: 100%;
      width: 0%;
      border-radius: 4px;
      transition: width 0.3s ease, background 0.3s ease;
    }

    .forca-texto {
      font-size: 0.75rem;
      margin-top: 4px;
      font-weight: 600;
    }

    .forca-fraca    { color: #c0392b; }
    .forca-media    { color: #e67e22; }
    .forca-forte    { color: #27ae60; }

    .botao:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .botao:not(:disabled):hover {
      opacity: 0.88;
      transform: translateY(-1px);
      transition: all 0.2s;
    }

    .toggle-senha {
      position: relative;
      width: auto;
      display: inline-block;
    }

    .toggle-senha .inputt {
      width: 300px;
      padding-right: 56px;
      margin: 0;
    }

    .olho-btn {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(0, 0, 0, 0.08);
      cursor: pointer;
      font-size: 1rem;
      color: #666;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      line-height: 1;
      border-radius: 10px;
    }

    .olho-btn:hover { color: #2c3e50; }

    .modal-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.45);
      display: flex; align-items: center; justify-content: center;
      z-index: 999;
      animation: fadeIn 0.2s ease;
    }

    .modal-box {
      background: #fff;
      border-radius: 12px;
      padding: 2rem 2.5rem;
      text-align: center;
      max-width: 340px;
      width: 90%;
      box-shadow: 0 10px 40px rgba(0,0,0,0.15);
      animation: fadeIn 0.3s ease;
    }

    .modal-box .modal-icone { font-size: 2.5rem; margin-bottom: 0.75rem; }
    .modal-box h3 { margin-bottom: 0.5rem; font-size: 1.2rem; color: #2c3e50; }
    .modal-box p  { font-size: 0.9rem; color: #555; margin-bottom: 1.2rem; }
    .modal-box .modal-btn {
      padding: 10px 28px;
      background: #2c3e50;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .modal-box .modal-btn:hover { background: #1a252f; }
  `;
  document.head.appendChild(style);
}

// ── Mostrar / remover erro ───────────────────────────────────
function mostrarErro(input, msg) {
  removerErro(input);
  input.classList.add('invalido');
  input.classList.remove('valido');

  const span = document.createElement('span');
  span.classList.add('mensagem-erro');
  span.textContent = msg;
  span.dataset.erroFor = input.placeholder;
  input.closest('.toggle-senha')
    ? input.closest('.toggle-senha').insertAdjacentElement('afterend', span)
    : input.insertAdjacentElement('afterend', span);
}

function removerErro(input) {
  const wrap = input.closest('.toggle-senha') || input;
  const proximo = wrap.nextElementSibling;
  if (proximo && proximo.classList.contains('mensagem-erro')) {
    proximo.remove();
  }
  input.classList.remove('invalido');
}

function marcarValido(input) {
  removerErro(input);
  input.classList.add('valido');
}

// ── Validações individuais ───────────────────────────────────
function validarNome() {
  const val = inputNome.value.trim();
  if (val.length < 3) {
    mostrarErro(inputNome, '⚠️ Nome deve ter pelo menos 3 caracteres.');
    return false;
  }
  marcarValido(inputNome);
  return true;
}

function validarEmail() {
  const val = inputEmail.value.trim();
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(val)) {
    mostrarErro(inputEmail, '⚠️ Insira um e-mail válido.');
    return false;
  }
  marcarValido(inputEmail);
  return true;
}

function validarSenha() {
  const val = inputSenha.value;
  if (val.length < 6) {
    mostrarErro(inputSenha, '⚠️ Senha deve ter pelo menos 6 caracteres.');
    return false;
  }
  marcarValido(inputSenha);
  return true;
}

function validarConfirmacao() {
  if (inputConfirm.value !== inputSenha.value) {
    mostrarErro(inputConfirm, '⚠️ As senhas não coincidem.');
    return false;
  }
  marcarValido(inputConfirm);
  return true;
}

// ── Validação geral ──────────────────────────────────────────
function validarTudo() {
  const r1 = validarNome();
  const r2 = validarEmail();
  const r3 = validarSenha();
  const r4 = validarConfirmacao();
  return r1 && r2 && r3 && r4;
}

// ── Força da senha ───────────────────────────────────────────
function criarBarraSenha() {
  const wrap = document.createElement('div');
  wrap.classList.add('forca-senha-wrap');
  wrap.innerHTML = `
    <div class="forca-barra">
      <div class="forca-progresso" id="forcaProgresso"></div>
    </div>
    <span class="forca-texto" id="forcaTexto"></span>
  `;
  // insere após o wrapper da senha
  const senhaWrap = inputSenha.closest('.toggle-senha');
  senhaWrap.insertAdjacentElement('afterend', wrap);
}

function atualizarForcaSenha() {
  const val = inputSenha.value;
  const barra = document.getElementById('forcaProgresso');
  const texto = document.getElementById('forcaTexto');
  if (!barra || !texto) return;

  let forca = 0;
  if (val.length >= 6)                  forca++;
  if (val.length >= 10)                 forca++;
  if (/[A-Z]/.test(val))               forca++;
  if (/[0-9]/.test(val))               forca++;
  if (/[^A-Za-z0-9]/.test(val))        forca++;

  const niveis = [
    { min: 0, max: 1, label: '',           cor: '#e0e0e0', pct: '0%',   classe: '' },
    { min: 1, max: 2, label: 'Fraca',      cor: '#c0392b', pct: '33%',  classe: 'forca-fraca' },
    { min: 2, max: 3, label: 'Média',      cor: '#e67e22', pct: '66%',  classe: 'forca-media' },
    { min: 3, max: 6, label: 'Forte 💪',   cor: '#27ae60', pct: '100%', classe: 'forca-forte' },
  ];

  const nivel = niveis.find(n => forca >= n.min && forca <= n.max) || niveis[0];
  barra.style.width      = val.length === 0 ? '0%' : nivel.pct;
  barra.style.background = nivel.cor;
  texto.textContent      = val.length === 0 ? '' : nivel.label;
  texto.className        = `forca-texto ${nivel.classe}`;
}

// ── Toggle visibilidade senha ────────────────────────────────
function adicionarToggleSenha(input) {
  const wrap = document.createElement('div');
  wrap.classList.add('toggle-senha');
  input.parentNode.insertBefore(wrap, input);
  wrap.appendChild(input);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.classList.add('olho-btn');
  btn.textContent = '👁️';
  btn.setAttribute('aria-label', 'Mostrar/ocultar senha');
  wrap.appendChild(btn);

  btn.addEventListener('click', () => {
    const visivel = input.type === 'text';
    input.type = visivel ? 'password' : 'text';
    btn.textContent = visivel ? '👁️' : '🙈';
  });
}

// ── Modal de sucesso ─────────────────────────────────────────
function mostrarModalSucesso() {
  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-icone">🎉</div>
      <h3>Conta criada com sucesso!</h3>
      <p>Bem-vindo ao Sistema de Matrícula Escolar, Professor. Redirecionando para o login...</p>
      <button class="modal-btn" onclick="window.location.href='./index.html'">Ir para o Login</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ── Interceptar o botão Cadastrar ───────────────────────────
function configurarBotao() {
  // Remove o <a> que envolve o botão para controlar a navegação via JS
  const linkBotao = botao.closest('a');
  if (linkBotao) {
    linkBotao.replaceWith(botao);
  }

  botao.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarTudo()) {
      mostrarModalSucesso();
    }
  });
}

// ── Validação em tempo real (ao sair do campo) ───────────────
function configurarValidacaoAoSair() {
  inputNome.addEventListener('blur', validarNome);
  inputEmail.addEventListener('blur', validarEmail);
  inputSenha.addEventListener('blur', validarSenha);
  inputConfirm.addEventListener('blur', validarConfirmacao);
  inputSenha.addEventListener('input', atualizarForcaSenha);
}

// ── Inicialização ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injetarEstilos();
  adicionarToggleSenha(inputSenha);
  adicionarToggleSenha(inputConfirm);
  criarBarraSenha();
  configurarValidacaoAoSair();
  configurarBotao();
});