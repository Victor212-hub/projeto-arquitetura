// ── Constantes ──────────────────────────────────────────────
const MEDIA_APROVACAO = 6.0;
const MEDIA_RECUPERACAO = 5.0;

// ── Seletores ───────────────────────────────────────────────
const tabela = document.querySelector('.table_bole');

// ── Funções ─────────────────────────────────────────────────

/**
 * Calcula a média de um array de notas
 */
function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return (soma / notas.length).toFixed(1);
}

/**
 * Retorna o status e a classe CSS com base na média
 */
function getStatus(media) {
  if (media >= MEDIA_APROVACAO) {
    return { texto: '✅ Aprovado', classe: 'status-aprovado' };
  } else if (media >= MEDIA_RECUPERACAO) {
    return { texto: '⚠️ Recuperação', classe: 'status-recuperacao' };
  } else {
    return { texto: '❌ Reprovado', classe: 'status-reprovado' };
  }
}

/**
 * Destaca células com notas abaixo da média de aprovação
 */
function destacarNotasBaixas(celula, valor) {
  if (valor < MEDIA_APROVACAO) {
    celula.classList.add('nota-baixa');
  }
}

/**
 * Adiciona coluna de Status na tabela
 */
function adicionarColunaStatus() {
  // Adiciona o cabeçalho da nova coluna
  const headerRow = tabela.querySelector('tr');
  const thStatus = document.createElement('th');
  thStatus.textContent = 'Status';
  headerRow.appendChild(thStatus);
}

/**
 * Recalcula as médias e aplica estilos em todas as linhas
 */
function processarLinhas() {
  const linhas = tabela.querySelectorAll('tr');

  linhas.forEach((linha, index) => {
    // Pula o cabeçalho
    if (index === 0) return;

    const celulas = linha.querySelectorAll('td');
    if (celulas.length === 0) return;

    // Coleta as 3 notas (índices 1, 2, 3)
    const notas = [];
    for (let i = 1; i <= 3; i++) {
      const valor = parseFloat(celulas[i].textContent);
      notas.push(valor);
      destacarNotasBaixas(celulas[i], valor);
    }

    // Recalcula e atualiza a média (índice 4)
    const media = calcularMedia(notas);
    celulas[4].textContent = media;

    // Aplica cor na célula de média
    const mediaNum = parseFloat(media);
    if (mediaNum >= MEDIA_APROVACAO) {
      celulas[4].classList.add('media-boa');
    } else if (mediaNum >= MEDIA_RECUPERACAO) {
      celulas[4].classList.add('media-media');
    } else {
      celulas[4].classList.add('media-ruim');
    }

    // Adiciona célula de status
    const status = getStatus(mediaNum);
    const tdStatus = document.createElement('td');
    tdStatus.textContent = status.texto;
    tdStatus.classList.add(status.classe);
    linha.appendChild(tdStatus);
  });
}

/**
 * Adiciona rodapé com resumo geral do aluno
 */
function adicionarResumoGeral() {
  const linhas = tabela.querySelectorAll('tr');
  const medias = [];

  linhas.forEach((linha, index) => {
    if (index === 0) return;
    const celulas = linha.querySelectorAll('td');
    if (celulas.length === 0) return;
    medias.push(parseFloat(celulas[4].textContent));
  });

  const mediaGeral = calcularMedia(medias);
  const status = getStatus(parseFloat(mediaGeral));

  // Linha de média geral na tabela
  const tfootLinha = document.createElement('tr');
  tfootLinha.classList.add('linha-media-geral');
  tfootLinha.innerHTML = `
    <td><strong>Média Geral</strong></td>
    <td colspan="3"></td>
    <td><strong>${mediaGeral}</strong></td>
    <td class="${status.classe}"><strong>${status.texto}</strong></td>
  `;
  tabela.appendChild(tfootLinha);

  // Card de resumo abaixo da tabela
  const container = document.querySelector('.container_boletim');
  const resumo = document.createElement('div');
  resumo.classList.add('resumo-geral');
  resumo.innerHTML = `
    <p>📊 <strong>Média Geral:</strong> ${mediaGeral}</p>
    <p>📌 <strong>Situação Final:</strong> <span class="${status.classe}">${status.texto}</span></p>
    <p>📅 <strong>Ano Letivo:</strong> 2026</p>
  `;
  container.appendChild(resumo);
}

/**
 * Adiciona busca por disciplina
 */
function adicionarBuscaDisciplina() {
  const container = document.querySelector('.container_boletim');

  const campoBusca = document.createElement('input');
  campoBusca.type = 'text';
  campoBusca.placeholder = '🔍 Buscar disciplina...';
  campoBusca.classList.add('busca-disciplina');

  // Insere antes da tabela
  container.insertBefore(campoBusca, tabela);

  campoBusca.addEventListener('input', () => {
    const termo = campoBusca.value.toLowerCase().trim();
    const linhas = tabela.querySelectorAll('tr');

    linhas.forEach((linha, index) => {
      if (index === 0) return; // pula cabeçalho
      const disciplina = linha.querySelector('td');
      if (!disciplina) return;

      const nome = disciplina.textContent.toLowerCase();
      if (nome.includes(termo) || termo === '') {
        linha.style.display = '';
      } else {
        linha.style.display = 'none';
      }
    });
  });
}

/**
 * Adiciona botão de imprimir boletim
 */
function adicionarBotaoImprimir() {
  const container = document.querySelector('.container_boletim');
  const btn = document.createElement('button');
  btn.textContent = '🖨️ Imprimir Boletim';
  btn.classList.add('btn-imprimir');
  btn.addEventListener('click', () => window.print());
  container.appendChild(btn);
}

/**
 * Adiciona estilos dinâmicos via JS
 */
function injetarEstilos() {
  const style = document.createElement('style');
  style.textContent = `
    .nota-baixa {
      color: #c0392b;
      font-weight: bold;
    }

    .media-boa {
      color: #27ae60;
      font-weight: bold;
    }

    .media-media {
      color: #e67e22;
      font-weight: bold;
    }

    .media-ruim {
      color: #c0392b;
      font-weight: bold;
    }

    .status-aprovado {
      color: #27ae60;
      font-weight: bold;
      white-space: nowrap;
    }

    .status-recuperacao {
      color: #e67e22;
      font-weight: bold;
      white-space: nowrap;
    }

    .status-reprovado {
      color: #c0392b;
      font-weight: bold;
      white-space: nowrap;
    }

    .linha-media-geral {
      background-color: #eaf0fb;
      border-top: 2px solid #2c3e50;
    }

    .resumo-geral {
      margin-top: 20px;
      padding: 15px 20px;
      background-color: #f4f7fb;
      border-left: 4px solid #2c3e50;
      border-radius: 6px;
      font-size: 0.95rem;
      line-height: 1.8;
    }

    .busca-disciplina {
      width: 100%;
      padding: 10px 14px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .busca-disciplina:focus {
      border-color: #2c3e50;
    }

    .btn-imprimir {
      margin-top: 20px;
      padding: 10px 24px;
      background-color: #2c3e50;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn-imprimir:hover {
      background-color: #1a252f;
    }

    @media print {
      .busca-disciplina,
      .btn-imprimir,
      header,
      footer {
        display: none;
      }
    }
  `;
  document.head.appendChild(style);
}

// ── Inicialização ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injetarEstilos();
  adicionarColunaStatus();
  processarLinhas();
  adicionarResumoGeral();
  adicionarBuscaDisciplina();
  adicionarBotaoImprimir();
});