console.log("de.js began")
export function quizTypeOne(db) {

	function prepareQuestion() {
		document.getElementById("ask").setAttribute("style", "display:block")
		document.getElementById("next").setAttribute("style", "display: none")

		// Pick a random verb
		const randomVerb = db[Math.floor(Math.random() * db.length)];

		// Pick a random type key from the known keys
		const postypeKeys = ["Indikativ", "Konjunktiv","Imperativ"];
		const typeKeys = postypeKeys.filter(key => randomVerb.hasOwnProperty(key))
		const typeKey = typeKeys[Math.floor(Math.random() * typeKeys.length)];
		const typeObject = randomVerb[typeKey];

		// Pick a random time key inside the chosen verb
		const timeKeys = Object.keys(typeObject);
		const timeKey = timeKeys[Math.floor(Math.random() * timeKeys.length)];

		// Pick a random pronoun inside the chosen time key
		const pronKeys = Object.keys(typeObject[timeKey]);
		const pronKey = pronKeys[Math.floor(Math.random() * pronKeys.length)];
		// Get the conjugation
		const conjugation = typeObject[timeKey][pronKey];

		let verb = randomVerb.verb
		let meaning = randomVerb.meaning
		let type = typeKey
		let tense= timeKey
		let pronoun = pronKey
		let remainingPronKeys = pronKeys.filter(k => k !== pronKey)
		const shuffled = remainingPronKeys.sort(() => 0.5 - Math.random());
		const secondPronKey = shuffled[0];
		const thirdPronKey = shuffled[1];
		let option1 = typeObject[timeKey][secondPronKey]
		let option2 = typeObject[timeKey][thirdPronKey]
		do {
			let remainingPronKeys = pronKeys.filter(k => k !== pronKey)
			let shuffled = remainingPronKeys.sort(() => 0.5 - Math.random());
			let secondPronKey = shuffled[0];
			let thirdPronKey = shuffled[1];
			option1 = typeObject[timeKey][secondPronKey]
			option2 = typeObject[timeKey][thirdPronKey]
		}while (conjugation ===option1 || conjugation ===option2 || option1 ===option2)

		document.getElementById("question").innerHTML =type +" " +tense+ "<br><br>"  + "<span id='pronounverb'>" + pronoun + " " + "<span id='verb'>" +verb + "</span>"+ "</span>"
		//question sent in the order of subject, verb, tense
		document.getElementById("definition").innerHTML = meaning
		//definition of the verb shown

		let correctOptionNo = Math.floor(Math.random() * 3) //returns a random no among options
		let i = [0,1,2]

		// Remove the element
		i.splice(correctOptionNo, 1);
		document.getElementById("options").children[correctOptionNo].innerHTML = conjugation
		document.getElementById("options").children[i[0]].innerHTML = option1
		document.getElementById("options").children[i[1]].innerHTML = option2

		document.getElementById("options").addEventListener("mousedown", showResult)

		function showResult(event) {
			let answerGivenId = event.target.id
			//given answer's id taken

			if (answerGivenId == document.getElementById("options").children[correctOptionNo].id) {
				//given answer's id and correct answer's id compared
				document.getElementById(answerGivenId).setAttribute("style", "background-color: #70e000")
				document.getElementById("next").setAttribute("style", "display: inline-block")
				correctOptionNo = ""
				answerGivenId = ""
				//empty the variables for taking new numbers
			} else {
				document.getElementById(answerGivenId).setAttribute("style", "background-color: #f52900")
				document.getElementById("options").setAttribute("style", "background-color:initial")
				// document.getElementById(answerGivenId).onmouseup = function(){
				// document.getElementById(answerGivenId).setAttribute("style", "background-color:auto")}

			}
		}
	}


	prepareQuestion(db)


	document.getElementById("next").addEventListener("click", getNext)

	function getNext() {
		document.getElementById("options_0").setAttribute("style", "background-color:auto")
		document.getElementById("options_1").setAttribute("style", "background-color:auto")
		document.getElementById("options_2").setAttribute("style", "background-color:auto")

		prepareQuestion()
	}
}