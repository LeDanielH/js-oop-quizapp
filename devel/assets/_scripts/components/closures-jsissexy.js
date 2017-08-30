/* Closures store references to the outer function’s variables */

  function showName(firstName, lastName) {
	const nameIntro = `Your name is`;
	function makeFullName() {
		return `${nameIntro} ${firstName} ${lastName}`
	}
	return makeFullName();
}
const newName = showName("Michael", "Jackson");
console.log(newName);

function celebrityID() {
	let celebrityId = 999;
	return {
		getId() {
			return celebrityId;
		},
		setId(theNewId) {
			celebrityId = theNewId;
		}
	}
}
const mjID = celebrityID();
mjID.getId(); // returns 999
mjID.setId(567);
mjID.getId(); // returns 567