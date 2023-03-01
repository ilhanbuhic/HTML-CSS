"use strict"

const placeholder = document.querySelectorAll("input")
console.log(placeholder)

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
