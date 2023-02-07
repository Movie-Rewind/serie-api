const express = require('express');
const router = express.Router();
const SaveSerieCommand = require('../../application/save-serie/save-serie-command');
const FindSerieByOmdbIdCommand = require('../../application/find-serie-by-omdb-id/find-serie-by-omdb-id-command');
const container = require('../../container');
const SerieAlreadyExistsError = require('../../domain/serie/errors/serie-already-exists-error');

router.post('/', async (req, res, next) => {
	const serie = req.body;
	try {
		const command = new SaveSerieCommand(serie);
		const saveSerie = container.resolve('saveSerie');
		const response = await saveSerie.save(command);
		res.status(201).json(response);
	} catch (error) {
		if (error instanceof SerieAlreadyExistsError) {
			return res.status(400).json({
				message: error.message,
				description: 'The id is in database',
			});
		}
		next(error);
	}
});


router.get('/omdb/:omdb_id', async (req, res, next) => {
	const {omdb_id} = req.params;
	try {
		const command = new FindSerieByOmdbIdCommand({omdb_id});
		const findSerieByOmdbId = container.resolve('findSerieByOmdbId');
		const response = await findSerieByOmdbId.find(command);
		res.status(200).json({...response});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: error.toString()});
	}
});

module.exports = router;
