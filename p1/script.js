const color = document.querySelector('#color')
const body = document.querySelector('body')

function generateColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color.textContent = `#${randomColor}`
    body.style.backgroundColor = `#${randomColor}`
}