$(document).ready(function() {
  $("#word-play-input").submit(function(event) {
    event.preventDefault();

    const inputSentence = $("textarea#user-sentence").val();
    const wordsArray = inputSentence.split(" ");
    console.log(wordsArray);

    });
  });