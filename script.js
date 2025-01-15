
function auth() {
  var email = document.getElementById("email").value;
  var psw = document.getElementById("psw").value;
  if (email == "admin@gmail.com" && psw == "admin123") {
    window.location.assign("page.html");
    alert("login successful");
  }
  else {
    alert("invalid information");
    return;
  }
}
const quizDB = [
  {
    question: "Q1:Which of the following is NOT a type of intellectual property?",
    a: "Copyright ",
    b: "Patent ",
    c: "Real Estate ",
    d: "Trademark",
    ans: "ans3"
  },
  {
    question: "Q2:Which international agreement is primarily concerned with the protection of intellectual property rights? ",
    a: "  Paris Agreement",
    b: "Kyoto Protocol",
    c: " Berne Convention ",
    d: "TRIPS Agreement",
    ans: "ans4"
  },
  {
    question: "Q3:What does the term “fair use” refer to in the context of copyright law?",
    a: "The right to use any work for commercial purposes ",
    b: "The limited use of copyrighted material without permission for purposes such as criticism, comment, news reporting, teaching, scholarship, or research ",
    c: "The right to reproduce and distribute copyrighted material without restrictions",
    d: "The use of copyrighted material only in nonprofit activities",
    ans: "ans2"
  },
  {
    question: "Q4:What is the difference between a patent and a trade secret?",
    a: "A patent protects the appearance of a product, while a trade secret protects its functional aspects. ",
    b: "A patent is publicly disclosed, providing exclusive rights for a limited period, while a trade secret is kept confidential to maintain a competitive advantage.",
    c: "A patent can last forever, while a trade secret has a limited duration. ",
    d: "A trade secret is registered with the government, while a patent is not.  ",
    ans: "ans2"
  }, {
    question: "Q5:In the context of intellectual property, what is “infringement”?",
    a: "The sale of legally owned intellectual property",
    b: "The legal use of protected intellectual property",
    c: "The unauthorized use, reproduction, or distribution of protected intellectual property",
    d: "The voluntary donation of intellectual property rights",
    ans: "ans3"
  }];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;

}

loadQuestion();
const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;

    }
  });
  return answer;
};
const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked = false);
}



submit.addEventListener('click', () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  };

  questionCount++;

  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    document.querySelector(".inner-div").innerHTML = `<h1>you scored ${score}/${quizDB.length} ✌️ </h1>
    <button class="btn" onclick="location.reload()">Play Again</button>`;

  }


});



