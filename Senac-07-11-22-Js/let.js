
/**let keyword in JavaScript: The let keyword is an improved version of the var keyword. 

Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). Let’s see the below example. */


/**Example 1: The output is shown in the console. */

/*
	let a = 10;
	function f() {
		let b = 9
		console.log(b);
		console.log(a);
	}
	f();
*/

//_________________________________________________________

/**Example 2: The code returns an error because we are accessing the let variable outside the function block. The output is shown in the console. */

/*
	let a = 10;
	function f() {
		if (true) {
			let b = 9

			// It prints 9
			console.log(b);
		}

		// It gives error as it
		// defined in if block
		console.log(b);
	}
	f()

	// It prints 10
	console.log(a)
*/

//_______________________________________________________________________________

/**Example 3: Users cannot re-declare the variable defined with the let keyword but can update it. */

/*
let a = 10

// It is not allowed
let a = 10

// It is allowed
a = 10
*/

//__________________________________________________________________________

/**Example 4: Users can declare the variable with the same name in different blocks using the let keyword. */

/*
let a = 10
if (true) {
	let a=9
	console.log(a) // It prints 9
}
console.log(a) // It prints 10
*/

//________________________________________________________________________

/**Example 5: If users use the let variable before the declaration, it does not initialize with undefined just like a var variable and return an error. */

/*
	console.log(a);
	let a = 10;
*/

//_________________________________________________________________________
