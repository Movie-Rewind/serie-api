const Serie = require('../../domain/serie/Serie');
const FindSerieByOmdbIdResponse = require('./find-serie-by-omdb-id-response');

class FindSerieByOmdbId {
	constructor({serieRepository, serieDocumentParser}) {
		this.serieRepository = serieRepository;
	}

	async find({omdb_id}) {
		const serie = await this.serieRepository.findSerieByOmdbId(omdb_id);
		return new FindSerieByOmdbIdResponse(Object.freeze(serie));
	}
}

module.exports = FindSerieByOmdbId;
