class FindSerieByOmdbIdResponse {
	constructor(serie) {
		this._serie = serie;
	}

	get serie() {
		return this._serie;
	}

	set serie(serie) {
		this._serie = serie;
	}
}

module.exports = FindSerieByOmdbIdResponse;
