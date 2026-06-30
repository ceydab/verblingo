export function prepareVerbs() {
    let features = []
    let tenses = {}

    function pushBinaryFeature(trueId, falseId, key) {
        const trueChecked = document.getElementById(trueId).checked
        const falseChecked = document.getElementById(falseId).checked
        if (trueChecked && !falseChecked) features.push({ [key]: true })
        else if (!trueChecked && falseChecked) features.push({ [key]: false })
    }


    function separabilitycheck() {
        let sepCheck = document.getElementById("separable").checked
        let insepCheck = document.getElementById("inseparable").checked

        if (sepCheck === true && insepCheck === false) {
            features.push({"separable": true})
        }//remove insep
        else if (sepCheck === false && insepCheck === true) {
            features.push({"separable": false})
            features.push({"separable": null})
        }//remove sep
        //default: no filtering on separability
    }

    const TENSE_CHECKBOX_MAP = [
    ["Tense_0", "Indikativ.Präsens"],
    ["Tense_1", "Indikativ.Präteritum"],
    ["Tense_2", "Indikativ.Perfekt"],
    ["Tense_3", "Indikativ.Plusquam"],
    ["Tense_4", "Indikativ.Futur I"],
    ["Tense_5", "Indikativ.Futur II"],
    ["Tense_6", "Konjunktiv.Konjunktiv I"],
    ["Tense_7", "Konjunktiv.Konjunktiv II"],
    ["Tense_8", "Konjunktiv.Perfekt"],
    ["Tense_9", "Konjunktiv.Plusquam"],
    ["Tense_10", "Konjunktiv.Futur I"],
    ["Tense_11", "Konjunktiv.Futur II"],
    ["Tense_12", "Imperativ.Präsens"],
    ]

    function whichTense() {
        for (const [checkboxId, tenseKey] of TENSE_CHECKBOX_MAP) {
            if (document.getElementById(checkboxId).checked) {
                tenses[tenseKey] = 1
            }
        }

        if (Object.keys(tenses).length === 0) {
            tenses = { regular: 0, root_change: 0, separable: 0, reflexive: 0 }
        } else {
            tenses.meaning = 1
            tenses.verb = 1
        }
    }


    function clean() {
        document.getElementById("whatQuestions")?.remove() //page clean
    }

    pushBinaryFeature("regularity_0", "regularity_1", "regular")
    pushBinaryFeature("root_change", "no_root_change", "root_change")
    // pushBinaryFeature("reflexivity_0", "reflexivity_1", "reflexive")
    separabilitycheck()

    whichTense()


    if (features.length===0){
        features.push({"regular": false},{"regular": true})
    }
    console.log(features)
    console.log(tenses)
    clean()
    return {features, tenses}
}
