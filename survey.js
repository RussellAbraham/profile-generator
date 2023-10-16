const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

function askQuestion(question, callback) {
  rl.question(question, (answer) => {
    callback(answer);
  });
}

function runSurvey() {
  askQuestion("What's your name? Nicknames are also acceptable :) ", (answer) => {
    answers.name = answer;

    askQuestion("What's an activity you like doing? ", (answer) => {
      answers.activity = answer;

      askQuestion("What do you listen to while doing that? ", (answer) => {
        answers.music = answer;

        askQuestion("Which meal is your favourite (e.g., dinner, brunch, etc.)? ", (answer) => {
          answers.meal = answer;

          askQuestion("What's your favourite thing to eat for that meal? ", (answer) => {
            answers.food = answer;

            askQuestion("Which sport is your absolute favourite? ", (answer) => {
              answers.sport = answer;

              askQuestion("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                answers.superpower = answer;

                generateProfile();
                rl.close();
              });
            });
          });
        });
      });
    });
  });
}

function generateProfile() {
  console.log(`\nMeet ${answers.name}! When not busy ${answers.activity}, you can catch ${answers.name} listening to ${answers.music}. ${answers.name} enjoys ${answers.food} for ${answers.meal} and loves playing ${answers.sport}. With a superpower of ${answers.superpower}, ${answers.name} is always ready to drop mad puns at inopportune times. 😄\n`);
}

runSurvey();
