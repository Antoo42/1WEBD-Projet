import OmdbApi from "../services/apiService.js";
import FilmMiniItem from "../components/filmMiniItem.js";
const api = new OmdbApi();
await api.init();

const list = document.getElementById('filmsList');
let films = []
let page = 1;
// $('#searchInput').val("Marvel");
searchFilms()

const elErrorMessage = document.getElementById('errorMessage');

let timeout;

function setLoading(isLoading) {
    $('#searchSpinner').toggleClass('hidden', !isLoading);
}

function hideMoreButton(boolean) {
    $('#moreButton').toggleClass('hidden', boolean)
}

function hideNoResults (boolean) {
    $('#noResults').toggleClass('hidden', boolean)
}

$('#searchInput').on('keyup', function(e) {
    hideMoreButton(true)
    clearTimeout(timeout);
    const value = $(this).val();
    setLoading(true);

    timeout = setTimeout(function() {
        list.innerHTML = '';
        page = 1;
        searchFilms();
    }, 1000)
})

$('#moreButton').on('click', function(e) {
    page++;
    searchFilms();
    setLoading(true)
})

function searchFilms() {
    api.searchFilm($('#searchInput').val(), page).then(data => {
        if (data.Response === "False") {
            elErrorMessage.textContent = `Erreur: ${data.Error}`
            hideNoResults(false);
        } else {
            buildFilmsElements(data);
            hideNoResults(true);
        }
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
    hideMoreButton(false)
}