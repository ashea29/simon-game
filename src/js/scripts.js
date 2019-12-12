const greenBtn = document.querySelector('#square-one')
const redBtn = document.querySelector('#square-two')
const yellowBtn = document.querySelector('#square-three')
const blueBtn = document.querySelector('#square-four')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const instructBtn = document.querySelector('#instructions')

const turnCounter = document.querySelector('#counter') 

let gamePattern = []
let userPattern = []

let machine

let gameOn = true

let winCondition

let numberOfFlashes

let interval

let count

let correctPattern


turnCounter.innerHTML = "--"

instructBtn.addEventListener('click', function(event){
  // event.preventDefault()
  window.location.reload()
  instructBtn.style.backgroundColor = "black"
  instructBtn.style.color = "white"
})

resetBtn.addEventListener('click', function(event) {
  // event.preventDefault()
  window.location.reload()
  resetBtn.style.backgroundColor = "black"
  resetBtn.style.color = "white"
  setTimeout(() => {
    resetBtn.style.backgroundColor = "white"
    resetBtn.style.backgroundColor = "black"
  }, 200);
})


function resetColors() {
  greenBtn.style.backgroundColor = "green"
  redBtn.style.backgroundColor = "red"
  yellowBtn.style.backgroundColor = "yellow"
  blueBtn.style.backgroundColor = "blue"
}

function flashButtons() {
  greenBtn.style.backgroundColor = "lightgreen"
  redBtn.style.backgroundColor = "lightcoral"
  yellowBtn.style.backgroundColor = "lightgoldenrodyellow"
  blue.style.backgroundColor = "lightskyblue"
}

function flashGreenBtn(){
  greenBtn.style.backgroundColor = "lightgreen"
  setTimeout(() => {
    greenBtn.style.backgroundColor = "green"
  }, 200);
}

function flashRedBtn(){
  redBtn.style.backgroundColor = "lightcoral"
  setTimeout(() => {
    redBtn.style.backgroundColor = "red"
  }, 200);
}

function flashYellowBtn(){
  yellowBtn.style.backgroundColor = "lightgoldenrodyellow"
  setTimeout(() => {
    yellowBtn.style.backgroundColor = "yellow"
  }, 200);
}

function flashBlueBtn(){
  blueBtn.style.backgroundColor = "lightskyblue"
  setTimeout(() => {
    blueBtn.style.backgroundColor = "blue"
  }, 200);
}

greenBtn.addEventListener('click', function(event) { 
  // if(gameOn){
    userPattern.push(1)
    // checkIfMatches()
    flashGreenBtn()
  //} 
  if(!winCondition){
    setTimeout(() => {
      resetColors()
    }, 200);
  }
})

redBtn.addEventListener('click', function(event) { 
  // if(gameOn){
    userPattern.push(2)
    // checkIfMatches()
    flashRedBtn()
  
  if(!winCondition){
    setTimeout(() => {
      resetColors()
    }, 200);
  }

})

yellowBtn.addEventListener('click', function(event) {
  // if(gameOn){
    userPattern.push(3)
    // checkIfMatches()
    flashYellowBtn()
  
  if(!winCondition){
    setTimeout(() => {
      resetColors()
    }, 200);
  }
})

blueBtn.addEventListener('click', function(event) {
  // if(gameOn){
    userPattern.push(4)
    // checkIfMatches()
    flashBlueBtn()
  // }
  if(!winCondition){
    setTimeout(() => {
      resetColors()
    }, 200);
  }
})


startBtn.addEventListener('click', function(event){
  console.log('startBtn')
  startBtn.style.backgroundColor = "white"
  startBtn.style.color = "rgb(63, 71, 71)"
  setTimeout(() => {
    startBtn.style.backgroundColor = "rgb(63, 71, 71)"
    startBtn.style.color = "white"
  }, 200);
})
  
  let currentTurn = turnCounter.innerHTML
  console.log(currentTurn)

  