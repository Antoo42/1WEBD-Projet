export default class FilmItem {
    constructor(data) {
        this._title = data.Title;
        this._year = data.Year;
        this._rated = data.Rated;
        this._released = data.Released;
        this._runtime = data.Runtime;
        this._genre = data.Genre;
        this._director = data.Director;
        this._writers = data.Writer;
        this._actors = data.Actors;
        this._plot = data.Plot;
        this._language = data.Language;
        this._country = data.Country;
        this._awards = data.Awards;
        this._poster = data.Poster;
        this._ratings = data.Ratings || [];
        this._metascore = data.Metascore;
        this._imdbRating = data.imdbRating;
        this._imdbVotes = data.imdbVotes;
        this._imdbID = data.imdbID;
        this._type = data.Type;
        this._dvd = data.DVD;
        this._boxOffice = data.BoxOffice;
        this._production = data.Production;
        this._website = data.Website;
        this._rawData = data;
        this._data = data;

    }


    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get rated() {
        return this._rated;
    }

    set rated(value) {
        this._rated = value;
    }

    get released() {
        return this._released;
    }

    set released(value) {
        this._released = value;
    }

    get runtime() {
        return this._runtime;
    }

    set runtime(value) {
        this._runtime = value;
    }

    get genre() {
        return this._genre;
    }

    set genre(value) {
        this._genre = value;
    }

    get director() {
        return this._director;
    }

    set director(value) {
        this._director = value;
    }

    get writers() {
        return this._writers;
    }

    set writers(value) {
        this._writers = value;
    }

    get actors() {
        return this._actors;
    }

    set actors(value) {
        this._actors = value;
    }

    get plot() {
        return this._plot;
    }

    set plot(value) {
        this._plot = value;
    }

    get language() {
        return this._language;
    }

    set language(value) {
        this._language = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }

    get awards() {
        return this._awards;
    }

    set awards(value) {
        this._awards = value;
    }

    get poster() {
        return this._poster;
    }

    set poster(value) {
        this._poster = value;
    }

    get ratings() {
        return this._ratings;
    }

    set ratings(value) {
        this._ratings = value;
    }

    get metascore() {
        return this._metascore;
    }

    set metascore(value) {
        this._metascore = value;
    }

    get imdbRating() {
        return this._imdbRating;
    }

    set imdbRating(value) {
        this._imdbRating = value;
    }

    get imdbVotes() {
        return this._imdbVotes;
    }

    set imdbVotes(value) {
        this._imdbVotes = value;
    }

    get imdbID() {
        return this._imdbID;
    }

    set imdbID(value) {
        this._imdbID = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get dvd() {
        return this._dvd;
    }

    set dvd(value) {
        this._dvd = value;
    }

    get boxOffice() {
        return this._boxOffice;
    }

    set boxOffice(value) {
        this._boxOffice = value;
    }

    get production() {
        return this._production;
    }

    set production(value) {
        this._production = value;
    }

    get website() {
        return this._website;
    }

    set website(value) {
        this._website = value;
    }

    createFilmElement() {
        const article = document.createElement('article');
        article.classList.add('film-detail');

        console.log(this.title)

        if (this.title === "undefined") {
            return this.createUnknownFilmElement();
        }

        const imgSrc = this.poster !== "N/A" ? this.poster : "../assets/logo.png";


        article.innerHTML = `
    <div class="product">
        <section class="panel">
            <img class="cover" src="${imgSrc}" alt="Affiche de ${this.title}">
            
            <div class="data">
                <div class="name">
                    ${this.title}
                </div>
                
                <div class="infos">
                    ${this.year !== "N/A" ? `<p class="stockInfo">📅 ${this.year}</p>` : ''}
                    ${this.runtime !== "N/A" ? `
                        <p class="runtime">Durée: ${this.runtime}</p>
                    ` : ''}
                    ${this.released !== "N/A" ? `
                        <p class="releaseDate">Sorti le ${this.released}</p>
                    ` : ''}
                </div>
                
                <div class="ratings">
                    ${this.imdbRating !== "N/A" ? `
                        <div class="rating">⭐ ${this.imdbRating}/10</div>
                    ` : ''}
                </div>
            </div>
        </section>

        <section class="about">
            ${this.plot !== "N/A" ? `
            <div class="description">
                <div class="subtitle">Synopsis</div>
                <div class="itemDescription">
                    ${this.plot}
                </div>
            </div>
            ` : ''}
            
            <div class="caracteristics">
                ${this.director !== "N/A" ? `
                    <p>Réalisation: <strong>${this.director}</strong></p>
                ` : ''}
                ${this.writers !== "N/A" ? `
                    <p>Scénario: <strong>${this.writers}</strong></p>
                ` : ''}
                ${this.actors !== "N/A" ? `
                    <p>Distribution: <strong>${this.actors}</strong></p>
                ` : ''}
                ${this.language !== "N/A" ? `
                    <p>Langues: <strong>${this.language}</strong></p>
                ` : ''}
                ${this.country !== "N/A" ? `
                    <p>Pays: <strong>${this.country}</strong></p>
                ` : ''}
                ${this.genre !== "N/A" ? `
                    <p>Genre: <strong>${this.genre}</strong></p>
                ` : ''}
                ${this.awards !== "N/A" ? `
                    <p>Récompenses: <strong>${this.awards}</strong></p>
                ` : ''}
                ${this.boxOffice !== "N/A" ? `
                    <p>BoxOffice: <strong>${this.boxOffice}</strong></p>
                ` : ''}
            </div>
        </section>
    </div>
    `;

        const img = article.querySelector('.cover');
        img.addEventListener('error', function() {
            this.src = '../assets/logo.png';
            this.onerror = null;
        });

        return article;
    }

    createUnknownFilmElement() {
        console.log("Film non trouvé !")
        const article = document.createElement('article');
        article.classList.add('film-not-found');

        article.innerHTML = `
        <div class="not-found-container">
            <h2 class="not-found-title">Film introuvable</h2>
            <p class="not-found-message">
                Désolé, nous n'avons pas pu trouver ce film dans notre base de données.
            </p>
            <p class="not-found-suggestion">
                Vérifiez d'avoir bien renseigné un id dans l'URL.
            </p>
        </div>
    `;

        return article;
    }
}