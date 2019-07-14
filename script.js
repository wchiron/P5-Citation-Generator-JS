// Generateur de citation Projet partie 2

var firstPartG1 = ["Elboy", "Mogette", "Brownie", "Limbo", "L'éléphant", "Le panda"];
var secondPartG1 = ["aime", "déteste", "pense beaucoup", "prépare", "apprend", "mange souvent"];
var lastPartG1 = ["les bananes", "les films d'horreurs", "la fondue au fromage", "la politique", "le Javascript", "le bambou"];

var firstPartG2 = ["Interstellar", "Le canard mandarin", "Le soleil", "Le fish and chips", "Paris", "L'eau"];
var secondPartG2 = ["est un film", "est d'origine", "est source", "est un plat", "est la capitale", "est essentielle"];
var lastPartG2 = ["très connu", "Chinoise", "de bonheur", "anglais", "de France", "pour la vie"];

for(var i=0; i <= 5; i++) {
	$(".citation1 tbody").append(
		`
		  <tr>
		  	<td>${firstPartG1[i]}</td>
		  	<td>${secondPartG1[i]}</td>
		  	<td>${lastPartG1[i]}</td>
		  </tr>
		`
	)
}

for(var i=0; i <= 5; i++) {
	$(".citation2 tbody").append(
		`
		  <tr>
		  	<td>${firstPartG2[i]}</td>
		  	<td>${secondPartG2[i]}</td>
		  	<td>${lastPartG2[i]}</td>
		  </tr>
		`
	)
}


function createPart(pickAPart) {  //function pour prendre un moceau de chaque élement aléatoire. 
	var rand = Math.floor(Math.random() * 6);
	var onePart = pickAPart[rand];
	return onePart;
}

function randomSentence(p1, p2, p3) {  //function pour generer les citations pour les deux generateurs
	var firstPart = createPart(p1);
	var secondPart = createPart(p2);
	var lastPart = createPart(p3);
	var content = firstPart + " " + secondPart + " " + lastPart + ". \n";
	return content;
} 

function showCitation() { //function à appeler en créant le citation 
	var citationStart = 1; //citation minimum à afficher
	var textGenerator = document.getElementById("numberGenerator").value;//recuperer la valeur du site
	var generatorNumber = parseInt(textGenerator, 10);//transformer le valeur de string au chiffre
	var textSentence = document.getElementById("numberCitation").value;
	var quantitySentence = parseInt(textSentence, 10);
	var generateSentence = "";
	while (citationStart <= quantitySentence) {
		if (generatorNumber === 1) {
			generateSentence +=(randomSentence(firstPartG1,secondPartG1,lastPartG1)); //passant les valeurs dans la function en haut pour créer les citations de generateur 1				
		} else if (generatorNumber === 2) {
			generateSentence +=(randomSentence(firstPartG2,secondPartG2,lastPartG2)); //passant les valeurs dans la function en haut pour créer les citations de generateur 2
		} else if (generatorNumber === 2) {
		} 
		citationStart++;
	}; 
	$("#text").val(generateSentence);//pour envoyer les citations generer au site, $("#text").val(resultG1) ne marche par car chaque phrase remplace la phrase precedant
}

	$("#generateAction").on("click", function() {
	$("#text").val("");//pour supprimer la resultat precedant dans le textarea
	showCitation();
});

	


