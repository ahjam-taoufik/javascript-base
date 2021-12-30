 console.log('script.js') // DOM: Document Object Model

// // Selection by Id
 //document.getElementById("main-title").innerHTML = 'Hello World1';
 //let title = document.getElementById("main-title")
 //title.innerHTML = " Hello World"; // Modifying Text

// // Also Selection by Id, using CSS selectors
 //let subtitle = document.querySelector('#subtitle')
 //subtitle.style.background='red'    

// // The querySelector(string) is powerful in that you can
// // Something like this
 //let myButton = document.querySelector(".outerclass .innerclass button");
 // myButton.innerHTML = "BUTTON"
 // myButton.id = "mega-button"

// let todoList = document.querySelector('#todo-list')
// todoList.className = "big-list"

// // Chaning ids and classes
// subtitle.setAttribute('id', 'main-title') // can use subtitle.id = "main-title"
// subtitle.setAttribute('class', 'ocean') // can use subtitle.className = "ocean"

// // siblings and parent
 //let groceryItemsArray = document.querySelector(".grocery-list").children
 //console.log(groceryItemsArray)
 //let groceryItem = groceryItemsArray[0]
// console.log('parentNode', groceryItem.parentNode)
 //console.log('nextElementSibling', groceryItem.nextElementSibling)
 //console.log('previousElementSibling', groceryItem.previousElementSibling)

// // Select All elements of the same class
//  let todos = document.querySelectorAll('.todo-item')
//  console.log(todos)
//  for(let i = 0; i < todos.length; i++) {
//      console.log('TODO: ' + todos[i].innerHTML)
//  }

// // Creating elements
// let catImage = document.createElement('img') // not yet visible in the DOM
//   catImage.src = "URL"
//   catImage.height = 300
//   catImage.width = 300
//  let catBox = document.querySelector('#cat-box')
//   catBox.appendChild(catImage) // now visible

// // Remove Elements
 // document.querySelector('#some-element').remove()

// // Styling DOM elements 
// // because Math.random() returns a number [0 ~ 1]
// // We want a number between 0 and 255
//  function random(val) {
//      return Math.round(Math.random() * val )
//  }
// document.body.style.background = `rgb(${random(255)},${random(255)},${random(255)})`

// console.log(`rgb(${random(255)},${random(255)},${random(255)})`)