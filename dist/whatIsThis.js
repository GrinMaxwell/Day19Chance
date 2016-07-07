/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	console.log('This is...', this);
	console.log('a = ', a);
	console.log('b = ', b);
};

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis
	}
};

var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ... the window
// * because ... the parent of the function is the global scope, i.e. the window




// * Problem 2
// window.whatIsThis('hello', 'world');
// * "this" is ... the window
// * because ... same as before (proven by the fact that you can call whatIsThis as a method on the window object)




// * Problem 3
// inAnObject.test1('face', 'book');
// * "this" is ... the 'inAnObject' object
// * because ... the parent of the test1 function is the 'inAnObject' object




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// * "this" is ... nothing/error
// * because ... the anotherObject object inside of inAnObject doesn't have a test1 function




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ...the anotherObject object
// * because ... the anotherObject object is the parent of the test2, which calls the whatIsThis function




// * Problem 6
// whatIsThis.call();
// * "this" is ...the window
// * because ... the window is the parent of the globally defined whatIsThis function, which is what .call() reverts to when no specific parameter is given




// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ...trickyTricky
// * because ...because using the .call() function allows you to specify the context of 'this' in a function to be the parameters given




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ...trickyTricky
// * because ...because it's the first parameter given to .call(), which specifies the 'this' value before allowing it to receive its other, normal parameters a&b




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ... the confusing object
// * because ... it is the first parameter passed to the .call() method




// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ...the confusing object
// * because ... see above




// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ...trickyTricky
// * because ...it is the first parameter passed to the .apply() method, which like .call() specifies the 'this' value




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ...the confusing object
// * because ...see above; also, .apply() takes the functions normal parameters (a&b) as an array




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
// * "this" is ...an error/nothing
// * because ...the .apply() method takes an array for the function parameters




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ...the window
// * because ...it is the parent of the function inAFunction




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ...nothing/an error
// * because ...I get a sense that this should work because you should be able to add things to objects using the protoype, maybe it's because they changed the prototype after that one had already been constructed? or a syntax issue?




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ...the window
// * because ...it's the parent of the original inAFunction used to construct newObject, and it logs 'what will' and 'happen?' because the inAFunction function calls whatIsThis and passes it's first two parameters




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ...the window, then the newObject
// * because ... the window is the parent of the inAFunction being called in the first line while constructing the newObject, but the newObject istelf is the parent of the test3 function




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ...trickyTricky
// * because ...it was passed as the first parameter to .call(), so regardless of whatever is the axtual scope it is changed to be that parameter




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ...the confusing object
// * because ... it was passed as the first parameter to .apply()
