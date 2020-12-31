// This is example data you can use while working on your code.
const response = [
    {
      question: 'What is the phase where chromosomes line up in mitosis?',
      response: 'Metaphase',
      isCorrect: true,
      isEssayQuestion: false
    },
    {
      question: 'What anatomical structure connects the stomach to the mouth?',
      response: 'Esophagus',
      isCorrect: true,
      isEssayQuestion: false
    },
    {
      question: 'What are lysosomes?',
      response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
      isCorrect: true,
      isEssayQuestion: true
    },
    {
      question: 'True or False: Prostaglandins can only constrict blood vessels.',
      response: 'True',
      isCorrect: false,
      isEssayQuestion: false
    }
  ];
  
  // Prompt 1 : countCorrectQuestions
  function countCorrectQuestions(response){
    correctResponses = 0;
    for(let i = 0; i < response.length; i++){
      if(response[i].isCorrect === true){
        correctResponses += 1;
      }
    }
    return correctResponses;
  }
  
  
  // Prompt 2 : filterQuestionsByType
  function filterQuestionsByType(response, type) {
    questions = [];
    for (let i = 0; i < response.length; i++) {
      if (response[i].isEssayQuestion == type) {
        questions.push(response[i]);
      }
    }
    return questions;
  }
  
  
  // Prompt 3 : checkForPlagiarism
  function checkForPlagiarism(response, external) {
    let report = false;
    for (let i = 0; i < response.length; i++) {
      if (response[i].isEssayQuestion === true && response[i].response.includes(external)) {
        report = true;
      }
    }
    return report;
  }
  
  //This is to run the tests. You can ignore it but don't delete it! 
  require('./index.test.js'); (void 0);
  