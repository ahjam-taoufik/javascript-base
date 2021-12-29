window.addEventListener('load', function() {

    // Recursion and loops (repetition)

    // function greetings(str) {
    //     console.log(str)
    //     console.log(str)
    //     console.log(str)
    // }

    // greetings("hello everyone")

    // function recursiveGreetings(str, count) {
    //     console.log(str)
    //     if (count > 1) {
    //         recursiveGreetings(str, count - 1)
    //     }
    // }

    //  recursiveGreetings("Hello", 5)


    // // While-Loop Version
    // let count = 8
    // let str = "Hello"
    // while(count > 0) {
    //     console.log(str)
    //     count -= 1
    // }

    // // For-Loop Version
    // let count = 4
    // let str = "Welcome"
    // for(let i = 0; i < count; i += 1) {
    //     console.log(str)
    // }

    
    // // Arrays
    // let list = [2, 4, 4, 3, 4]
    // for(let i = 0; i < list.length; i++) {
    //     list[i] = list[i] * 2
    //     console.log( list[i] )
    // }

    // // While Loop Version
    // let fruits = ["Apple", "Banana", "Mango", "Lemon", "Strawberry"]
    // let i = 0
    // document.write('<ul>')
    // while(i < fruits.length) {
    //     document.write('<li>' + fruits[i] + '</li>')
    //     i++
    // }
    // document.write('</ul>')

    
    // Find a number is an Array
    let numbers = [4, 99, 63, 77]
    let numberIndex = findNumber(numbers, 99)
    numbers[numberIndex] *= 100
    console.log(numbers)

    function findNumber(list, x) {
        let index = -1
        for(let i=0; i < list.length; i++) {
            if (list[i] === x) {
                index = i
                break;
            }
        }
        return index
    }

    // Loops are used when you have a collection of things
    // e.g., Database data are a collection.
    // quick-sort and merge-sort and some other algorithms are simpler recursivly
})