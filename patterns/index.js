const patternDict = [{
	//pattern: '\\b(Hi|Hello|Hey)\\b',
	pattern: '\\b(?<greeting>Hi|Hello|Hey)\\b',
	intent: 'Hello'
},{
	pattern: '\\b(bye|exit)\\b',
	intent: 'Exit'
},{
	pattern: 'like\\sin\\s\\b(?<city>.+)',
	intent: 'CurrentWeather'
}, {
	pattern: '\\b(?<weather>hot|cold|rain|cloudy|rainy|sunny|snow|thunderstorm|windy|drizzle)\\b\\sin\\s\\b(?<city>[a-z]+[ a-z]+?)\\b(?<time>day\\safter\\stommorow\\?|tommorow\\?|today\\?)$',
	intent: 'WeatherForecast'
}, {
	pattern: '\\b(?<weather>hot|cold|rain|rainy|cloudy|sunny|snow|thunderstorm|windy|drizzle)\\b\\s\\b(?<time>day\\safter\\stommorow|tommorow|today)\\sin\\s\\b(?<city>[a-z]+[ a-z]+?\\?)$',
	intent: 'WeatherForecast'
}];

module.exports = patternDict;

// rain in Vilnius today?
// sunny in Vilnius tommorow?
// snow in Vilnius day after tommorow?

// rain today in London?
// sunny tommorow in New York?
// snow day after tommorow in Moscow?

// What weather like in Vilnius?