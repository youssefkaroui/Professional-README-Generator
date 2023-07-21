// packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown= require("./utils/generateMarkdown");


const questions = [
    
    {
        type:"input",
        name:"userName",
        message:"Please enter your first and last name"

    },
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
        type:"input",
        name:"testing",
        message:"Please enter your project's testing instructions."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["IBM" , "ISC", "Apache", "MIT","BSD","GNU", "Boost","Mozilla", "None"],
    },
    {
        type: "input",
        name: "Githubusername",
        message: "Please enter your GitHub-username."

    },
    {
        type:"input",
        name:"emailAddress",
        message:"Please enter your email address."
    },

];

// function that writes the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err);

        }
       
    });
}


// function that initializes the app
function init() {
    inquirer.prompt(questions).then(function (response){
        console.log(response);
        writeToFile(`README.md`,response);
    })
}

// Function call to initialize app
init();
