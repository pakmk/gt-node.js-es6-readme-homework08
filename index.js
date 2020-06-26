const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);
const fs = require(`fs`);

// array of questions for user
const questions = [
  {
    type: `input`,
    message: `What is your GitHub username?`,
    name: `username`,
  },
  {
    type: `input`,
    message: `What is your email address?`,
    name: `email`,
  },
  {
    type: `input`,
    message: `What is your project's name?`,
    name: `title`,
  },
  {
    type: `input`,
    message: `Please write a short description of your project.`,
    name: `projectDescription`,
  },
  {
    // https://www.npmjs.com/package/inquirer#reactive
    // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    type: `list`,
    message: `What kind of license should your project have?`,
    name: `license`,
    choices: [
      {
        name: "MIT",
        value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      },
      {
        name: "APACHE 2.0",
        value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      },
      {
        name: "GPL 3.0",
        value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
      },
      {
        name: "BSD 3",
        value: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
      },
      {
        name: `None`,
        value: ``,
      },
      ]
  },
  {
    // https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
    default: `npm i`,
    message: `What command should be run to install dependencies?`,
    name: `dependencies`,
  },
  {
    // https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
    default: `npm test`,
    message: `What command should be run to run tests?`,
    name: `tests`,
  },
  {
    type: `input`,
    message: `What does the user need to know about using the repo?`,
    name: `usingRepo`,
  },
  {
    type: `input`,
    message: `What does the user need to know about contributing to the repo?`,
    name: `contributingRepo`,
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Success!`);
    }
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // console.log(answers);
      writeToFile(`./demoREADME/README.md`, generateMarkdown(answers));
    })
    .catch((err) => {
      console.log(err);
    });
}

// function call to initialize program
init();