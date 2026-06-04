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


// FORMULÁRIO INTERLIGADO COM JAVA
const formulario = document.getElementById('formContato');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de atualizar e sumir com os dados

    // 1. Captura os dados digitados nos campos do HTML
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const evento = document.getElementById('evento').value;
    const mensagem = document.getElementById('mensagem').value;

    // 2. Organiza os dados em uma linha separada por ponto e vírgula (;)
    // Isso facilita muito para o Java ler usando o comando .split(";") depois!
    const dadosFormatados = `${nome};${email};${telefone};${evento};${mensagem}`;

    // 3. Cria o arquivo de texto em memória
    const blob = new Blob([dadosFormatados], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    
    link.href = URL.createObjectURL(blob);
    link.download = 'solicitacao.txt'; // Nome exato do arquivo que o Java vai buscar
    link.click(); // Dispara o download automaticamente no navegador

    // 4. Exibe o seu aviso de sucesso e limpa a tela
    alert('Solicitação gerada com sucesso! Guarde o arquivo "solicitacao.txt" gerado para processarmos no Java.');
    formulario.reset();
});