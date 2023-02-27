alert(`                ATENÇÃO
Esta aplicação web foi desenvolvida com o único intuito 
de aplicar na prática conceitos de JavaScript puro, nesta
pagina não foram implementados recursos para móbile,
AINDA, 
a mesma foi desenvolvida especificamente para computadores
em celulares poderão ocorrer bugs de design!
            `)

document.querySelector('.create-team').style.display = 'none'

function hideImg() {
    const displayImg = document.body.querySelectorAll('#display-initial').forEach(e => {
        document.querySelector(`.${e.classList.value}`).style.display = 'none'
    })
}

hideImg()

function openModal() {
    document.getElementById('modal').style.display = 'block'
    document.getElementById('btn-delete').style.display = 'none'
    document.getElementById('btn-open').style.display = 'none'
    document.getElementById('display-camp').style.display = 'none'
}

function closeModal() {
    document.getElementById('modal').style.display = 'none'
    document.getElementById('btn-delete').style.display = 'block'
    document.getElementById('btn-open').style.display = 'block'
    document.getElementById('display-camp').style.display = 'block'
}

rangeBar = addEventListener('change', change)

function change() {
    const rangeBar = document.getElementById('in-select').value
    const tatic = ['4-4-2', '4-3-3', '5-3-2', '4-5-1', '4-4-1-1']

    document.querySelector('#display-selecao').textContent = tatic[rangeBar - 1]
    document.querySelector('.range').textContent = rangeBar
}

