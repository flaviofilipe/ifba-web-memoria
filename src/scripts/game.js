const game = document.getElementById('game')

const onload = () => {
    for (let index = 0; index < 8; index++) {
        createItem('images/default.png')
    }
    
    onClickItem()
}

const createItem = (imageSrc) => {
    const item = document.createElement('div')
    item.className = 'item'

    const img = document.createElement('img')
    img.src = imageSrc

    item.appendChild(img)
    game.appendChild(item)
}

const onClickItem = () => {
    $('.item').on('click', () => {
        console.log('Aqui')
    })
}

window.onload = onload