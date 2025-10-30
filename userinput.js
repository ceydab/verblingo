console.log("userinput.js began")
// document.getElementById("start").addEventListener("click", prepareVerbs)

export function prepareVerbs() {
    let features = []
    let tenses = {}
    function regularness() { //check regularity
        console.log("regular")
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
        console.log("does this work")
    } //default: all tenses brought

    function clean() {
        document.getElementById("whatQuestions").remove() //page clean
    }

    regularness()
    // reflexiveness()
    separabilitycheck()
    rootcheck()
    whichTense()
    Object.assign(tenses,{'meaning': 1})

    if (features.length===0){
        features.push({"regular": false},{"regular": true})
    }
    clean()
    return {features, tenses}
}
