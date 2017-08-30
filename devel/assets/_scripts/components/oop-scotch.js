class Food {
	/*
	* Class Constructors
		A class's constructor function is where you'll focus your initialization logic. The constructor is special in a few ways:
		It's the only method of a class from which you can make a superconstructor call;
		It handles all the dirty work of setting up the prototype chain properly; and
		It acts as the definition of the class.
	* */
	constructor (name, protein, carbs, fat) {
		this.name = name;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}
	toString() {
		return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
	}
	/*
	* Static methods are methods on the constructor function itself, which are not available on instances of the class. - not added through prototype
	* Static methods are analogous to attaching properties directly to old-school functions-as-constructors:
	* */
	static describe() {
		console.log('"Food" is a data type for storing macronutrient information.');
	}
	print() {
		console.log(this.toString());
	}
}

const chicken_breast = new Food('Chicken Breast', 26, 0, 3.5);
chicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'
console.log(chicken_breast.protein); // 26 (LINE A)
Food.describe(); // '"Food" is a data type for storing macronutrient information.'

// Classes can only contain method definitions, not data properties;

class FatFreeFood extends Food {
	constructor(name, protein, carbs) {
		//You must call super in the constructor of a derived class before you use this
		super(name, protein,carbs, 0);
	}
	print() {
		super.print(); // will return 'Greek Yogurt'
		console.log(`Would you look at that -- ${this.name} has no fat!`);
	}
}

/* example in OLD JS*/
function FoodY (name, protein, carbs, fat) {
	this.name    = name;
	this.protein = protein;
	this.carbs    = carbs;
	this.fat          = fat;
}

Food.prototype.toString = function () {
	return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;
};

function FatFreeFoodY (name, protein, carbs) {
	FoodY.call(this, name, protein, carbs, 0);
}

// Setting up "subclass" relationships
// =====================
// LINE A :: Using Object.create to manually set FatFreeFood's "parent".
FatFreeFoodY.prototype = Object.create(FoodY.prototype);

// LINE B :: Manually (re)setting constructor reference (!)
Object.defineProperty(FatFreeFoodY.constructor, "constructor", {
	enumerable : false,
	writeable : true,
	value : FatFreeFoodY
});



const fat_free_yogurt = new FatFreeFood('Greek Yogurt', 16, 12);
fat_free_yogurt.print();

/* to eliminate the need for the new keyword */
function FoodX(name, protein, carbs, fat) {
	const obj = {};
	Object.setPrototypeOf(obj, FoodX.prototype);
	obj.name = name;
	obj.protein = protein;
	obj.carbs = carbs;
	obj.fat = fat;
	return obj;
}
const fish = FoodX('Halibut', 20, 0, 2);
console.log(fish.name);

function foo() { console.log('Foo!'); }
// All functions have a property, called .prototype, which points to an object associated with that function.
console.log(foo.prototype);

// All function prototypes have a property, called .constructor, which points back to the function.
console.log(foo.prototype.constructor);
foo.prototype.constructor(); /* same as foo() */

const bar = {status: 'bar'};
console.log(Object.getPrototypeOf(bar) === Object.prototype); // true
console.log(bar.constructor === Object); // true

const fooX = {
	speak() {
		console.log('Foo!');
	}
};

fooX.speak();

