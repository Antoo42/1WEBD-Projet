import OmdbApi from "./services/apiService.js";
import FilmMiniItem from "./filmMiniItem.js";
const api = new OmdbApi();
await api.init();

const list = document.getElementById('filmsList');
let films = []
let page = 1;
// $('#searchInput').val("Marvel");
searchFilms()

let timeout;

function setLoading(isLoading) {
    $('#searchSpinner').toggleClass('hidden', !isLoading);
}

$('#searchInput').on('keyup', function(e) {
    clearTimeout(timeout);
    const value = $(this).val();

    timeout = setTimeout(function() {
        list.innerHTML = '';
        page = 1;
        searchFilms();
    }, 1000)
})

$('#moreFilmsButton').on('click', function(e) {
    page++;
    searchFilms();
})

function searchFilms() {
    setLoading(true);
    api.searchFilm($('#searchInput').val(), page).then(data => {
        films = data;
        buildFilmsElements(films);
    }).finally(() =>  {
        setLoading(false);
    });
}

function buildFilmsElements(films) {
    if (films.Search == null) {
        return;
    }
    films.Search.forEach(film => {
        const filmItem = new FilmMiniItem(film.imdbID, film.Title, film.Poster, film.Year);
        const item = filmItem.createFilmElement()

        list.appendChild(item);
    });
}