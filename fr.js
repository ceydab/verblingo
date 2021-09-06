// JavaScript Document

///oir controlu unutma
//git deneme

console.log("denem")



//regular verbs


const vParler = {
//verb info
	verb : "parler",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "one base",
	definition : "to speak",
//tenses
//indicatif
	present : {
		je : "parle",
		tu : "parles",
		"il/elle/on" : "parle",
		nous : "parlons",
		vous : "parlez",
		"ils/elles" : "parlent"},
	passeSimple : {
		je : "parlai",
		tu : "parlas",
		"il/elle/on" : "parla",
		nous : "parlâmes",
		vous : "parlâtes",
		"ils/elles" : "parlèrent"},
	imparfait : {
		je : "parlais",
		tu : "parlais",
		"il/elle/on" : "parlait",
		nous : "parlions",
		vous : "parliez",
		"ils/elles" : "parlaient"},
	futurSimple : {
		je : "parlerai",
		tu : "parleras",
		"il/elle/on" : "parlera",
		nous : "parlerons",
		vous : "parlerez",
		"ils/elles" : "parleront"},
	//compound tenses
	passeCompose : {
		je : "'ai parlé",
		tu : "as parlé",
		"il/elle/on" : "a parlé",
		nous : "avons parlé",
		vous : "avez parlé",
		"ils/elles" : "ont parlé"},
	plusQueParfait : {
		je : "'avais parlé",
		tu : "avais parlé",
		"il/elle/on" : "avait parlé",
		nous : "avions parlé",
		vous : "aviez parlé",
		"ils/elles" : "avaient parlé"},
	passeAnterieur : {
		je : "'eus parlé",
		tu : "eus parlé",
		"il/elle/on" : "eut parlé",
		nous : "eûmes parlé",
		vous : "eûtes parlé",
		"ils/elles" : "eurent parlé"},
	futurAnterieur : {
		je : "'aurai parlé",
		tu : "auras parlé",
		"il/elle/on" : "aura parlé",
		nous : "aurons parlé",
		vous : "aurez parlé",
		"ils/elles" : "auront parlé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "parle",
		"que tu" : "parles",
		"qu'il/elle/on" : "parle",
		"que nous" : "parlions",
		"que vous" : "parliez",
		"qu'ils/elles" : "parlent"},
	imparfaitSubjonctif : {
		"que je" : "parlasse",
		"que tu" : "parlasses",
		"qu'il/elle/on" : "parlât",
		"que nous" : "parlassions",
		"que vous" : "parlassiez",
		"qu'ils/elles" : "parlassent"},
	passeSubjonctif : {
		"que je" : "'aie parlé",
		"que tu" : "aies parlé",
		"qu'il/elle/on" : "ait parlé",
		"que nous" : "ayons parlé",
		"que vous" : "ayez parlé",
		"qu'ils/elles" : "aient parlé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse parlé",
		"que tu" : "eusses parlé",
		"qu'il/elle/on" : "eût parlé",
		"que nous" : "eussions parlé",
		"que vous" : "eussiez parlé",
		"qu'ils/elles" : "eussent parlé"},
//conditionnel
	presentConditionmel : {
		je : "parlerais",
		tu : "parlerais",
		"il/elle/on" : "parlerait",
		nous : "parlerions",
		vous : "parleriez",
		"ils/elles" : "parleraient"},
	passeConditionnel : {
		je : "'aurais parlé",
		tu : "aurais parlé",
		"il/elle/on" : "aurait parlé",
		nous : "aurions parlé",
		vous : "auriez parlé",
		"ils/elles" : "auraient parlé"},
	passe2Conditionnel : {
		je : "'eusse parlé",
		tu : "eusses parlé",
		"il/elle/on" : "eût parlé",
		nous : "eussions parlé",
		vous : "eussiez parlé",
		"ils/elles" : "eussent parlé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "parle",
		"il/elle/on" : "",
		nous : "parlons",
		vous : "parlez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie parlé",
		"il/elle/on" : "",
		nous : "ayons parlé",
		vous : "ayez parlé",
		"ils/elles" : ""},
}

const vAimer = {
//verb info
	verb : "aimer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to like",
//tenses
	present : {
		je : "'aime",
		tu : "aimes",
		"il/elle/on" : "aime",
		nous : "aimons",
		vous : "aimez",
		"ils/elles" : "aiment" },
	passeSimple : {
		je : "'aimai",
		tu : "aimas",
		"il/elle/on" : "aima",
		nous : "aimâmes",
		vous : "aimâtes",
		"ils/elles" : "aimèrent"},
	imparfait : {
		je : "aimais",
		tu : "aimais",
		"il/elle/on" : "aimait",
		nous : "aimions",
		vous : "aimiez",
		"ils/elles" : "aimaient"},
	futurSimple : {
		je : "aimerai",
		tu : "aimeras",
		"il/elle/on" : "aimera",
		nous : "aimerons",
		vous : "aimerez",
		"ils/elles" : "aimeront"},
	//compound tenses
	passeCompose : {
		je : "'ai aimé",
		tu : "as aimé",
		"il/elle/on" : "a aimé",
		nous : "avons aimé",
		vous : "avez aimé",
		"ils/elles" : "ont aimé"},
	plusQueParfait : {
		je : "'avais aimé",
		tu : "avais aimé",
		"il/elle/on" : "avait aimé",
		nous : "avions aimé",
		vous : "aviez aimé",
		"ils/elles" : "avaient aimé"},
	passeAnterieur : {
		je : "'eus aimé",
		tu : "eus aimé",
		"il/elle/on" : "eut aimé",
		nous : "eûmes aimé",
		vous : "eûtes aimé",
		"ils/elles" : "eurent aimé"},
	futurAnterieur : {
		je : "'aurai aimé",
		tu : "auras aimé",
		"il/elle/on" : "aura aimé",
		nous : "aurons aimé",
		vous : "aurez aimé",
		"ils/elles" : "auront aimé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "aime",
		"que tu" : "aimes",
		"qu'il/elle/on" : "aime",
		"que nous" : "aimions",
		"que vous" : "aimiez",
		"qu'ils/elles" : "aiment"},
	imparfaitSubjonctif : {
		"que je" : "aimasse",
		"que tu" : "aimasses",
		"qu'il/elle/on" : "aimât",
		"que nous" : "aimassions",
		"que vous" : "aimassiez",
		"qu'ils/elles" : "aimassent"},
	passeSubjonctif : {
		"que je" : "'aie aimé",
		"que tu" : "aies aimé",
		"qu'il/elle/on" : "ait aimé",
		"que nous" : "ayons aimé",
		"que vous" : "ayez aimé",
		"qu'ils/elles" : "aient aimé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse aimé",
		"que tu" : "eusses aimé",
		"qu'il/elle/on" : "eût aimé",
		"que nous" : "eussions aimé",
		"que vous" : "eussiez aimé",
		"qu'ils/elles" : "eussent aimé"},
//conditionnel
	presentConditionmel : {
		je : "aimerais",
		tu : "aimerais",
		"il/elle/on" : "aimerait",
		nous : "aimerions",
		vous : "aimeriez",
		"ils/elles" : "aimeraient"},
	passeConditionnel : {
		je : "'aurais aimé",
		tu : "aurais aimé",
		"il/elle/on" : "aurait aimé",
		nous : "aurions aimé",
		vous : "auriez aimé",
		"ils/elles" : "auraient aimé"},
	passe2Conditionnel : {
		je : "'eusse aimé",
		tu : "eusses aimé",
		"il/elle/on" : "eût aimé",
		nous : "eussions aimé",
		vous : "eussiez aimé",
		"ils/elles" : "eussent aimé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "aime",
		"il/elle/on" : "",
		nous : "aimons",
		vous : "aimez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie aimé",
		"il/elle/on" : "",
		nous : "ayons aimé",
		vous : "ayez aimé",
		"ils/elles" : ""},
	}

const vEtudier = {
//verb info
	verb : "étudier",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "one base",
	definition : "to study",
//tenses
	present : {
		je : "'étudie",
		tu : "étudies",
		"il/elle/on" : "étudie",
		nous : "étudions",
		vous : "étudiez",
		"ils/elles" : "étudient"},
	passeSimple : {
		je : "étudiai",
		tu : "étudias",
		"il/elle/on" : "étudia",
		nous : "étudiâmes",
		vous : "étudiâtes",
		"ils/elles" : "étudièrent"},
	imparfait : {
		je : "étudiais",
		tu : "étudiais",
		"il/elle/on" : "étudiait",
		nous : "étudiions",
		vous : "étudiiez",
		"ils/elles" : "étudiaient"},
	futurSimple : {
		je : "étudierai",
		tu : "étudieras",
		"il/elle/on" : "étudiera",
		nous : "étudierons",
		vous : "étudierez",
		"ils/elles" : "étudieront"},
	//compound tenses
	passeCompose : {
		je : "'ai étudié",
		tu : "as étudié",
		"il/elle/on" : "a étudié",
		nous : "avons étudié",
		vous : "avez étudié",
		"ils/elles" : "ont étudié"},
	plusQueParfait : {
		je : "'avais étudié",
		tu : "avais étudié",
		"il/elle/on" : "avait étudié",
		nous : "avions étudié",
		vous : "aviez étudié",
		"ils/elles" : "avaient étudié"},
	passeAnterieur : {
		je : "'eus étudié",
		tu : "eus étudié",
		"il/elle/on" : "eut étudié",
		nous : "eûmes étudié",
		vous : "eûtes étudié",
		"ils/elles" : "eurent étudié"},
	futurAnterieur : {
		je : "'aurai étudié",
		tu : "auras étudié",
		"il/elle/on" : "aura étudié",
		nous : "aurons étudié",
		vous : "aurez étudié",
		"ils/elles" : "auront étudié"},
//subjuntive
	presentSubjonctif : {
		"que je" : "'étudie'",
		"que tu" : "étudies",
		"qu'il/elle/on" : "étudie",
		"que nous" : "étudiions",
		"que vous" : "étudiiez",
		"qu'ils/elles" : "étudient"},
	imparfaitSubjonctif : {
		"que je" : "'étudiasse",
		"que tu" : "étudiasses",
		"qu'il/elle/on" : "étudiât",
		"que nous" : "étudiassions",
		"que vous" : "étudiassiez",
		"qu'ils/elles" : "étudiassent"},
	passeSubjonctif : {
		"que je" : "'aie étudié",
		"que tu" : "aies étudié",
		"qu'il/elle/on" : "ait étudié",
		"que nous" : "ayons étudié",
		"que vous" : "ayez étudié",
		"qu'ils/elles" : "aient étudié"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse étudié",
		"que tu" : "eusses étudié",
		"qu'il/elle/on" : "eût étudié",
		"que nous" : "eussions étudié",
		"que vous" : "eussiez étudié",
		"qu'ils/elles" : "eussent étudié"},
//conditionnel
	presentConditionmel : {
		je : "'étudierais",
		tu : "étudierais",
		"il/elle/on" : "étudierait",
		nous : "étudierions",
		vous : "étudieriez",
		"ils/elles" : "étudieraient"},
	passeConditionnel : {
		je : "'aurais étudié",
		tu : "aurais étudié",
		"il/elle/on" : "aurait étudié",
		nous : "aurions étudié",
		vous : "auriez étudié",
		"ils/elles" : "auraient étudié"},
	passe2Conditionnel : {
		je : "'eusse étudié",
		tu : "eusses étudié",
		"il/elle/on" : "eût étudié",
		nous : "eussions étudié",
		vous : "eussiez étudié",
		"ils/elles" : "eussent étudié"},
//imperative
	presentImperatif : {
		je: "",
		tu : "étudie",
		"il/elle/on" : "",
		nous : "étudions",
		vous : "étudiez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie étudié",
		"il/elle/on" : "",
		nous : "ayons étudié",
		vous : "ayez étudié",
		"ils/elles" : ""},
}

const vManger = {
//verb info
	verb : "manger",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "one base",
	definition : "to eat",
//tenses
	present : {
		je : "mange",
		tu : "manges",
		"il/elle/on" : "mange",
		nous : "mangeons",
		vous : "mangez",
		"ils/elles" : "mangent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "mangerai",
		tu : "mangeras",
		"il/elle/on" : "mangera",
		nous : "mangerons",
		vous : "mangerez",
		"ils/elles" : "mangeront"},
	//compound tenses
	passeCompose : {
		je : "'ai mangé",
		tu : "as mangé",
		"il/elle/on" : "a mangé",
		nous : "avons mangé",
		vous : "avez mangé",
		"ils/elles" : "ont mangé"},
	plusQueParfait : {
		je : "'avais mangé",
		tu : "avais mangé",
		"il/elle/on" : "avait mangé",
		nous : "avions mangé",
		vous : "aviez mangé",
		"ils/elles" : "avaient mangé"},
	passeAnterieur : {
		je : "'eus mangé",
		tu : "eus mangé",
		"il/elle/on" : "eut mangé",
		nous : "eûmes mangé",
		vous : "eûtes mangé",
		"ils/elles" : "eurent mangé"},
	futurAnterieur : {
		je : "'aurai mangé",
		tu : "auras mangé",
		"il/elle/on" : "aura mangé",
		nous : "aurons mangé",
		vous : "aurez mangé",
		"ils/elles" : "auront mangé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie mangé",
		"que tu" : "aies mangé",
		"qu'il/elle/on" : "ait mangé",
		"que nous" : "ayons mangé",
		"que vous" : "ayez mangé",
		"qu'ils/elles" : "aient mangé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse mangé",
		"que tu" : "eusses mangé",
		"qu'il/elle/on" : "eût mangé",
		"que nous" : "eussions mangé",
		"que vous" : "eussiez mangé",
		"qu'ils/elles" : "eussent mangé"},
//conditionnel
	presentConditionmel : {
		je : "mangerais",
		tu : "mangerais",
		"il/elle/on" : "mangerait",
		nous : "mangerions",
		vous : "mangeriez",
		"ils/elles" : "mangeraient"},
	passeConditionnel : {
		je : "'aurais mangé",
		tu : "aurais mangé",
		"il/elle/on" : "aurait mangé",
		nous : "aurions mangé",
		vous : "auriez mangé",
		"ils/elles" : "auraient mangé"},
	passe2Conditionnel : {
		je : "'eusse mangé",
		tu : "eusses mangé",
		"il/elle/on" : "eût mangé",
		nous : "eussions mangé",
		vous : "eussiez mangé",
		"ils/elles" : "eussent mangé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "mange",
		"il/elle/on" : "",
		nous : "mangeons",
		vous : "mangez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie mangé",
		"il/elle/on" : "",
		nous : "ayons mangé",
		vous : "ayez mangé",
		"ils/elles" : ""},
}

