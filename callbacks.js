// console.log('ok')

// // Callback Functions: passing functions to functions
// function multipleFunc(x) {
//     let number=x*x;
//     return number  
// }

// function addFunc(x) {
//     let number=x*x*x;
//     return number  
// }

// // let number= multipleFunc(5)
// // console.log(number)

// function bigFunc(number,function1){
//      let number1=function1(number)
//      return number1
// }
// let n=bigFunc(2,addFunc)
// console.log(n)

// //function anonymos
//  console.log(bigFunc(2, function(x){return x*2;})) 
/////////////////////////////////////////////




// function processArray(array, func) {
// 	let resultArray = []
// 	for(let i = 0; i < array.length; i++) {
// 		resultArray[i] = func(array[i])
// 	}
// 	return resultArray
// }

// function cubeFunction(x) {
// 	return (x * x * x)
// }

// let numbersList = [4, 9, 13, 16, 25]

// // console.log( processArray(numbersList, Math.sqrt) )
// // console.log( processArray(numbersList, cubeFunction) )

// console.log( processArray(numbersList, function(x) {
//     return x * 100
// })
// )

