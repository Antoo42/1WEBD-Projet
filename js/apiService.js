export default class OmdbApi {
    constructor(configPath = "../utils/config.json") {
        this.configPath = configPath;
        this.token = null;
        this.api = null;
    }

    async init() {
        try {
            const config = await $.getJSON(this.configPath);
            this.token = config.token;
            this.api = axios.create({
                baseURL: `https://www.omdbapi.com/`,
                params: {
                    apikey: this.token
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    async getFilmById(id) {
        if (!this.api) {
            return;
        }
        try {
            const response = await this.api.get('', {
                params: {
                    i: id
                }
            });
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
            return null;
        }
    }

    async getFilmsByYear(year, name) {
        if (!this.api) {
            return;
        }
        try {
            const response = await this.api.get('', {
                params: {
                    y: year,
                    t: name
                }
            });
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
            return null;
        }
    }


    async searchFilm(name) {
        if (!this.api) {
            return;
        }
        try {
            const response = await this.api.get('', {
                params: {
                    s: name,
                    type: "movie"
                }
            })
            return response.data;
        }
        catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
        }
    }
}

const omdb = new OmdbApi();

