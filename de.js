// need to create connection to mongodb

//create arrays to filter the verbs
let allVerbs = new Array()
let quizVerbsSet = new Set()
let quizVerbs = new Array()
let tenseArr = new Array()
let quizTense = new Array()
let presentArr = new Array()
let pastSimpleArr = new Array()
let imperfectArr = new Array()
let futureSimpleArr = new Array()
let presentPerfectArr = new Array()
let pluPerfectArr = new Array()
let pastAnteriorArr = new Array()
let futureAnteriorArr = new Array()
let presentSubjunctiveArr = new Array()
let imperfectSubjunctiveArr = new Array()
let pastSubjunctiveArr = new Array()
let pluperfectSubjunctiveArr = new Array()
let presentConditionalArr = new Array()
let pastConditionalArr = new Array()
let past2ConditionalArr = new Array()
let imperativeArr = new Array()
let pastImperativeArr = new Array()
let verbChosen = new Set()
let verbChosenIndexArr = new Array()
function quizTypeOne(){

	function prepareVerbs(){
		let i = 0

		function regularness(set){
			//check regularity
			let regularcheck = document.getElementById("regularity_0").checked //turns boolean
			let irregularcheck = document.getElementById("regularity_1").checked

			while(i<allVerbs.length){
				if(regularcheck == true && irregularcheck == false && allVerbs[i].regularity == "regular"){
					quizVerbsSet.add(allVerbs[i]) //only regulars added
				}
				else if (regularcheck == false && irregularcheck == true && allVerbs[i].regularity == "irregular"){
					quizVerbsSet.add(allVerbs[i]) //only irregulars added
				}
				else if (regularcheck == false && irregularcheck == false){
					//default-all verbs added
					quizVerbsSet.add(allVerbs[i])
				}
				else if (regularcheck == true && irregularcheck == true){
					quizVerbsSet.add(allVerbs[i])
					//all verbs added
				}
				i++
			}

			//send the set to an array to protect the objects inside and get values using index number
			quizVerbs = Array.from(quizVerbsSet)

			//alindi
		}

		function reflexiveness(set){
			//check reflexivity
			let reflexivecheck = document.getElementById("reflexivity_0").checked
			let notreflexivecheck = document.getElementById("reflexivity_1").checked
			let onlyreflexivecheck = document.getElementById("reflexivity_2").checked

				if(notreflexivecheck == true){
					quizVerbs = quizVerbs.filter(verb1 => verb1.reflexivity == "not reflexive")
					// keep only not reflexive verbs
				}

				else if(onlyreflexivecheck == true){
					quizVerbs = quizVerbs.filter(verb1 => verb1.reflexivity == "reflexive")
					// keep only reflexive verbs
				}



		}
		function verbEndcheck(set){
			let erCheck = document.getElementById("Verbendingwith_0").checked
			let irCheck = document.getElementById("Verbendingwith_1").checked
			let reCheck = document.getElementById("Verbendingwith_2").checked
			let oirCheck = document.getElementById("Verbendingwith_3").checked
			//check for each possibility and filter accordingly
			if(erCheck == false){
				quizVerbs = quizVerbs.filter(verb1 => verb1.ending == "-ir" || verb1.ending == "-re" ||verb1.ending == "-oir")
			}
			if(irCheck == false){
				quizVerbs = quizVerbs.filter(verb1 => verb1.ending == "-er" || verb1.ending == "-re" ||verb1.ending == "-oir" )
			}
			if(reCheck == false){
				quizVerbs = quizVerbs.filter(verb1 => verb1.ending == "-er" || verb1.ending == "-ir" ||verb1.ending == "-oir" )
			}
			if(oirCheck == false){
				quizVerbs = quizVerbs.filter(verb1 => verb1.ending == "-er" || verb1.ending == "-re" ||verb1.ending == "-ir" )
			}


		}
		function whichTense(arr){
			let presentcheck = document.getElementById("Tense_0").checked
			let pastsimplecheck = document.getElementById("Tense_1").checked
			let imperfectcheck = document.getElementById("Tense_2").checked
			let futureSimpleCheck = document.getElementById("Tense_3").checked

			let presentPerfectCheck = document.getElementById("Tense_4").checked
			let pluperfectCheck = document.getElementById("Tense_5").checked
			let pastAnteriorCheck = document.getElementById("Tense_6").checked
			let futureAnteriorCheck = document.getElementById("Tense_7").checked

			let presentSubjunctiveCheck = document.getElementById("Tense_8").checked
			let imperfectSubjunctiveCheck = document.getElementById("Tense_9").checked
			let pastSubjunctiveCheck = document.getElementById("Tense_10").checked
			let pluperfectSubjunctiveCheck = document.getElementById("Tense_11").checked

			let presentConditionalCheck = document.getElementById("Tense_12").checked
			let pastConditionalCheck = document.getElementById("Tense_13").checked
			let past2ConditionalCheck = document.getElementById("Tense_14").checked

			let imperativeCheck = document.getElementById("Tense_15").checked
			let pastImperativeCheck = document.getElementById("Tense_16").checked

			if(presentcheck == true){
				tenseArr.push("présent")
				//tenseArr will be used to show the user. we also need presentArr to keep using it for our functions
				i=0
				while(i<quizVerbs.length){
					presentArr.push(quizVerbs[i].present)
					//adds all present objects into the array

					presentArr[i] = Object.values(presentArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.

					i++
				}

				quizTense.push(presentArr)
				//quizTense is for keeping all the tense arrays together. it has same number of elements as tenseArr, but tenseArr is used
				//only to show which tense is asked to on user-side. quizTense is handy in forming the functions to ask questions
			}
			if(pastsimplecheck == true){
				tenseArr.push("passé simple")

				i=0

				while(i<quizVerbs.length){
					pastSimpleArr.push(quizVerbs[i].passeSimple)
					//adds all present objects into the array

					pastSimpleArr[i] = Object.values(pastSimpleArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(pastSimpleArr)
			}
			if(imperfectcheck == true){
				tenseArr.push("imparfait")

				i=0

				while(i<quizVerbs.length){
					imperfectArr.push(quizVerbs[i].imparfait)
					//adds all present objects into the array

					imperfectArr[i] = Object.values(imperfectArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(imperfectArr)
			}
			if(futureSimpleCheck == true){
				tenseArr.push("futur simple")

				i=0

				while(i<quizVerbs.length){
					futureSimpleArr.push(quizVerbs[i].futurSimple)
					//adds all present objects into the array

					futureSimpleArr[i] = Object.values(futureSimpleArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(futureSimpleArr)
			}
			if(presentPerfectCheck == true){
				tenseArr.push("passé composé")

				i=0

				while(i<quizVerbs.length){
					presentPerfectArr.push(quizVerbs[i].passeCompose)
					//adds all present objects into the array

					presentPerfectArr[i] = Object.values(presentPerfectArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(presentPerfectArr)
			}
			if(pluperfectCheck == true){
				tenseArr.push("plus-que-parfait")

				i=0

				while(i<quizVerbs.length){
					pluPerfectArr.push(quizVerbs[i].plusQueParfait)
					//adds all present objects into the array

					pluPerfectArr[i] = Object.values(pluPerfectArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(pluPerfectArr)
			}
			if(pastAnteriorCheck == true){
				tenseArr.push("passé antérieur")

				i=0

				while(i<quizVerbs.length){
					pastAnteriorArr.push(quizVerbs[i].passeAnterieur)
					//adds all present objects into the array

					pastAnteriorArr[i] = Object.values(pastAnteriorArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(pastAnteriorArr)
			}
			if(futureAnteriorCheck == true){
				tenseArr.push("futur antérieur")

				i=0

				while(i<quizVerbs.length){
					futureAnteriorArr.push(quizVerbs[i].futurAnterieur)
					//adds all present objects into the array

					futureAnteriorArr[i] = Object.values(futureAnteriorArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(futureAnteriorArr)
			}
			if(presentSubjunctiveCheck == true){
				tenseArr.push("subjonctif présent")

				i=0

				while(i<quizVerbs.length){
					presentSubjunctiveArr.push(quizVerbs[i].presentSubjonctif)
					//adds all present objects into the array

					presentSubjunctiveArr[i] = Object.values(presentSubjunctiveArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(presentSubjunctiveArr)
			}
			if(imperfectSubjunctiveCheck == true){
				tenseArr.push("subjonctif imparfait")

				i=0

				while(i<quizVerbs.length){
					imperfectSubjunctiveArr.push(quizVerbs[i].imparfaitSubjonctif)
					//adds all present objects into the array

					imperfectSubjunctiveArr[i] = Object.values(imperfectSubjunctiveArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(imperfectSubjunctiveArr)
			}
			if(pastSubjunctiveCheck == true){
				tenseArr.push("subjonctif passé")

				i=0

				while(i<quizVerbs.length){
					pastSubjunctiveArr.push(quizVerbs[i].passeSubjonctif)
					//adds all present objects into the array

					pastSubjunctiveArr[i] = Object.values(pastSubjunctiveArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(pastSubjunctiveArr)
			}
			if(pluperfectSubjunctiveCheck == true){
				tenseArr.push("subjonctif plus-que-parfait")

				i=0

				while(i<quizVerbs.length){
					pluperfectSubjunctiveArr.push(quizVerbs[i].plusQueParfaitSubjonctif)
					//adds all present objects into the array

					pluperfectSubjunctiveArr[i] = Object.values(pluperfectSubjunctiveArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(pluperfectSubjunctiveArr)
			}
			if(presentConditionalCheck == true){
				tenseArr.push("conditionnel présent")

				i=0

				while(i<quizVerbs.length){
					presentConditionalArr.push(quizVerbs[i].presentConditionmel)
					//adds all present objects into the array

					presentConditionalArr[i] = Object.values(presentConditionalArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(presentConditionalArr)
			}
			if(pastConditionalCheck == true){
				tenseArr.push("conditionnel passé")

				i=0

				while(i<quizVerbs.length){
					pastConditionalArr.push(quizVerbs[i].passeConditionnel)
					//adds all present objects into the array

					pastConditionalArr[i] = Object.values(pastConditionalArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(pastConditionalArr)
			}
			if(past2ConditionalCheck == true){
				tenseArr.push("conditionnel passé II")

				i=0

				while(i<quizVerbs.length){
					past2ConditionalArr.push(quizVerbs[i].passe2Conditionnel)
					//adds all present objects into the array

					past2ConditionalArr[i] = Object.values(past2ConditionalArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(past2ConditionalArr)
			}
			if(imperativeCheck == true){
				tenseArr.push("impératif")

				i=0

				while(i<quizVerbs.length){
					imperativeArr.push(quizVerbs[i].presentImperatif)
					//adds all present objects into the array

					imperativeArr[i] = Object.values(imperativeArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(imperativeArr)
			}
			if(pastImperativeCheck == true){
				tenseArr.push("impératif passé")

				i=0

				while(i<quizVerbs.length){
					pastImperativeArr.push(quizVerbs[i].passeImperatif)
					//adds all present objects into the array

					pastImperativeArr[i] = Object.values(pastImperativeArr[i])
					//converts the objects into an array so that we can use it in out function for asking questions.
					i++
				}
				quizTense.push(pastImperativeArr)
			}
			if(presentcheck==false && pastsimplecheck == false && imperfectcheck == false && futureSimpleCheck == false
				&& presentPerfectCheck == false && pluperfectCheck == false && pastAnteriorCheck==false && futureAnteriorCheck ==false
				&& presentSubjunctiveCheck == false && imperfectSubjunctiveCheck==false && pastSubjunctiveCheck == false &&
				pluperfectSubjunctiveCheck == false && presentConditionalCheck== false && pastConditionalCheck == false &&
				past2ConditionalCheck == false && imperativeCheck== false && pastImperativeCheck == false){
					tenseArr.push("présent")
					tenseArr.push("passé simple")
					tenseArr.push("imparfait")
					tenseArr.push("futur simple")
					tenseArr.push("passé composé")
					tenseArr.push("plus-que-parfait")
					tenseArr.push("passé antérieur")
					tenseArr.push("futur antérieur")
					tenseArr.push("subjonctif présent")
					tenseArr.push("subjonctif imparfait")
					tenseArr.push("subjonctif passé")
					tenseArr.push("subjonctif plus-que-parfait")
					tenseArr.push("conditionnel présent")
					tenseArr.push("conditionnel passé")
					tenseArr.push("conditionnel passé II")
					tenseArr.push("impératif")
					tenseArr.push("impératif passé")


				i=0
				while(i<quizVerbs.length){
					presentArr.push(quizVerbs[i].present)
					presentArr[i] = Object.values(presentArr[i])

					pastSimpleArr.push(quizVerbs[i].passeSimple)
					pastSimpleArr[i] = Object.values(pastSimpleArr[i])

					imperfectArr.push(quizVerbs[i].imparfait)
					imperfectArr[i] = Object.values(imperfectArr[i])

					futureSimpleArr.push(quizVerbs[i].futurSimple)
					futureSimpleArr[i] = Object.values(futureSimpleArr[i])

					presentPerfectArr.push(quizVerbs[i].passeCompose)
					presentPerfectArr[i] = Object.values(presentPerfectArr[i])

					pluPerfectArr.push(quizVerbs[i].plusQueParfait)
					pluPerfectArr[i] = Object.values(pluPerfectArr[i])

					pastAnteriorArr.push(quizVerbs[i].passeAnterieur)
					pastAnteriorArr[i] = Object.values(pastAnteriorArr[i])

					futureAnteriorArr.push(quizVerbs[i].futurAnterieur)
					futureAnteriorArr[i] = Object.values(futureAnteriorArr[i])

					presentSubjunctiveArr.push(quizVerbs[i].presentSubjonctif)
					presentSubjunctiveArr[i] = Object.values(presentSubjunctiveArr[i])

					imperfectSubjunctiveArr.push(quizVerbs[i].imparfaitSubjonctif)
					imperfectSubjunctiveArr[i] = Object.values(imperfectSubjunctiveArr[i])

					pastSubjunctiveArr.push(quizVerbs[i].passeSubjonctif)
					pastSubjunctiveArr[i] = Object.values(pastSubjunctiveArr[i])

					pluperfectSubjunctiveArr.push(quizVerbs[i].plusQueParfaitSubjonctif)
					pluperfectSubjunctiveArr[i] = Object.values(pluperfectSubjunctiveArr[i])

					presentConditionalArr.push(quizVerbs[i].presentConditionmel)
					presentConditionalArr[i] = Object.values(presentConditionalArr[i])

					pastConditionalArr.push(quizVerbs[i].passeConditionnel)
					pastConditionalArr[i] = Object.values(pastConditionalArr[i])

					past2ConditionalArr.push(quizVerbs[i].passe2Conditionnel)
					past2ConditionalArr[i] = Object.values(past2ConditionalArr[i])

					imperativeArr.push(quizVerbs[i].presentImperatif)
					imperativeArr[i] = Object.values(imperativeArr[i])

					pastImperativeArr.push(quizVerbs[i].passeImperatif)
					pastImperativeArr[i] = Object.values(pastImperativeArr[i])

					i++
				}

				quizTense.push(presentArr)
				quizTense.push(pastSimpleArr)
				quizTense.push(imperfectArr)
				quizTense.push(futureSimpleArr)
				quizTense.push(presentPerfectArr)
				quizTense.push(pluPerfectArr)
				quizTense.push(pastAnteriorArr)
				quizTense.push(futureAnteriorArr)
				quizTense.push(presentSubjunctiveArr)
				quizTense.push(imperfectSubjunctiveArr)
				quizTense.push(pastSubjunctiveArr)
				quizTense.push(pluperfectSubjunctiveArr)
				quizTense.push(presentConditionalArr)
				quizTense.push(pastConditionalArr)
				quizTense.push(past2ConditionalArr)
				quizTense.push(imperativeArr)
				quizTense.push(pastImperativeArr)

			}




		}
		function clean(){
			document.getElementById("whatQuestions").remove() //page clean
		}
		// function baseNoCheck(set){
		// 	let oneCheck = document.getElementById("basenumber_0").checked
		// 	let twoCheck = document.getElementById("basenumber_1").checked
		// 	let threeCheck = document.getElementById("basenumber_2").checked
		// 	let irregularCheck = document.getElementById("basenumber_3").checked
		// }

	regularness(quizVerbsSet)
	reflexiveness(quizVerbsSet)
	verbEndcheck(quizVerbsSet)
	//baseNoCheck(quizVerbsSet)
	whichTense(quizVerbs)
	clean()

	}


	function prepareQuestion(arr){
		document.getElementById("ask").setAttribute("style","display:block")
		document.getElementById("next").setAttribute("style","display: none")

		let chooseVerb = Math.floor(Math.random() * quizVerbs.length) //random number for choosing which verb
		let getkeys = new Array(Object.keys(quizVerbs[chooseVerb].present)) //creates array for choosing which pronoun by including the keys of a tense. use of present is no different to use of other tenses
		let chooseTense = Math.floor(Math.random() * tenseArr.length) //random number for choosing tense

		let chooseSubject = Math.floor(Math.random() * 6) //random number for choosing subject

		document.getElementById("question").innerHTML = getkeys[0][chooseSubject] + ", "  + quizVerbs[chooseVerb].verb + ", " + tenseArr[chooseTense]
			//question sent in the order of subject, verb, tense
		document.getElementById("definition").innerHTML = quizVerbs[chooseVerb].definition
			//definition of the verb shown

		let numOpt = document.getElementById("options").childElementCount //gets the places for option
		let correctOptionNo = Math.floor(Math.random() * numOpt) //returns a random no among options

		function prepareOptions(){

			i= 0
			while(i<numOpt){
				let optionSubject = Math.floor(Math.random() * 6) //random no to create option conjugations
				if (i==correctOptionNo){
				document.getElementById("options").children[correctOptionNo].innerHTML = quizTense[chooseTense][chooseVerb][chooseSubject]}
					//answer sent, no other element gets sent to correctOptionNo and the correct answer stays there
				else{
					do{optionSubject = Math.floor(Math.random() * 6)} //recreates option subject if it is the same as answer or if it is empty(imperative)
					while(quizTense[chooseTense][chooseVerb][chooseSubject] == quizTense[chooseTense][chooseVerb][optionSubject] ||
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
		function showResult(event){
			let answerGivenId = event.target.id
			//given answer's id taken

			if(answerGivenId == document.getElementById("options").children[correctOptionNo].id){
				//given answer's id and correct answer's id compared
				document.getElementById(answerGivenId).setAttribute("style", "background-color: #70e000")
				document.getElementById("next").setAttribute("style","display: inline-block")
				correctOptionNo = ""
				answerGivenId = ""
				//empty the variables for taking new numbers
			}
			else{
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
	function getNext(){
		document.getElementById("options_0").setAttribute("style", "background-color:auto")
		document.getElementById("options_1").setAttribute("style", "background-color:auto")
		document.getElementById("options_2").setAttribute("style", "background-color:auto")

		prepareQuestion()
	}
}





function goback(){
	document.getElementById("verbendSec").setAttribute("style", "display:block")
	document.getElementById("reflexiveSec").setAttribute("style", "display:block")
	document.getElementById("regularSec").setAttribute("style", "display:block")
	document.getElementById("start").setAttribute("style", "display:initial")
	document.getElementById("typeTwoQuiz").setAttribute("style", "display:none")
}
