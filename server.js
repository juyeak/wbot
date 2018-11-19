'use strict';
// create an API server
// npm i restify
// http://127.0.0.1:3000/
const Restify = require('restify');
const server = Restify.createServer({
	name: 'WBMessenger'
});

const PORT = process.env.PORT || 3000;

server.use(Restify.plugins.jsonp());
server.use(Restify.plugins.bodyParser());

// Tokens
const config = require('./config');

// FBmeamer
const FBeamer = require('./fbeamer');
const f = new FBeamer(config);


// Register the webhooks
server.get('/', (req, res, next) => {
	// res.send("Sveiki atvykę!");
	f.registerHook(req, res);
	return next();
});

// Receive all incoming messages
server.post('/', (req, res, next) => {
	f.incoming(req, res, msg => {
		// Process messages 
		console.log(msg);
	});
	return next();
});

server.listen(PORT, () => console.log(`Weather Bot running on port ${PORT}`));
