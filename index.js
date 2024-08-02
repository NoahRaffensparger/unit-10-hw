const inquirer = require('inquirer');
const fs = require('fs');

const generate = require('./lib/shapes')


const questions = [
            {
                type: 'input',
                name: 'text',
                message: 'Enter text (up to three letters)'
              },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter color for text'
              },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose shape',
                choices: ['Circle', 'Square', 'Triangle']
              },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter color for shape'
              }
        ]

function start(){
    inquirer
        .prompt(questions)
        .then((answers) => {
            let newLogo = answers
            console.log(newLogo)
            createLogo(newLogo)
        })
}

function createLogo(data) {
    fs.writeFile('logo.svg', generate.generateSVG(data), (err) => 
        err ? console.log(err) : console.log('Successfully created logo.svg')
      )
}

start()