function confirmTatic() {
    const idRange = document.getElementById('in-select').value
    switch (idRange) {
        case '0':
            detectedUpdateDisplay('#display-selecao', '0')
            break;
        case '1':
            detectedUpdateDisplay('#display-selecao', '4-4-2')
            let createListOne = document.getElementById('list-players').innerHTML
            createListOne += "<li class='li-gol'>" + "Goleiro" + "</br>" + "<input class='verify' id='gol' type='text' placeholder='Ex .... Cassio Ramos' value=''>" + "</li>"
            createListOne += "<li>" + "Lateral direito" + "<input class='verify' id='right-back-two' type='text' placeholder='Ex .... Fagner' value=''>" + "</li>"
            createListOne += "<li>" + "Lateral esquerdo" + "<input class='verify' id='left-back-one' type='text' placeholder='Ex .... Fabio Santos' value=''>" + "</li>"
            createListOne += "<li>" + "Zagueiro" + "<input class='verify' id='center-back' type='text' placeholder='Ex .... Gil' value=''>" + "</li>"
            createListOne += "<li>" + "Zagueiro" + "<input class='verify' id='left-back-two' type='text' placeholder='Ex .... Bruno Mendez' value=''>" + "</li>"
            createListOne += "<li>" + "Meio campo" + "<input class='verify' id='right-mid-two' type='text' placeholder='Ex .... Renato Augusto' value=''>" + "</li>"
            createListOne += "<li>" + "Meio campo" + "<input class='verify' id='right-mid-one' type='text' placeholder='Ex .... Fausto Vera' value=''>" + "</li>"
            createListOne += "<li>" + "Meio campo" + "<input class='verify' id='center-mid' type='text' placeholder='Ex .... Giuliano' value=''>" + "</li>"
            createListOne += "<li>" + "Meio campo" + "<input class='verify' id='left-mid-two' type='text' placeholder='Ex .... Du Queiroz' value=''>" + "</li>"
            createListOne += "<li>" + "Ataque" + "<input class='verify' id='ataque-right' type='text' placeholder='Ex .... Yuri Alberto' value=''>" + "</li>"
            createListOne += "<li>" + "Ataque" + "<input class='verify' id='ataque-left' type='text' placeholder='Ex .... Roger Guedes' value=''>" + "</li>"
            document.getElementById('list-players').innerHTML = createListOne
            break;
        case '2':
            detectedUpdateDisplay('#display-selecao', '4-3-3')
            let createListTwo = document.getElementById('list-players').innerHTML
            createListTwo += "<li class='li-gol'>" + "Goleiro" + "</br>" + "<input class='verify' id='gol' type='text' placeholder='Ex .... Cassio Ramos' value=''>" + "</li>"
            createListTwo += "<li>" + "Lateral direito" + "<input class='verify' id='right-back-two' type='text' placeholder='Ex .... Fagner' value=''>" + "</li>"
            createListTwo += "<li>" + "Lateral esquerdo" + "<input class='verify' id='left-back-one' type='text' placeholder='Ex .... Fabio Santos' value=''>" + "</li>"
            createListTwo += "<li>" + "Zagueiro" + "<input class='verify' id='center-back' type='text' placeholder='Ex .... Gil' value=''>" + "</li>"
            createListTwo += "<li>" + "Zagueiro" + "<input class='verify' id='left-back-two' type='text' placeholder='Ex .... Bruno Mendez' value=''>" + "</li>"
            createListTwo += "<li>" + "Meio campo" + "<input class='verify' id='right-mid-two' type='text' placeholder='Ex .... Renato Augusto' value=''>" + "</li>"
            createListTwo += "<li>" + "Meio campo" + "<input class='verify' id='right-mid-one' type='text' placeholder='Ex .... Fausto Vera' value=''>" + "</li>"
            createListTwo += "<li>" + "Meio campo" + "<input class='verify' id='center-mid' type='text' placeholder='Ex .... Giuliano' value=''>" + "</li>"
            createListTwo += "<li>" + "Ataque" + "<input class='verify' id='ataque-right' type='text' placeholder='Ex .... Adson' value=''>" + "</li>"
            createListTwo += "<li>" + "Ataque" + "<input class='verify' id='ataque-center' type='text' placeholder='Ex .... Yuri Alberto' value=''>" + "</li>"
            createListTwo += "<li>" + "Ataque" + "<input class='verify' id='ataque-left' type='text' placeholder='Ex .... Roger Guedez' value=''>" + "</li>"
            document.getElementById('list-players').innerHTML = createListTwo
            break;
        case '3':
            detectedUpdateDisplay('#display-selecao', '5-3-2')
            let createListThre = document.getElementById('list-players').innerHTML
            createListThre += "<li class='li-gol'>" + "Goleiro" + "</br>" + "<input class='verify' id='gol' type='text' placeholder='Ex .... Cassio Ramos' value=''>" + "</li>"
            createListThre += "<li>" + "Lateral direito" + "<input class='verify' id='right-back-two' type='text' placeholder='Ex .... Fagner' value=''>" + "</li>"
            createListThre += "<li>" + "Lateral esquerdo" + "<input class='verify' id='left-back-one' type='text' placeholder='Ex .... Fabio Santos' value=''>" + "</li>"
            createListThre += "<li>" + "Zagueiro" + "<input class='verify' id='center-back' type='text' placeholder='Ex .... Gil' value=''>" + "</li>"
            createListThre += "<li>" + "Zagueiro" + "<input class='verify' id='right-back-one' type='text' placeholder='Ex .... Bruno Mendez' value=''>" + "</li>"
            createListThre += "<li>" + "Zagueiro" + "<input class='verify' id='left-back-two' type='text' placeholder='Ex .... Balbuena' value=''>" + "</li>"
            createListThre += "<li>" + "Meio campo" + "<input class='verify' id='right-mid-one' type='text' placeholder='Ex .... Renato Augusto' value=''>" + "</li>"
            createListThre += "<li>" + "Meio campo" + "<input class='verify' id='center-mid' type='text' placeholder='Ex .... Giuliano' value=''>" + "</li>"
            createListThre += "<li>" + "Meio campo" + "<input class='verify' id='left-mid-one' type='text' placeholder='Ex .... Du Queiroz' value=''>" + "</li>"
            createListThre += "<li>" + "Ataque" + "<input class='verify' id='ataque-center' type='text' placeholder='Ex .... Yuri Alberto' value=''>" + "</li>"
            createListThre += "<li>" + "Ataque" + "<input class='verify' id='ataque-left' type='text' placeholder='Ex .... Roger Guedez' value=''>" + "</li>"
            document.getElementById('list-players').innerHTML = createListThre
            break;
        case '4':
            detectedUpdateDisplay('#display-selecao', '4-5-1')
            let createListFour = document.getElementById('list-players').innerHTML
            createListFour += "<li class='li-gol'>" + "Goleiro" + "</br>" + "<input class='verify' id='gol' type='text' placeholder='Ex .... Cassio Ramos' value=''>" + "</li>"
            createListFour += "<li>" + "Lateral direito" + "<input class='verify' id='right-back-two' type='text' placeholder='Ex .... Fagner' value=''>" + "</li>"
            createListFour += "<li>" + "Lateral esquerdo" + "<input class='verify' id='left-back-one' type='text' placeholder='Ex .... Fabio Santos' value=''>" + "</li>"
            createListFour += "<li>" + "Zagueiro" + "<input class='verify' id='center-back' type='text' placeholder='Ex .... Gil' value=''>" + "</li>"
            createListFour += "<li>" + "Zagueiro" + "<input class='verify' id='right-back-one' type='text' placeholder='Ex .... Bruno Mendez' value=''>" + "</li>"
            createListFour += "<li>" + "Meio Campo" + "<input class='verify' id='right-mid-one' type='text' placeholder='Ex .... Fausto Vera' value=''>" + "</li>"
            createListFour += "<li>" + "Meio campo" + "<input class='verify' id='right-mid-two' type='text' placeholder='Ex .... Renato Augusto' value=''>" + "</li>"
            createListFour += "<li>" + "Meio campo" + "<input class='verify' id='center-mid' type='text' placeholder='Ex .... Giuliano' value=''>" + "</li>"
            createListFour += "<li>" + "Meio campo" + "<input class='verify' id='left-mid-one' type='text' placeholder='Ex .... Du Queiroz' value=''>" + "</li>"
            createListFour += "<li>" + "Meio campo" + "<input class='verify' id='left-mid-two' type='text' placeholder='Ex .... Paulinho' value=''>" + "</li>"
            createListFour += "<li>" + "Ataque" + "<input class='verify' id='ataque-left' type='text' placeholder='Ex .... Yuri Alberto' value=''>" + "</li>"
            document.getElementById('list-players').innerHTML = createListFour
            break;
        case '5':
            detectedUpdateDisplay('#display-selecao', '4-4-1-1')
            let createListFive = document.getElementById('list-players').innerHTML
            createListFive += "<li class='li-gol'>" + "Goleiro" + "</br>" + "<input class='verify' id='gol' type='text' placeholder='Ex .... Cassio Ramos' value=''>" + "</li>"
            createListFive += "<li>" + "Lateral direito" + "<input class='verify' id='right-back-two' type='text' placeholder='Ex .... Fagner' value=''>" + "</li>"
            createListFive += "<li>" + "Lateral esquerdo" + "<input class='verify' id='left-back-one' type='text' placeholder='Ex .... Fabio Santos' value=''>" + "</li>"
            createListFive += "<li>" + "Zagueiro" + "<input class='verify' id='center-back' type='text' placeholder='Ex .... Gil' value=''>" + "</li>"
            createListFive += "<li>" + "Zagueiro" + "<input class='verify' id='right-back-one' type='text' placeholder='Ex .... Bruno Mendez' value=''>" + "</li>"
            createListFive += "<li>" + "Meio Campo" + "<input class='verify' id='right-mid-one' type='text' placeholder='Ex .... Fausto Vera' value=''>" + "</li>"
            createListFive += "<li>" + "Meio campo" + "<input class='verify' id='right-mid-two' type='text' placeholder='Ex .... Renato Augusto' value=''>" + "</li>"
            createListFive += "<li>" + "Meio campo" + "<input class='verify' id='center-mid' type='text' placeholder='Ex .... Giuliano' value=''>" + "</li>"
            createListFive += "<li>" + "Meio campo" + "<input class='verify' id='left-mid-one' type='text' placeholder='Ex .... Du Queiroz' value=''>" + "</li>"
            createListFive += "<li>" + "Ataque recuado" + "<input class='verify' id='ataque-back' type='text' placeholder='Ex .... Paulinho' value=''>" + "</li>"
            createListFive += "<li>" + "Ataque" + "<input class='verify' id='ataque-left' type='text' placeholder='Ex .... Yuri Alberto' value=''>" + "</li>"
            document.getElementById('list-players').innerHTML = createListFive
            break;
    }
}

function detectedUpdateDisplay(id, tatic) {
    document.querySelector(id).textContent = tatic

    if (tatic == 0) {
        window.alert('Esquema tatico invalido, escolha entre 1 e 5')
    } else {
        document.querySelector('.create-team').style.display = 'block'
        document.querySelector('.btn-confirm').style.display = 'none'
        document.querySelector('#in-select').style.display = 'none'
        document.querySelector('.range').style.display = 'none'
        document.querySelector('.create-team').style.display = 'block'
    }
}

function cleanTeam() {
    window.location.reload()
}

function escalarTeam() {
    let players = document.querySelectorAll('input.verify').forEach(e => {
        document.querySelector(`span#${e.id}`).textContent = e.value
    })
    const divPlayers = document.querySelectorAll('span.name').forEach(e => {
        let divPlayer = e.textContent
        let divClass = e.id

        console.log(divPlayer)

        if (divPlayer == "" || divPlayer === " ") {
            document.querySelector(`.${divClass}`).style.display = 'none'
        } else {
            document.querySelector(`.${divClass}`).style.display = 'block'
        }
    })
    window.alert('Seu time foi escalado.')
    closeModal()
}