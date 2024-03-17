alert('Esta página é apenas uma landing, e não representa diretamente um site de venda.');


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


//-------------------------------------------------------------------------------//
prosseguirOne = document.querySelector('#prosseguir1',);
prosseguirTwo = document.querySelector('#prosseguir2',);
prosseguirThree = document.querySelector('#prosseguir3',);
prosseguirFour = document.querySelector('#prosseguir4',);
prosseguirFive = document.querySelector('#prosseguir5',);
prosseguirSix = document.querySelector('#prosseguir6',);
prosseguirSeven = document.querySelector('#prosseguir7',);
prosseguirEight = document.querySelector('#prosseguir8',);
//-------------------------------------------------------------------------------//


function saborAcai(){
    let select = document.querySelector('#opcoesS0');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    let escolha = saborA

    let escolhaSabores = [ 
        'Gostaria+de+saber+mais+sobre+o+açai+natural',
        'Gostaria+de+saber+mais+sobre+o+açai+de+banana',
        'Gostaria+de+saber+mais+sobre+o+açai+de+morango'
    ]
    
    if(escolha === 'Natural'){
        prosseguirOne.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[0]}>PROSSEGUIR</a>`
    } 
    else if(escolha === 'Banana'){
        prosseguirOne.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[1]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Morango'){
        prosseguirOne.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[2]}>PROSSEGUIR</a>`
    }
}console.log(saborA)



function saborBebida(){
    let select = document.querySelector('#opcoesS1');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    let escolha = saborA

    let escolhaBebidas = [ 
        'Gostaria+de+saber+mais+sobre+o+suco+de+goiaba',
        'Gostaria+de+saber+mais+sobre+o+suco+de+maracujá',
        'Gostaria+de+saber+mais+sobre+o+suco+de+laranja',
        'Gostaria+de+saber+mais+sobre+o+suco+de+morango',
        'Gostaria+de+saber+mais+sobre+o+suco+Mix',
        'Gostaria+de+saber+mais+sobre+o+guaravita',
        'Gostaria+de+saber+mais+sobre+a+coca-cola'
    ]
    
    if(escolha === 'Goiaba'){
        prosseguirTwo.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaBebidas[0]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Maracujá'){
        prosseguirTwo.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaBebidas[1]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Laranja'){
        prosseguirTwo.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaBebidas[2]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Morango'){
        prosseguirTwo.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaBebidas[3]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Suco mix'){
        prosseguirTwo.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaBebidas[4]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Guaravita'){
        prosseguirTwo.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaBebidas[5]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Coca-cola'){
        prosseguirTwo.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaBebidas[6]}>PROSSEGUIR</a>`
    }
}console.log(saborA)



function saborCrepioca(){
    let select = document.querySelector('#opcoesS2');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    let escolha = saborA

    let escolhaSabores = [ 
        'Gostaria+de+saber+mais+sobre+a+crepioca+de+camarão',
        'Gostaria+de+saber+mais+sobre+a+crepioca+de+carne',
        'Gostaria+de+saber+mais+sobre+a+crepioca+de+frango',
        'Gostaria+de+saber+mais+sobre+a+crepioca+de+ovos',
        'Gostaria+de+saber+mais+sobre+a+crepioca+de+rucula',
        'Gostaria+de+saber+mais+sobre+a+crepioca+light',
        'Gostaria+de+saber+mais+sobre+a+crepioca+de+quatro-queijos',
        'Gostaria+de+saber+mais+sobre+a+crepioca+super+leve',
        'Gostaria+de+saber+mais+sobre+a+crepioca+vegetariana',
        'Gostaria+de+saber+mais+sobre+a+crepioca+mista',

    ]
    
    if(escolha === 'Camarão'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[0]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Carne'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[1]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Frango'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[2]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Ovos'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[3]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Rucula'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[4]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Light'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[5]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Quatro-queijos'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[6]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Super-leve'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[7]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Vegetariana'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[8]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Mista'){
        prosseguirThree.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[9]}>PROSSEGUIR</a>`
    }
}console.log(saborA)



