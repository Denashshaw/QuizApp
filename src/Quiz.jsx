import { useState } from "react";

const Quiz = () => {
  const quizData = [
    {
      question: "Who is the founder of Meta?",
      answerOptions: [
        { answer: "Mark Zuckerburg", isCorrect: true },
        { answer: "Steve Jobs", isCorrect: false },
        { answer: "Bill Gates", isCorrect: false },
        { answer: "Robert Kiyosaki", isCorrect: false }
      ]
    },
    {
      question: "Who is the founder of Microsoft?",
      answerOptions: [
        { answer: "Mark Zuckerburg", isCorrect: false },
        { answer: "Steve Jobs", isCorrect: false },
        { answer: "Bill Gates", isCorrect: true },
        { answer: "Robert Kiyosaki", isCorrect: false }
      ]
    },
    {
      question: "Who is the founder of Apple?",
      answerOptions: [
        { answer: "Mark Zuckerburg", isCorrect: false },
        { answer: "Steve Jobs", isCorrect: true },
        { answer: "Bill Gates", isCorrect: false },
        { answer: "Robert Kiyosaki", isCorrect: false }
      ]
    }
  ];

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  };

  shuffle(quizData);
  console.log(quizData);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const checkAnsHandler = (ans) => {
    if (ans) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion((curQues) => curQues + 1);
    } else {
      setShowScore(true);
    }
  };

  const scoreBoard = `Game Over: <br /> Your Score is: ${score} out of ${quizData.length} <br/> <br/> <br/> 
  <button onClick={window.location.reload()}>
    Retry the game
  </button>`;

  return (
    <div className="container">
      {showScore ? (
        <>
          <div dangerouslySetInnerHTML={{ __html: scoreBoard }}></div>
        </>
      ) : (
        <>
          <h4>
            Question {currentQuestion + 1} / {quizData.length}:
          </h4>
          <p>{quizData[currentQuestion].question}</p>
          <p className="grid-container">
            {quizData[currentQuestion].answerOptions.map((options, i) => (
              <button
                onClick={() => checkAnsHandler(options.isCorrect)}
                key={i}
              >
                {options.answer}
              </button>
            ))}
          </p>
        </>
      )}
    </div>
  );
};

export default Quiz;
