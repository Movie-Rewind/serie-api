const {ApplicationError} = require('@Movie-Rewind/core');

class SerieAlreadyExistsError extends ApplicationError {
	constructor(message) {
		super(message);
		this.message = 'SerieAlreadyExistsError';
	}
}

module.exports = SerieAlreadyExistsError;
