const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const sketchBox = document.querySelector(".sketchBox");
const menu = document.querySelector(".menu");
const formulaireBox = document.querySelector(".form");
const questionLimit = 40; // si je veux toutes les questions, remplacer 10 par quiz.lenght
const vocabBox = document.querySelector(".vocab-box");
const spc = document.querySelector(".menu-spc");
const accueil = document.querySelector(".accueil");
const video = document.querySelector(".video-box");
const form = document.querySelector(".form");
const about = document.querySelector(".about-box");
let questionCounter =0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;



document.forms['inscription'].addEventListener("submit", function(e) {
 
	var erreur;
 
	var inputs = this;
 
	if (inputs["email"].value != "camille.loisy@outlook.com") {
		erreur = "Adresse email incorrecte";
	}
	// if (inputs["email", "emailConfirm"].value != "camille.loisy@outlook.com") {
	// 	erreur = "Adresse email incorrecte";
	// }
	for (var i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs";
		}
	}
	if (erreur) {
		e.preventDefault();
		document.getElementById("erreur").innerHTML = erreur;
		return false;
	} else {
		//alert('Formulaire envoyé !');
		connexion();
	}
	
});

console.log(questionLimit);
function  setAvailableQuestions(){
	const totalQuestion = quiz.length;
	for(let i=0; i<totalQuestion; i++) {
		availableQuestions.push(quiz[i])	
	}
 
}
console.log(quiz.length);
function getNewQuestion(){
	console.log(availableQuestions)
 	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " sur " + questionLimit;
 	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
 	currentQuestion = questionIndex;
 	questionText.innerHTML = currentQuestion.q; // LET\'S GOOOOO

 	const index1 = availableQuestions.indexOf(questionIndex);
 	availableQuestions.splice(index1,1);

 	const optionLen = currentQuestion.options.length
 	for(let i=0; i<optionLen; i++) {
 		availableOptions.push(i)
 	}
 	optionContainer.innerHTML = '';
 	let animationDelay =0.15;

 	for(let i=0; i<optionLen; i++) {
 		const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
 		const index2 = availableOptions.indexOf(optonIndex);
 		availableOptions.splice(index2,1);
 		const option = document.createElement("div");
 		option.innerHTML = currentQuestion.options[optonIndex];
 		option.id = optonIndex;
 		option.style.animationDelay = animationDelay + 's';
 		animationDelay = animationDelay + 0.15;
 		option.className = "option";
 		optionContainer.appendChild(option)
 		option.setAttribute("onclick", "getResult(this)");
 	}

 	questionCounter++
}

function getResult(element){
	const id = parseInt(element.id);
	if(id === currentQuestion.answer) {

		element.classList.add("correct");
		updateAnswerIndicator("correct");
		correctAnswers++;
	}
	else {
		element.classList.add("wrong");
		updateAnswerIndicator("wrong");

		const optionLen = optionContainer.children.length;
		for(let i=0; i<optionLen; i++) {
			if(parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
				optionContainer.children[i].classList.add("correct");
			}
		}
	}
	attempt++
	unclickableOptions();
}

function unclickableOptions() {
	const optionLen = optionContainer.children.length;
	for(let i=0; i<optionLen; i++) {
		optionContainer.children[i].classList.add("already-answered");
	}
}

function answersIndicator(){
	answersIndicatorContainer.innerHTML= '';
	const totalQuestion = questionLimit;
	for(let i=0; i<totalQuestion; i++) {
		const indicator = document.createElement("div");
		answersIndicatorContainer.appendChild(indicator);
		}
}
function updateAnswerIndicator(markType) {
	answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}

function next() {
	if(questionCounter === questionLimit) {
		quizOver();
	}
	else {
		getNewQuestion();
	}
}

function quizOver() {
	quizBox.classList.add("hide");
	resultBox.classList.remove("hide");
	quizResult();
}
function quizResult() {
	resultBox.querySelector(".total-question").innerHTML = questionLimit;
	resultBox.querySelector(".total-attempt").innerHTML = attempt;
	resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
	resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
	const percentage = (correctAnswers/questionLimit)*100;
	resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
	resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
}




/////////////////////////////PARTIE RECHERCHE VOCAB ANGLAIS///////////////////////////////////////

// var search = document.getElementById("searchBar");
// var searchButton = document.getElementById("search-button");

// function searchfunction(){
// 	console.log(search.value);
// 	if(search.value)
// }
// searchButton.addEventListener('click', searchfunction);





//////////////////////////////////////////////////////////////////////////////////////////////////////


function resetQuiz() {
 questionCounter =0;
 correctAnswers = 0;
 attempt = 0;
 availableQuestions = [];
}

function tryAgainQuiz() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	spc.classList.add("hide");
	quizBox.classList.remove("hide");
	video.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");

	resetQuiz();
	startQuiz();
}
function aboutFonct() {
	sketchBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	homeBox.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
	video.classList.add("hide");
	about.classList.remove("hide");
}
function goToHome() {
	sketchBox.classList.add("hide");
	
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	homeBox.classList.remove("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
	resetQuiz();
}
function goToHome2() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	               accueil.classList.remove("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	video.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
	about.classList.add("hide");
	resetQuiz();
}

function goToHome3() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.remove("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
}

function sketch() {
	sketchBox.classList.remove("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
	resetQuiz();
	//Text.innerHTML(sketch);

}
function vocab() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.remove("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
	resetQuiz();
}
function connexion() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	accueil.classList.remove("hide");
	spc.classList.add("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
	resetQuiz();
}
function allemand() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.remove("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
}
function anglais() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-anglais").classList.remove("hide");
	document.querySelector(".menu-svt").classList.add("hide");
}
// #### STARTINT POINT ####

function startQuiz() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.remove("hide");
	spc.classList.add("hide");
	about.classList.add("hide");
	setAvailableQuestions();
	getNewQuestion();
	answersIndicator();
	video.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
}
function spc1() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.remove("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
}
function svt() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	video.classList.add("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.remove("hide");
}

function videos() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	quizBox.classList.add("hide");
	spc.classList.add("hide");
	video.classList.remove("hide");
	about.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
}

function deconnexion() {
	sketchBox.classList.add("hide");
	homeBox.classList.add("hide");
	vocabBox.classList.add("hide");
	resultBox.classList.add("hide");
	menu.classList.add("hide");
	accueil.classList.add("hide");
	formulaireBox.classList.add("hide");
	resultBox.classList.add("hide");
	spc.classList.add("hide");
	quizBox.classList.add("hide");
	form.classList.remove("hide");
	video.classList.add("hide");
	document.querySelector(".menu-svt").classList.add("hide");
	about.classList.add("hide");
}




window.onload = function () {
	homeBox.querySelector(".total-question").innerHTML = questionLimit;
}

