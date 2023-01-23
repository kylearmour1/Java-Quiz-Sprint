document.addEventListener("DOMContentLoaded", function(){
  var pages = document.querySelectorAll(".page");
  var currentPage = 0; 
  var timeLeft = 60;
  var timerInterval;
  var score = 0;

  pages[currentPage].style.display = "block";
//creating start button and making sure page is hidden when clicked//
  var startButton = document.createElement("button");
  startButton.innerHTML = "Start";
  startButton.classList.add("start-button");
  startButton.addEventListener("click", function(){
    pages[currentPage].style.display = "none";
    currentPage++;
    pages[currentPage].style.display = "block";
    //start the timer//
    timerInterval = setInterval(function(){
      timeLeft--;
      document.querySelector("#time-left").innerHTML = timeLeft;
      if(timeLeft <= 0){
        pages[currentPage].style.display = "none";
        clearInterval(timerInterval);
        currentPage = 6;
        pages[currentPage].style.display = "block";
      alert("Times Up!");
      }
      
    }, 1000);

  });
  
  document.querySelector(".page").appendChild(startButton);

  for (var i = 1; i < pages.length; i++) {
    
    var answerButtons = pages[i].querySelectorAll(".answer-button");
    for(var j = 0; j < answerButtons.length; j++) {
      answerButtons[j].addEventListener("click", function() {
        if (this.id ==="correct"){
          score++
        }

        pages[currentPage].style.display = "none";
        currentPage++;
        pages[currentPage].style.display = "block";
        if(currentPage === 6) {
          var finalScore = document.getElementById("final-score");
            finalScore.innerHTML = "Your final score is: " +score;
          
          
         
        }
      });
      
    }
        
    pages[i].style.display = "none";
    
    

  }});
