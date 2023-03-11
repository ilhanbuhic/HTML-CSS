"use strict"

const placeholder = document.querySelectorAll("input")
const valuesOfInputs = document.querySelectorAll("input")
const loginBtn = document.querySelector("button")
const form = document.querySelector("form")

// This won't work, because document.querySelectorAll returns a nodeList which is an array
// so we can't assign eventListener to all of them that way
// placeholder.addEventListener("click", function () {
//   for (let i = 0; i < placeholder.length; i++) {
//     placeholder[i].placeholder = ""
//   }
// })

// We have to do it like this:
// 1st way
for (let i = 0; i < placeholder.length; i++) {
  placeholder[i].addEventListener("click", function () {
    placeholder[i].placeholder = ""
  })
}

// 2nd way
// for (const input of placeholder) {
//   input.addEventListener("click", function () {
//     input.placeholder = ""
//   })
// }

// const dataCollector = () => {
//   for (let i = 0; i < valuesOfInputs.length; i++) {
//     collectedData.push(valuesOfInputs[i].value)
//   }
//   console.log(
//     `Username: ${collectedData[0]}\n
//     Password: ${collectedData[1]}\n
//     Email: ${collectedData[2]}`
//   )
// }

// loginBtn.addEventListener("click", function () {
//   dataCollector()
// })

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const collectedData = new FormData(form)
  for (const data of collectedData) {
    console.log(data)
  }
})
