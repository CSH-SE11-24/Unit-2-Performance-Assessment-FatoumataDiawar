const prompt = require('prompt-sync')()



console.log("Welcome to Rock, Paper, Scissors!♡")
console.log("In this game you will be playing a Rock, Paper, scissors game against a CPU program. To start, lets create a profile for you!")

let profile = {
  score: 0
}

profile.name = prompt("Enter your name:")

console.log("Hi", profile.name, "! ٩(◕‿◕)۶")

//Intro////////////////////////////////////
let choices = ["ROCK", "PAPER", "SCISSORS"]

let mode = prompt("What game mode do you want? Enter '0' for easy, '1' for medium, and '2' for hard.")

mode = parseInt(mode)
function easyMode() {
///EASY MODE?????????????????????????????????????????
 
  console.log("You chose easy mode!These are your choices:")
for (let i =0 ;i<choices.length; i++ ){
  console.log(choices[i])
}
  
    let userChoice = prompt("Enter your choice: rock, paper, or scissors:").toUpperCase()
    let Ecpu = "SCISSORS"

    if (userChoice == choices[0]) {
      console.log("You chose", userChoice, "and the computer chose", Ecpu, "You won! I lost ᕙ(⇀‸↼‶)ᕗ"); profile.score = profile.score++
    } else if (userChoice == choices[1]) {
      console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
    } else if (userChoice == choices[2]) {
      console.log("You chose", userChoice, "and the computer chose", Ecpu, "It's a tie! (－_－)")
    }
  return profile.score
  }


///MEDIUM MODE?????????????????????????? generates random number in order to determine computer's choice
function mediumMode() {
  console.log("You chose Medium mode!These are your choices:")
  for (let i =0 ;i<choices.length; i++ ){
    console.log(choices[i])
  }
  let randChoice = Math.floor(Math.random() * 3)
  let userChoice = prompt("Enter your choice: rock, paper, or scissors:").toUpperCase()
  let Ecpu = choices[randChoice]
  ///TIE OPTIONS
  if (userChoice === choices[0] && randChoice == choices[0]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "It's a tie! (－_－)")
  } else if (userChoice == choices[1] && randChoice == choices[1]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "It's a tie! (－_－)")
  } else if (userChoice == choices[2] && randChoice == choices[2]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "It's a tie! (－_－)")
  }
  //IF USER CHOOSES ROCK
  else if (userChoice == choices[0] && randChoice == choices[1]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
  } else if (userChoice == choices[0] && randChoice == choices[2]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "You won! I lost ᕙ(⇀‸↼‶)ᕗ")
    profile.score = profile.score++
  } 
  //IF USER CHOOSES PAPER
  else if (userChoice == choices[1] && randChoice == choices[0]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "You won! I lost ᕙ(⇀‸↼‶)ᕗ")
    profile.score = profile.score++
  }else if (userChoice == choices[1] && randChoice == choices[2]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
  }
  //IF USER CHOOSES SCISSORS

  else if (userChoice == choices[2] && randChoice == choices[0]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
  }

  else if (userChoice == choices[2] && randChoice == choices[1]) {
    console.log("You chose", userChoice, "and the computer chose", Ecpu, "You won! I lost ᕙ(⇀‸↼‶)ᕗ")
    profile.score = profile.score++
  }
  return profile.score
}

////HARD MODE???????????????????????????????????????????????????????uses cheating to win!
function hardMode() {

  console.log("You chose hard mode! In this mode, you'll have less of a chance of winning!!")
  let userChoice = prompt("Enter your choice: rock, paper, or scissors:").toUpperCase()
  let randChoice = Math.floor(Math.random() * 3)
  
  if (userChoice == choices[0]) {

     
    let Ecpu = choices[randChoice]
    if (Ecpu == choices[1]) {
      console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
    } else if (Ecpu == choices[2]) {
      console.log("You chose", userChoice, "and the computer chose", Ecpu, "You won! I lost ᕙ(⇀‸↼‶)ᕗ")
      profile.score = profile.score++
    } else if (Ecpu = choices[0])
      Ecpu = choices[1]
     console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
  }
//user chooses paper
  else if (userChoice == choices[1]) {
    
      let Ecpu = choices[randChoice]
      if (Ecpu == choices[1]) {
        Ecpu = choices[2]
        console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
      } else if (Ecpu == choices[2]) {
        console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
      } else if (Ecpu = choices[0]){
        console.log("You chose", userChoice, "and the computer chose", Ecpu, "You won! I lost ᕙ(⇀‸↼‶)ᕗ")
        profile.score = profile.score++
      }
    }
// if player chooses scissors
  else if (userChoice == choices[2]) {


      let Ecpu = choices[randChoice]
      if (Ecpu == choices[2]) {
        Ecpu = choices[0]
        console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
      } else if (Ecpu == choices[0]) {
        console.log("You chose", userChoice, "and the computer chose", Ecpu, "I won! You lost ( ๑‾̀◡‾́)σ")
      } else if (Ecpu = choices[1]){
        console.log("You chose", userChoice, "and the computer chose", Ecpu, "You won! I lost ᕙ(⇀‸↼‶)ᕗ")
        profile.score = profile.score++
      }
  }
}


// calling functions based on modes

if (mode == 0) {
  easyMode()
} else if (mode == 1) {
  mediumMode()
} else if (mode == 2) {
  hardMode()
}

function playAgain() {
  mode = prompt("What game mode do you want? Enter '0' for easy, '1' for medium, and '2' for hard.")
  if (mode == 0) {
    easyMode()
  } else if (mode == 1) {
    mediumMode()
  } else if (mode == 2) {
    hardMode()
  }
return profile.score
}
let again = prompt("do you want to play again?").toLowerCase()
while (again == "yes") {
  playAgain()
  again = prompt("Do you want to play again?")
}
 console.log("Your final score is ", profile.score + ". Thanks for playing!")






