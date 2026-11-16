const form = document.getElementById('form-numeros');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = Number(campoA.value);
    const valorB = Number(campoB.value);

    if (valorB > valorA) {
        mensagem.textContent = `Formulário válido! O número B (${valorB}) é maior que o número A (${valorA}).`;
        mensagem.className = 'sucesso';
    } else {
        mensagem.textContent = `Formulário inválido! O número B (${valorB}) deve ser maior que o número A (${valorA}).`;
        mensagem.className = 'erro';
    }
});
