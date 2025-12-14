import OmdbApi from "../services/apiService.js";
import FilmItem from "../components/filmItem.js";

const api = new OmdbApi();

await api.init();


const url = new URL(window.location.href);
const id = url.searchParams.get("id");

let data;
async function getFilmData(id) {
    api.getFilmById(id).then(r => {
        data = r;
        if (data.Response === 'False') {
            renderNoFilm()
        } else {
            renderFilm()
        }
    });
}

function renderNoFilm() {
    let filmItem = new FilmItem(data);
    let el = filmItem.createUnknownFilmElement();
    $("#filmSection").append(el);

}

function renderFilm() {
    let filmItem = new FilmItem(data);
    let el = filmItem.createFilmElement();
    $("#filmSection").append(el);

}

getFilmData(id).then();