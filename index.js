// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');


inquirer.prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Please enter the title of your project."
    },
    {
        type:"input",
        name:"description",
        message:"Please enter a descrition of your project. "
    },
    {
        type:"input",
        name:"installation",
        message:"Please enter your project's installation instruction. "
    },
    {
        type:"input",
        name:"usage",
        message:"Please enter your prooject's usage information. "
    },
    {
        type:"input",
        name:"contributionGuidelines",
        message:"Please enter guidelines to contribute to your project. "
    },
    {
        type:"input"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
