const questions = [
    {
        question: 'What year did the Titanic sink?',
        answers: [
          { text: '1934', correct: false },
          { text: '1912', correct: true },
          { text: '1898', correct: false },
          { text: '1923', correct: false }
        ]
      },
  {
    question: 'How many bones do sharks have?',
    answers: [
      { text: '14', correct: false },
      { text: '132', correct: false },
      { text: '1', correct: false },
      { text: '0', correct: true }
    ]
  },
  {
    question: 'How many Earths could fit inside the sun?',
    answers: [
      { text: '1.3 million', correct: true },
      { text: '1,300', correct: false },
      { text: '300', correct: false },
      { text: '3', correct: false }
    ]
  },
  {
    question: 'What is the capital city of Spain?',
    answers: [
      { text: 'Barcelona', correct: false },
      { text: 'Madrid', correct: true },
      { text: 'Seville', correct: false },
      { text: 'Bilbao', correct: false }
    ]
  },

  {
    question: 'Which country produces the most coffee in the world?',
    answers: [
      { text: 'Brazil', correct: true },
      { text: 'Indonesia', correct: false },
      { text: 'Ethiopia', correct: false },
      { text: 'India', correct: false }
    ]
  },

  {
    question: 'What country won the very first FIFA World Cup in 1930?',
    answers: [
      { text: 'Spain', correct: false },
      { text: 'Uruguay', correct: true },
      { text: 'Italy', correct: false },
      { text: 'Argentina', correct: false }
    ]
  },

  {
    question: 'Which planet is the hottest in the solar system?',
    answers: [
      { text: 'Mercury', correct: false },
      { text: 'Jupiter', correct: false },
      { text: 'Saturn', correct: false },
      { text: 'Venus', correct: true }
    ]
  },

  {
    question: 'About how many taste buds does the average human tongue have?',
    answers: [
      { text: '10,000', correct: true },
      { text: '100', correct: false },
      { text: '1,000', correct: false },
      { text: '100,000', correct: false }
    ]
  },

  {
    question: 'Which American state is the largest (by area)?',
    answers: [
      { text: 'California', correct: false },
      { text: 'Alaska', correct: true },
      { text: 'Texas', correct: false },
      { text: 'New York', correct: false }
    ]
  },

  {
    question: 'When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
    answers: [
      { text: '2', correct: false },
      { text: '4', correct: false },
      { text: '5', correct: false },
      { text: '6', correct: true }
    ]
  },
]

export function questions() {
    return "Questions";
  }