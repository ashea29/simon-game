const greenBtn = document.querySelector('#square-one')
const redBtn = document.querySelector('#square-two')
const yellowBtn = document.querySelector('#square-three')
const blueBtn = document.querySelector('#square-four')
const startBtn = document.querySelector('#start')
const resetBtn = document.querySelector('#reset')
const instructBtn = document.querySelector('#instructions')

let turnCounter = document.querySelector('#counter') 

let gamePattern = []
let userPattern = []

let machine

let gameOn = false

let winCondition

// let numberOfFlashes

let interval

let counter

let correctPattern


turnCounter.innerHTML = "--"

instructBtn.addEventListener('click', function(event){
  window.location.reload()
  instructBtn.style.backgroundColor = "black"
  instructBtn.style.color = "white"
})

resetBtn.addEventListener('click', function(event) {
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
  }, 1000);
}

function flashRedBtn(){
    redBtn.style.backgroundColor = "lightcoral"
  setTimeout(() => {
    redBtn.style.backgroundColor = "red"
  }, 1000);
}

function flashYellowBtn(){
  yellowBtn.style.backgroundColor = "lightgoldenrodyellow"
  setTimeout(() => {
    yellowBtn.style.backgroundColor = "yellow"
  }, 1000);
}

function flashBlueBtn(){
  blueBtn.style.backgroundColor = "lightskyblue"
  setTimeout(() => {
    blueBtn.style.backgroundColor = "blue"
  }, 1000);
}

greenBtn.addEventListener('click', function(event) { 
  if(gameOn){
    userPattern.push(1)
    console.log(userPattern)
    flashGreenBtn()
    // checkForMatch()
  } 
  if(!winCondition){
    setTimeout(() => {
      resetColors()
    }, 200);
  }
})

redBtn.addEventListener('click', function(event) { 
  if(gameOn){
    userPattern.push(2)
    console.log(userPattern)
    flashRedBtn()
    // checkIfMatches()
  }
  if(!winCondition){
    setTimeout(() => {
      resetColors()
    }, 200);
  }

})

yellowBtn.addEventListener('click', function(event) {
  if(gameOn == true){
    userPattern.push(3)
    console.log(userPattern)
    flashYellowBtn()
    // checkForMatch()
  }
  if(!winCondition){
    setTimeout(() => {
      resetColors()
    }, 200);
  }
})

blueBtn.addEventListener('click', function(event) {
  if(gameOn == true){
    userPattern.push(4)
    console.log(userPattern)
    flashBlueBtn()
    // checkForMatch()
  }
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
  }, 300);
  
  startGame()
})
  
  


function startGame () {
  counter = 0
  turnCounter.innerHTML = 1
  
  timer()
}

// function machineTurn (){
  
// }



// let counter = 0
let timer = () => {
  // if (gameOn == false){
    // counter = 1
    
    for (let i = 0; i <= counter; i++) {
      gamePattern.push(Math.ceil(Math.random()*4))
      console.log('this is gamePattern: ', gamePattern)
      counter+=1
      let interval = setInterval( () => {
        
        console.log('this is counter', counter)
        // turnCounter.innerHTML+=counter
        if (gamePattern[counter] === 1){
          flashGreenBtn()
        } else if (gamePattern[counter] === 2){
          flashRedBtn()
        } else if (gamePattern[counter] === 3){
          flashYellowBtn()
        } else if (gamePattern[counter] === 4){
          flashBlueBtn()
        }
          clearInterval(interval)
        console.log('yes')
      }, 1000)
      }
      gameOn = true
}

// let checkForMatch = (logGamePattern) => {
  
//   if (userPattern == gamePattern){
//     turnCounter.innerHTML++
//     // for (let i = 0; i < 5; i++) {
//     userPattern = []
//     gamePattern = []
//     logGamePattern()*(counter+1)
//       // gamePattern.push(Math.ceil(Math.random()*(counter+1)))
//       console.log(gamePattern)
//     // }
//     gameOn = false
    
//     timer()
    
//   } else if (userPattern != gamePattern){
//     gameOn = false
//     // alert("That's incorrect!")
//     userPattern = []
//     gamePattern = []
//     // for (let i = 0; i < 5; i++) {
//       gameArr*counter
//       console.log(gamePattern)
//     // }
//     let interval = setInterval( () =>{
//       if (gamePattern[counter] === 1){
//         flashGreenBtn()
//       } else if (gamePattern[counter] === 2){
//         flashRedBtn()
//       } else if (gamePattern[counter] === 3){
//         flashYellowBtn()
//       } else if (gamePattern[counter] === 4){
//         flashBlueBtn()
//       }
//         clearInterval(interval)
//       console.log('yes')
//       gameOn == true
//     }, 800)
//     checkForMatch()
//   }

//   if (counter == 5 && userPattern.length == counter && userPattern == gamePattern){
//     winCondition = true
//     alert('You win!')

//   }
// }
