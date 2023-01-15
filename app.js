const board = document.querySelector('#board')
const SQUARES_NUMBER = 300
let colors = ['#F34336', '#FF9700', '#FFEA3B', '#4CB050', '#009788', '#00BCD4', '#2196F3', '#3F51B5', '#673BB7', '#9C28B1', '#EA1E63']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseout', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.backgroundColor = color
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}

function getColor() {
    const currentColor = colors[0]
    colors.splice(0, 1)
    colors.push(currentColor)
    return currentColor
}