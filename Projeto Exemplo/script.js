// Captura os elementos do DOM
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adiciona conteúdo textual aos elementos 'h1' e 'a' usando .innerText
titulo.innerText = 'Bem-vindo ao Projeto Exemplo';
link.innerText = 'Visite o site da Prozeducacao';

// Adiciona três itens simples na lista não ordenada usando .innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adiciona três itens com links na lista ordenada usando .innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://gestao.prozeducacao.com.br" target="_blank">Site 1</a></li>
    <li><a href="https://gestao.prozeducacao.com.br" target="_blank">Site 2</a></li>
    <li><a href="https://gestao.prozeducacao.com.br" target="_blank">Site 3</a></li>
`;
