document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.caixa_aluno');
  if (!container) return;

  const inputs = container.querySelectorAll('input.inputt');
  const [nameInput, dateInput, cpfInput, cepInput, bairroInput, numeroInput, matriculaInput] = Array.from(inputs);
  const btn = container.querySelector('.botao');

  function onlyDigits(value) {
    return value.replace(/\D+/g, '');
  }

  function clearError(input) {
    const next = input.nextElementSibling;
    if (next && next.classList && next.classList.contains('js-error')) next.remove();
  }

  function showError(input, msg) {
    clearError(input);
    const span = document.createElement('span');
    span.className = 'js-error';
    span.style.color = '#b00020';
    span.style.fontSize = '0.9rem';
    span.style.display = 'block';
    span.style.marginTop = '4px';
    span.textContent = msg;
    input.insertAdjacentElement('afterend', span);
  }

  function formatCEP() {
    let v = onlyDigits(cepInput.value).slice(0, 8);
    if (v.length > 5) v = v.slice(0,5) + '-' + v.slice(5);
    cepInput.value = v;
  }

  function validateCPFraw(val){
    const digits = onlyDigits(String(val));
    return digits.length === 11;
  }

  function validateAll(){
    let ok = true;
    clearError(nameInput);
    clearError(dateInput);
    clearError(cpfInput);
    clearError(cepInput);
    clearError(bairroInput);
    clearError(numeroInput);

    const name = (nameInput.value || '').trim();
    if (name.length < 3) { showError(nameInput, 'Informe o nome completo (mín. 3 caracteres)'); ok = false; }

    const dateVal = dateInput.value;
    if (!dateVal) { showError(dateInput, 'Informe a data'); ok = false; }
    else if (new Date(dateVal) > new Date()) { showError(dateInput, 'Data inválida (futuro)'); ok = false; }

    if (!validateCPFraw(cpfInput.value)) { showError(cpfInput, 'CPF deve ter 11 dígitos numéricos'); ok = false; }

    const cepDigits = onlyDigits(cepInput.value);
    if (cepDigits.length !== 8) { showError(cepInput, 'CEP inválido (formato 00000-000)'); ok = false; }

    if (!(bairroInput.value || '').trim()) { showError(bairroInput, 'Informe o bairro'); ok = false; }

    const numero = onlyDigits(numeroInput.value);
    if (!numero || Number(numero) <= 0) { showError(numeroInput, 'Número inválido'); ok = false; }

    return ok;
  }

  function gerarMatricula(){
    const now = new Date();
    const pad = (n, z=2) => String(n).padStart(z,'0');
    const datePart = now.getFullYear().toString().slice(-2) + pad(now.getMonth()+1) + pad(now.getDate());
    const rand = Math.floor(Math.random()*9000) + 1000; // 4 dígitos
    return `MAT${datePart}${rand}`;
  }

  // eventos
  if (cepInput) cepInput.addEventListener('input', formatCEP);

  if (cpfInput) cpfInput.addEventListener('input', () => {
    // manter apenas dígitos no campo CPF
    const only = onlyDigits(cpfInput.value).slice(0,11);
    cpfInput.value = only;
  });

  if (btn) btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!validateAll()) return;

    // gerar matrícula se vazio
    if (matriculaInput && !matriculaInput.value.trim()) {
      matriculaInput.value = gerarMatricula();
    }

    // breve confirmação visual
    btn.textContent = 'Criando...';
    btn.disabled = true;

    setTimeout(() => {
      alert('Matrícula criada: ' + (matriculaInput ? matriculaInput.value : '---'));
      // redirecionar para a tela do professor
      window.location.href = './tela_professor.html';
    }, 600);
  });
});
