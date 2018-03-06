function characterNumber(){

var lenght = document.getElementById('textArea').value.length;
    
document.getElementById('characters').innerHTML = lenght;
    
    if (lenght > 100){
        document.getElementById('characterWrapper').style.color = "#333";
    }else{
        document.getElementById('characterWrapper').style.color = "#999";
    }
}

function changeWords(){

var customText = jQuery("#textArea").val();    

//var customTextReplace = customText.replace(/\b[-.,()&$#!\[\]{}"']+\B|\B[-.,()&$#!\[\]{}"']+\b/g, "");    
    
var customTextReplace = customText.replace(/\b[.\[\]{}"']+\B|\B[.\[\]{}"']+\b/g, " ."); 
    
var customTextSecond = customTextReplace.replace(/\b[,\[\]{}"']+\B|\B[,\[\]{}"']+\b/g, " ,"); 
    
var customTextFinal = customTextSecond.replace(/\b[!\[\]{}"']+\B|\B[!\[\]{}"']+\b/g, " !"); 

if (customText.length < 100){  
    window.alert("Please write at least 100 characters");
} else {
    
var text = customTextFinal;
    
function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var swapWords = function(arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

function processText(text, nouns) {
	var words = text.split(' ');
	var out = '';
	var nounIndecies = [];
	for(var i = 0; i < words.length; i++) {
		var word = words[i];
		if (word in nouns) {
			nounIndecies.push(i);
		}
	}
	// next line makes a copy of 'nounIndices' and stores it under new variable new 'originalPositions'
	var originalPositions = nounIndecies.slice();

	// next line shuffles *only* 'nounIndices', 'originalPositions' remains unchanged
	shuffle(nounIndecies);

	for(var i = 0; i < originalPositions.length; i++) {
		swapWords(words, originalPositions[i], nounIndecies[i]);
	}
	return words.join(' ');
}

var array = [];
jQuery.get( "js/nouns/words.txt", function(nouns_text) {
    
    var nouns = {};
    var array = nouns_text.split("\r\n");
    
    for(var i = 0; i < array.length; i++) {
        nouns[array[i]] = true;
    }
        
        var result = processText(text, nouns);
        var randomNumber = [ 4 , 6 ];
        var rand = randomNumber[Math.floor(Math.random() * randomNumber.length)];
        
        document.getElementById('textArea').value = result;

});
    
}
}

//Back To Main Page

var idleSeconds = 60;

$(function(){
  var idleTimer;
  function resetTimer(){
    clearTimeout(idleTimer);
    idleTimer = setTimeout(whenUserIdle,idleSeconds*1000);
  }
  $(document.body).bind('mousemove keydown click',resetTimer); //space separated events list that we want to monitor
  resetTimer(); // Start the timer when the page loads
});

function whenUserIdle(){
  
    document.location.href = "/index.html";
    
}