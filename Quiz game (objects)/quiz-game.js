let questions = [
  {
    category: "Maths",
    question: "Which one is the even number?",
    choices: ["5", "101", "2"],
    answer: "2",
  },

  {
    category: "General Knowledge",
    question: "What colour is the sky?",
    choices: ["purple", "blue", "gold"],
    answer: "blue",
  },

  {
    category: "Animals",
    question: "Which animal is a domesticated descendant of the wolf?",
    choices: ["dog", "parrot", "octopus"],
    answer: "dog",
  },

  {
    category: "Maths",
    question: "What is the value of pi?",
    choices: ["20000000", "3.14", "6"],
    answer: "3.14",
  },

  {
    category: "TV and Movies",
    question:
      'Who is Colleen\'s favorite doctor from the popular TV series "Doctor Who"?',
    choices: ["David Tennant", "John Hurt", "Christopher Eccleston"],
    answer: "David Tennant",
  },
];

function getRandomQuestion(questionArr) {
  const randomQ = Math.floor(Math.random() * questionArr.length);
  return questionArr[randomQ];
}

function getRandomComputerChoice(choicesArr) {
  const randomA = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomA];
}

function getResults(questionObj, computersChoice) {
  if (computersChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
