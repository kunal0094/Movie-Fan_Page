document.addEventListener("DOMContentLoaded", () => {

  const quotes = [
    { text: "May the Force be with you.", author: "Obi-Wan Kenobi" },
    { text: "I find your lack of faith disturbing.", author: "Darth Vader" },
    { text: "Do, or do not. There is no try.", author: "Yoda" },
    { text: "I’ve got a bad feeling about this.", author: "Han Solo" },
    { text: "The Force will be with you. Always.", author: "Obi-Wan Kenobi" },
  ];


  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

 
  function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById("quote").textContent = quote.text;
    document.getElementById("author").textContent = `— ${quote.author}`;
  }


  displayQuote();
});

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const resultDiv = document.getElementById("result");

 
  const correctAnswers = {
    q1: "B",
    q2: "A",
    q3: "C",
  };

  submitBtn.addEventListener("click", () => {
    const form = document.getElementById("quizForm");
    const formData = new FormData(form);
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;


    for (const [key, value] of formData.entries()) {
      if (correctAnswers[key] === value) {
        score++;
      }
    }

    resultDiv.innerHTML = `<h2>Your Score: ${score} out of ${totalQuestions}</h2>`;
  });
});

var meanuBtn = document.getElementById("meanuBtn");
var sideNav = document.getElementById("sideNav");
var meanu = document.getElementById("meanu");
sideNav.style.right = "-250px";
meanuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    meanu.src = "images/close.png";
  } else {
    sideNav.style.right = "-250px";
    meanu.src = "images/menu.png";
  }
};

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
