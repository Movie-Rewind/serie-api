const awilix = require('awilix');

const mongoDbHandler = require('./infrastructure/persistance/mongo/db-handler');
const {logger} = require('@Movie-Rewind/core');
const {idGenerator} = require('@Movie-Rewind/core');
const MUUID = require('uuid-mongodb');
const {v4: uuidv4} = require('uuid');
const SaveSerie = require('./application/save-serie');
const FindSerieByOmdbId = require('./application/find-serie-by-omdb-id');

const MongoSerieRepository = require('./infrastructure/persistance/mongo/mongo-serie-repository');
const serieDocumentParser = require('./domain/serie/services/serie-document-parser');

const container = awilix.createContainer({
	injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
	mongoDbHandler: awilix.asFunction(mongoDbHandler),
	logger: awilix.asValue(logger),
	idGenerator: awilix.asFunction(idGenerator),
	muuid: awilix.asValue(MUUID),
	saveSerie: awilix.asClass(SaveSerie),
	findSerieByOmdbId: awilix.asClass(FindSerieByOmdbId),
	serieRepository: awilix.asClass(MongoSerieRepository),
	serieDocumentParser: awilix.asFunction(serieDocumentParser),
	uuidv4: awilix.asValue(uuidv4),
});

module.exports = container;
