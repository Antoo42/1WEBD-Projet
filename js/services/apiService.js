export default class OmdbApi {
    constructor(configPath = "../settings/config.json") {
        this.configPath = configPath;
        this.token = null;
        this.api = null;
    }

    async init() {
        try {
            const config = await $.getJSON(this.configPath);
            this.token = config.token;
            this.api = axios.create({
                baseURL: config.apiUrl,
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

    async getFilmsByYear(year, page = 1) {
        if (!this.api) {
            return;
        }
        try {
            const response = await this.api.get('', {
                params: {
                    s: "movie",
                    y: year,
                    page: page,
                    type:"movie"
                }
            });
            return response.data;
        } catch (error) {
            console.error("Erreur lors de la récupération des films :", error);
            return null;
        }
    }


    async searchFilm(name, page = 1) {
        if (!this.api) {
            return;
        }
        try {
            const response = await this.api.get('', {
                params: {
                    s: name,
                    page: page,
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

