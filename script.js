function selecionarOnibus(prefixo, chassi, motor, montadora, imagemUrl) {
    // Atualiza os dados no painel de destaque
    document.getElementById('destaque-prefixo').innerText = prefixo;
    document.getElementById('destaque-chassi').innerText = chassi;
    document.getElementById('destaque-motor').innerText = motor;
    document.getElementById('destaque-montadora').innerText = montadora;

    // Atualiza a foto do ônibus no painel principal
    const imgElemento = document.getElementById('foto-onibus-destaque');
    imgElemento.src = imagemUrl;
    imgElemento.alt = "Ônibus Prefixo " + prefixo;

    // Atualiza o estilo do card ativo
    const cards = document.querySelectorAll('.card-onibus');
    cards.forEach(card => card.classList.remove('ativo'));

    // Adiciona classe ativo ao card clicado
    event.currentTarget.classList.add('ativo');
}