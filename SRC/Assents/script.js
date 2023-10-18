

let msg = [
    {
        acai:`Gostaria+de+saber+mais+sobre+os+tamanhos,+valores+e+os+sabores+do+açaí.`,
    },
    {
        bebidas:`Gostaria+de+saber+mais+sobre+os+tamanhos,+valores+e+os+sabores+das+bebidas.`,
    },
    {
        crepiocas:`Gostaria+de+saber+mais+sobre+os+tamanhos,+valores+e+os+sabores+das+crepiocas.`,
    },
    {
        tapiocas:`Gostaria+de+saber+mais+sobre+os+tamanhos,+valores+e+os+sabores+das+tapiocas.`,
    },
    {
        salgados:`Gostaria+de+saber+mais+sobre+o+valor+e+se+os+tipos+de+salgados.`,
    },
    {
        sanduiches:`Gostaria+de+saber+mais+sobre+o+valor+e+se+os+sabores+dos+sanduiches.`,
    },
    {
        panquecas:`Gostaria+de+saber+mais+sobre+o+valor+e+se+os+sabores+das+panquecas.`,
    },
    {
        saladas:`Gostaria+de+saber+mais+sobre+o+valor+e+os+tipos+de+saladas.`,
    }
];



let pAcai = document.querySelector('.botao').innerHTML = `<a href=https://wa.me/5521964388870?text=${msg[0].acai}>SAIBA MAIS</a>`;
let pBebidas = document.querySelector('.botao-1').innerHTML = `<a href=https://wa.me/5521964388870?text=${msg[1].bebidas}>SAIBA MAIS</a>`;
let pCrepiocas = document.querySelector('.botao').innerHTML = `<a href=https://wa.me/5521964388870?text=${msg[2].crepiocas}>SAIBA MAIS</a>`;
let pTapiocas = document.querySelector('.botao-1').innerHTML = `<a href=https://wa.me/5521964388870?text=${msg[3].tapiocas}>SAIBA MAIS</a>`;
let pSalgados = document.querySelector('.botao').innerHTML = `<a href=https://wa.me/5521964388870?text=${msg[4].salgados}>SAIBA MAIS</a>`;
let pSanduiche = document.querySelector('.botao-1').innerHTML = `<a href=https://wa.me/5521964388870?text=${msg[5].sanduiches}>SAIBA MAIS</a>`;
let pPanquecas = document.querySelector('.botao').innerHTML = `<a href=https://wa.me/5521964388870?text=${msg[6].panquecas}>SAIBA MAIS</a>`;
let pSaladas = document.querySelector('.botao-1').innerHTML = `<a href=https://wa.me/5521964388870?text=${msg[7].saladas}>SAIBA MAIS</a>`;


console.log(pBebidas);
