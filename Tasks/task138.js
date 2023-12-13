'use strict';
const btnTakeSurvey = document.createElement('button');
document.body.append(btnTakeSurvey);
btnTakeSurvey.id = 'TakeSurvey';
btnTakeSurvey.textContent = 'Take Survey';


const survey = {
   question: 'What programming language would you like to learn?',
   options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
   answers: new Array(5).fill(0),

   logNewAnswer() {
      const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Enter option number)`));

      if (answer >= 0 && answer < this.answers.length) {
         this.answers[answer]++;
      }
      this.printResults();
   },

   printResults(type = console.log(this.answers)) {
      if (type === 'string') {
         console.log(`Survey results: ${this.answers.join(', ')}`);
      }
   }
};

btnTakeSurvey.addEventListener('click', survey.logNewAnswer.bind(survey));

const answers = { answers: [7, 1, 4] };
survey.printResults.call(answers);
survey.printResults.call(answers, 'string');

const answers2 = { answers: [3, 6, 9, 2, 5, 4, 4] };
survey.printResults.call(answers2);
survey.printResults.call(answers2, 'string');



