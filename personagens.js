'use strict';

var imagem

async function criarPersonagens() {
    const endPoint = 'https://apisimpsons.fly.dev/api/personajes?limit=680&page=1';
    const response = await fetch(endPoint);
    const imagens = await response.json();
    return imagens.docs;
}

async function carregarFotos() {
    const imagens = await criarPersonagens();
    if (imagens !== undefined) {
        imagens.forEach(criarTagImg);
    } else {
        console.log('ERRRRROOOOO');
    }
}

function criarTagImg(simpsons) {
    const personagens = document.getElementById('container-main');
    const tagImg = document.createElement('img');
    tagImg.src = simpsons.Imagen;
    const botao = document.getElementById('botao')
    const info = document.getElementById('info')

    personagens.appendChild(tagImg);

    console.log('oioiii');

    tagImg.addEventListener('click', function(){
        console.log('jdjsdhsdhjshjdh')
        const nome = document.getElementById('nome')
        const imagem = document.getElementById('info_imagem')
        const genero = document.getElementById('genero')
        const estado = document.getElementById('estado')
        const ocupacao = document.getElementById('ocupacao')
        const historia = document.getElementById('historia')

        const nomeSelecionado = document.createElement('h4')
        const imagemSelecionada = document.createElement('img')
        const generoSelecionado = document.createElement('h5')
        const estadoSelecionado = document.createElement('h5')
        const ocupacaoSelecionado = document.createElement('h5')
        const historiaSelecionado = document.createElement('h5')

        nomeSelecionado.textContent = simpsons.Nombre
        imagemSelecionada.src = simpsons.Imagen
        generoSelecionado.textContent = simpsons.Genero
        estadoSelecionado.textContent = simpsons.Estado
        ocupacaoSelecionado.textContent = simpsons.Ocupacion
        historiaSelecionado.textContent = simpsons.Historia

        nome.innerHTML = '';
        imagem.innerHTML = '';
        genero.innerHTML = '';
        estado.innerHTML = '';
        ocupacao.innerHTML = '';
        historia.innerHTML = '';

        nome.appendChild(nomeSelecionado)
        genero.appendChild(generoSelecionado)
        estado.appendChild(estadoSelecionado)
        ocupacao.appendChild(ocupacaoSelecionado)
        historia.appendChild(historiaSelecionado)
        imagem.appendChild(imagemSelecionada)

        info.classList.add('mostrar')
    })

    botao.addEventListener('click', function(){
        info.classList.remove('mostrar')
    })
}

carregarFotos();
