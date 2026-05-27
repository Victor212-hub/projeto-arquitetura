function colorirStatus() {
  const linhas = document.querySelectorAll('.table_bole tr');

  // Adiciona coluna "Situação" no cabeçalho
  const cabecalho = linhas[0];
  const th = document.createElement('th');
  th.textContent = 'Situação';
  cabecalho.appendChild(th);

  linhas.forEach((linha, index) => {
    if (index === 0) return;

    const celulas = linha.querySelectorAll('td');
    if (celulas.length === 0) return;

    const media = parseFloat(celulas[4].textContent);

    // ✅ Aprovado = média 6.0 ou mais
    // ❌ Reprovado = média abaixo de 6.0
    const aprovado = media >= 6.0;

    linha.style.backgroundColor = aprovado ? '#d4edda' : '#f8d7da';
    linha.style.color            = aprovado ? '#155724' : '#721c24';

    const td = document.createElement('td');
    td.textContent      = aprovado ? '✅ Aprovado' : '❌ Reprovado';
    td.style.fontWeight = 'bold';
    linha.appendChild(td);
  });
}

document.addEventListener('DOMContentLoaded', colorirStatus);