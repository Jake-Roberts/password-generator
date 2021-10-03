// this object acts as our database which contains our `users` collection
const db = {
    users: [
      { username: "testing1", password: "abc123" },
      { username: "testing2", password: "def456" },
      { username: "testing3", password: "ghi789" },
    ],
  };
  
  var continueButton = document.getElementById("form-stepper");
  var timerEl = document.getElementById("timer-countdown");
  
  
  
  // function continueButton(){
    addEventListener("click", function(){
      console.log(hi);
      this.document.getElementById("login-form-step-1").setAttribute("style", "display:none");
      this.document.getElementById("login-form-step-2").setAttribute("style", "display:initial");
    })
  
    var timer = setInterval(function countdown(){
      var timeLeft = 10;
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
        } else if (timeLeft === 1) {
          // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = '';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
          // Call the `displayMessage()` function
          displayMessage();
        }
      }, 1000);
   
  function displayMessage(){
    window.alert("times up");
  }
  
  
  // When I click "Continue", the form step 1 hides and form step 2 displays
  
  // When step 2 is display start a timer countdown (setInterval)
  // -> on each interval update countdown display
  
  // if user enters invalid creds. display message (optional)
  
  // when correct username and password is entered, it takes us to the image gallery
  
  // if time expires before login is successful -> display time expired message