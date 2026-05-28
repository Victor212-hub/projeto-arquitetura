// Simula banco de dados — futuramente viria de uma API
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

// Simula busca no banco — futuramente seria um fetch('api/alunos?turma=3A')
function carregarTurma(turma) {
  const tabela = document.getElementById('tabela-notas');
  const alunos = bancoDados[turma] || [];

  // Remove linhas antigas mantendo cabeçalho
  while (tabela.rows.length > 1) tabela.deleteRow(1);

  if (alunos.length === 0) return;

  const notasSalvas = JSON.parse(localStorage.getItem('notas')) || {};

  alunos.forEach(aluno => {
    const tr = tabela.insertRow();
    tr.innerHTML = `<td>${aluno.nome}</td>`;

    disciplinas.forEach(disc => {
      const valorSalvo = notasSalvas[aluno.id]?.[disc] ?? '';
      tr.innerHTML += `
        <td>
          <input 
            type="number" min="0" max="10" step="0.1"
            value="${valorSalvo}"
            style="width:55px; text-align:center;"
            oninput="salvarNota(this, '${aluno.id}', '${disc}')"
          >
        </td>`;
    });
  });
}

// Salva nota no localStorage — futuramente seria um fetch POST para a API
function salvarNota(input, alunoId, disciplina) {
  const nota = parseFloat(input.value);

  if (input.value !== '' && (nota < 0 || nota > 10)) {
    input.style.border = '2px solid red';
    mostrarStatus('Nota inválida! Digite entre 0 e 10.', 'erro');
    return;
  }

  input.style.border = '2px solid green';

  const notas = JSON.parse(localStorage.getItem('notas')) || {};
  if (!notas[alunoId]) notas[alunoId] = {};
  notas[alunoId][disciplina] = input.value;
  localStorage.setItem('notas', JSON.stringify(notas));

  mostrarStatus('✓ Nota salva!', 'sucesso');
}

function mostrarStatus(msg, tipo) {
  let status = document.getElementById('status-nota');
  if (!status) {
    status = document.createElement('p');
    status.id = 'status-nota';
    status.style.cssText = 'text-align:center; font-size:13px; margin-top:10px;';
    document.querySelector('h1').after(status);
  }
  status.style.color = tipo === 'sucesso' ? 'green' : 'red';
  status.textContent = msg;
  setTimeout(() => status.textContent = '', 2000);
}