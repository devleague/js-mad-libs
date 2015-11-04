var headlines;

window.onload = run;

function randomWord (arr){
  var num = Math.floor(Math.random() * (arr.length));
  return arr[num];
}

function setTitle(){
  title.innerHTML = randomWord(headlines);
}

function run(){
  headlines = ['Busy', 'Lazy', 'Careless', 'Clumsy', 'Nimble', 'Brave', 'Mighty', 'Meek', 'Clever', 'Dull', 'Afraid', 'Scared', 'Cowardly', 'Bashful', 'Proud', 'Fair', 'Greedy', 'Wise', 'Foolish', 'Tricky', 'Truthful', 'Loyal', 'Happy', 'Cheerful', 'Joyful', 'Carefree', 'Friendly', 'Moody', 'Crabby', 'Cranky', 'Awful', 'Gloomy', 'Angry', 'Worried', 'Excited', 'Calm', 'Bored', 'Hardworking', 'Silly', 'Wild', 'Crazy', 'Fussy', 'Still', 'Odd', 'Starving', 'Stuffed', 'Alert', 'Sleepy', 'Surprised', 'Tense', 'Rude', 'Selfish', 'Strict', 'Tough', 'Polite', 'Amusing', 'Kind', 'Gentle', 'Quiet', 'Caring', 'Hopeful', 'Rich', 'Thrifty', 'Stingy', 'Spoiled', 'Generous', 'Quick', 'Speedy', 'Swift', 'Hasty', 'Rapid', 'Good', 'Fantastic', 'Splendid', 'Wonderful', 'Hard', 'Difficult', 'Challenging', 'Easy', 'Simple', 'Chilly', 'Freezing', 'Icy', 'Steaming', 'Sizzling', 'Muggy', 'Cozy', 'Huge', 'Great', 'Vast', 'Sturdy', 'Grand', 'Heavy', 'Plump', 'Deep', 'Puny', 'Small', 'Tiny', 'Petite', 'Long', 'Endless', 'Beautiful', 'Adorable', 'Shining', 'Sparkling', 'Glowing', 'Fluttering', 'Soaring', 'Crawling', 'Creeping', 'Sloppy', 'Messy', 'Slimy', 'Grimy', 'Crispy', 'Spiky', 'Rusty', 'Smelly', 'Foul', 'Stinky', 'Curly', 'Fuzzy', 'Plush', 'Lumpy', 'Wrinkly', 'Smooth', 'Glassy', 'Snug', 'Stiff', 'Ugly', 'Hideous', 'Horrid', 'Dreadful', 'Nasty', 'Cruel', 'Creepy', 'Loud', 'Shrill', 'Muffled', 'Creaky',];

  setTitle();

  var title = document.getElementById('title');

  document.getElementById('headline').onclick = setTitle;

  var blankNoun = document.getElementsByClassName('noun');
  var blankAdj = document.getElementsByClassName('adj');
  var blankVerb = document.getElementsByClassName('verb');

  document.getElementById('randomize').onclick = randomize;


  function randomize (){
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
  }

}