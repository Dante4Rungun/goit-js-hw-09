const btnStart = document.querySelector('[data-start]')
const bntStop = document.querySelector('[data-stop]')
let timerId = null

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener("click", (event) => {
    console.log("+")
    timerId = setInterval(() => {
          document.body.style.backgroundColor = getRandomHexColor()
    },1000)
})

bntStop.addEventListener("click", (event) => {
    clearInterval(timerId)
})