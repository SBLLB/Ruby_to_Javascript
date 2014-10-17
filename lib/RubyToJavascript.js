
// Ruby method - number.times {method}

// First attempt - this is not a complete replication as it doesn't 
// allow for use on a function that takes an argument.

	// Function.prototype.times = function(repetition) {
	// 	for(var i = 0; i< repetition; i++) {;
	// 		this();
	// 	}
	// };

//problem with the below is that you cannot pass the arguments to the 
// function in brackets! 

Number.prototype.times = function(args) {
	var args = Array.prototype.slice.apply(arguments);
	for(var i = 0; i < this; i++) {;
		args[0].apply(null, args.slice(1))
	};
};

function HelloWorld() {console.log("Hello World")};
function WinningNumber(lottoball) {console.log(lottoball)};
function TelephoneNumber(region, number) {console.log(region, number)};

console.log("Testing Javascript method for '(no).times(function)'");
console.log("********");
(2).times(HelloWorld);
console.log("********");
(3).times(WinningNumber, 23);
console.log("********");
(4).times(TelephoneNumber, '+44', '(0)7754518168');
console.log("********");




