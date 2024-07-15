// Your task is to add a new property usersAnswer to every object 
// in the array questions. The value of usersAnswer should be set to null. 
// The solution should work for array of any length.

// For example:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// After adding the property the result should be:

// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// The questions array is already defined for you and is not 
// the same as the one in the example.

// ------------------------------------

// input: array
// output: array

// algo 
// 1. iterate through the array
// 2. add a new property to the object
// 3. return the array  
const questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

// v1
// const usersAnswer = questions => {
//   for (let i = 0; i < questions.length; i += 1) {
//     questions[i].usersAnswer = null;
//   }
//   return questions;
// };

// v2
const usersAnswer = questions => {
  const updatedQuestions = questions.map(question => ({
    ...question,
    usersAnswer: null
  }));
  return updatedQuestions;
};


console.log(usersAnswer(questions));