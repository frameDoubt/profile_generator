const readline = require('readline');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

userInput.question("Who are you? ", (name) => {
  userInput.question(`Hello, ${name}. What is your favorite food? `, (favoriteFood) => {
    userInput.question(`${favoriteFood}, mmm that sounds delicious. What country or city would you like to visit? `, (placeToVisit) => {
      userInput.question(`${placeToVisit}, sounds like an interesting place. If you had a super power what would it be? `, (superPower) => {
        userInput.question(`${superPower}. I would probably want to be able to fly. What is your favorite thing to do? `, (activity) => {
          userInput.question(`${activity}. That sounds like fun. Final question, do I ask too many questions? `, (theQuestion) => {
            console.log(`This person, "${name}" if that's their real name. \nLoves eating ${favoriteFood}. \nWould like to visit ${placeToVisit}, ${superPower} would be their super power. \nTo pass time, they ${activity}.\nAnd said, "${theQuestion}." When asked if I asked too many questions. `);
            userInput.close();
          });
        });
      });
    });
  });
});