import OmdbApi from "./services/apiService.js";
import FilmItem from "./filmItem.js";

const api = new OmdbApi();

await api.init();


const url = new URL(window.location.href);
const id = url.searchParams.get("id");

let data;
async function getFilmData(id) {
    api.getFilmById(id).then(r => {
        data = r;
        renderFilm()
    });
}

function renderFilm() {
    let filmItem = new FilmItem(data);
    let el = filmItem.createFilmElement();
    $("#filmSection").append(el);

}

getFilmData(id).then();