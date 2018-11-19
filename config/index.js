'use strinct';

if (process.env.NODE_ENV === 'production') {
	module.exports = {
		PAGE_ACCESS_TOKEN: process.env.PAGE_ACCESS_TOKEN,
		VERIFY_TOKEN: process.env.PAGE_ACCESS_TOKEN
	}
} else {
	module.exports = require('./development.json');
}