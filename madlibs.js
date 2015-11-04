// Write a list of nouns, verbs, and adjectives in their arrays.

var nouns = ['bob', 'rabbit', 'apple pie', 'stormtrooper'];
var verbs = ['munch', 'run', 'jump', 'cook'];
var adjectives = ['delicious', 'purple', 'crusty', 'sour'];


window.onload = function (){

  var blankNoun = document.getElementsByClassName('noun');
  var blankAdj = document.getElementsByClassName('adj');
  var blankVerb = document.getElementsByClassName('verb');

  //Random Noun
  for(var n = 0; n < blankNoun.length; n++){
    blankNoun[n].innerHTML = randomWord(nouns);
  }

  //Random Adjective
  for(var a = 0; a < blankAdj.length; a++){
    blankAdj[a].innerHTML = randomWord(adjectives);
  }

  //Random Verb
  for(var v = 0; v < blankAdj.length; v++){
    blankVerb[v].innerHTML = randomWord(verbs);
  }

  function randomWord (arr){
    var num = Math.floor(Math.random() * (arr.length - 0));
    return arr[num];
  }

};