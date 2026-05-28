function realizarLogin(event, destino) {
  event.preventDefault();

  const form = event.target.closest('form');
  const inputs = form.querySelectorAll('input');
  let valido = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.border = '2px solid red';
      valido = false;
    } else {
      input.style.border = '';
    }
  });

  if (!valido) {
    alert('Preencha todos os campos!');
    return;
  }

  // Usuários e senhas fixos
  const usuarios = {
    coordenador: { email: 'coord@escola.com', senha: '1234' },
    professor:   { email: 'prof@escola.com',  senha: '1234' },
    aluno:       { matricula: '2026001',       senha: '1234' }
  };

  const valores = [...inputs].map(i => i.value.trim());

  // Verifica qual formulário está sendo submetido pelo destino
  if (destino === 'tela_coordenador.html') {
    const { email, senha } = usuarios.coordenador;
    if (valores[0] !== email || valores[1] !== senha) {
      alert('Email ou senha incorretos!');
      return;
    }
  }

  if (destino === 'tela_professor.html') {
    const { email, senha } = usuarios.professor;
    if (valores[0] !== email || valores[1] !== senha) {
      alert('Email ou senha incorretos!');
      return;
    }
  }

  if (destino === 'tela_aluno.html') {
    const { matricula, senha } = usuarios.aluno;
    if (valores[0] !== matricula || valores[1] !== senha) {
      alert('Matrícula ou senha incorretos!');
      return;
    }
  }

  window.location.href = destino;
}