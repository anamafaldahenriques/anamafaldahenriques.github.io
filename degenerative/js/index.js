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
jQuery.get( "js/nouns/1syllablenouns.txt", function(nouns_text) {
    
    var nouns = {};
    var array = nouns_text.split("\r\n");
    
    for(var i = 0; i < array.length; i++) {
        nouns[array[i]] = true;
    }
    
    jQuery.get('js/textFiles/animalFarm.txt', function(text) { 
        var result = processText(text, nouns);
        var randomNumber = [ 4 , 6 ];
        var rand = randomNumber[Math.floor(Math.random() * randomNumber.length)];
        
        document.getElementById('title').innerHTML = result.split('\n')[0];
        
        document.getElementById('text').innerHTML = result.split('\n')[rand];
        
        $("a#twitter").prop("href", "https://twitter.com/home?status="+ result.split('\n')[0] + " - " + result.split('\n')[rand] + " " +"via @TheDegenerative");

    });
});


