const SerieRepository = require('../repositories/serie-repository');

class MongoSerieRepository extends SerieRepository {
	constructor({mongoDbHandler, serieDocumentParser}) {
		super();
		this.mongoDbHandler = mongoDbHandler;
		this.serieDocumentParser = serieDocumentParser;
	}

	async save(serie) {
		const db = await this.mongoDbHandler.getInstance();
		try {
			const serieDocument = this.serieDocumentParser.toDocument(serie);
			await db.collection(this.collection).insertOne(serieDocument);
		} catch (e) {
			throw new Error(e);
		}
	}

	async findByOmdbId(omdb_id) {
		const db = await this.mongoDbHandler.getInstance();
		try {
			const serieDocument = await db.collection(this.collection).findOne({omdb_id: parseInt(omdb_id)});
			return serieDocument ? this.serieDocumentParser.toDomain(serieDocument) : null;
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = MongoSerieRepository;
