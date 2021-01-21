const counter = document.querySelector('#number')
// const decrease = document.querySelector('#decrease')
// const reset = document.querySelector('#reset')
// const increase = document.querySelector("#increase")

var count = 0

function decrease() {
    if (count > 0)
        count--
    counter.textContent = count
}

function increase() {
    count++
    counter.textContent = count

}

function reset() {
    count = 0
    counter.textContent = count

}