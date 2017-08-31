/* MODULE DESIGN PATTERN */
const HTMLChanger = (function () {
	const contents = 'contents';
	const changeHTML = () => {
		const element = document.getElementById('attr-to-change');
		element.innerHTML = contents;
	}
	return {
		callChangeHTML() {
			changeHTML();
			console.log(contents);
		}
	}
})();

HTMLChanger.callChangeHTML(); // contents


/* REVEALING MODULE PATTERN */
// reveal certain variables and methods returned in an object literal.
const Exposer = (function () {
	let privateVariable = 10;
	const privateMethod = () => {
		console.log('inside private method');
		privateVariable++;
	};
	const privateMethodToExpose = () => {
		console.log('this is the method I want to expose');
	};
	const otherMethodIWantTOExpose = () => {
		privateMethod();
	};
	return {
		first: privateMethodToExpose,
		second: otherMethodIWantTOExpose,
	}
})();
Exposer.first();
Exposer.second();

/* prototype design pattern */
// constructor function must exists in order to make an instance of an object -> prototypal inheritance
/* check classes */


/* REVEALING PROTOTYPE PATTERN */
const Tesla = function () {
	this.numWheels    = 4;
	this.manufacturer = 'Tesla';
	this.make         = 'Model S';
};
Tesla.prototype = function () {
	const go = () => {
		// rotate wheels
	};
	const stop = function () {
		// apply break pads
	};
	return {
		pressBreakPedal: stop,
		pressGasPedal: go
	}

}();

