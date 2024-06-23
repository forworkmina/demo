function toggleMenu() {
    var x = document.querySelector(".topnav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  function startQuestionnaire() {
    window.location.href = 'questionnaire.html';
  }
  