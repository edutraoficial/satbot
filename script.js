$(document).ready(function() {
	gerarQuote(); 
 
  function gerarQuote() {
    var quoteArray = [
      '"ESPERE A PRÓXIMA RODADA"',
      '"PRETO ⚫"',
      '"VERMELHO 🔴"',];
    
   var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    document.getElementById("quote").innerHTML = randomQuote;
    var by = " %23indiretasdobem via https://codepen.io/itska/full/PzwyxZ/";
    document.getElementById("tweet").href = "https://twitter.com/intent/tweet?&text=" + randomQuote + by;
}
 
document.getElementById("quoteButton").onclick = gerarQuote;
  
});