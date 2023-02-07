const Serie = require('../../domain/serie/Serie');
const SaveSerieResponse = require('./save-serie-response');
const SerieAlreadyExistsError = require('../../domain/serie/errors/serie-already-exists-error');

class SaveSerie {
	constructor({serieRepository, idGenerator}) {
		this.serieRepository = serieRepository;
		this.idGenerator = idGenerator;
	}

	async save(serie) {
		const querySerie = await this.serieRepository.findByOmdbId(serie.id);

		this._checkIfExistsSerie(querySerie);

		const serieDomain = new Serie(this._parseIds(serie));

		await this.serieRepository.save(serieDomain);
		return new SaveSerieResponse(serieDomain);
	}

	_parseIds(serie) {
		serie.omdb_id = serie.id;
		serie.id = this.idGenerator.generate();
		return serie;
	}

	_checkIfExistsSerie(querySerie) {
		if (querySerie) {
			throw new SerieAlreadyExistsError('Serie already exists');
		}
	}
}

module.exports = SaveSerie;
