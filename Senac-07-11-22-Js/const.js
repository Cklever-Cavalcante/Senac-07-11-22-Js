/**const keyword in JavaScript: The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.

Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared. */
//______________________________________________________________________________________

/**Example 1: We are changing the value of the const variable so that it returns an error. The output is shown in the console. */

/*
	const a = 10;
	function f() {
		a = 9
		console.log(a)
	}
	f();
*/

//___________________________________________________________________________________

/**Example 2: Users cannot change the properties of the const object, but they can change the value of properties of the const object. */

/*
	const a = {
		prop1: 10,
		prop2: 9
	}
	
	// It is allowed
	a.prop1 = 3

	// It is not allowed
	a = {
		b: 10,
		prop2: 9
	}
*/
//________________________________________________________________________________________________
