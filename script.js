document.getElementById('surpresa').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagemEscondida');
    mensagem.classList.remove('hidden');
    mensagem.style.animation = 'pulse 1s infinite';
});