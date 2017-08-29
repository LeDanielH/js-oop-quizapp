class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
		this.quizScores = [];
		this.currentScore = 0;
	}
}

/* this is the way so I dont have to write User.prototype each time I'm adding a property */
User.prototype = {
	constructor: User,
	saveScore(scoreToAdd) {
		this.quizScores.push(scoreToAdd)
	},
	showNameAndScores() {
		const scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
		return `${this.name} Scores: ${scores}`;
	},
	changeEmail(newEmail)  {
		this.email = newEmail;
		return `New Email Saved: ${this.email}`;
	}
};

const firstUser = new User('Daniel', 'daniel.hoksza@gmail.com');
firstUser.changeEmail('ledaniel.zeman@gmail.com');
firstUser.saveScore(10);

const secondUser = new User('Adela', 'Zemanova');
secondUser.saveScore(15);
console.log(secondUser.showNameAndScores());
/*
/!* inheritance in objects *!/
const cars = {
	type: 'sedan',
	wheels: '4'
};
const skoda = Object.create(cars);
console.log(skoda.wheels);

function inheritPrototype(childObject, parentObject) {
	const copyOfParent = Object.create(parentObject.prototype);
	copyOfParent.constructor = childObject;

	/!* Whenever you overwrite an object’s prototype (object.prototype = someVal), you also overwrite the object’s constructor property. *!/
	childObject.prototype = copyOfParent;
}*/

class Question {
	constructor(question, choices, correctAnswer) {
		this.question = question;
		this.choices = choices;
		this.correctAnswer = correctAnswer;
		this.userAnswer = "";
		const newDate = new Date();
		const QUIZ_CREATED_DATE = newDate.toLocaleDateString();
		this.getQuizDate = function() {
			return QUIZ_CREATED_DATE;
		};
		console.log("Quiz Created On: " + this.getQuizDate());
	}
}

Question.prototype.getCorrectAnswer = () => this.correctAnswer;
Question.prototype.getUserAnswer = () => this.userAnswer;
Question.prototype.displayQuestion  = () => {
	let questionToDisplay = `<div class="question"> ${this.question}</div><ul>`
	let choiceCounter = 0;
	for (let i; i < choiceCounterthis.choices.length; i++) {
		questionToDisplay +=`<li><input type="radio" name="choice" value="${choiceCounter}">${this.choices[i]}</li>`
		choiceCounter++
	}
	questionToDisplay +=`</ul>`
	console.log (questionToDisplay);
};