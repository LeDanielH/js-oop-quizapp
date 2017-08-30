/*
*
* Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.
* Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.
*  You can’t change the object that the binding refers to, but you can still change the properties of the object, which means that bindings created with const are mutable, not immutable.
* */

/* immutable object */
const a = Object.freeze({
	foo: 'Hello',
	bar: 'world',
	tada: {
		joker: 'tada'
	}
	// Cannot assign to read only property 'foo' of object Object, with just const, you can
	// freezing works only 1 level down, joker can be changed
});

const double = n => n * 2;
const doubleMap = numbers => numbers.map(double);
console.log(doubleMap([2,3,4]));

const doubleX = n => n.points * 2;
const doubleMapX = numbers => numbers.map(doubleX);
console.log(doubleMapX([
	{ name: 'ball', points: 2 },
	{ name: 'coin', points: 3 },
	{ name: 'candy', points: 4}
])); // [ 4, 6, 8 ]

/*Imperative programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.*/
/*Imperative code frequently utilizes statements. A statement is a piece of code which performs some action. Examples of commonly used statements include for, if, switch, throw, etc…*/
const doubleMapY = numbers => {
	const doubledY = [];
	for (let i = 0; i < numbers.length; i++) {
		doubledY.push(numbers[i] * 2);
	}
	return doubledY;
};
console.log(doubleMapY([2, 3, 4])); // [4, 6, 8]

/*Declarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.*/
const doubleMapZ = numbers => numbers.map(n => n * 2);
console.log(doubleMapZ([2, 3, 4])); // [4, 6, 8]

/*Declarative code relies more on expressions. An expression is a piece of code which evaluates to some value. Expressions are usually some combination of function calls, values, and operators which are evaluated to produce the resulting value.
These are all examples of expressions:*/
doubleMap([2, 3, 4]);
Math.max(4, 3, 2);