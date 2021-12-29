window.addEventListener('load', function() {

	console.log("Hello from script.js")
	
	// Functions
	//let a = Math.max(10, 43)
	
	// console.log( myMax(99, 45) )
	//console.log( myMin(34, 12) )
	
	function myMax(a, b) {
		if (a > b) {
			return a
		} else {
			return b
		}
	}
	
	function myMin(a, b) {
		if (a <= b) {
			return a
		} else {
			return b
		}
	}
	
	function cubed(x) {
		return x * x * x
	}
	
	// let c = cubed(2)
	// console.log(c)
	
	function metersToFeet(m) {
		let result = meters * 3.28084
		return result
	}
	
	function feetToMeter(f) {
		return f / 3.28084
	}
	
	// let meters = 14
	// console.log( metersToFeet(meters) )

	function checkPasswordStrength(str) {
		let lowerLimit = 4
		if (str.length > 10) {
			console.log("Very Strong Password")
		} else if (str.length > 7 ) {
			console.log("Good Password")
		} else if (str.length > 4) {
			console.log("Weak Password")
		} else {
			console.log("Warning: password is less than " + lowerLimit)
		}
	}
	
	// console.log(lowerLimit) // error!
	
	let password1 = "mysecretpassword1290xlpld9f4"
	let password2 = "mofdp2x"
	checkPasswordStrength(password1)
	checkPasswordStrength(password2)
	
	function equalLength(str1, str2) {
		return (str1.length === str2.length)
	}
	
	let str1 = "Better late than never. But never late is better"
	let str2 = "Don’t be pushed by your problems. Be led by your dreams"
	
	if ( equalLength(str1, str2) ) {
    console.log("Equal indeed")
	} else {
		console.log("Strings are unequal in length")
	}
	
})