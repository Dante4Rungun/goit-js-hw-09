import Notiflix from "notiflix";

const amount = document.querySelector('amount')
const delay = document.querySelector('delay')
const step = document.querySelector('step')
const form = document.querySelector('.form')
const btnCreate = form.querySelector('button')

let delayValue = 0
let stepValue = 0
let amountValue = 0

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(delay)
  return new Promise((resolve,reject) => {
    
    setTimeout(()=> {
      if(shouldResolve){
        resolve({ position, delay })
      }
      else{
        reject({ position, delay })
      }
    },delay)
  })
}

function promiseRequest(){
  for (let i = 0; i < amountValue; i++){
    console.log("prom")
    createPromise(i, delayValue + i * stepValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}

form.addEventListener("input", (event) => {
  if (event.target.getAttribute("name") === "delay") {
    delayValue = Number(event.target.value)
  }
  if (event.target.getAttribute("name") === "step") {
    stepValue = Number(event.target.value)
  }
  if (event.target.getAttribute("name") === "amount") {
    amountValue = Number(event.target.value)
  }
})

form.addEventListener("click", (event) => {
  event.preventDefault()
  if (event.target.getAttribute("type") === "submit") {
    promiseRequest()
    console.log("+")
  }
})