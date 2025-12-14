export default class FilmMiniItem {
    constructor(id, title, poster, year) {
        this._id = id;
        this._title = title;
        this._poster = poster;
        this._year = year;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get title() {
        return this._title.length > 16
            ? this._title.substring(0, 16) + "..."
            : this._title;
    }

    set title(value) {
        this._title = value;
    }

    get poster() {
        return this._poster;
    }

    set poster(value) {
        this._poster = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }


    createFilmElement() {
        const article = document.createElement('article');

        const imgSrc = this.poster !== "N/A" ? this.poster : "../assets/logo.png";

        article.innerHTML = `
        <div class="film">
            <img class="filmPoster" src="${imgSrc}" alt="Affiche de ${this.title}">
            <h3 class="filmTitle">${this.title}</h3>
            <p class="filmYear">${this.year}</p>
        </div>
    `;

        const img = article.querySelector('.filmPoster');
        img.addEventListener('error', function() {
            this.src = '../assets/logo.png';
            this.onerror = null;
        });


        $(article).on('click', () => {
            window.open(`movie.html?id=${this.id}`, '_blank');
        })

        return article;
    }
}