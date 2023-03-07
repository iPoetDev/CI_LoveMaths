// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded",function () {
  let buttons = document.getElementsByTagName("button")

  for (let button of buttons) /*?+*/
  {
  console.dir(button)
    button.addEventListener("click",function () {
      if (this.getAttribute("data-type") === "submit") /*?+*/
      {
        alert("You clicked Submit!")
        console.dirxml(button)
      } else {
        let gameType = this.getAttribute("data-type")
        alert(`You clicked ${gameType}`)
        console.dir(gameType)
      }
    })
  }
});

function runGame() {

}

function checkAnswers() {

 }

function calculateCorrectAnswer(params) {

}

function incrementScore(params) {

}

function incrementWrongAnswer(params) {

}

function displayAdditionQuestion(params) {

}

function displaySubtractQuestion(params) {

}

function displayMultiplyQuestion(params) {

}