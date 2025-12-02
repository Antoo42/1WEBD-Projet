import OmdbApi from "./apiService.js";
import FilmMiniItem from "./filmMiniItem.js";
const api = new OmdbApi();
await api.init();


let films = []
// $('#searchInput').val("Marvel");
searchFilms()
$('#searchInput').on('keyup', function(e) {
   searchFilms();
})

function searchFilms() {
    api.searchFilm($('#searchInput').val()).then(data => {
        films = data;
        buildFilmsElements(films);
    });
}

function buildFilmsElements(films) {
    const list = document.getElementById('filmsList');
    list.innerHTML = '';

    films.Search.forEach(film => {
        const filmItem = new FilmMiniItem(film.imdbID, film.Title, film.Poster, film.Year);
        const item = filmItem.createFilmElement()

        $(item).on("click", (e) => {
            window.open(`movie.html?id=${filmItem.id}`, '_blank');
        })

        list.appendChild(item);
    });
}