// ── Configuração de animações e efeitos visuais para o painel do coordenador ──

document.addEventListener('DOMContentLoaded', () => {
  animarCardsAoCarregar();
  adicionarEfeitosAosCards();
  adicionarEfeitosAosBotoes();
  adicionarEfeitosAosSidebar();
  animarTabelaAoCarregar();
  adicionarEfeitosAoHoverTabela();
  injetarEstilosAnimacao();
});

// ── Injetar estilos de animação dinâmicos ────────────────────────────────
function injetarEstilosAnimacao() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    .card-animated {
      animation: scaleIn 0.5s ease-out forwards;
      opacity: 0;
    }

    .sidebar-animated {
      animation: fadeInLeft 0.6s ease-out forwards;
    }

    .botao-animated {
      animation: fadeInUp 0.5s ease-out forwards;
      opacity: 0;
    }

    .tabela-row-animated {
      animation: fadeInUp 0.4s ease-out forwards;
      opacity: 0;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    .botao:active {
      transform: scale(0.98);
    }

    table tbody tr:hover {
      background-color: #f5f5f5;
    }

    .topo {
      animation: slideDown 0.6s ease-out;
    }
  `;
  document.head.appendChild(style);
}

// ── Animar cards ao carregar a página ────────────────────────────────────
function animarCardsAoCarregar() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.classList.add('card-animated');
    card.style.animationDelay = `${index * 0.1}s`;
  });
}

// ── Adicionar efeitos ao passar o mouse sobre cards ──────────────────────
function adicionarEfeitosAosCards() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card) => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 12px 35px rgba(44, 62, 80, 0.2)';
      this.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    });
  });
}

// ── Adicionar efeitos aos botões ─────────────────────────────────────────
function adicionarEfeitosAosBotoes() {
  const botoes = document.querySelectorAll('.botao');
  
  botoes.forEach((botao, index) => {
    botao.classList.add('botao-animated');
    botao.style.animationDelay = `${0.2 + index * 0.1}s`;

    botao.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 8px 20px rgba(44, 62, 80, 0.3)';
      this.style.transition = 'all 0.3s ease';
    });

    botao.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });

    // Efeito de ripple ao clicar
    botao.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.background = 'rgba(255,255,255,0.6)';
      ripple.style.borderRadius = '50%';
      ripple.style.position = 'absolute';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.pointerEvents = 'none';
      ripple.style.animation = 'fadeInUp 0.6s ease-out';

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ── Animar sidebar ao carregar ───────────────────────────────────────────
function adicionarEfeitosAoSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.add('sidebar-animated');
  }

  const navLinks = document.querySelectorAll('.sidebar nav a');
  navLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.animation = `fadeInLeft 0.6s ease-out ${0.1 + index * 0.1}s forwards`;
  });
}

// ── Animar tabela ao carregar ────────────────────────────────────────────
function animarTabelaAoCarregar() {
  const linhas = document.querySelectorAll('table tbody tr');
  
  linhas.forEach((linha, index) => {
    linha.classList.add('tabela-row-animated');
    linha.style.animationDelay = `${0.3 + index * 0.08}s`;
  });
}

// ── Adicionar efeitos ao passar o mouse na tabela ────────────────────────
function adicionarEfeitosAoHoverTabela() {
  const linhas = document.querySelectorAll('table tbody tr');
  
  linhas.forEach((linha) => {
    linha.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#ecf0f1';
      this.style.transition = 'all 0.2s ease';
      this.style.transform = 'scale(1.02)';
    });

    linha.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      this.style.transform = 'scale(1)';
    });
  });
}

// ── Função para verificar se elemento está visível na viewport ──────────
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ── Monitorar scroll para animar elementos ───────────────────────────────
window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.style.animation = 'scaleIn 0.5s ease-out forwards';
    }
  });
});

// ── Feedback visual ao clicar em links do sidebar ──────────────────────
const navLinks = document.querySelectorAll('.sidebar nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', function(e) {
    // Apenas animar se não for link externo
    if (this.getAttribute('href') !== '#') {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    }
  });
});
