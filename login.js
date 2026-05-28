function realizarLogin(event, destino) {
  event.preventDefault();
  event.stopPropagation();

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
    mostrarErro(form, 'Preencha todos os campos!');
    return;
  }

  const usuarios = {
    coordenador: { email: 'coord@escola.com', senha: '1234' },
    professor:   { email: 'prof@escola.com',  senha: '1234' },
    aluno:       { matricula: '2026001',       senha: '1234' }
  };

  const valores = [...inputs].map(i => i.value.trim());

  if (destino === 'tela_coordenador.html') {
    if (valores[0] !== usuarios.coordenador.email || valores[1] !== usuarios.coordenador.senha) {
      mostrarErro(form, 'Email ou senha incorretos!');
      return;
    }
  }

  if (destino === 'tela_professor.html') {
    if (valores[0] !== usuarios.professor.email || valores[1] !== usuarios.professor.senha) {
      mostrarErro(form, 'Email ou senha incorretos!');
      return;
    }
  }

  if (destino === 'tela_aluno.html') {
    if (valores[0] !== usuarios.aluno.matricula || valores[1] !== usuarios.aluno.senha) {
      mostrarErro(form, 'Matrícula ou senha incorretos!');
      return;
    }
  }

  window.location.href = destino;
}

function mostrarErro(form, msg) {
  let erro = form.querySelector('.msg-erro');
  if (!erro) {
    erro = document.createElement('p');
    erro.className = 'msg-erro';
    erro.style.cssText = 'color: red; font-size: 13px; margin-top: 8px; text-align: center;';
    form.appendChild(erro);
  }
  erro.textContent = msg;
}