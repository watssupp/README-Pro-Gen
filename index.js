// variables
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const generateMarkdown = require("./utils/generateMarkdown")

// Array
const questions = [

    {
        type: "input",
        name:"github",
        message: "Whats your Github username?"
    },
    {
        type:"input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: [ "APACHE2.0", "Boost1.0", "BSD2" , "MIT", "None"]
    },
    {
        type: "input",
        name:"dependencies",
        message:"Any dependencies to install?",
        default: "npm i"
    },
    {
        type:"input",
        name:"test",
        message:"What command should be run to run test?",
        default:"npm test"
    },
    {
        type:"input",
        name:"usage",
        message:"What does the usage of this repo?"
    },
    {
        type:"input",
        name:"contributors",
        message: "Who are the contributers of this repo?"
    }

]

// function to put in the README 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


function init(){
    inquirer.prompt(questions)
    .then((inquirerAnswer) => {
        console.log("Generating... Please wait...")
        writeToFile("dist\README.md", generateMarkdown({ ...inquirerAnswer}))
    })
}

init()



