// ── Seletores ────────────────────────────────────────────────
const botoes  = document.querySelectorAll('.botao');
const tabela  = document.querySelectorAll('table tr');

// ── Animar botões ────────────────────────────────────────────
function animarBotoes() {
  botoes.forEach((botao) => {

    // Ao passar o mouse por cima
    botao.addEventListener('mouseenter', () => {
      botao.style.transform      = 'translateY(-4px) scale(1.04)';
      botao.style.boxShadow      = '0 8px 20px rgba(0,0,0,0.15)';
      botao.style.transition     = 'all 0.25s ease';
    });

    // Ao tirar o mouse
    botao.addEventListener('mouseleave', () => {
      botao.style.transform      = 'translateY(0) scale(1)';
      botao.style.boxShadow      = 'none';
      botao.style.transition     = 'all 0.25s ease';
    });

    // Ao clicar
    botao.addEventListener('mousedown', () => {
      botao.style.transform      = 'translateY(1px) scale(0.97)';
      botao.style.transition     = 'all 0.1s ease';
    });

    // Ao soltar o clique
    botao.addEventListener('mouseup', () => {
      botao.style.transform      = 'translateY(-4px) scale(1.04)';
      botao.style.transition     = 'all 0.1s ease';
    });

  });
}

// ── Colorir status ───────────────────────────────────────────
function colorirStatus() {
  tabela.forEach((linha, index) => {
    // Pula o cabeçalho
    if (index === 0) return;

    const celulas = linha.querySelectorAll('td');
    if (celulas.length === 0) return;

    // Última célula é o status
    const celulaStatus = celulas[celulas.length - 1];
    const texto = celulaStatus.textContent.trim().toLowerCase();

    if (texto === 'ativo') {
      celulaStatus.textContent        = '🟢 Ativo';
      celulaStatus.style.color        = '#155724';
      celulaStatus.style.background   = '#d4edda';
      celulaStatus.style.fontWeight   = 'bold';
      celulaStatus.style.borderRadius = '20px';
      celulaStatus.style.padding      = '4px 12px';
      celulaStatus.style.textAlign    = 'center';

    } else if (texto === 'inativo') {
      celulaStatus.textContent        = '🔴 Inativo';
      celulaStatus.style.color        = '#721c24';
      celulaStatus.style.background   = '#f8d7da';
      celulaStatus.style.fontWeight   = 'bold';
      celulaStatus.style.borderRadius = '20px';
      celulaStatus.style.padding      = '4px 12px';
      celulaStatus.style.textAlign    = 'center';

    } else if (texto === 'pendente') {
      celulaStatus.textContent        = '🟡 Pendente';
      celulaStatus.style.color        = '#856404';
      celulaStatus.style.background   = '#fff3cd';
      celulaStatus.style.fontWeight   = 'bold';
      celulaStatus.style.borderRadius = '20px';
      celulaStatus.style.padding      = '4px 12px';
      celulaStatus.style.textAlign    = 'center';
    }

  });
}

// ── Inicialização ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  animarBotoes();
  colorirStatus();
});