function saborTapioca(){
    let select = document.querySelector('#opcoesS3');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    let escolha = saborA

    let escolhaSabores = [ 
        'Gostaria+de+saber+mais+sobre+a+tapioca+de+calabresa',
        'Gostaria+de+saber+mais+sobre+a+tapioca+de+camarão',
        'Gostaria+de+saber+mais+sobre+a+tapioca+de+carne+seca',
        'Gostaria+de+saber+mais+sobre+a+tapioca+de+frango',
        'Gostaria+de+saber+mais+sobre+a+tapioca+de+ovos',
        'Gostaria+de+saber+mais+sobre+a+tapioca+quatro-queijos',
        'Gostaria+de+saber+mais+sobre+a+tapioca+light',
        'Gostaria+de+saber+mais+sobre+a+tapioca+mista',
        'Gostaria+de+saber+mais+sobre+a+tapioca+super+leve',
        'Gostaria+de+saber+mais+sobre+a+tapioca+fit',
        'Gostaria+de+saber+mais+sobre+a+tapioca+vegetariana',
    ]
    
    if(escolha === 'Calabresa'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[0]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Camarão'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[1]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Carne seca'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[2]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Frango'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[3]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Ovos'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[4]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Quatro-queijos'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[5]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Light'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[6]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Mista'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[7]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Super-leve'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[8]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Fit'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[9]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Vegetariana'){
        prosseguirFour.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[10]}>PROSSEGUIR</a>`
    }
}console.log(saborA)



function saborSalgado(){
    let select = document.querySelector('#opcoesS4');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    let escolha = saborA

    let escolhaTipos = [ 
        'Gostaria+de+saber+mais+sobre+o+quiche+de+alho+poró',
        'Gostaria+de+saber+mais+sobre+o+quiche+de+espinafre',
        'Gostaria+de+saber+mais+sobre+o+quiche+de+queijo',
        'Gostaria+de+saber+mais+sobre+o+wrap+primavera',
        'Gostaria+de+saber+mais+sobre+o+wrap+super-leve',
        'Gostaria+de+saber+mais+sobre+o+croissant+de+frango',
    ]
    
    
    if(escolha === 'Quiche de alho Poró'){
        prosseguirFive.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaTipos[0]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Quiche de Espinafre'){
        prosseguirFive.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaTipos[1]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Quiche de Queijo'){
        prosseguirFive.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaTipos[2]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Wrap Primavera'){
        prosseguirFive.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaTipos[3]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Wrap super-leve'){
        prosseguirFive.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaTipos[4]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Croissant de frango'){
        prosseguirFive.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaTipos[5]}>PROSSEGUIR</a>`
    }
}console.log(saborA)



function saborSanduiche(){
    let select = document.querySelector('#opcoesS5');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    let escolha = saborA

    let escolhaSabores = [ 
        'Gostaria+de+saber+mais+sobre+o+sanduiche+de+atum',
        'Gostaria+de+saber+mais+sobre+o+sanduiche+de+frango',
        'Gostaria+de+saber+mais+sobre+o+sanduiche+de+peito+de+peru',
        'Gostaria+de+saber+mais+sobre+o+sanduiche+integral',
    ]

    if(escolha === 'Atum'){
        prosseguirSix.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[0]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Frango'){
        prosseguirSix.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[1]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Peito de peru'){
        prosseguirSix.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[2]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Integral'){
        prosseguirSix.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[3]}>PROSSEGUIR</a>`
    }
}console.log(saborA)



function saborPanqueca(){
    let select = document.querySelector('#opcoesS6');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    let escolha = saborA

    let escolhaSabores = [ 
        'Gostaria+de+saber+mais+sobre+a+panqueca+de+carne',
        'Gostaria+de+saber+mais+sobre+a+panqueca+de+quatro-queijos',
        'Gostaria+de+saber+mais+sobre+a+panqueca+de+camarão+imperial',
        'Gostaria+de+saber+mais+sobre+a+panqueca+de+ovos',
        'Gostaria+de+saber+mais+sobre+a+panqueca+de+frango',
        'Gostaria+de+saber+mais+sobre+a+panqueca+light',
        'Gostaria+de+saber+mais+sobre+a+panqueca+mista',
        'Gostaria+de+saber+mais+sobre+a+panqueca+rainha+do+nordeste',
        'Gostaria+de+saber+mais+sobre+a+panqueca+super-leve',
        'Gostaria+de+saber+mais+sobre+a+panqueca+vegetariana',
    ]
    
    if(escolha === 'Carne'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[0]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Quatro-queijos'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[1]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Camarão-imperial'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[2]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Ovos'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[3]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Frango'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[4]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Light'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[5]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Mista'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[6]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Rainha-do-nordeste'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[7]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Super-leve'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[8]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Vegetariana'){
        prosseguirSeven.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaSabores[9]}>PROSSEGUIR</a>`
    }
}console.log(saborA)



function saborSalada(){
    let select = document.querySelector('#opcoesS7');
    let optionValue = select.options[select.selectedIndex];
    let saborA = optionValue.text;
    let escolha = saborA

    let escolhaTipos = [
        'Gostaria+de+saber+mais+sobre+a+salada+de+legumes',
        'Gostaria+de+saber+mais+sobre+a+salada+de+frutas'
    ]

    if(escolha === 'Legumes'){
        prosseguirEight.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaTipos[0]}>PROSSEGUIR</a>`
    }
    else if(escolha === 'Frutas') {
        prosseguirEight.innerHTML = `<a href=https://wa.me/5521964388870?text=${escolhaTipos[1]}>PROSSEGUIR</a>`
    } 
}console.log(saborA)
