const form = document.getElementById('form');
const btnCadastro = document.getElementById('btn-cadastro');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nomeCompleto = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nomeCompleto,
        email,
    };

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let nome = nomeCompleto.split(' ');
    
    let primeiroNome = nome[0];

    let content = document.getElementById('content');

    let carregando = `<p id="carregando">Carregando...</p>`;

    let pronto = `<p id="pronto">Parabéns ${primeiroNome}! <br> Seu cadastro foi realizado com sucesso!</p>`;
    
    let imagem = `<img id="img-loader" src="../assets/loader.gif"/>`


    content.innerHTML = carregando + `<br> <div id="img-container">${imagem}</div>`


    setTimeout(() => {
        content.innerHTML = pronto;
        setTimeout(() => {
            alert("Seu cadastro foi realizado. A página será recarregada.")
            document.location.reload();
        }, 4000)
    }, 3000)



})
