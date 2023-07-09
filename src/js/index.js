const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        //Ajuste para telas de smartphone
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //Aplicar a classe personagem selecionado para mover a shadow entre os icones de personagem
        let = personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        //Trocando a imagem maior do personagem de acordo com o selecionado
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `../src/imagens/card-${idPersonagem}.png`;

        //Trocando a descrição do personagem que está selecionado
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})
