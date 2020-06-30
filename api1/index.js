'use strict';

const express = require('express');

// Constants
const PORT = 3001;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/me', function (req, res) {
	// Return current system time
	const time = new Date(Date.now()).toLocaleString();
	res.send(`Current time: ${time} /me api`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);