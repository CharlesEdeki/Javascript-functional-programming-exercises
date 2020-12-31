# Entrance Exam: Science Questions

You will be writing three functions to help analyze responses for a science quiz. Each student in a science class has has submitted responses to questions for the quiz. Each response is represented as an object with the following keys:

* `question` - the question that was asked, represented as a string.
* `response` - the response that was given, represented as a string.
* `isCorrect` - whether or not the response was graded as correct, represented as a boolean.
* `isEssayQuestion` - whether or not the response is an essay question, represented as a boolean.

Data for the entire month is stored in an array. For example:

```js
[
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
```

While you can use the data above as an example, assume there might be more responses and that the responses may differ. You can assume that every response is an object with the correct keys, with each value having a matching type.

## How to Complete the Prompts

Read each prompt below to learn more about the functions you need to write. Write all of your code in the `index.js` file in the designated space. Do not delete any of the existing code you have been given!

### Prompt 1 : countCorrectQuestions

Write a function named `countCorrectQuestions` that takes one argument:

* an array of all of the responses for a given person

It should return how many of those responses are marked as correct. For example:

```js
countCorrectQuestions(responses); //> 3
```

If none of the responses are correct, return `0`.

### Prompt 2 : filterQuestionsByType

Write a function named `filterQuestionsByType` that takes two arguments:

* an array of all of the responses for a given person
* a boolean value, representing whether the function should return essay questions or not

It should return an array of all of the responses of the appropriate type. For example:

```js
const isEssayQuestion = true;
filterQuestionsByType(responses, isEssayQuestion); /*
  [
    {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  }
  ]
*/
```

### Prompt 3 : checkForPlagiarism

Write a function named `checkForPlagiarism` that takes two arguments:

* an array of all of the responses for a given person
* a string of text that represents an external source

For each essay question in the listed responses, check whether or not the `response` value contains the given string. If it does, return `true`; otherwise, return `false`. For example:

```js
checkForPlagiarism(responses, 'spherical vesicles that contain hydrolytic enzymes'); //> true
checkForPlagiarism(responses, 'this string does not appear in the responses'); //> false
```
  
**Hint:** You may want to check out the [.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method for this question.