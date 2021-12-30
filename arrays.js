//console.log("ok")

 //let hybrid = [1, 2, 3, "hello", "abc", 4, 5, 6]
 //console.log(hybrid.length)

//let fruits = ["Strawberry", "Apple", "Mango", "Banana"]
// console.log( fruits.sort())
// console.log( fruits[0])
// console.log( fruits[fruits.length - 1])

//let str = fruits[0]
//console.log(str.charAt(0) === str[0]) // array-like (but not really array)

// function capitalFirstLetterOnly(str) {
// 	return str[0].toUpperCase() + str.slice(1).toLowerCase()
// }
// console.log(capitalFirstLetterOnly('hellooo'))


// Add Elements
//fruits.push("Tomato") // fruits[length - 1]
//fruits.unshift("Coconut") // fruits[0]

// Remove Elements
//let s = fruits.shift()
//let p = fruits.pop()


//console.log(fruits)
//console.log(fruits.sort())
//console.log(fruits = fruits.reverse())

 //let letters = ["A", "B", "C", "D", "E", "F", "G"]
 //console.log( letters.slice(0, 4))
 //console.log( letters.slice(2))
 //console.log( letters.slice(2, 4))
// console.log(letters) // did not change


// // An array of arrays (a.k.a, a list of lists), a.k.a 2D-Array
// let flights = [
// 	["DMM", "JED", "7:30 PM"],
// 	["RYD", "MKH", "2:15 AM"],
// 	["BAH", "BEH", "5:15 AM"]
// ]

// console.log("Today's flights are the following:")

// // for loop
// for(let i = 0; i < flights.length; i++) {
// 	let fromCity = flights[i][0]
// 	let toCity = flights[i][1]
// 	let time = flights[i][2]
// 	console.log(`${i+1}. A flight from ${fromCity} to ${toCity} at ${time}`)
// }

// // forEach
// flights.forEach(function (flight, i) {
// 	[fromCity, toCity, time] = flight
// 	console.log(`${i+1}. A flight from ${fromCity} to ${toCity} at ${time}`)
// })