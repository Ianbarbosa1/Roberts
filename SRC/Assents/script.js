function abrir0(){
    const modal = document.getElementById('escolhas0');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'fechar'|| e.target.id === 'escolhas0'){
            modal.classList.remove('abrir')
        }
    })
}

function abrir1(){
    const modal = document.getElementById('escolhas1');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'fechar'|| e.target.id === 'escolhas1'){
            modal.classList.remove('abrir')
        }
    })
}

function abrir2(){
    const modal = document.getElementById('escolhas2');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'fechar'|| e.target.id === 'escolhas2'){
            modal.classList.remove('abrir')
        }
    })
}

function abrir3(){
    const modal = document.getElementById('escolhas3');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'fechar'|| e.target.id === 'escolhas3'){
            modal.classList.remove('abrir')
        }
    })
}

function abrir4(){
    const modal = document.getElementById('escolhas4');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'fechar'|| e.target.id === 'escolhas4'){
            modal.classList.remove('abrir')
        }
    })
}

function abrir5(){
    const modal = document.getElementById('escolhas5');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'fechar'|| e.target.id === 'escolhas5'){
            modal.classList.remove('abrir')
        }
    })
}

function abrir6(){
    const modal = document.getElementById('escolhas6');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'fechar'|| e.target.id === 'escolhas6'){
            modal.classList.remove('abrir')
        }
    })
}

function abrir7(){
    const modal = document.getElementById('escolhas7');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'fechar'|| e.target.id === 'escolhas7'){
            modal.classList.remove('abrir')
        }
    })
}

/*-------------------------------------------------------------------------------- */

function saborAcai(){
    let select = document.querySelector('#opcoesS0');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    acai = (`Gostaria+de+saber+mais+sobre+o+valor+do+açai+do+sabor+${saborA}.`);
    prosseguir = document.querySelector('#prosseguir').innerHTML = `<a href=https://wa.me/5521964388870?text=${acai}>PROSSEGUIR</a>`;
}
saborAcai();


function saborBebida(){
    let select = document.querySelector('#opcoesS1');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    bebida = (`Gostaria+de+saber+mais+sobre+o+valor+da+bebida+de+${saborA}.`);
    prosseguir = document.querySelector('#prosseguir1').innerHTML = `<a href=https://wa.me/5521964388870?text=${bebida}>PROSSEGUIR</a>`;
}
saborBebida();

function saborCrepioca(){
    let select = document.querySelector('#opcoesS2');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    crepioca = (`Gostaria+de+saber+mais+sobre+o+valor+da+crepioca+do+sabor+de+${saborA}.`);
    prosseguir = document.querySelector('#prosseguir2').innerHTML = `<a href=https://wa.me/5521964388870?text=${crepioca}>PROSSEGUIR</a>`;
}
saborCrepioca();

function saborTapioca(){
    let select = document.querySelector('#opcoesS3');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    tapioca = (`Gostaria+de+saber+mais+sobre+o+valor+da+tapioca+do+sabor+de+${saborA}.`);
    prosseguir = document.querySelector('#prosseguir3').innerHTML = `<a href=https://wa.me/5521964388870?text=${tapioca}>PROSSEGUIR</a>`;
}
saborTapioca();

function saborSalgado(){
    let select = document.querySelector('#opcoesS4');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    salgado = (`Gostaria+de+saber+mais+sobre+o+valor+do+salgado+do+sabor+de+${saborA}.`);
    prosseguir = document.querySelector('#prosseguir4').innerHTML = `<a href=https://wa.me/5521964388870?text=${salgado}>PROSSEGUIR</a>`;
}
saborSalgado();

function saborSanduiche(){
    let select = document.querySelector('#opcoesS5');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    sanduiche = (`Gostaria+de+saber+mais+sobre+o+valor+do+sanduiche+do+sabor+de+${saborA}.`);
    prosseguir = document.querySelector('#prosseguir5').innerHTML = `<a href=https://wa.me/5521964388870?text=${sanduiche}>PROSSEGUIR</a>`;
}
saborSanduiche();

function saborPanqueca(){
    let select = document.querySelector('#opcoesS6');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    panqueca = (`Gostaria+de+saber+mais+sobre+o+valor+do+sanduiche+do+sabor+de+${saborA}.`);
    prosseguir = document.querySelector('#prosseguir6').innerHTML = `<a href=https://wa.me/5521964388870?text=${panqueca}>PROSSEGUIR</a>`;
}
saborPanqueca();

function saborSalada(){
    let select = document.querySelector('#opcoesS7');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    salada = (`Gostaria+de+saber+mais+sobre+o+valor+do+sanduiche+do+sabor+de+${saborA}.`);
    prosseguir = document.querySelector('#prosseguir7').innerHTML = `<a href=https://wa.me/5521964388870?text=${salada}>PROSSEGUIR</a>`;
}
saborSalada();
