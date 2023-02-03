const submit = document.getElementById("submit");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const imgResult = document.getElementById("img-result");

submit.addEventListener("click", function() {
  let score = 0;
  for (let i = 0; i < quiz.elements.length; i++) {
    if (quiz.elements[i].checked) {
      score += parseInt(quiz.elements[i].value);
    }
    }
    result.innerHTML = "Você marcou " + score + " pontos.";
    if (score === 125) {
    imgResult.src = "happy.jpg";
    } else if (score >= 60) {
    imgResult.src = "happy.jpg";
    } else {
    imgResult.src = "bad.jpg";
    }
    });
