'use strict';

const Readline = require('readline');
const rl = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});
const matcher = require('./matcher');
const weather = require('./weather');
const {currentWeather, forecastWeather} = require('./parser')

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
	// console.log(`You said ${reply}`);
	// rl.prompt();
	matcher(reply, data => {
		switch(data.intent) {
			case 'Hello':
				//console.log("A Big Helloooo from Weather bot!");
				console.log(`${data.entities.greeting} to you too!`)
				rl.prompt();
				break;
			case 'Exit':
				console.log("Bye!");
				process.exit(0);
				break;
			case 'CurrentWeather':
				// console.log(`Checking weather for ${data.entities.city}...`);
				console.log("Let me check...");
				// get weather data from API
				weather(data.entities.city, 'current')
					.then(response => {
						let parseResult = currentWeather(response);
						console.log(parseResult);
						rl.prompt();
					})
					.catch(error => {
						console.log("There seems to be problem connecting to weather service!");
						rl.prompt();
					})
				rl.prompt();
				break;
			case 'WeatherForecast':
				// console.log(`Checking weather for ${data.entities.city}...`);
				console.log("Let me check...");
				// get weather data from API
				weather(data.entities.city)
					.then(response => {
						let parseResult = forecastWeather(response, data.entities); // weather, city, time
						console.log(parseResult);
						rl.prompt();
					})
					.catch(error => {
						console.log("There seems to be problem connecting to weather service!");
						rl.prompt();
					})
				rl.prompt();
				break;
			default: 
				console.log("I don't know, what you mean :(");
				rl.prompt();
		}
	})
});