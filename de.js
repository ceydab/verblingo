const features = []
let tenses = {}
function quizTypeOne() {

	function prepareVerbs() {

		function regularness() { //check regularity
			let regularcheck = document.getElementById("regularity_0").checked //turns boolean
			let irregularcheck = document.getElementById("regularity_1").checked

			if (regularcheck === true && irregularcheck === false) {
				features.push({"regular": true})
			} else if (regularcheck === false && irregularcheck === true) {
				features.push({"regular": false}) //only irregulars added
			}
			//default: no filtering on regularity
		}

		function reflexiveness() { //check reflexivity
			let reflexivecheck = document.getElementById("reflexivity_0").checked
			let notreflexivecheck = document.getElementById("reflexivity_1").checked

			if (notreflexivecheck === true && reflexivecheck === false) {
				features.push({"reflexive": true}) // keep only not reflexive verbs
			} else if (reflexivecheck === true && notreflexivecheck === false) {
				features.push({"reflexive": false}) // keep only reflexive verbs
			}
			//default: no filtering on reflexivity
		}

		function separabilitycheck() {
			let sepCheck = document.getElementById("separable").checked
			let insepCheck = document.getElementById("inseparable").checked

			if (sepCheck === true && insepCheck === false) {
				features.push({"separable:": true})
			}//remove insep
			else if (sepCheck === false && insepCheck === true) {
				features.push({"separable": false})
				features.push({"separable": null})
			}//remove sep
			//default: no filtering on separability
		}

		function rootcheck() {
			let rootCheck = document.getElementById("root_change").checked
			let norootCheck = document.getElementById("no_root_change").checked

			if (rootCheck === true && norootCheck === false) {
				features.push({"root_change": true})
			}//remove norootchange
			else if (rootCheck === false && norootCheck === true) {
				features.push({"root_change": false})
			}//remove changing roots
			//default: no filtering on root
		}

		function whichTense() {
			if (document.getElementById("Tense_0").checked === true) {
				Object.assign(tenses, {'Indikativ.Präsens': 1})
			}
			if (document.getElementById("Tense_1").checked === true) {
				Object.assign(tenses, {'Indikativ.Präteritum': 1})
			}
			if (document.getElementById("Tense_2").checked === true) {
				Object.assign(tenses, {'Indikativ.Perfekt': 1})
			}
			if (document.getElementById("Tense_3").checked === true) {
				Object.assign(tenses, {'Indikativ.Plusquam': 1})
			}
			if (document.getElementById("Tense_4").checked === true) {
				Object.assign(tenses, {'Indikativ.Futur I': 1})
			}
			if (document.getElementById("Tense_5").checked === true) {
				Object.assign(tenses, {'Indikativ.Futur II': 1})
			}
			if (document.getElementById("Tense_6").checked === true) {
				Object.assign(tenses, {'Konjunktiv.Konjunktiv I': 1})
			}
			if (document.getElementById("Tense_7").checked === true) {
				Object.assign(tenses, {'Konjunktiv.Konjunktiv II': 1})
			}
			if (document.getElementById("Tense_8").checked === true) {
				Object.assign(tenses, {'Konjunktiv.Konj Perfekt': 1})
			}
			if (document.getElementById("Tense_9").checked === true) {
				Object.assign(tenses, {'Konjunktiv.Konj Plusquam': 1})
			}
			if (document.getElementById("Tense_10").checked === true) {
				Object.assign(tenses, {'Konjunktiv.Futur I': 1})
			}
			if (document.getElementById("Tense_11").checked === true) {
				Object.assign(tenses, {'Konjunktiv.Futur II': 1})
			}
			if (document.getElementById("Tense_12").checked === true) {
				Object.assign(tenses, {'Imperativ.Präsens': 1})

			}
			if (tenses==={}){
				tenses = {'regular': 0,'root_change':0,'separable':0,'reflexive':0}
			}

		} //default: all tenses brought
	function clean() {
		document.getElementById("whatQuestions").remove() //page clean
	}
	regularness()
	reflexiveness(features)
	separabilitycheck(features)
	rootcheck(features)
	whichTense(tenses)
	Object.assign(tenses,{'meaning': 1})
	module.exports = {features, tenses}
	clean()
	}



	const db = require('./dbconnection.js');


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

	prepareVerbs()
	prepareQuestion(quizVerbs)


	document.getElementById("next").addEventListener("click", getNext)

	function getNext() {
		document.getElementById("options_0").setAttribute("style", "background-color:auto")
		document.getElementById("options_1").setAttribute("style", "background-color:auto")
		document.getElementById("options_2").setAttribute("style", "background-color:auto")

		prepareQuestion()
	}
}