const bancoDados = {
  '3A': [
    { id: '2026001', nome: 'João Silva' },
    { id: '2026002', nome: 'Maria Souza' },
    { id: '2026003', nome: 'Pedro Lima' },
    { id: '2026004', nome: 'Ana Costa' },
  ],
  '3B': [
    { id: '2026005', nome: 'Lucas Mendes' },
    { id: '2026006', nome: 'Julia Ramos' },
  ],
  '2A': [
    { id: '2026007', nome: 'Carlos Neto' },
    { id: '2026008', nome: 'Fernanda Lima' },
  ]
};

const disciplinas = ['Matemática', 'Geografia', 'Ciências', 'Português', 'Física', 'Química'];

function carregarTurma(turma) {
  const tabela = document.getElementById('tabela-notas');
  const alunos = bancoDados[turma] || [];

  while (tabela.rows.length > 1) tabela.deleteRow(1);

  if (alunos.length === 0) {
    tabela.innerHTML += `<tr><td colspan="8" class="msg-turma">Selecione uma turma para carregar os alunos</td></tr>`;
    return;
  }

  const notasSalvas = JSON.parse(localStorage.getItem('notas')) || {};

  alunos.forEach(aluno => {
    const tr = tabela.insertRow();
    tr.innerHTML = `<td><strong>${aluno.nome}</strong></td>`;

    disciplinas.forEach(disc => {
      const valorSalvo = notasSalvas[aluno.id]?.[disc] ?? '';
      tr.innerHTML += `
        <td>
          <input
            type="number" min="0" max="10" step="0.1"
            value="${valorSalvo}"
            oninput="salvarNota(this, '${aluno.id}', '${disc}')"
          >
        </td>`;
    });

    // Coluna de média
    tr.innerHTML += `<td class="media-cell" id="media-${aluno.id}">—</td>`;

    // Calcula média se já tiver notas salvas
    if (notasSalvas[aluno.id]) calcularMedia(aluno.id);
  });
}

function salvarNota(input, alunoId, disciplina) {
  const nota = parseFloat(input.value);

  if (input.value !== '' && (nota < 0 || nota > 10)) {
    input.style.border = '2px solid #e74c3c';
    mostrarStatus('Nota inválida! Digite entre 0 e 10.', 'erro');
    return;
  }

  input.style.border = '1px solid #27ae60';

  const notas = JSON.parse(localStorage.getItem('notas')) || {};
  if (!notas[alunoId]) notas[alunoId] = {};
  notas[alunoId][disciplina] = input.value;
  localStorage.setItem('notas', JSON.stringify(notas));

  calcularMedia(alunoId);
  mostrarStatus('✓ Nota salva!', 'sucesso');
}

function calcularMedia(alunoId) {
  const notas = JSON.parse(localStorage.getItem('notas')) || {};
  const notasAluno = notas[alunoId] || {};
  const valores = Object.values(notasAluno).filter(n => n !== '').map(Number);

  const celula = document.getElementById(`media-${alunoId}`);
  if (!celula) return;

  if (valores.length === 0) {
    celula.textContent = '—';
    celula.className = 'media-cell';
    return;
  }

  const media = valores.reduce((a, b) => a + b, 0) / valores.length;
  celula.textContent = media.toFixed(1);

  if (media >= 7) {
    celula.className = 'media-cell aprovado';
  } else if (media >= 5) {
    celula.className = 'media-cell recuperacao';
  } else {
    celula.className = 'media-cell reprovado';
  }
}

function mostrarStatus(msg, tipo) {
  const status = document.getElementById('status-nota');
  status.style.color = tipo === 'sucesso' ? '#27ae60' : '#e74c3c';
  status.textContent = msg;
  setTimeout(() => status.textContent = '', 2000);
}