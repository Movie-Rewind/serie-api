class SaveSerieCommand {
	constructor({
		backdrop_path,
		created_by,
		episode_run_time,
		first_air_date,
		genres,
		homepage,
		id,
		omdb_id,
		in_production,
		languages,
		last_air_date,
		last_episode_to_air,
		name,
		next_episode_to_air,
		networks,
		number_of_episodes,
		number_of_seasons,
		origin_country,
		original_language,
		original_name,
		overview,
		popularity,
		poster_path,
		production_companies,
		production_countries,
		seasons,
		spoken_languages,
		status,
		tagline,
		type,
		vote_average,
		vote_count,
	}) {
		this._backdrop_path = backdrop_path;
		this._created_by = created_by;
		this._episode_run_time = episode_run_time;
		this._first_air_date = first_air_date;
		this._genres = genres;
		this._homepage = homepage;
		this._id = id;
		this._omdb_id = omdb_id;
		this._in_production = in_production;
		this._languages = languages;
		this._last_air_date = last_air_date;
		this._last_episode_to_air = last_episode_to_air;
		this._name = name;
		this._next_episode_to_air = next_episode_to_air;
		this._networks = networks;
		this._number_of_episodes = number_of_episodes;
		this._number_of_seasons = number_of_seasons;
		this._origin_country = origin_country;
		this._original_language = original_language;
		this._original_name = original_name;
		this._overview = overview;
		this._popularity = popularity;
		this._poster_path = poster_path;
		this._production_companies = production_companies;
		this._production_countries = production_countries;
		this._seasons = seasons;
		this._spoken_languages = spoken_languages;
		this._status = status;
		this._tagline = tagline;
		this._type = type;
		this._vote_average = vote_average;
		this._vote_count = vote_count;
	}

	get backdrop_path() {
		return this._backdrop_path;
	}

	set backdrop_path(value) {
		this._backdrop_path = value;
	}

	get created_by() {
		return this._created_by;
	}

	set created_by(value) {
		this._created_by = value;
	}

	get episode_run_time() {
		return this._episode_run_time;
	}

	set episode_run_time(value) {
		this._episode_run_time = value;
	}

	get first_air_date() {
		return this._first_air_date;
	}

	set first_air_date(value) {
		this._first_air_date = value;
	}

	get genres() {
		return this._genres;
	}

	set genres(value) {
		this._genres = value;
	}

	get homepage() {
		return this._homepage;
	}

	set homepage(value) {
		this._homepage = value;
	}

	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}

	get in_production() {
		return this._in_production;
	}

	set in_production(value) {
		this._in_production = value;
	}

	get languages() {
		return this._languages;
	}

	set languages(value) {
		this._languages = value;
	}

	get last_air_date() {
		return this._last_air_date;
	}

	set last_air_date(value) {
		this._last_air_date = value;
	}

	get last_episode_to_air() {
		return this._last_episode_to_air;
	}

	set last_episode_to_air(value) {
		this._last_episode_to_air = value;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get next_episode_to_air() {
		return this._next_episode_to_air;
	}

	set next_episode_to_air(value) {
		this._next_episode_to_air = value;
	}

	get networks() {
		return this._networks;
	}

	set networks(value) {
		this._networks = value;
	}

	get number_of_episodes() {
		return this._number_of_episodes;
	}

	set number_of_episodes(value) {
		this._number_of_episodes = value;
	}

	get number_of_seasons() {
		return this._number_of_seasons;
	}

	set number_of_seasons(value) {
		this._number_of_seasons = value;
	}

	get origin_country() {
		return this._origin_country;
	}

	set origin_country(value) {
		this._origin_country = value;
	}

	get original_language() {
		return this._original_language;
	}

	set original_language(value) {
		this._original_language = value;
	}

	get original_name() {
		return this._original_name;
	}

	set original_name(value) {
		this._original_name = value;
	}

	get overview() {
		return this._overview;
	}

	set overview(value) {
		this._overview = value;
	}

	get popularity() {
		return this._popularity;
	}

	set popularity(value) {
		this._popularity = value;
	}

	get poster_path() {
		return this._poster_path;
	}

	set poster_path(value) {
		this._poster_path = value;
	}

	get production_companies() {
		return this._production_companies;
	}

	set production_companies(value) {
		this._production_companies = value;
	}

	get production_countries() {
		return this._production_countries;
	}

	set production_countries(value) {
		this._production_countries = value;
	}

	get seasons() {
		return this._seasons;
	}

	set seasons(value) {
		this._seasons = value;
	}

	get spoken_languages() {
		return this._spoken_languages;
	}

	set spoken_languages(value) {
		this._spoken_languages = value;
	}

	get status() {
		return this._status;
	}

	set status(value) {
		this._status = value;
	}

	get tagline() {
		return this._tagline;
	}

	set tagline(value) {
		this._tagline = value;
	}

	get type() {
		return this._type;
	}

	set type(value) {
		this._type = value;
	}

	get vote_average() {
		return this._vote_average;
	}

	set vote_average(value) {
		this._vote_average = value;
	}

	get vote_count() {
		return this._vote_count;
	}

	set vote_count(value) {
		this._vote_count = value;
	}

	get omdb_id() {
		return this._omdb_id;
	}

	set omdb_id(value) {
		this._omdb_id = value;
	}
}

module.exports = SaveSerieCommand;
