console.log("de.js began")
export function quizTypeOne(db) {


	function prepareQuestion(arr) {
		document.getElementById("ask").setAttribute("style", "display:block")
		document.getElementById("next").setAttribute("style", "display: none")

		let chooseVerb = Math.floor(Math.random() * quizVerbs.length) //random number for choosing which verb
		let getkeys = new Array(Object.keys(quizVerbs[chooseVerb].present)) //creates array for choosing which pronoun by including the keys of a tense. use of present is no different to use of other tenses
		let chooseTense = Math.floor(Math.random() * tenseArr.length) //random number for choosing tense

		let chooseSubject = Math.floor(Math.random() * 6) //random number for choosing subject

		document.getElementById("question").innerHTML = getkeys[0][chooseSubject] + ", " + quizVerbs[chooseVerb].verb + ", " + tenseArr[chooseTense]
		//question sent in the order of subject, verb, tense
		document.getElementById("definition").innerHTML = quizVerbs[chooseVerb].definition
		//definition of the verb shown

		let numOpt = document.getElementById("options").childElementCount //gets the places for option
		let correctOptionNo = Math.floor(Math.random() * numOpt) //returns a random no among options

		function prepareOptions() {

			i = 0
			while (i < numOpt) {
				let optionSubject = Math.floor(Math.random() * 6) //random no to create option conjugations
				if (i == correctOptionNo) {
					document.getElementById("options").children[correctOptionNo].innerHTML = quizTense[chooseTense][chooseVerb][chooseSubject]
				}
				//answer sent, no other element gets sent to correctOptionNo and the correct answer stays there
				else {
					do {
						optionSubject = Math.floor(Math.random() * 6)
					} //recreates option subject if it is the same as answer or if it is empty(imperative)
					while (quizTense[chooseTense][chooseVerb][chooseSubject] == quizTense[chooseTense][chooseVerb][optionSubject] ||
					quizTense[chooseTense][chooseVerb][optionSubject] == "")
					//no same option as correct option set


					document.getElementById("options").children[i].innerHTML = quizTense[chooseTense][chooseVerb][optionSubject]
					//other options set
				} //one problem: correct answer shows once, but the other answers may come up several times
				i++
			}
		}

		prepareOptions()

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


	prepareQuestion(quizVerbs)


	document.getElementById("next").addEventListener("click", getNext)

	function getNext() {
		document.getElementById("options_0").setAttribute("style", "background-color:auto")
		document.getElementById("options_1").setAttribute("style", "background-color:auto")
		document.getElementById("options_2").setAttribute("style", "background-color:auto")

		// prepareQuestion()
	}
}