require('dotenv').config();
const {gracefulStopper} = require('@Movie-Rewind/core');
const express = require('express');
const container = require('./container');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

const internalRoutes = require('./infrastructure/http/internal-controller.js');
const seriesRoutes = require('./infrastructure/http/serie-controller');

app.use('/internal', internalRoutes);
app.use('/api/v1/series/', seriesRoutes);

const signals = ['SIGTERM', 'SIGINT', 'SIGUSR1', 'SIGUSR2'];
signals.map((signal) => process.on(signal, () => {
	const dbHandler = container.resolve('mongoDbHandler');
	gracefulStopper({dbHandler});
}));

app.listen(port, () => {
	console.log(`Serie api listening: [${port}]`);
});
