$(document).ready(function() {
  $("#word-play-input").submit(function(event) {
    event.preventDefault();

    const inputSentence = $("textarea#user-sentence").val();
    const wordsArray = inputSentence.split(" ");
    const threeLetterWords = [];
    
    wordsArray.forEach(function(word) {
      if (word.length >= 3) {
      threeLetterWords.push(word);
        }
      });

      const reverseArray = threeLetterWords.reverse();
      const finalArray = reverseArray.join(" ");
      console.log(finalArray);

      // $("button").click(function() {
      // $("#threeLetterWords
    });
  });


  