const vDescendre = {
//verb info
	verb: "descendre",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "two bases",
	definition : "to get off",
//tenses
	present : {
		je : "descends",
		tu : "descends",
		"il/elle/on" : "descend",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : "descendent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
	//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
		
}
const vDonner = {
//verb info
	verb : "donner",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to give, to produce",
	//tenses
	present : {
		je : "donne",
		tu : "donnes",
		"il/elle/on" : "donne",
		nous : "donnons",
		vous : "donnez",
		"ils/elles" : "donnent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "donnerai",
		tu : "donneras",
		"il/elle/on" : "donnera",
		nous : "donnerons",
		vous : "donnerez",
		"ils/elles" : "donneront"},
	//compound tenses
	passeCompose : {
		je : "'ai donné",
		tu : "as donné",
		"il/elle/on" : "a donné",
		nous : "avons donné",
		vous : "avez donné",
		"ils/elles" : "ont donné"},
	plusQueParfait : {
		je : "'avais donné",
		tu : "avais donné",
		"il/elle/on" : "avait donné",
		nous : "avions donné",
		vous : "aviez donné",
		"ils/elles" : "avaient donné"},
	passeAnterieur : {
		je : "'eus donné",
		tu : "eus donné",
		"il/elle/on" : "eut donné",
		nous : "eûmes donné",
		vous : "eûtes donné",
		"ils/elles" : "eurent donné"},
	futurAnterieur : {
		je : "'aurai donné",
		tu : "auras donné",
		"il/elle/on" : "aura donné",
		nous : "aurons donné",
		vous : "aurez donné",
		"ils/elles" : "auront donné"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie donné",
		"que tu" : "aies donné",
		"qu'il/elle/on" : "ait donné",
		"que nous" : "ayons donné",
		"que vous" : "ayez donné",
		"qu'ils/elles" : "aient donné"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse donné",
		"que tu" : "eusses donné",
		"qu'il/elle/on" : "eût donné",
		"que nous" : "eussions donné",
		"que vous" : "eussiez donné",
		"qu'ils/elles" : "eussent donné"},
//conditionnel
	presentConditionmel : {
		je : "mangerais",
		tu : "mangerais",
		"il/elle/on" : "mangerait",
		nous : "mangerions",
		vous : "mangeriez",
		"ils/elles" : "mangeraient"},
	passeConditionnel : {
		je : "'aurais donné",
		tu : "aurais donné",
		"il/elle/on" : "aurait donné",
		nous : "aurions donné",
		vous : "auriez donné",
		"ils/elles" : "auraient donné"},
	passe2Conditionnel : {
		je : "'eusse donné",
		tu : "eusses donné",
		"il/elle/on" : "eût donné",
		nous : "eussions donné",
		vous : "eussiez donné",
		"ils/elles" : "eussent donné"},
//imperative
	presentImperatif : {
		je: "",
		tu : "mange",
		"il/elle/on" : "",
		nous : "mangeons",
		vous : "mangez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie donné",
		"il/elle/on" : "",
		nous : "ayons donné",
		vous : "ayez donné",
		"ils/elles" : ""},
}
const vDemander = {
//verb info
	verb : "demander",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to request",
	//tenses
	present : {
		je : "demande",
		tu : "demandes",
		"il/elle/on" : "demande",
		nous : "demandons",
		vous : "demandez",
		"ils/elles" : "demandent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "demanderai",
		tu : "demanderas",
		"il/elle/on" : "demandera",
		nous : "demanderons",
		vous : "demanderez",
		"ils/elles" : "demanderont"},
	//compound tenses
	passeCompose : {
		je : "'ai demandé",
		tu : "as demandé",
		"il/elle/on" : "a demandé",
		nous : "avons demandé",
		vous : "avez demandé",
		"ils/elles" : "ont demandé"},
	plusQueParfait : {
		je : "'avais demandé",
		tu : "avais demandé",
		"il/elle/on" : "avait demandé",
		nous : "avions demandé",
		vous : "aviez demandé",
		"ils/elles" : "avaient demandé"},
	passeAnterieur : {
		je : "'eus demandé",
		tu : "eus demandé",
		"il/elle/on" : "eut demandé",
		nous : "eûmes demandé",
		vous : "eûtes demandé",
		"ils/elles" : "eurent demandé"},
	futurAnterieur : {
		je : "'aurai demandé",
		tu : "auras demandé",
		"il/elle/on" : "aura demandé",
		nous : "aurons demandé",
		vous : "aurez demandé",
		"ils/elles" : "auront demandé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie demandé",
		"que tu" : "aies demandé",
		"qu'il/elle/on" : "ait demandé",
		"que nous" : "ayons demandé",
		"que vous" : "ayez demandé",
		"qu'ils/elles" : "aient demandé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse demandé",
		"que tu" : "eusses demandé",
		"qu'il/elle/on" : "eût demandé",
		"que nous" : "eussions demandé",
		"que vous" : "eussiez demandé",
		"qu'ils/elles" : "eussent demandé"},
//conditionnel
	presentConditionmel : {
		je : "mangerais",
		tu : "mangerais",
		"il/elle/on" : "mangerait",
		nous : "mangerions",
		vous : "mangeriez",
		"ils/elles" : "mangeraient"},
	passeConditionnel : {
		je : "'aurais demandé",
		tu : "aurais demandé",
		"il/elle/on" : "aurait demandé",
		nous : "aurions demandé",
		vous : "auriez demandé",
		"ils/elles" : "auraient demandé"},
	passe2Conditionnel : {
		je : "'eusse demandé",
		tu : "eusses demandé",
		"il/elle/on" : "eût demandé",
		nous : "eussions demandé",
		vous : "eussiez demandé",
		"ils/elles" : "eussent demandé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "demande",
		"il/elle/on" : "",
		nous : "demandons",
		vous : "demandez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie demandé",
		"il/elle/on" : "",
		nous : "ayons demandé",
		vous : "ayez demandé",
		"ils/elles" : ""},
}
const vTrouver = {
//verb info
	verb : "trouver",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to find, to discover",
	//tenses
	present : {
		je : "trouve",
		tu : "trouves",
		"il/elle/on" : "trouve",
		nous : "trouvons",
		vous : "trouvez",
		"ils/elles" : "trouvent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "trouverai",
		tu : "trouveras",
		"il/elle/on" : "trouvera",
		nous : "trouverons",
		vous : "trouverez",
		"ils/elles" : "trouveront"},
	//compound tenses
	passeCompose : {
		je : "'ai trouvé",
		tu : "as trouvé",
		"il/elle/on" : "a trouvé",
		nous : "avons trouvé",
		vous : "avez trouvé",
		"ils/elles" : "ont trouvé"},
	plusQueParfait : {
		je : "'avais trouvé",
		tu : "avais trouvé",
		"il/elle/on" : "avait trouvé",
		nous : "avions trouvé",
		vous : "aviez trouvé",
		"ils/elles" : "avaient trouvé"},
	passeAnterieur : {
		je : "'eus trouvé",
		tu : "eus trouvé",
		"il/elle/on" : "eut trouvé",
		nous : "eûmes trouvé",
		vous : "eûtes trouvé",
		"ils/elles" : "eurent trouvé"},
	futurAnterieur : {
		je : "'aurai trouvé",
		tu : "auras trouvé",
		"il/elle/on" : "aura trouvé",
		nous : "aurons trouvé",
		vous : "aurez trouvé",
		"ils/elles" : "auront trouvé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie trouvé",
		"que tu" : "aies trouvé",
		"qu'il/elle/on" : "ait trouvé",
		"que nous" : "ayons trouvé",
		"que vous" : "ayez trouvé",
		"qu'ils/elles" : "aient trouvé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse trouvé",
		"que tu" : "eusses trouvé",
		"qu'il/elle/on" : "eût trouvé",
		"que nous" : "eussions trouvé",
		"que vous" : "eussiez trouvé",
		"qu'ils/elles" : "eussent trouvé"},
//conditionnel
	presentConditionmel : {
		je : "trouverais",
		tu : "trouverais",
		"il/elle/on" : "trouverait",
		nous : "trouverions",
		vous : "trouveriez",
		"ils/elles" : "trouveraient"},
	passeConditionnel : {
		je : "'aurais trouvé",
		tu : "aurais trouvé",
		"il/elle/on" : "aurait trouvé",
		nous : "aurions trouvé",
		vous : "auriez trouvé",
		"ils/elles" : "auraient trouvé"},
	passe2Conditionnel : {
		je : "'eusse trouvé",
		tu : "eusses trouvé",
		"il/elle/on" : "eût trouvé",
		nous : "eussions trouvé",
		vous : "eussiez trouvé",
		"ils/elles" : "eussent trouvé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "trouve",
		"il/elle/on" : "",
		nous : "trouvons",
		vous : "trouvez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie trouvé",
		"il/elle/on" : "",
		nous : "ayons trouvé",
		vous : "ayez trouvé",
		"ils/elles" : ""},
}
const vPasser = {
//verb info
	verb : "passer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to pass",
	//tenses
	present : {
		je : "passe",
		tu : "passes",
		"il/elle/on" : "passe",
		nous : "passons",
		vous : "passez",
		"ils/elles" : "passent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "passerai",
		tu : "passeras",
		"il/elle/on" : "passera",
		nous : "passerons",
		vous : "passerez",
		"ils/elles" : "passeront"},
	//compound tenses
	passeCompose : {
		je : "'ai mangé",
		tu : "as mangé",
		"il/elle/on" : "a mangé",
		nous : "avons mangé",
		vous : "avez mangé",
		"ils/elles" : "ont mangé"},
	plusQueParfait : {
		je : "'avais mangé",
		tu : "avais mangé",
		"il/elle/on" : "avait mangé",
		nous : "avions mangé",
		vous : "aviez mangé",
		"ils/elles" : "avaient mangé"},
	passeAnterieur : {
		je : "'eus mangé",
		tu : "eus mangé",
		"il/elle/on" : "eut mangé",
		nous : "eûmes mangé",
		vous : "eûtes mangé",
		"ils/elles" : "eurent mangé"},
	futurAnterieur : {
		je : "'aurai mangé",
		tu : "auras mangé",
		"il/elle/on" : "aura mangé",
		nous : "aurons mangé",
		vous : "aurez mangé",
		"ils/elles" : "auront mangé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie mangé",
		"que tu" : "aies mangé",
		"qu'il/elle/on" : "ait mangé",
		"que nous" : "ayons mangé",
		"que vous" : "ayez mangé",
		"qu'ils/elles" : "aient mangé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse mangé",
		"que tu" : "eusses mangé",
		"qu'il/elle/on" : "eût mangé",
		"que nous" : "eussions mangé",
		"que vous" : "eussiez mangé",
		"qu'ils/elles" : "eussent mangé"},
//conditionnel
	presentConditionmel : {
		je : "passerais",
		tu : "passerais",
		"il/elle/on" : "passerait",
		nous : "passerions",
		vous : "passeriez",
		"ils/elles" : "passeraient"},
	passeConditionnel : {
		je : "'aurais mangé",
		tu : "aurais mangé",
		"il/elle/on" : "aurait mangé",
		nous : "aurions mangé",
		vous : "auriez mangé",
		"ils/elles" : "auraient mangé"},
	passe2Conditionnel : {
		je : "'eusse mangé",
		tu : "eusses mangé",
		"il/elle/on" : "eût mangé",
		nous : "eussions mangé",
		vous : "eussiez mangé",
		"ils/elles" : "eussent mangé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "passe",
		"il/elle/on" : "",
		nous : "passons",
		vous : "passez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie mangé",
		"il/elle/on" : "",
		nous : "ayons mangé",
		vous : "ayez mangé",
		"ils/elles" : ""},
}
const vRester = {
//verb info
	verb : "rester",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to remain",
	//tenses
	present : {
		je : "reste",
		tu : "restes",
		"il/elle/on" : "reste",
		nous : "restons",
		vous : "restez",
		"ils/elles" : "restent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "resterai",
		tu : "resteras",
		"il/elle/on" : "restera",
		nous : "resterons",
		vous : "resteraz",
		"ils/elles" : "resterons"},
	//compound tenses
	passeCompose : {
		je : "'ai mangé",
		tu : "as mangé",
		"il/elle/on" : "a mangé",
		nous : "avons mangé",
		vous : "avez mangé",
		"ils/elles" : "ont mangé"},
	plusQueParfait : {
		je : "'avais mangé",
		tu : "avais mangé",
		"il/elle/on" : "avait mangé",
		nous : "avions mangé",
		vous : "aviez mangé",
		"ils/elles" : "avaient mangé"},
	passeAnterieur : {
		je : "'eus mangé",
		tu : "eus mangé",
		"il/elle/on" : "eut mangé",
		nous : "eûmes mangé",
		vous : "eûtes mangé",
		"ils/elles" : "eurent mangé"},
	futurAnterieur : {
		je : "'aurai mangé",
		tu : "auras mangé",
		"il/elle/on" : "aura mangé",
		nous : "aurons mangé",
		vous : "aurez mangé",
		"ils/elles" : "auront mangé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie mangé",
		"que tu" : "aies mangé",
		"qu'il/elle/on" : "ait mangé",
		"que nous" : "ayons mangé",
		"que vous" : "ayez mangé",
		"qu'ils/elles" : "aient mangé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse mangé",
		"que tu" : "eusses mangé",
		"qu'il/elle/on" : "eût mangé",
		"que nous" : "eussions mangé",
		"que vous" : "eussiez mangé",
		"qu'ils/elles" : "eussent mangé"},
//conditionnel
	presentConditionmel : {
		je : "resterais",
		tu : "resterais",
		"il/elle/on" : "resterait",
		nous : "resterions",
		vous : "resteriez",
		"ils/elles" : "resteraient"},
	passeConditionnel : {
		je : "'aurais mangé",
		tu : "aurais mangé",
		"il/elle/on" : "aurait mangé",
		nous : "aurions mangé",
		vous : "auriez mangé",
		"ils/elles" : "auraient mangé"},
	passe2Conditionnel : {
		je : "'eusse mangé",
		tu : "eusses mangé",
		"il/elle/on" : "eût mangé",
		nous : "eussions mangé",
		vous : "eussiez mangé",
		"ils/elles" : "eussent mangé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "reste",
		"il/elle/on" : "",
		nous : "restons",
		vous : "restez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie mangé",
		"il/elle/on" : "",
		nous : "ayons mangé",
		vous : "ayez mangé",
		"ils/elles" : ""},
}
const vPorter = {
//verb info
	verb : "porter",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to wear",
	//tenses
	present : {
		je : "porte",
		tu : "portes",
		"il/elle/on" : "porte",
		nous : "portons",
		vous : "portez",
		"ils/elles" : "portent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "porterai",
		tu : "porteras",
		"il/elle/on" : "portera",
		nous : "porterons",
		vous : "porterez",
		"ils/elles" : "porteront"},
	//compound tenses
	passeCompose : {
		je : "'ai porté",
		tu : "as porté",
		"il/elle/on" : "a porté",
		nous : "avons porté",
		vous : "avez porté",
		"ils/elles" : "ont porté"},
	plusQueParfait : {
		je : "'avais porté",
		tu : "avais porté",
		"il/elle/on" : "avait porté",
		nous : "avions porté",
		vous : "aviez porté",
		"ils/elles" : "avaient porté"},
	passeAnterieur : {
		je : "'eus porté",
		tu : "eus porté",
		"il/elle/on" : "eut porté",
		nous : "eûmes porté",
		vous : "eûtes porté",
		"ils/elles" : "eurent porté"},
	futurAnterieur : {
		je : "'aurai porté",
		tu : "auras porté",
		"il/elle/on" : "aura porté",
		nous : "aurons porté",
		vous : "aurez porté",
		"ils/elles" : "auront porté"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie porté",
		"que tu" : "aies porté",
		"qu'il/elle/on" : "ait porté",
		"que nous" : "ayons porté",
		"que vous" : "ayez porté",
		"qu'ils/elles" : "aient porté"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse porté",
		"que tu" : "eusses porté",
		"qu'il/elle/on" : "eût porté",
		"que nous" : "eussions porté",
		"que vous" : "eussiez porté",
		"qu'ils/elles" : "eussent porté"},
//conditionnel
	presentConditionmel : {
		je : "porterais",
		tu : "porterais",
		"il/elle/on" : "porterait",
		nous : "porterions",
		vous : "porteriez",
		"ils/elles" : "porteraient"},
	passeConditionnel : {
		je : "'aurais porté",
		tu : "aurais porté",
		"il/elle/on" : "aurait porté",
		nous : "aurions porté",
		vous : "auriez porté",
		"ils/elles" : "auraient porté"},
	passe2Conditionnel : {
		je : "'eusse porté",
		tu : "eusses porté",
		"il/elle/on" : "eût porté",
		nous : "eussions porté",
		vous : "eussiez porté",
		"ils/elles" : "eussent porté"},
//imperative
	presentImperatif : {
		je: "",
		tu : "porte",
		"il/elle/on" : "",
		nous : "portons",
		vous : "portez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie porté",
		"il/elle/on" : "",
		nous : "ayons porté",
		vous : "ayez porté",
		"ils/elles" : ""},
}
const vMontrer = {
//verb info
	verb : "montrer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to show",
	//tenses
	present : {
		je : "montre",
		tu : "montres",
		"il/elle/on" : "montre",
		nous : "montrons",
		vous : "montrez",
		"ils/elles" : "montrent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "monterai",
		tu : "montreras",
		"il/elle/on" : "montrera",
		nous : "montrerons",
		vous : "montrerez",
		"ils/elles" : "montreront"},
	//compound tenses
	passeCompose : {
		je : "'ai montré",
		tu : "as montré",
		"il/elle/on" : "a montré",
		nous : "avons montré",
		vous : "avez montré",
		"ils/elles" : "ont montré"},
	plusQueParfait : {
		je : "'avais montré",
		tu : "avais montré",
		"il/elle/on" : "avait montré",
		nous : "avions montré",
		vous : "aviez montré",
		"ils/elles" : "avaient montré"},
	passeAnterieur : {
		je : "'eus montré",
		tu : "eus montré",
		"il/elle/on" : "eut montré",
		nous : "eûmes montré",
		vous : "eûtes montré",
		"ils/elles" : "eurent montré"},
	futurAnterieur : {
		je : "'aurai montré",
		tu : "auras montré",
		"il/elle/on" : "aura montré",
		nous : "aurons montré",
		vous : "aurez montré",
		"ils/elles" : "auront montré"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie montré",
		"que tu" : "aies montré",
		"qu'il/elle/on" : "ait montré",
		"que nous" : "ayons montré",
		"que vous" : "ayez montré",
		"qu'ils/elles" : "aient montré"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse montré",
		"que tu" : "eusses montré",
		"qu'il/elle/on" : "eût montré",
		"que nous" : "eussions montré",
		"que vous" : "eussiez montré",
		"qu'ils/elles" : "eussent montré"},
//conditionnel
	presentConditionmel : {
		je : "montrerais",
		tu : "montrerais",
		"il/elle/on" : "montrerait",
		nous : "montrerions",
		vous : "montreriez",
		"ils/elles" : "montreraient"},
	passeConditionnel : {
		je : "'aurais montré",
		tu : "aurais montré",
		"il/elle/on" : "aurait montré",
		nous : "aurions montré",
		vous : "auriez montré",
		"ils/elles" : "auraient montré"},
	passe2Conditionnel : {
		je : "'eusse montré",
		tu : "eusses montré",
		"il/elle/on" : "eût montré",
		nous : "eussions montré",
		vous : "eussiez montré",
		"ils/elles" : "eussent montré"},
//imperative
	presentImperatif : {
		je: "",
		tu : "montre",
		"il/elle/on" : "",
		nous : "montrons",
		vous : "montrez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie montré",
		"il/elle/on" : "",
		nous : "ayons montré",
		vous : "ayez montré",
		"ils/elles" : ""},
}
const vContinuer = {
//verb info
	verb : "continuer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to continue",	
	//tenses
	present : {
		je : "continue",
		tu : "continues",
		"il/elle/on" : "continue",
		nous : "continuons",
		vous : "continuez",
		"ils/elles" : "continuent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "continuerai",
		tu : "continueras",
		"il/elle/on" : "continuera",
		nous : "continuerons",
		vous : "continuerez",
		"ils/elles" : "continueront"},
	//compound tenses
	passeCompose : {
		je : "'ai continué",
		tu : "as continué",
		"il/elle/on" : "a continué",
		nous : "avons continué",
		vous : "avez continué",
		"ils/elles" : "ont continué"},
	plusQueParfait : {
		je : "'avais continué",
		tu : "avais continué",
		"il/elle/on" : "avait continué",
		nous : "avions continué",
		vous : "aviez continué",
		"ils/elles" : "avaient continué"},
	passeAnterieur : {
		je : "'eus continué",
		tu : "eus continué",
		"il/elle/on" : "eut continué",
		nous : "eûmes continué",
		vous : "eûtes continué",
		"ils/elles" : "eurent continué"},
	futurAnterieur : {
		je : "'aurai continué",
		tu : "auras continué",
		"il/elle/on" : "aura continué",
		nous : "aurons continué",
		vous : "aurez continué",
		"ils/elles" : "auront continué"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie continué",
		"que tu" : "aies continué",
		"qu'il/elle/on" : "ait continué",
		"que nous" : "ayons continué",
		"que vous" : "ayez continué",
		"qu'ils/elles" : "aient continué"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse continué",
		"que tu" : "eusses continué",
		"qu'il/elle/on" : "eût continué",
		"que nous" : "eussions continué",
		"que vous" : "eussiez continué",
		"qu'ils/elles" : "eussent continué"},
//conditionnel
	presentConditionmel : {
		je : "continuerais",
		tu : "continuerais",
		"il/elle/on" : "continuerait",
		nous : "continuerions",
		vous : "continueriez",
		"ils/elles" : "continueraient"},
	passeConditionnel : {
		je : "'aurais continué",
		tu : "aurais continué",
		"il/elle/on" : "aurait continué",
		nous : "aurions continué",
		vous : "auriez continué",
		"ils/elles" : "auraient continué"},
	passe2Conditionnel : {
		je : "'eusse continué",
		tu : "eusses continué",
		"il/elle/on" : "eût continué",
		nous : "eussions continué",
		vous : "eussiez continué",
		"ils/elles" : "eussent continué"},
//imperative
	presentImperatif : {
		je: "",
		tu : "continue",
		"il/elle/on" : "",
		nous : "continuons",
		vous : "continuez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie continué",
		"il/elle/on" : "",
		nous : "ayons continué",
		vous : "ayez continué",
		"ils/elles" : ""},
}
const vPenser = {
//verb info
	verb : "penser",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to think",
	//tenses
	present : {
		je : "pense",
		tu : "penses",
		"il/elle/on" : "pense",
		nous : "pensons",
		vous : "pensez",
		"ils/elles" : "pensent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "penserai",
		tu : "penseras",
		"il/elle/on" : "pensera",
		nous : "penserons",
		vous : "penserez",
		"ils/elles" : "penseront"},
	//compound tenses
	passeCompose : {
		je : "'ai pensé",
		tu : "as pensé",
		"il/elle/on" : "a pensé",
		nous : "avons pensé",
		vous : "avez pensé",
		"ils/elles" : "ont pensé"},
	plusQueParfait : {
		je : "'avais pensé",
		tu : "avais pensé",
		"il/elle/on" : "avait pensé",
		nous : "avions pensé",
		vous : "aviez pensé",
		"ils/elles" : "avaient pensé"},
	passeAnterieur : {
		je : "'eus pensé",
		tu : "eus pensé",
		"il/elle/on" : "eut pensé",
		nous : "eûmes pensé",
		vous : "eûtes pensé",
		"ils/elles" : "eurent pensé"},
	futurAnterieur : {
		je : "'aurai pensé",
		tu : "auras pensé",
		"il/elle/on" : "aura pensé",
		nous : "aurons pensé",
		vous : "aurez pensé",
		"ils/elles" : "auront pensé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie pensé",
		"que tu" : "aies pensé",
		"qu'il/elle/on" : "ait pensé",
		"que nous" : "ayons pensé",
		"que vous" : "ayez pensé",
		"qu'ils/elles" : "aient pensé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse pensé",
		"que tu" : "eusses pensé",
		"qu'il/elle/on" : "eût pensé",
		"que nous" : "eussions pensé",
		"que vous" : "eussiez pensé",
		"qu'ils/elles" : "eussent pensé"},
//conditionnel
	presentConditionmel : {
		je : "penserais",
		tu : "penserais",
		"il/elle/on" : "penserait",
		nous : "penserions",
		vous : "penseriez",
		"ils/elles" : "penseraient"},
	passeConditionnel : {
		je : "'aurais pensé",
		tu : "aurais pensé",
		"il/elle/on" : "aurait pensé",
		nous : "aurions pensé",
		vous : "auriez pensé",
		"ils/elles" : "auraient pensé"},
	passe2Conditionnel : {
		je : "'eusse pensé",
		tu : "eusses pensé",
		"il/elle/on" : "eût pensé",
		nous : "eussions pensé",
		vous : "eussiez pensé",
		"ils/elles" : "eussent pensé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "pense",
		"il/elle/on" : "",
		nous : "pensons",
		vous : "pensez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie pensé",
		"il/elle/on" : "",
		nous : "ayons pensé",
		vous : "ayez pensé",
		"ils/elles" : ""},
}
const vCommencer = {
//verb info
	verb : "commencer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to begin",
	//tenses
	present : {
		je : "commence",
		tu : "commences",
		"il/elle/on" : "commence",
		nous : "commençons",
		vous : "commencez",
		"ils/elles" : "commencent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "commencerai",
		tu : "commenceras",
		"il/elle/on" : "commencera",
		nous : "commencerons",
		vous : "commencerez",
		"ils/elles" : "commenceront"},
	//compound tenses
	passeCompose : {
		je : "'ai commencé",
		tu : "as commencé",
		"il/elle/on" : "a commencé",
		nous : "avons commencé",
		vous : "avez commencé",
		"ils/elles" : "ont commencé"},
	plusQueParfait : {
		je : "'avais commencé",
		tu : "avais commencé",
		"il/elle/on" : "avait commencé",
		nous : "avions commencé",
		vous : "aviez commencé",
		"ils/elles" : "avaient commencé"},
	passeAnterieur : {
		je : "'eus commencé",
		tu : "eus commencé",
		"il/elle/on" : "eut commencé",
		nous : "eûmes commencé",
		vous : "eûtes commencé",
		"ils/elles" : "eurent commencé"},
	futurAnterieur : {
		je : "'aurai commencé",
		tu : "auras commencé",
		"il/elle/on" : "aura commencé",
		nous : "aurons commencé",
		vous : "aurez commencé",
		"ils/elles" : "auront commencé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie commencé",
		"que tu" : "aies commencé",
		"qu'il/elle/on" : "ait commencé",
		"que nous" : "ayons commencé",
		"que vous" : "ayez commencé",
		"qu'ils/elles" : "aient commencé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse commencé",
		"que tu" : "eusses commencé",
		"qu'il/elle/on" : "eût commencé",
		"que nous" : "eussions commencé",
		"que vous" : "eussiez commencé",
		"qu'ils/elles" : "eussent commencé"},
//conditionnel
	presentConditionmel : {
		je : "commencerais",
		tu : "commencerais",
		"il/elle/on" : "commencerait",
		nous : "commencerions",
		vous : "commenceriez",
		"ils/elles" : "commenceraient"},
	passeConditionnel : {
		je : "'aurais commencé",
		tu : "aurais commencé",
		"il/elle/on" : "aurait commencé",
		nous : "aurions commencé",
		vous : "auriez commencé",
		"ils/elles" : "auraient commencé"},
	passe2Conditionnel : {
		je : "'eusse commencé",
		tu : "eusses commencé",
		"il/elle/on" : "eût commencé",
		nous : "eussions commencé",
		vous : "eussiez commencé",
		"ils/elles" : "eussent commencé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "commence",
		"il/elle/on" : "",
		nous : "commonçons",
		vous : "commencez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie commencé",
		"il/elle/on" : "",
		nous : "ayons commencé",
		vous : "ayez commencé",
		"ils/elles" : ""},
}
const vCompter = {
//verb info
	verb : "compter",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to count",
	//tenses
	present : {
		je : "compte",
		tu : "comptes",
		"il/elle/on" : "compte",
		nous : "comptons",
		vous : "comptez",
		"ils/elles" : "comptent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "compterai",
		tu : "compteras",
		"il/elle/on" : "comptera",
		nous : "compterons",
		vous : "compterez",
		"ils/elles" : "compteront"},
	//compound tenses
	passeCompose : {
		je : "'ai compté",
		tu : "as compté",
		"il/elle/on" : "a compté",
		nous : "avons compté",
		vous : "avez compté",
		"ils/elles" : "ont compté"},
	plusQueParfait : {
		je : "'avais compté",
		tu : "avais compté",
		"il/elle/on" : "avait compté",
		nous : "avions compté",
		vous : "aviez compté",
		"ils/elles" : "avaient compté"},
	passeAnterieur : {
		je : "'eus compté",
		tu : "eus compté",
		"il/elle/on" : "eut compté",
		nous : "eûmes compté",
		vous : "eûtes compté",
		"ils/elles" : "eurent compté"},
	futurAnterieur : {
		je : "'aurai compté",
		tu : "auras compté",
		"il/elle/on" : "aura compté",
		nous : "aurons compté",
		vous : "aurez compté",
		"ils/elles" : "auront compté"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie compté",
		"que tu" : "aies compté",
		"qu'il/elle/on" : "ait compté",
		"que nous" : "ayons compté",
		"que vous" : "ayez compté",
		"qu'ils/elles" : "aient compté"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse compté",
		"que tu" : "eusses compté",
		"qu'il/elle/on" : "eût compté",
		"que nous" : "eussions compté",
		"que vous" : "eussiez compté",
		"qu'ils/elles" : "eussent compté"},
//conditionnel
	presentConditionmel : {
		je : "compterais",
		tu : "compterais",
		"il/elle/on" : "compterait",
		nous : "compterions",
		vous : "compteriez",
		"ils/elles" : "compteraient"},
	passeConditionnel : {
		je : "'aurais compté",
		tu : "aurais compté",
		"il/elle/on" : "aurait compté",
		nous : "aurions compté",
		vous : "auriez compté",
		"ils/elles" : "auraient compté"},
	passe2Conditionnel : {
		je : "'eusse compté",
		tu : "eusses compté",
		"il/elle/on" : "eût compté",
		nous : "eussions compté",
		vous : "eussiez compté",
		"ils/elles" : "eussent compté"},
//imperative
	presentImperatif : {
		je: "",
		tu : "compte",
		"il/elle/on" : "",
		nous : "comptons",
		vous : "comptez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie compté",
		"il/elle/on" : "",
		nous : "ayons compté",
		vous : "ayez compté",
		"ils/elles" : ""},
} 
const vOccuper = {
	//verb info
	verb : "occuper",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to occupy",
	//tenses
	present : {
		je : "occupe",
		tu : "occupes",
		"il/elle/on" : "occupe",
		nous : "occupons",
		vous : "occupez",
		"ils/elles" : "occupent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "occuperai",
		tu : "occuperas",
		"il/elle/on" : "occupera",
		nous : "occuperons",
		vous : "occuperez",
		"ils/elles" : "occuperont"},
	//compound tenses
	passeCompose : {
		je : "'ai occupé",
		tu : "as occupé",
		"il/elle/on" : "a occupé",
		nous : "avons occupé",
		vous : "avez occupé",
		"ils/elles" : "ont occupé"},
	plusQueParfait : {
		je : "'avais occupé",
		tu : "avais occupé",
		"il/elle/on" : "avait occupé",
		nous : "avions occupé",
		vous : "aviez occupé",
		"ils/elles" : "avaient occupé"},
	passeAnterieur : {
		je : "'eus occupé",
		tu : "eus occupé",
		"il/elle/on" : "eut occupé",
		nous : "eûmes occupé",
		vous : "eûtes occupé",
		"ils/elles" : "eurent occupé"},
	futurAnterieur : {
		je : "'aurai occupé",
		tu : "auras occupé",
		"il/elle/on" : "aura occupé",
		nous : "aurons occupé",
		vous : "aurez occupé",
		"ils/elles" : "auront occupé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie occupé",
		"que tu" : "aies occupé",
		"qu'il/elle/on" : "ait occupé",
		"que nous" : "ayons occupé",
		"que vous" : "ayez occupé",
		"qu'ils/elles" : "aient occupé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse occupé",
		"que tu" : "eusses occupé",
		"qu'il/elle/on" : "eût occupé",
		"que nous" : "eussions occupé",
		"que vous" : "eussiez occupé",
		"qu'ils/elles" : "eussent occupé"},
//conditionnel
	presentConditionmel : {
		je : "occuperais",
		tu : "occuperais",
		"il/elle/on" : "occuperait",
		nous : "occuperions",
		vous : "occuperiez",
		"ils/elles" : "occuperaient"},
	passeConditionnel : {
		je : "'aurais occupé",
		tu : "aurais occupé",
		"il/elle/on" : "aurait occupé",
		nous : "aurions occupé",
		vous : "auriez occupé",
		"ils/elles" : "auraient occupé"},
	passe2Conditionnel : {
		je : "'eusse occupé",
		tu : "eusses occupé",
		"il/elle/on" : "eût occupé",
		nous : "eussions occupé",
		vous : "eussiez occupé",
		"ils/elles" : "eussent occupé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "occupe",
		"il/elle/on" : "",
		nous : "occupons",
		vous : "occupez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie occupé",
		"il/elle/on" : "",
		nous : "ayons occupé",
		vous : "ayez occupé",
		"ils/elles" : ""},
}
const vDecider = {
//verb info
	verb : "décider",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to decide",
	//tenses
	present : {
		je : "décide",
		tu : "décides",
		"il/elle/on" : "décide",
		nous : "décidons",
		vous : "décidez",
		"ils/elles" : "décident"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "déciderai",
		tu : "décideras",
		"il/elle/on" : "décidera",
		nous : "déciderons",
		vous : "déciderez",
		"ils/elles" : "décideront"},
	//compound tenses
	passeCompose : {
		je : "'ai décidé",
		tu : "as décidé",
		"il/elle/on" : "a décidé",
		nous : "avons décidé",
		vous : "avez décidé",
		"ils/elles" : "ont décidé"},
	plusQueParfait : {
		je : "'avais décidé",
		tu : "avais décidé",
		"il/elle/on" : "avait décidé",
		nous : "avions décidé",
		vous : "aviez décidé",
		"ils/elles" : "avaient décidé"},
	passeAnterieur : {
		je : "'eus décidé",
		tu : "eus décidé",
		"il/elle/on" : "eut décidé",
		nous : "eûmes décidé",
		vous : "eûtes décidé",
		"ils/elles" : "eurent décidé"},
	futurAnterieur : {
		je : "'aurai décidé",
		tu : "auras décidé",
		"il/elle/on" : "aura décidé",
		nous : "aurons décidé",
		vous : "aurez décidé",
		"ils/elles" : "auront décidé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie décidé",
		"que tu" : "aies décidé",
		"qu'il/elle/on" : "ait décidé",
		"que nous" : "ayons décidé",
		"que vous" : "ayez décidé",
		"qu'ils/elles" : "aient décidé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse décidé",
		"que tu" : "eusses décidé",
		"qu'il/elle/on" : "eût décidé",
		"que nous" : "eussions décidé",
		"que vous" : "eussiez décidé",
		"qu'ils/elles" : "eussent décidé"},
//conditionnel
	presentConditionmel : {
		je : "déciderais",
		tu : "déciderais",
		"il/elle/on" : "déciderait",
		nous : "déciderions",
		vous : "décideriez",
		"ils/elles" : "décideraient"},
	passeConditionnel : {
		je : "'aurais décidé",
		tu : "aurais décidé",
		"il/elle/on" : "aurait décidé",
		nous : "aurions décidé",
		vous : "auriez décidé",
		"ils/elles" : "auraient décidé"},
	passe2Conditionnel : {
		je : "'eusse décidé",
		tu : "eusses décidé",
		"il/elle/on" : "eût décidé",
		nous : "eussions décidé",
		vous : "eussiez décidé",
		"ils/elles" : "eussent décidé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "décide",
		"il/elle/on" : "",
		nous : "décidons",
		vous : "décidez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie décidé",
		"il/elle/on" : "",
		nous : "ayons décidé",
		vous : "ayez décidé",
		"ils/elles" : ""},
}
const vArriver = {
//verb info
	verb : "arriver",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to arrive",
	//tenses
	present : {
		je : "arrive",
		tu : "arrives",
		"il/elle/on" : "arrive",
		nous : "arrivons",
		vous : "arrivez",
		"ils/elles" : "arrivent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "arriverai",
		tu : "arriveras",
		"il/elle/on" : "arrivera",
		nous : "arriverons",
		vous : "arriverez",
		"ils/elles" : "arriveront"},
	//compound tenses
	passeCompose : {
		je : "'ai mangé",
		tu : "as mangé",
		"il/elle/on" : "a mangé",
		nous : "avons mangé",
		vous : "avez mangé",
		"ils/elles" : "ont mangé"},
	plusQueParfait : {
		je : "'avais mangé",
		tu : "avais mangé",
		"il/elle/on" : "avait mangé",
		nous : "avions mangé",
		vous : "aviez mangé",
		"ils/elles" : "avaient mangé"},
	passeAnterieur : {
		je : "'eus mangé",
		tu : "eus mangé",
		"il/elle/on" : "eut mangé",
		nous : "eûmes mangé",
		vous : "eûtes mangé",
		"ils/elles" : "eurent mangé"},
	futurAnterieur : {
		je : "'aurai mangé",
		tu : "auras mangé",
		"il/elle/on" : "aura mangé",
		nous : "aurons mangé",
		vous : "aurez mangé",
		"ils/elles" : "auront mangé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie mangé",
		"que tu" : "aies mangé",
		"qu'il/elle/on" : "ait mangé",
		"que nous" : "ayons mangé",
		"que vous" : "ayez mangé",
		"qu'ils/elles" : "aient mangé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse mangé",
		"que tu" : "eusses mangé",
		"qu'il/elle/on" : "eût mangé",
		"que nous" : "eussions mangé",
		"que vous" : "eussiez mangé",
		"qu'ils/elles" : "eussent mangé"},
//conditionnel
	presentConditionmel : {
		je : "arriverais",
		tu : "arriverais",
		"il/elle/on" : "arriverait",
		nous : "arriverions",
		vous : "arriveriez",
		"ils/elles" : "arriveraient"},
	passeConditionnel : {
		je : "'aurais mangé",
		tu : "aurais mangé",
		"il/elle/on" : "aurait mangé",
		nous : "aurions mangé",
		vous : "auriez mangé",
		"ils/elles" : "auraient mangé"},
	passe2Conditionnel : {
		je : "'eusse mangé",
		tu : "eusses mangé",
		"il/elle/on" : "eût mangé",
		nous : "eussions mangé",
		vous : "eussiez mangé",
		"ils/elles" : "eussent mangé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "arrive",
		"il/elle/on" : "",
		nous : "arrivons",
		vous : "arrivez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois arrivé(e)",
		"il/elle/on" : "",
		nous : "soyons arrivé(e)s",
		vous : "soyez arrivé(e)(s)",
		"ils/elles" : ""},	
}
const vSembler = {
//verb info
	verb : "sembler",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to seem",
	//tenses
	present : {
		je : "semble",
		tu : "sembles",
		"il/elle/on" : "semble",
		nous : "semblons",
		vous : "semblez",
		"ils/elles" : "semblent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "mangerai",
		tu : "mangeras",
		"il/elle/on" : "mangera",
		nous : "mangerons",
		vous : "mangerez",
		"ils/elles" : "mangeront"},
	//compound tenses
	passeCompose : {
		je : "'ai mangé",
		tu : "as mangé",
		"il/elle/on" : "a mangé",
		nous : "avons mangé",
		vous : "avez mangé",
		"ils/elles" : "ont mangé"},
	plusQueParfait : {
		je : "'avais mangé",
		tu : "avais mangé",
		"il/elle/on" : "avait mangé",
		nous : "avions mangé",
		vous : "aviez mangé",
		"ils/elles" : "avaient mangé"},
	passeAnterieur : {
		je : "'eus mangé",
		tu : "eus mangé",
		"il/elle/on" : "eut mangé",
		nous : "eûmes mangé",
		vous : "eûtes mangé",
		"ils/elles" : "eurent mangé"},
	futurAnterieur : {
		je : "'aurai mangé",
		tu : "auras mangé",
		"il/elle/on" : "aura mangé",
		nous : "aurons mangé",
		vous : "aurez mangé",
		"ils/elles" : "auront mangé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie mangé",
		"que tu" : "aies mangé",
		"qu'il/elle/on" : "ait mangé",
		"que nous" : "ayons mangé",
		"que vous" : "ayez mangé",
		"qu'ils/elles" : "aient mangé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse mangé",
		"que tu" : "eusses mangé",
		"qu'il/elle/on" : "eût mangé",
		"que nous" : "eussions mangé",
		"que vous" : "eussiez mangé",
		"qu'ils/elles" : "eussent mangé"},
//conditionnel
	presentConditionmel : {
		je : "mangerais",
		tu : "mangerais",
		"il/elle/on" : "mangerait",
		nous : "mangerions",
		vous : "mangeriez",
		"ils/elles" : "mangeraient"},
	passeConditionnel : {
		je : "'aurais mangé",
		tu : "aurais mangé",
		"il/elle/on" : "aurait mangé",
		nous : "aurions mangé",
		vous : "auriez mangé",
		"ils/elles" : "auraient mangé"},
	passe2Conditionnel : {
		je : "'eusse mangé",
		tu : "eusses mangé",
		"il/elle/on" : "eût mangé",
		nous : "eussions mangé",
		vous : "eussiez mangé",
		"ils/elles" : "eussent mangé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "mange",
		"il/elle/on" : "",
		nous : "mangeons",
		vous : "mangez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie mangé",
		"il/elle/on" : "",
		nous : "ayons mangé",
		vous : "ayez mangé",
		"ils/elles" : ""},
}
const vLaisser = {
//verb info
	verb : "laisser",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to leave, to let",
	//tenses
	present : {
		je : "laisse",
		tu : "laisses",
		"il/elle/on" : "laisses",
		nous : "laissons",
		vous : "laissez",
		"ils/elles" : "laissent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "mangerai",
		tu : "mangeras",
		"il/elle/on" : "mangera",
		nous : "mangerons",
		vous : "mangerez",
		"ils/elles" : "mangeront"},
	//compound tenses
	passeCompose : {
		je : "'ai mangé",
		tu : "as mangé",
		"il/elle/on" : "a mangé",
		nous : "avons mangé",
		vous : "avez mangé",
		"ils/elles" : "ont mangé"},
	plusQueParfait : {
		je : "'avais mangé",
		tu : "avais mangé",
		"il/elle/on" : "avait mangé",
		nous : "avions mangé",
		vous : "aviez mangé",
		"ils/elles" : "avaient mangé"},
	passeAnterieur : {
		je : "'eus mangé",
		tu : "eus mangé",
		"il/elle/on" : "eut mangé",
		nous : "eûmes mangé",
		vous : "eûtes mangé",
		"ils/elles" : "eurent mangé"},
	futurAnterieur : {
		je : "'aurai mangé",
		tu : "auras mangé",
		"il/elle/on" : "aura mangé",
		nous : "aurons mangé",
		vous : "aurez mangé",
		"ils/elles" : "auront mangé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie mangé",
		"que tu" : "aies mangé",
		"qu'il/elle/on" : "ait mangé",
		"que nous" : "ayons mangé",
		"que vous" : "ayez mangé",
		"qu'ils/elles" : "aient mangé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse mangé",
		"que tu" : "eusses mangé",
		"qu'il/elle/on" : "eût mangé",
		"que nous" : "eussions mangé",
		"que vous" : "eussiez mangé",
		"qu'ils/elles" : "eussent mangé"},
//conditionnel
	presentConditionmel : {
		je : "mangerais",
		tu : "mangerais",
		"il/elle/on" : "mangerait",
		nous : "mangerions",
		vous : "mangeriez",
		"ils/elles" : "mangeraient"},
	passeConditionnel : {
		je : "'aurais mangé",
		tu : "aurais mangé",
		"il/elle/on" : "aurait mangé",
		nous : "aurions mangé",
		vous : "auriez mangé",
		"ils/elles" : "auraient mangé"},
	passe2Conditionnel : {
		je : "'eusse mangé",
		tu : "eusses mangé",
		"il/elle/on" : "eût mangé",
		nous : "eussions mangé",
		vous : "eussiez mangé",
		"ils/elles" : "eussent mangé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "mange",
		"il/elle/on" : "",
		nous : "mangeons",
		vous : "mangez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie mangé",
		"il/elle/on" : "",
		nous : "ayons mangé",
		vous : "ayez mangé",
		"ils/elles" : ""},
}
const vPresenter = {
//verb info
	verb : "présenter",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to present",
//tenses
	present : {
		je : "présente",
		tu : "présentes",
		"il/elle/on" : "présente",
		nous : "présentons",
		vous : "présentez",
		"ils/elles" : "présentent"},	
	passeSimple : {
		je : "mangeai",
		tu : "mangeas",
		"il/elle/on" : "mangea",
		nous : "mangeâmes",
		vous : "mangeâtes",
		"ils/elles" : "mangèrent"},
	imparfait : {
		je : "mangeais",
		tu : "mangeais",
		"il/elle/on" : "mangeait",
		nous : "mangions",
		vous : "mangiez",
		"ils/elles" : "mangeaient"},
	futurSimple : {
		je : "mangerai",
		tu : "mangeras",
		"il/elle/on" : "mangera",
		nous : "mangerons",
		vous : "mangerez",
		"ils/elles" : "mangeront"},
	//compound tenses
	passeCompose : {
		je : "'ai mangé",
		tu : "as mangé",
		"il/elle/on" : "a mangé",
		nous : "avons mangé",
		vous : "avez mangé",
		"ils/elles" : "ont mangé"},
	plusQueParfait : {
		je : "'avais mangé",
		tu : "avais mangé",
		"il/elle/on" : "avait mangé",
		nous : "avions mangé",
		vous : "aviez mangé",
		"ils/elles" : "avaient mangé"},
	passeAnterieur : {
		je : "'eus mangé",
		tu : "eus mangé",
		"il/elle/on" : "eut mangé",
		nous : "eûmes mangé",
		vous : "eûtes mangé",
		"ils/elles" : "eurent mangé"},
	futurAnterieur : {
		je : "'aurai mangé",
		tu : "auras mangé",
		"il/elle/on" : "aura mangé",
		nous : "aurons mangé",
		vous : "aurez mangé",
		"ils/elles" : "auront mangé"},
//subjuntive
	presentSubjonctif : {
		"que je" : "mange",
		"que tu" : "manges",
		"qu'il/elle/on" : "mange",
		"que nous" : "mangions",
		"que vous" : "mangiez",
		"qu'ils/elles" : "mangent"},
	imparfaitSubjonctif : {
		"que je" : "mangeasse",
		"que tu" : "mangeasses",
		"qu'il/elle/on" : "mangeât",
		"que nous" : "mangeassions",
		"que vous" : "mangeassiez",
		"qu'ils/elles" : "mangeassent"},
	passeSubjonctif : {
		"que je" : "'aie mangé",
		"que tu" : "aies mangé",
		"qu'il/elle/on" : "ait mangé",
		"que nous" : "ayons mangé",
		"que vous" : "ayez mangé",
		"qu'ils/elles" : "aient mangé"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse mangé",
		"que tu" : "eusses mangé",
		"qu'il/elle/on" : "eût mangé",
		"que nous" : "eussions mangé",
		"que vous" : "eussiez mangé",
		"qu'ils/elles" : "eussent mangé"},
//conditionnel
	presentConditionmel : {
		je : "mangerais",
		tu : "mangerais",
		"il/elle/on" : "mangerait",
		nous : "mangerions",
		vous : "mangeriez",
		"ils/elles" : "mangeraient"},
	passeConditionnel : {
		je : "'aurais mangé",
		tu : "aurais mangé",
		"il/elle/on" : "aurait mangé",
		nous : "aurions mangé",
		vous : "auriez mangé",
		"ils/elles" : "auraient mangé"},
	passe2Conditionnel : {
		je : "'eusse mangé",
		tu : "eusses mangé",
		"il/elle/on" : "eût mangé",
		nous : "eussions mangé",
		vous : "eussiez mangé",
		"ils/elles" : "eussent mangé"},
//imperative
	presentImperatif : {
		je: "",
		tu : "mange",
		"il/elle/on" : "",
		nous : "mangeons",
		vous : "mangez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie mangé",
		"il/elle/on" : "",
		nous : "ayons mangé",
		vous : "ayez mangé",
		"ils/elles" : ""},
}
const vAccepter = {
//verb info
	verb : "accepter",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to accept",
//tenses
present : {
	je : "accepte",
	tu : "acceptes",
	"il/elle/on" : "accepte",
	nous : "acceptons",
	vous : "acceptez",
	"ils/elles" : "acceptent" },
passeSimple : {
	je : "descendis",
	tu : "descendis",
	"il/elle/on" : "descendit",
	nous : "descendîmes",
	vous : "descendîtes",
	"ils/elles" : "descendirent"},
imparfait : {
	je : "descendais",
	tu : "descendais",
	"il/elle/on" : "descendait",
	nous : "descendions",
	vous : "descendiez",
	"ils/elles" : "descendaient"},
futurSimple : {
	je : "descendrai",
	tu : "descendras",
	"il/elle/on" : "descendra",
	nous : "descendrons",
	vous : "descendrez",
	"ils/elles" : "descendront"},
//compound tenses
passeCompose : {
	je : "suis descendu(e)",
	tu : "es descendu(e)",
	"il/elle/on" : "est descendu(e)",
	nous : "sommes descendu(e)s",
	vous : "êtes descendu(e)(s)",
	"ils/elles" : "sont descendu(e)s"},
plusQueParfait : {
	je : "'étais descendu(e)",
	tu : "étais descendu(e)",
	"il/elle/on" : "était descendu(e)",
	nous : "étions descendu(e)s",
	vous : "étiez descendu(e)(s)",
	"ils/elles" : "étaient descendu(e)s"},
passeAnterieur : {
	je : "fus descendu(e)",
	tu : "fus descendu(e)",
	"il/elle/on" : "fut descendu(e)",
	nous : "fûmes descendu(e)s",
	vous : "fûtes descendu(e)(s)",
	"ils/elles" : "furent descendu(e)s"},
futurAnterieur : {
	je : "serai descendu(e)",
	tu : "seras descendu(e)",
	"il/elle/on" : "sera descendu(e)",
	nous : "serons descendu(e)s",
	vous : "serez descendu(e)(s)",
	"ils/elles" : "seront descendu(e)s"},
//subjuntive
presentSubjonctif : {
	"que je" : "descende",
	"que tu" : "descendes",
	"qu'il/elle/on" : "descende",
	"que nous" : "descendions",
	"que vous" : "descendiez",
	"qu'ils/elles" : "descendent"},
imparfaitSubjonctif : {
	"que je" : "descendisse",
	"que tu" : "descendisses",
	"qu'il/elle/on" : "descendît",
	"que nous" : "descendissions",
	"que vous" : "descendissiez",
	"qu'ils/elles" : "descendissent"},
passeSubjonctif : {
	"que je" : "sois descendu(e)",
	"que tu" : "sois descendu(e)",
	"qu'il/elle/on" : "soit descendu(e)",
	"que nous" : "soyons descendu(e)s",
	"que vous" : "soyez descendu(e)(s)",
	"qu'ils/elles" : "soient descendu(e)s"},
plusQueParfaitSubjonctif : {
	"que je" : "fusse descendu(e)",
	"que tu" : "fusses descendu(e)",
	"qu'il/elle/on" : "fût descendu(e)",
	"que nous" : "fussions descendu(e)s",
	"que vous" : "fussiez descendu(e)(s)",
	"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
presentConditionmel : {
	je : "descendrais",
	tu : "descendrais",
	"il/elle/on" : "descendrait",
	nous : "descendrions",
	vous : "descendriez",
	"ils/elles" : "descendraient"},
passeConditionnel : {
	je : "serais descendu(e)",
	tu : "serais descendu(e)",
	"il/elle/on" : "serait descendu(e)",
	nous : "serions descendu(e)s",
	vous : "seriez descendu(e)(s)",
	"ils/elles" : "seraient descendu(e)s"},
passe2Conditionnel : {
	je : "fusse descendu(e)",
	tu : "fusses descendu(e)",
	"il/elle/on" : "fût descendu(e)",
	nous : "fussions descendu(e)s",
	vous : "fussiez descendu(e)(s)",
	"ils/elles" : "fussent descendu(e)s"},
//imperative
presentImperatif : {
	je: "",
	tu : "descends",
	"il/elle/on" : "",
	nous : "descendons",
	vous : "descendez",
	"ils/elles" : ""},
passeImperatif : {
	je: "",
	tu : "sois descendu(e)",
	"il/elle/on" : "",
	nous : "soyons descendu(e)s",
	vous : "soyez descendu(e)(s)",
	"ils/elles" : ""},

}
const vAgir = {
//verb info
	verb : "agir",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to act",
//tenses
	present : {
		je : "agis",
		tu : "agis",
		"il/elle/on" : "agit",
		nous : "agissons",
		vous : "agissez",
		"ils/elles" : "agissent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},

}
const vPoser = {
//verb info
	verb : "poser",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to pose, to put down",
	//tenses
	present : {
		je : "pose",
		tu : "poses",
		"il/elle/on" : "pose",
		nous : "posons",
		vous : "posez",
		"ils/elles" : "posent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
	//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
	
}
const vJouer = {
//verb info
	verb : "jouer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to play",
	//tenses
	present : {
		je : "joue",
		tu : "joues",
		"il/elle/on" : "joue",
		nous : "jouons",
		vous : "jouez",
		"ils/elles" : "jouent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
	//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
	
}
const vChoisir = {
//verb info
	verb : "choisir",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to choose",
//tenses
	present : {
		je : "choisis",
		tu : "choisis",
		"il/elle/on" : "choisit",
		nous : "choisissons",
		vous : "choisissez",
		"ils/elles" : "choisissent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
	//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
	
}
const vToucher = {
//verb info
	verb : "toucher",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to touch, to affect",
//tenses
	present : {
		je : "touche",
		tu : "touches",
		"il/elle/on" : "touche",
		nous : "touchons",
		vous : "touchez",
		"ils/elles" : "touchent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
	
}
const vRetrouver = {
//verb info
	verb : "retrouver",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to find, to regain",
//tenses
	present : {
		je : "retrouve",
		tu : "retrouves",
		"il/elle/on" : "retrouve",
		nous : "retrouvons",
		vous : "retrouvez",
		"ils/elles" : "retrouvent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
	
}
const vExpliquer = {
//verb info
	verb : "expliquer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to explain",
//tenses
	present : {
		je : "explique",
		tu : "expliques",
		"il/elle/on" : "explique",
		nous : "expliquons",
		vous : "expliquez",
		"ils/elles" : "expliquent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
	//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
	
}
const vConsiderer = {
	//verb info
	verb : "considérer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to consider",
//tenses
	present : {
		je : "considère",
		tu : "considères",
		"il/elle/on" : "considère",
		nous : "considérons",
		vous : "considérez",
		"ils/elles" : "considèrent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
	
}

const vGagner = {
//verb info
	verb : "gagner",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to win",
//tenses
	present : {
		je : "gagne",
		tu : "gagnes",
		"il/elle/on" : "gagne",
		nous : "gagnons",
		vous : "gagnez",
		"ils/elles" : "gagnent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vExister = {
//verb info
	verb : "exister",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to exist",
//tenses
	present : {
		je : "existe",
		tu : "existes",
		"il/elle/on" : "existe",
		nous : "existons",
		vous : "existez",
		"ils/elles" : "existent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vRefuser = {
//verb info
	verb : "refuser",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to refuse",
//tenses
	present : {
		je : "refuse",
		tu : "refuses",
		"il/elle/on" : "refuse",
		nous : "refusons",
		vous : "refusez",
		"ils/elles" : "refusent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vReussir = {
//verb info
	verb : "réussir",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to succeed",
//tenses
	present : {
		je : "réussis",
		tu : "réussis",
		"il/elle/on" : "réussit",
		nous : "réussissons",
		vous : "réussissez",
		"ils/elles" : "réussissent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vChanger = {
//verb info
	verb : "changer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to change",	
//tenses
	present : {
		je : "change",
		tu : "changes",
		"il/elle/on" : "change",
		nous : "changeons",
		vous : "changez",
		"ils/elles" : "changent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vEssayer = {
//verb info
	verb : "essayer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to try",
//tenses
	present : {
		je : "essayes, essaie",
		tu : "essayes, essaies",
		"il/elle/on" : "essayet, essaie",
		nous : "essayons",
		vous : "essayez",
		"ils/elles" : "essayent, essaient" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},	
	}
const vTravailler = {
//verb info
	verb : "travailler",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to work",	
//tenses
	present : {
		je : "travaille",
		tu : "travailles",
		"il/elle/on" : "travaille",
		nous : "travaillons",
		vous : "travaillez",
		"ils/elles" : "travaillent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vRepresenter = {
//verb info
	verb : "représenter",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to represent",	
//tenses
	present : {
		je : "réussis",
		tu : "réussis",
		"il/elle/on" : "réussit",
		nous : "réussissons",
		vous : "réussissez",
		"ils/elles" : "réussissent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vAssurer = {
//verb info
	verb : "assurer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to assure",	
//tenses
	present : {
		je : "assure",
		tu : "assures",
		"il/elle/on" : "assure",
		nous : "assurons",
		vous : "assurez",
		"ils/elles" : "assurent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vEmpecher = {
//verb info
	verb : "empêcher",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to prevent",
//tenses
	present : {
		je : "empêche",
		tu : "empêches",
		"il/elle/on" : "empêche",
		nous : "empêchons",
		vous : "empêchez",
		"ils/elles" : "empêchent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},	
}
const vMener = {
//verb info
	verb : "mener",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to lead, to conduct",	
//tenses
	present : {
		je : "mène",
		tu : "mènes",
		"il/elle/on" : "mène",
		nous : "menons",
		vous : "menez",
		"ils/elles" : "mènent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vRisquer = {
//verb info
	verb : "risquer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to risk",	
//tenses
	present : {
		je : "risque",
		tu : "risques",
		"il/elle/on" : "risque",
		nous : "risquons",
		vous : "risquez",
		"ils/elles" : "risquent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vConcerner = {
//verb info
	verb : "concerner",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to concern",	
//tenses
	present : {
		je : "concerne",
		tu : "concernes",
		"il/elle/on" : "concerne",
		nous : "concernons",
		vous : "concernez",
		"ils/elles" : "concernent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vRencontrer = {
//verb info
	verb : "rencontrer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to meet, to encounter",	
//tenses
	present : {
		je : "rencontre",
		tu : "rencontres",
		"il/elle/on" : "rencontre",
		nous : "rencontrons",
		vous : "rencontrez",
		"ils/elles" : "rencontrent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vCreer = {
	//verb info
	verb : "créer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to create",
//tenses
	present : {
		je : "réussis",
		tu : "réussis",
		"il/elle/on" : "réussit",
		nous : "réussissons",
		vous : "réussissez",
		"ils/elles" : "réussissent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},	
}
const vChercer = {
//verb info
	verb : "chercher",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to look, to seek",	
//tenses
	present : {
		je : "cherche",
		tu : "cherches",
		"il/elle/on" : "cherche",
		nous : "cherchons",
		vous : "cherchez",
		"ils/elles" : "cherchent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vEntrer = {
//verb info
	verb : "entrer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to enter",	
//tenses
	present : {
		je : "'entre",
		tu : "entres",
		"il/elle/on" : "entre",
		nous : "entrons",
		vous : "entrez",
		"ils/elles" : "entrent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vProposer = {
//verb info
	verb : "proposer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to suggest, to propose",	
//tenses
	present : {
		je : "propose",
		tu : "proposes",
		"il/elle/on" : "propose",
		nous : "proposons",
		vous : "proposez",
		"ils/elles" : "proposent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vApporter = {
//verb info
	verb : "apporter",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to cause, to bring",	
//tenses
	present : {
		je : "'apporte",
		tu : "apportes",
		"il/elle/on" : "apporte",
		nous : "apportons",
		vous : "apportez",
		"ils/elles" : "apportent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vUtiliser = {
//verb info
	verb : "utiliser",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to use",
//tenses
	present : {
		je : "'utilise",
		tu : "utilises",
		"il/elle/on" : "utilise",
		nous : "utilisons",
		vous : "utilisez",
		"ils/elles" : "utilisent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},	
}
const vTenter = {
//verb info
	verb : "tenter",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to tempt",	
//tenses
	present : {
		je : "tente",
		tu : "tentes",
		"il/elle/on" : "tente",
		nous : "tentons",
		vous : "tentez",
		"ils/elles" : "tentent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vImporter = {
//verb info
	verb : "importer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to matter",	
//tenses
	present : {
		je : "'importe",
		tu : "importes",
		"il/elle/on" : "importe",
		nous : "importons",
		vous : "importez",
		"ils/elles" : "importent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vAjouter = {
//verb info
	verb : "ajouter",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to add",
//tenses
	present : {
		je : "'ajoute",
		tu : "ajoutes",
		"il/elle/on" : "ajoute",
		nous : "ajoutons",
		vous : "ajoutez",
		"ils/elles" : "ajoutent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},	
}
const vPreparer= {
//verb info
	verb : "préparer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to prepare",	
//tenses
	present : {
		je : "prépare",
		tu : "prépares",
		"il/elle/on" : "prépare",
		nous : "préparons",
		vous : "préparez",
		"ils/elles" : "préparent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vRelever = {
//verb info
	verb : "relever",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to raise, to pick up",	
//tenses
	present : {
		je : "relevewrong",
		tu : "releves",
		"il/elle/on" : "releve",
		nous : "relevons",
		vous : "relevez",
		"ils/elles" : "relevent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
const vTirer = {
//verb info
	verb : "tirer",
	regularity : "regular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to pull, to print, to fire",	
//tenses
	present : {
		je : "tire",
		tu : "tires",
		"il/elle/on" : "tire",
		nous : "tirons",
		vous : "tirez",
		"ils/elles" : "tirent" },
	passeSimple : {
		je : "descendis",
		tu : "descendis",
		"il/elle/on" : "descendit",
		nous : "descendîmes",
		vous : "descendîtes",
		"ils/elles" : "descendirent"},
	imparfait : {
		je : "descendais",
		tu : "descendais",
		"il/elle/on" : "descendait",
		nous : "descendions",
		vous : "descendiez",
		"ils/elles" : "descendaient"},
	futurSimple : {
		je : "descendrai",
		tu : "descendras",
		"il/elle/on" : "descendra",
		nous : "descendrons",
		vous : "descendrez",
		"ils/elles" : "descendront"},
//compound tenses
	passeCompose : {
		je : "suis descendu(e)",
		tu : "es descendu(e)",
		"il/elle/on" : "est descendu(e)",
		nous : "sommes descendu(e)s",
		vous : "êtes descendu(e)(s)",
		"ils/elles" : "sont descendu(e)s"},
	plusQueParfait : {
		je : "'étais descendu(e)",
		tu : "étais descendu(e)",
		"il/elle/on" : "était descendu(e)",
		nous : "étions descendu(e)s",
		vous : "étiez descendu(e)(s)",
		"ils/elles" : "étaient descendu(e)s"},
	passeAnterieur : {
		je : "fus descendu(e)",
		tu : "fus descendu(e)",
		"il/elle/on" : "fut descendu(e)",
		nous : "fûmes descendu(e)s",
		vous : "fûtes descendu(e)(s)",
		"ils/elles" : "furent descendu(e)s"},
	futurAnterieur : {
		je : "serai descendu(e)",
		tu : "seras descendu(e)",
		"il/elle/on" : "sera descendu(e)",
		nous : "serons descendu(e)s",
		vous : "serez descendu(e)(s)",
		"ils/elles" : "seront descendu(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "descende",
		"que tu" : "descendes",
		"qu'il/elle/on" : "descende",
		"que nous" : "descendions",
		"que vous" : "descendiez",
		"qu'ils/elles" : "descendent"},
	imparfaitSubjonctif : {
		"que je" : "descendisse",
		"que tu" : "descendisses",
		"qu'il/elle/on" : "descendît",
		"que nous" : "descendissions",
		"que vous" : "descendissiez",
		"qu'ils/elles" : "descendissent"},
	passeSubjonctif : {
		"que je" : "sois descendu(e)",
		"que tu" : "sois descendu(e)",
		"qu'il/elle/on" : "soit descendu(e)",
		"que nous" : "soyons descendu(e)s",
		"que vous" : "soyez descendu(e)(s)",
		"qu'ils/elles" : "soient descendu(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse descendu(e)",
		"que tu" : "fusses descendu(e)",
		"qu'il/elle/on" : "fût descendu(e)",
		"que nous" : "fussions descendu(e)s",
		"que vous" : "fussiez descendu(e)(s)",
		"qu'ils/elles" : "fussent descendu(e)s"},
//conditionnel
	presentConditionmel : {
		je : "descendrais",
		tu : "descendrais",
		"il/elle/on" : "descendrait",
		nous : "descendrions",
		vous : "descendriez",
		"ils/elles" : "descendraient"},
	passeConditionnel : {
		je : "serais descendu(e)",
		tu : "serais descendu(e)",
		"il/elle/on" : "serait descendu(e)",
		nous : "serions descendu(e)s",
		vous : "seriez descendu(e)(s)",
		"ils/elles" : "seraient descendu(e)s"},
	passe2Conditionnel : {
		je : "fusse descendu(e)",
		tu : "fusses descendu(e)",
		"il/elle/on" : "fût descendu(e)",
		nous : "fussions descendu(e)s",
		vous : "fussiez descendu(e)(s)",
		"ils/elles" : "fussent descendu(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "descends",
		"il/elle/on" : "",
		nous : "descendons",
		vous : "descendez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois descendu(e)",
		"il/elle/on" : "",
		nous : "soyons descendu(e)s",
		vous : "soyez descendu(e)(s)",
		"ils/elles" : ""},
}
//irregular verbs

const vEtre = {
//verb info
	verb: "être",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "irregular",
	definition : "to be",
//tenses
	present : {
		je : "suis",
		tu : "es",
		"il/elle/on" : "est",
		nous : "sommes",
		vous : "êtes",
		"ils/elles" : "sont"},
	passeSimple : {
		je : "fus",
		tu : "fus",
		"il/elle/on" : "fut",
		nous : "fûmes",
		vous : "fûtes",
		"ils/elles" : "furent"},
imparfait : {
		je : "étais",
		tu : "étais",
		"il/elle/on" : "était",
		nous : "étions",
		vous : "étiez",
		"ils/elles" : "étaient"},
	futurSimple : {
		je : "serai",
		tu : "seras",
		"il/elle/on" : "sera",
		nous : "serons",
		vous : "serez",
		"ils/elles" : "seront"},
	//compound tenses
	passeCompose : {
		je : "'ai été",
		tu : "as été",
		"il/elle/on" : "a été",
		nous : "avons été",
		vous : "avez été",
		"ils/elles" : "ont été"},
	plusQueParfait : {
		je : "'avais été",
		tu : "avais été",
		"il/elle/on" : "avait été",
		nous : "avions été",
		vous : "aviez été",
		"ils/elles" : "avaient été"},
	passeAnterieur : {
		je : "'eus été",
		tu : "eus été",
		"il/elle/on" : "eut été",
		nous : "eûmes été",
		vous : "eûtes été",
		"ils/elles" : "eurent été"},
	futurAnterieur : {
		je : "'aurai été",
		tu : "auras été",
		"il/elle/on" : "aura été",
		nous : "aurons été",
		vous : "aurez été",
		"ils/elles" : "auront été"},
//subjuntive
	presentSubjonctif : {
		"que je" : "sois",
		"que tu" : "sois",
		"qu'il/elle/on" : "soit",
		"que nous" : "soyons",
		"que vous" : "soyez",
		"qu'ils/elles" : "soient"},
	imparfaitSubjonctif : {
		"que je" : "fusse",
		"que tu" : "fusses",
		"qu'il/elle/on" : "fût",
		"que nous" : "fussions",
		"que vous" : "fussiez",
		"qu'ils/elles" : "fussent"},
	passeSubjonctif : {
		"que je" : "'aie été",
		"que tu" : "aies été",
		"qu'il/elle/on" : "ait été",
		"que nous" : "ayons été",
		"que vous" : "ayez été",
		"qu'ils/elles" : "aient été"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse été",
		"que tu" : "eusses été",
		"qu'il/elle/on" : "eût été",
		"que nous" : "eussions été",
		"que vous" : "eussiez été",
		"qu'ils/elles" : "eussent été"},
//conditionnel
	presentConditionmel : {
		je : "serais",
		tu : "serais",
		"il/elle/on" : "serait",
		nous : "serions",
		vous : "seriez",
		"ils/elles" : "seraient"},
	passeConditionnel : {
		je : "'aurais été",
		tu : "aurais été",
		"il/elle/on" : "aurait été",
		nous : "aurions été",
		vous : "auriez été",
		"ils/elles" : "auraient été"},
	passe2Conditionnel : {
		je : "'eusse été",
		tu : "eusses été",
		"il/elle/on" : "eût été",
		nous : "eussions été",
		vous : "eussiez été",
		"ils/elles" : "eussent été"},
//imperative
	presentImperatif : {
		je: "",
		tu : "sois",
		"il/elle/on" : "",
		nous : "soyons",
		vous : "soyez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie été",
		"il/elle/on" : "",
		nous : "ayons été",
		vous : "ayez été",
		"ils/elles" : ""},
}

const vAvoir = {
//verb info
	verb: "avoir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-oir",
	base : "irregular",
	definition : "to have",
//tenses
	present: {
		je : "'ai",
		tu : "as",
		"il/elle/on" : "a",
		nous : "avons",
		vous : "avez",
		"ils/elles" : "ont"},
	passeSimple : {
		je : "eus",
		tu : "eus",
		"il/elle/on" : "eut",
		nous : "eûmes",
		vous : "eûtes",
		"ils/elles" : "eurent"},
imparfait : {
		je : "avais",
		tu : "avais",
		"il/elle/on" : "avait",
		nous : "avions",
		vous : "aviez",
		"ils/elles" : "avaient"},
	futurSimple : {
		je : "aurai",
		tu : "auras",
		"il/elle/on" : "aura",
		nous : "aurons",
		vous : "aurez",
		"ils/elles" : "auront"},
	//compound tenses
	passeCompose : {
		je : "'ai eu",
		tu : "as eu",
		"il/elle/on" : "a eu",
		nous : "avons eu",
		vous : "avez eu",
		"ils/elles" : "ont eu"},
	plusQueParfait : {
		je : "'avais eu",
		tu : "avais eu",
		"il/elle/on" : "avait eu",
		nous : "avions eu",
		vous : "aviez eu",
		"ils/elles" : "avaient eu"},
	passeAnterieur : {
		je : "'eus eu",
		tu : "eus eu",
		"il/elle/on" : "eut eu",
		nous : "eûmes eu",
		vous : "eûtes eu",
		"ils/elles" : "eurent eu"},
	futurAnterieur : {
		je : "'aurai eu",
		tu : "auras eu",
		"il/elle/on" : "aura eu",
		nous : "aurons eu",
		vous : "aurez eu",
		"ils/elles" : "auront eu"},
//subjuntive
	presentSubjonctif : {
		"que je" : "'aie",
		"que tu" : "aies",
		"qu'il/elle/on" : "ait",
		"que nous" : "ayons",
		"que vous" : "ayez",
		"qu'ils/elles" : "aient"},
	imparfaitSubjonctif : {
		"que je" : "eusse",
		"que tu" : "eusses",
		"qu'il/elle/on" : "eût",
		"que nous" : "eussions",
		"que vous" : "eussiez",
		"qu'ils/elles" : "eussent"},
	passeSubjonctif : {
		"que je" : "'aie eu",
		"que tu" : "aies eu",
		"qu'il/elle/on" : "ait eu",
		"que nous" : "ayons eu",
		"que vous" : "ayez eu",
		"qu'ils/elles" : "aient eu"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse eu",
		"que tu" : "eusses eu",
		"qu'il/elle/on" : "eût eu",
		"que nous" : "eussions eu",
		"que vous" : "eussiez eu",
		"qu'ils/elles" : "eussent eu"},
//conditionnel
	presentConditionmel : {
		je : "aurais",
		tu : "aurais",
		"il/elle/on" : "aurait",
		nous : "aurions",
		vous : "auriez",
		"ils/elles" : "auraient"},
	passeConditionnel : {
		je : "'aurais eu",
		tu : "aurais eu",
		"il/elle/on" : "aurait eu",
		nous : "aurions eu",
		vous : "auriez eu",
		"ils/elles" : "auraient eu"},
	passe2Conditionnel : {
		je : "'eusse eu",
		tu : "eusses eu",
		"il/elle/on" : "eût eu",
		nous : "eussions eu",
		vous : "eussiez eu",
		"ils/elles" : "eussent eu"},
//imperative
	presentImperatif : {
		je: "",
		tu : "aie",
		"il/elle/on" : "",
		nous : "ayons",
		vous : "ayez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie eu",
		"il/elle/on" : "",
		nous : "ayons eu",
		vous : "ayez eu",
		"ils/elles" : ""},
}

const vAller = {
//verb info
	verb: "aller",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "irregular",
	definition : "to go",
//tenses
	present : {
		je : "vais",
		tu : "vas",
		"il/elle/on" : "va",
		nous : "allons",
		vous : "allez",
		"ils/elles" : "vont"},
	passeSimple : {
		je : "allai",
		tu : "allas",
		"il/elle/on" : "alla",
		nous : "allâmes",
		vous : "allâtes",
		"ils/elles" : "allèrent"},
	imparfait : {
		je : "allais",
		tu : "allais",
		"il/elle/on" : "allait",
		nous : "allions",
		vous : "alliez",
		"ils/elles" : "allaient"},
	futurSimple : {
		je : "irai",
		tu : "iras",
		"il/elle/on" : "ira",
		nous : "irons",
		vous : "irez",
		"ils/elles" : "iront"},
	//compound tenses
	passeCompose : {
		je : "suis allé(e)",
		tu : "es allé(e)",
		"il/elle/on" : "est allé(e)",
		nous : "sommes allé(e)s",
		vous : "êtes allé(e)(s)",
		"ils/elles" : "sont allé(e)s"},
	plusQueParfait : {
		je : "'étais allé(e)",
		tu : "étais allé(e)",
		"il/elle/on" : "était allé(e)",
		nous : "étions allé(e)s",
		vous : "étiez allé(e)(s)",
		"ils/elles" : "étaient allé(e)s"},
	passeAnterieur : {
		je : "fus allé(e)",
		tu : "fus allé(e)",
		"il/elle/on" : "fut allé(e)",
		nous : "fûmes allé(e)s",
		vous : "fûtes allé(e)(s)",
		"ils/elles" : "furent allé(e)s"},
	futurAnterieur : {
		je : "serai allé(e)",
		tu : "seras allé(e)",
		"il/elle/on" : "sera allé(e)",
		nous : "serons allé(e)s",
		vous : "serez allé(e)(s)",
		"ils/elles" : "seront allé(e)s"},
//subjuntive
	presentSubjonctif : {
		"que je" : "'aille",
		"que tu" : "ailles",
		"qu'il/elle/on" : "aille",
		"que nous" : "allions",
		"que vous" : "alliez",
		"qu'ils/elles" : "aillent"},
	imparfaitSubjonctif : {
		"que je" : "allasse",
		"que tu" : "allasses",
		"qu'il/elle/on" : "allât",
		"que nous" : "allassions",
		"que vous" : "allassiez",
		"qu'ils/elles" : "allassent"},
	passeSubjonctif : {
		"que je" : "sois allé(e)",
		"que tu" : "sois allé(e)",
		"qu'il/elle/on" : "soit allé(e)",
		"que nous" : "soyons allé(e)s",
		"que vous" : "soyez allé(e)(s)",
		"qu'ils/elles" : "soient allé(e)s"},
	plusQueParfaitSubjonctif : {
		"que je" : "fusse allé(e)",
		"que tu" : "fusses allé(e)",
		"qu'il/elle/on" : "fût allé(e)",
		"que nous" : "fussions allé(e)s",
		"que vous" : "fussiez allé(e)(s)",
		"qu'ils/elles" : "fussent allé(e)s"},	
//conditionnel
	presentConditionmel : {
		je : "irais",
		tu : "irais",
		"il/elle/on" : "irait",
		nous : "irions",
		vous : "iriez",
		"ils/elles" : "iraient"},
	passeConditionnel : {
		je : "serais allé(e)",
		tu : "serais allé(e)",
		"il/elle/on" : "serait allé(e)",
		nous : "serions allé(e)s",
		vous : "seriez allé(e)(s)",
		"ils/elles" : "seraient allé(e)s"},
	passe2Conditionnel : {
		je : "fusse allé(e)",
		tu : "fusses allé(e)",
		"il/elle/on" : "fût allé(e)",
		nous : "fussions allé(e)s",
		vous : "fussiez allé(e)(s)",
		"ils/elles" : "fussent allé(e)s"},
//imperative
	presentImperatif : {
		je: "",
		tu : "va",
		"il/elle/on" : "",
		nous : "allons",
		vous : "allez",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "sois allé(e)",
		"il/elle/on" : "",
		nous : "soyons allé(e)s",
		vous : "soyez allé(e)(s)",
		"ils/elles" : ""},
}
const vPrendre = {
	//verb info
		verb: "prendre",
		regularity : "irregular",
		reflexivity : "not reflexive",
		ending : "-re",
		base : "three bases",
		definition : "to take",
	//tenses
		present : {
			je : "prends",
			tu : "prends",
			"il/elle/on" : "prend",
			nous : "prenons",
			vous : "prenez",
			"ils/elles" : "prennent"},
		passeSimple : {
			je : "pris",
			tu : "pris",
			"il/elle/on" : "prit",
			nous : "prîmes",
			vous : "prîtes",
			"ils/elles" : "prirent"},
	imparfait : {
			je : "prenais",
			tu : "prenais",
			"il/elle/on" : "prenait",
			nous : "prenions",
			vous : "preniez",
			"ils/elles" : "prenaient"},
		futurSimple : {
			je : "prendrai",
			tu : "prendras",
			"il/elle/on" : "prendra",
			nous : "prendrons",
			vous : "prendrez",
			"ils/elles" : "prendront"},
		//compound tenses
		passeCompose : {
			je : "'ai pris",
			tu : "as pris",
			"il/elle/on" : "a pris",
			nous : "avons pris",
			vous : "avez pris",
			"ils/elles" : "ont pris"},
		plusQueParfait : {
			je : "'avais pris",
			tu : "avais pris",
			"il/elle/on" : "avait pris",
			nous : "avions pris",
			vous : "aviez pris",
			"ils/elles" : "avaient pris"},
		passeAnterieur : {
			je : "'eus pris",
			tu : "eus pris",
			"il/elle/on" : "eut pris",
			nous : "eûmes pris",
			vous : "eûtes pris",
			"ils/elles" : "eurent pris"},
		futurAnterieur : {
			je : "'aurai pris",
			tu : "auras pris",
			"il/elle/on" : "aura pris",
			nous : "aurons pris",
			vous : "aurez pris",
			"ils/elles" : "auront pris"},
	//subjuntive
		presentSubjonctif : {
			"que je" : "prenne",
			"que tu" : "prennes",
			"qu'il/elle/on" : "prenne",
			"que nous" : "prenions",
			"que vous" : "preniez",
			"qu'ils/elles" : "prennent"},
		imparfaitSubjonctif : {
			"que je" : "prisse",
			"que tu" : "prisses",
			"qu'il/elle/on" : "prît",
			"que nous" : "prissions",
			"que vous" : "prissiez",
			"qu'ils/elles" : "prissent"},
		passeSubjonctif : {
			"que je" : "'aie pris",
			"que tu" : "aies pris",
			"qu'il/elle/on" : "ait pris",
			"que nous" : "ayons pris",
			"que vous" : "ayez pris",
			"qu'ils/elles" : "aient pris"},
		plusQueParfaitSubjonctif : {
			"que je" : "'eusse pris",
			"que tu" : "eusses pris",
			"qu'il/elle/on" : "eût pris",
			"que nous" : "eussions pris",
			"que vous" : "eussiez pris",
			"qu'ils/elles" : "eussent pris"},
	//conditionnel
		presentConditionmel : {
			je : "prendrais",
			tu : "prendrais",
			"il/elle/on" : "prendrait",
			nous : "prendrions",
			vous : "prendriez",
			"ils/elles" : "prendraient"},
		passeConditionnel : {
			je : "'aurais pris",
			tu : "aurais pris",
			"il/elle/on" : "aurait pris",
			nous : "aurions pris",
			vous : "auriez pris",
			"ils/elles" : "auraient pris"},
		passe2Conditionnel : {
			je : "'eusse pris",
			tu : "eusses pris",
			"il/elle/on" : "eût pris",
			nous : "eussions pris",
			vous : "eussiez pris",
			"ils/elles" : "eussent pris"},
	//imperative
		presentImperatif : {
			je: "",
			tu : "prends",
			"il/elle/on" : "",
			nous : "prenons",
			vous : "prenez",
			"ils/elles" : ""},
		passeImperatif : {
			je: "",
			tu : "aie pris",
			"il/elle/on" : "",
			nous : "ayons pris",
			vous : "ayez pris",
			"ils/elles" : ""},
	}
const vFaire = {
//verb info
	verb: "faire",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "irregular",
	definition : "to do",
//tenses
	present : {
		je : "fais",
		tu : "fais",
		"il/elle/on" : "fait",
		nous : "faitons",
		vous : "faites",
		"ils/elles" : "font"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
	
}
const vPouvoir = {
//verb info
	verb: "pouvoir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-oir",
	base : "",
	definition : "to be able",
	//tenses
	present : {
		je : "peux",
		tu : "peux",
		"il/elle/on" : "peut",
		nous : "pouvons",
		vous : "pouvez",
		"ils/elles" : "peuvent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vMettre = {
//verb info
	verb: "mettre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to put",	
	//tenses
	present : {
		je : "mets",
		tu : "mets",
		"il/elle/on" : "met",
		nous : "mettons",
		vous : "mettez",
		"ils/elles" : "mettent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vDire = {
//verb info
	verb: "dire",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to say",
	//tenses
	present : {
		je : "dis",
		tu : "dis",
		"il/elle/on" : "dit",
		nous : "disons",
		vous : "dites",
		"ils/elles" : "dissent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vDevoir = {
	//verb info
	verb: "devoir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-oir",
	base : "",
	definition : "to have to",
	//tenses
	present : {
		je : "dois",
		tu : "dois",
		"il/elle/on" : "doit",
		nous : "devons",
		vous : "devez",
		"ils/elles" : "doivent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vVouloir = {
//verb info
	verb: "vouloir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-oir",
	base : "",
	definition : "to want",
	//tenses
	present : {
		je : "veux",
		tu : "veux",
		"il/elle/on" : "veut",
		nous : "voulons",
		vous : "voulez",
		"ils/elles" : "veulent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vSavoir = {
//verb info
	verb: "savoir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-oir",
	base : "",
	definition : "to know",
	//tenses
	present : {
		je : "sais",
		tu : "sais",
		"il/elle/on" : "sait",
		nous : "savons",
		vous : "savez",
		"ils/elles" : "savent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vFalloir = {
//verb info
	verb: "falloir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-oir",
	base : "",
	definition : "to have to",
	//tenses
	present : {
		je : "",
		tu : "",
		"il/elle/on" : "faut",
		nous : "",
		vous : "",
		"ils/elles" : ""},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vVoir = {
//verb info
	verb: "voir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-oir",
	base : "",
	definition : "to see",
	//tenses
	present : {
		je : "vois",
		tu : "vois",
		"il/elle/on" : "voit",
		nous : "voyons",
		vous : "voyez",
		"ils/elles" : "voient"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vRendre = {
//verb info
	verb: "rendre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to return something",
	//tenses
	present : {
		je : "rends",
		tu : "rends",
		"il/elle/on" : "rend",
		nous : "rendons",
		vous : "rendez",
		"ils/elles" : "rendent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vVenir = {
//verb info
	verb: "venir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to come",
	//tenses
	present : {
		je : "viens",
		tu : "viens",
		"il/elle/on" : "vien",
		nous : "venons",
		vous : "venez",
		"ils/elles" : "viennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vComprendre = {
//verb info
	verb: "comprendre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to comprehend",
	//tenses
	present : {
		je : "comprends",
		tu : "comprends",
		"il/elle/on" : "comprend",
		nous : "comprenons",
		vous : "comprenez",
		"ils/elles" : "comprennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vTenir = {
//verb info
	verb: "tenir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to keep, to hold",
	//tenses
	present : {
		je : "tiens",
		tu : "tiens",
		"il/elle/on" : "tient",
		nous : "tenons",
		vous : "tenez",
		"ils/elles" : "tiennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vSuivre = {
//verb info
	verb: "suivre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to follow, to pay attention",
	//tenses
	present : {
		je : "suis",
		tu : "suis",
		"il/elle/on" : "suit",
		nous : "suivons",
		vous : "suivez",
		"ils/elles" : "suivent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vConnaitre = {
//verb info
	verb: "connaître",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to know, to be acquainted with",
	//tenses
	present : {
		je : "connais",
		tu : "connais",
		"il/elle/on" : "connaît",
		nous : "connaissons",
		vous : "connaissez",
		"ils/elles" : "connaissent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vCroire = {
//verb info
	verb: "croire",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to believe",
	//tenses
	present : {
		je : "crois",
		tu : "crois",
		"il/elle/on" : "croit",
		nous : "croyons",
		vous : "croyez",
		"ils/elles" : "croient"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vEntendre = {
//verb info
	verb: "entendre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to understand, to hear",
	//tenses
	present : {
		je : "entends",
		tu : "entends",
		"il/elle/on" : "entend",
		nous : "entendons",
		vous : "entendez",
		"ils/elles" : "entendent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vAttendre = {
//verb info
	verb: "attendre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to wait, to expect",
	//tenses
	present : {
		je : "attends",
		tu : "attends",
		"il/elle/on" : "attends",
		nous : "attendons",
		vous : "attendez",
		"ils/elles" : "attendent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vRemettre = {
//verb info
	verb: "remettre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to replace, to put back",
	//tenses
	present : {
		je : "remets",
		tu : "remets",
		"il/elle/on" : "remet",
		nous : "remettons",
		vous : "remettez",
		"ils/elles" : "remettent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vAppeler = {
//verb info
	verb: "appeler",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to call",
//tenses
	present : {
		je : "appelle",
		tu : "appelles",
		"il/elle/on" : "appelle",
		nous : "appelons",
		vous : "appelez",
		"ils/elles" : "appellent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vPermettre = {
//verb info
	verb: "permettre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to permit",
//tenses
	present : {
		je : "permets",
		tu : "permets",
		"il/elle/on" : "permet",
		nous : "permettons",
		vous : "permettez",
		"ils/elles" : "permettent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vDevenir = {
//verb info
	verb: "devenir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to become",
//tenses
	present : {
		je : "deviens",
		tu : "deviens",
		"il/elle/on" : "devient",
		nous : "devenons",
		vous : "devenez",
		"ils/elles" : "deviennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vPartir = {
//verb info
	verb: "partir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to leave",
//tenses
	present : {
		je : "pars",
		tu : "pars",
		"il/elle/on" : "part",
		nous : "partons",
		vous : "partez",
		"ils/elles" : "partent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vServir = {
//verb info
	verb: "servir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to serve",
//tenses
	present : {
		je : "sers",
		tu : "sers",
		"il/elle/on" : "sert",
		nous : "servons",
		vous : "servez",
		"ils/elles" : "servent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vRevenir = {
//verb info
	verb: "revenir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to return",
//tenses
	present : {
		je : "reviens",
		tu : "reviens",
		"il/elle/on" : "revient",
		nous : "revenons",
		vous : "revenez",
		"ils/elles" : "reviennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vRecevoir = {
//verb info
	verb: "recevoir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-oir",
	base : "",
	definition : "to receive",
//tenses
	present : {
		je : "reçois",
		tu : "reçois",
		"il/elle/on" : "reçoit",
		nous : "recevons",
		vous : "recevez",
		"ils/elles" : "reçoivent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vRepondre = {
//verb info
	verb: "répondre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to answer",
//tenses
	present : {
		je : "réponds",
		tu : "réponds",
		"il/elle/on" : "répond",
		nous : "répondons",
		vous : "répondez",
		"ils/elles" : "répondent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vVivre = {
//verb info
	verb: "vivre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to live",
//tenses
	present : {
		je : "vis",
		tu : "vis",
		"il/elle/on" : "vit",
		nous : "vivons",
		vous : "vivez",
		"ils/elles" : "vivent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vRappeler = {
//verb info
	verb: "rappeler",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-er",
	base : "",
	definition : "to call back, to remind",
//tenses
	present : {
		je : "rappelle",
		tu : "rappelles",
		"il/elle/on" : "rappelle",
		nous : "rappelons",
		vous : "rappelez",
		"ils/elles" : "rappellent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vReconnaitre ={
//verb info
	verb : "reconnaître",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to recognize, to acknowledge",
//tenses
	present : {
		je : "reconnais",
		tu : "reconnais",
		"il/elle/on" : "reconnaît",
		nous : "reconnaissons",
		vous : "reconnaissez",
		"ils/elles" : "reconnaissent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vPerdre = {
//verb info
	verb : "perdre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to lose",
//tenses
	present : {
		je : "perds",
		tu : "perds",
		"il/elle/on" : "perd",
		nous : "perdons",
		vous : "perdez",
		"ils/elles" : "perdent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}

const vOuvrir = {
//verb info
	verb : "ouvrir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to open",
//tenses
	present : {
		je : "ouvre",
		tu : "ouvres",
		"il/elle/on" : "ouvre",
		nous : "ouvrons",
		vous : "ouvrez",
		"ils/elles" : "ouvrent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
	}
const vLire = {
//verb info
	verb : "lire",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to read",
//tenses
	present : {
		je : "lis",
		tu : "lis",
		"il/elle/on" : "lit",
		nous : "lissons",
		vous : "lisez",
		"ils/elles" : "lisent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}

const vSortir = {
//verb info
	verb : "sortir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to go out, to exit",	
//tenses
	present : {
		je : "sors",
		tu : "sors",
		"il/elle/on" : "sort",
		nous : "sortons",
		vous : "sortez",
		"ils/elles" : "sortent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vReprendre = {
//verb info
	verb : "reprendre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to resume, to take back",
//tenses
	present : {
		je : "reprends",
		tu : "reprends",
		"il/elle/on" : "reprend",
		nous : "reprenons",
		vous : "reprenez",
		"ils/elles" : "reprennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vAppartenir = {
//verb info
	verb : "appartenir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to belong",
//tenses
	present : {
		je : "appartiens",
		tu : "appartiens",
		"il/elle/on" : "appartient",
		nous : "appartenons",
		vous : "appartenez",
		"ils/elles" : "appartiennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vApprendre = {
//verb info
	verb : "apprendre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to learn",
//tenses
	present : {
		je : "apprends",
		tu : "apprends",
		"il/elle/on" : "apprend",
		nous : "apprenons",
		vous : "apprenez",
		"ils/elles" : "apprennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vObtenir = {
//verb info
	verb : "obtenir",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-ir",
	base : "",
	definition : "to obtain",
//tenses
	present : {
		je : "obtiens",
		tu : "obtiens",
		"il/elle/on" : "obtient",
		nous : "obtenons",
		vous : "obtenez",
		"ils/elles" : "obtiennent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vAtteindre = {
//verb info
	verb : "atteindre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to attain, to reach",
//tenses
	present : {
		je : "atteins",
		tu : "atteins",
		"il/elle/on" : "atteint",
		nous : "atteignons",
		vous : "atteignez",
		"ils/elles" : "atteignent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vProduire = {
//verb info
	verb : "produire",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to produce",
//tenses
	present : {
		je : "produis",
		tu : "produis",
		"il/elle/on" : "produit",
		nous : "produisons",
		vous : "produisez",
		"ils/elles" : "produisent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vEcrire = {
//verb info
	verb : "écrire",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to write",
//tenses
	present : {
		je : "'écris",
		tu : "écris",
		"il/elle/on" : "écrit",
		nous : "écrivons",
		vous : "écrivez",
		"ils/elles" : "écrivent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
	//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
const vDefendre = {
//verb info
	verb : "défendre",
	regularity : "irregular",
	reflexivity : "not reflexive",
	ending : "-re",
	base : "",
	definition : "to defend",
//tenses
	present : {
		je : "défends",
		tu : "défends",
		"il/elle/on" : "défend",
		nous : "défendons",
		vous : "défendez",
		"ils/elles" : "défendent"},
	passeSimple : {
		je : "fis",
		tu : "fis",
		"il/elle/on" : "fit",
		nous : "fîmes",
		vous : "fîtes",
		"ils/elles" : "firent"},
	imparfait : {
		je : "faisais",
		tu : "faisais",
		"il/elle/on" : "faisait",
		nous : "faisions",
		vous : "faisiez",
		"ils/elles" : "faisaient"},
	futurSimple : {
		je : "ferai",
		tu : "feras",
		"il/elle/on" : "fera",
		nous : "ferons",
		vous : "ferez",
		"ils/elles" : "feront"},
//compound tenses
	passeCompose : {
		je : "'ai fait",
		tu : "as fait",
		"il/elle/on" : "a fait",
		nous : "avons fait",
		vous : "avez fait",
		"ils/elles" : "ont fait"},
	plusQueParfait : {
		je : "'avais fait",
		tu : "avais fait",
		"il/elle/on" : "avait fait",
		nous : "avions fait",
		vous : "aviez fait",
		"ils/elles" : "avaient fait"},
	passeAnterieur : {
		je : "'eus fait",
		tu : "eus fait",
		"il/elle/on" : "eut fait",
		nous : "eûmes fait",
		vous : "eûtes fait",
		"ils/elles" : "eurent fait"},
	futurAnterieur : {
		je : "'aurai fait",
		tu : "auras fait",
		"il/elle/on" : "aura fait",
		nous : "aurons fait",
		vous : "aurez fait",
		"ils/elles" : "auront fait"},
//subjuntive
	presentSubjonctif : {
		"que je" : "fasse",
		"que tu" : "fasses",
		"qu'il/elle/on" : "fasse",
		"que nous" : "fassions",
		"que vous" : "fassiez",
		"qu'ils/elles" : "fassent"},
	imparfaitSubjonctif : {
		"que je" : "fisse",
		"que tu" : "fisses",
		"qu'il/elle/on" : "fît",
		"que nous" : "fissions",
		"que vous" : "fissiez",
		"qu'ils/elles" : "fissent"},
	passeSubjonctif : {
		"que je" : "'aie fait",
		"que tu" : "aies fait",
		"qu'il/elle/on" : "ait fait",
		"que nous" : "ayons fait",
		"que vous" : "ayez fait",
		"qu'ils/elles" : "aient fait"},
	plusQueParfaitSubjonctif : {
		"que je" : "'eusse fait",
		"que tu" : "eusses fait",
		"qu'il/elle/on" : "eût fait",
		"que nous" : "eussions fait",
		"que vous" : "eussiez fait",
		"qu'ils/elles" : "eussent fait"},
//conditionnel
	presentConditionmel : {
		je : "ferais",
		tu : "ferais",
		"il/elle/on" : "ferait",
		nous : "ferions",
		vous : "feriez",
		"ils/elles" : "feraient"},
	passeConditionnel : {
		je : "'aurais fait",
		tu : "aurais fait",
		"il/elle/on" : "aurait fait",
		nous : "aurions fait",
		vous : "auriez fait",
		"ils/elles" : "auraient fait"},
	passe2Conditionnel : {
		je : "'eusse fait",
		tu : "eusses fait",
		"il/elle/on" : "eût fait",
		nous : "eussions fait",
		vous : "eussiez fait",
		"ils/elles" : "eussent fait"},
//imperative
	presentImperatif : {
		je: "",
		tu : "fais",
		"il/elle/on" : "",
		nous : "faisons",
		vous : "faites",
		"ils/elles" : ""},
	passeImperatif : {
		je: "",
		tu : "aie fait",
		"il/elle/on" : "",
		nous : "ayons fait",
		vous : "ayez fait",
		"ils/elles" : ""},
}
//add all verbs to an array
let allVerbs = new Array(vAimer, vAller, vAvoir, vDescendre, vEtre, vEtudier, vFaire,
	 vManger, vParler, vPrendre, vDonner, vDemander, vTrouver, 
	 vPasser, vRester, vPorter, vMontrer, vPouvoir, vMettre, 
	 vDire, vDevoir, vVouloir, vSavoir, vFalloir,vVoir, vRendre,
	vVenir, vComprendre, vTenir, vContinuer, vPenser, vSuivre, 
	vConnaitre, vCroire, vCommencer, vCompter, vEntendre, 
	vAttendre, vRemettre, vAppeler, vPermettre, vOccuper, 
	vDevenir, vPartir, vDecider, vArriver, vServir, vSembler, 
	vRevenir, vLaisser, vRecevoir, vRepondre, vVivre, vRappeler,
	vPresenter, vAccepter, vAgir, vPoser, vJouer, vReconnaitre, vChoisir,
	vToucher, vRetrouver, vPerdre, vExpliquer, vConsiderer, vOuvrir,
	vGagner, vExister, vRefuser,vLire, vReussir, vChanger, vTravailler,
	vRepresenter, vAssurer, vEssayer, vEmpecher, vSortir, vReprendre,
	vMener, vAppartenir, vRisquer, vConcerner, vApprendre, vRencontrer, 
	vCreer, vObtenir, vChercer, vEntrer, vProposer, vApporter, vUtiliser,
	vAtteindre, vTenter, vImporter, vAjouter, vProduire, vPreparer,
	vRelever, vEcrire, vDefendre, vTirer)




//create arrays to filter the verbs
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
	document.getElementById("switchtype").setAttribute("style", "display:none")
	document.getElementById("typeTwoQuiz").setAttribute("style", "display:none")
}




document.getElementById("switchtype").addEventListener("click", pagedesign)
function pagedesign(){
	document.getElementById("verbendSec").setAttribute("style", "display:none")
	document.getElementById("reflexiveSec").setAttribute("style", "display:none")
	document.getElementById("regularSec").setAttribute("style", "display:none")
	document.getElementById("start").setAttribute("style", "display:none")
	document.getElementById("switchtype").innerHTML = "Go back"
	document.getElementById("switchtype").addEventListener("click", goback)
	document.getElementById("typeTwoQuiz").setAttribute("style", "display:block")
	quizTypeTwo()
}


let verbChosenArr = new Array()

function quizTypeTwo(){

	function prepareVerbs(){
		document.getElementById("addVerbs").addEventListener("click", selectVerbs)
		function selectVerbs(){
			verbChosen.add(document.getElementById("verbChoosingform").value)
			verbChosenArr = Array.from(verbChosen)
			document.getElementById("verbsSelected").innerHTML = verbChosenArr.sort() + " "
			console.log(verbChosenArr)
			document.getElementById("quizTypeTwo").addEventListener("click", function() {
				arrayVerbs(verbChosenArr)})				
		}
		function arrayVerbs(arr){
				
			i=0
			while(i<arr.length){
				
				k=0
				while(k<allVerbs.length){
					if(allVerbs[k].verb == arr[i]){
						quizVerbsSet.add(allVerbs[k])
						
					}
					k++
				}
				i++
			}
			quizVerbs = Array.from(quizVerbsSet)
			whichTense()
			clean()	
			
		}		
		
		
		function whichTense(){

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
			prepareQuestion()
		}
		
	}


	function prepareQuestion(){
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

	
	document.getElementById("next").addEventListener("click", getNext)
	function getNext(){
		document.getElementById("options_0").setAttribute("style", "background-color:auto")
		document.getElementById("options_1").setAttribute("style", "background-color:auto")
		document.getElementById("options_2").setAttribute("style", "background-color:auto")

		prepareQuestion()
	}


prepareVerbs()
}
