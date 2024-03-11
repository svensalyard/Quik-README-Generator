// packages to write to file and question user
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// question array for inquirer
const questions = [
	{
		type: 'input',
		message: 'What is the name of your project?',
		name: 'title'
	},
	{
		type: 'input',
		message: 'What is the description of your project?',
		name: 'description'
	},
	{
		type: 'input',
		message: 'How can someone install your project?',
		name: 'installation'
	},
	{
		type: 'input',
		message: 'How to use your project?',
		name: 'useage'
	},
	{
		type: 'list',
		name: 'license',
		message: 'Which license do you want to use?',
		choices: [
			'Apache license 2.0',
			'Boost Software License 1.0',
			'BSD 3-Clause license',
			'Creative Commons Zero v1.0 Universal',
			'Do What The F*ck You Want To Public License',
			'MIT',
			'Mozilla Public License 2.0',
			'The Unlicense',
			'zLib License'
			],
	},
	{
		type: 'input',
		message: 'How can someone contribute to your project?',
		name: 'contributing'
	},
	{
		type: 'input',
		message: 'How can someone run tests on your project?',
		name: 'tests'
	},
	{
		type: 'input',
		message: 'What is your github username?',
		name: 'username'
	},
	{
		type: 'input',
		message: 'What is your email?',
		name: 'email'
	},
	{
		type: 'input',
		message: 'What is your first name?',
		name: 'firstname'
	},
	{
		type: 'input',
		message: 'What is your last name?',
		name: 'lastname'
	}
];

// Writes markdown to a new readme file
const writeToFile = async (responses) => {
	fs.writeFile('(new)README.md', generateMarkdown(responses), (err) => err && console.error(err));
};

// calls the questions, then takes responses and writes them to function above to write them to a file
const init = async () => {
	const responses = await inquirer.prompt(questions);
	var license = responses.license;
	await writeToFile(responses);
	console.log('Generated new README.md');
};
// Function call to initialize app
init();
