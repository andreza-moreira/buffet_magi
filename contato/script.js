// FAQ ABRIR E FECHAR
const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach((item) => {

    item.addEventListener('click', () => {

        const resposta = item.nextElementSibling;

        if(resposta.style.display === 'block'){
            resposta.style.display = 'none';
        }
        else{
            resposta.style.display = 'block';
        }
    });
});


// FORMULÁRIO
const formulario = document.getElementById('formContato');

formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    alert('Solicitação enviada com sucesso!');

    formulario.reset();
});