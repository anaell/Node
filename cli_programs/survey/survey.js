const inquirer = require("inquirer");

inquirer
  .createPromptModule()([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "list",
      name: "language",
      message: "Favourite JS runtime?",
      choices: ["Node", "Deno", "Bun"],
    },
  ])
  .then((answer) => {
    console.log(answer);
  });
