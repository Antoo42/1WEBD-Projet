import OmdbApi from "../services/apiService.js";
import FilmMiniItem from "../components/filmMiniItem.js";

const api = new OmdbApi();
await api.init();

const config = await $.getJSON("../settings/config.json");
const filmsId = Object.values(config.trendingsFilms);

let swiper = null;

async function renderTrendingProducts() {
    const promises = filmsId.map(id =>
        api.getFilmById(id).then(data => {
            const filmMiniItem = new FilmMiniItem(data.imdbID, data.Title, data.Poster, data.Year);
            return filmMiniItem.createFilmElement();
        })
    );

    const filmElements = await Promise.all(promises);

    const swiperWrapper = $('.swiper-wrapper');
    filmElements.forEach(element => {
        const slide = $('<div class="swiper-slide"></div>').append(element);
        swiperWrapper.append(slide);
    });

    initSwiper();
}

function renderCurrentFilm(id) {
    api.getFilmById(id).then(data => {
        const element = $("#currentFilm");
        element.empty();

        const imgSrc = data.Poster !== "N/A" ? data.Poster : "../assets/logo.png";

        const container = $('<div class="current-film"></div>');
        const img = $(`<img class="cover" src="${imgSrc}" alt="Affiche de ${data.Title}">`);
        const info = $('<div class="film-info"></div>');

        info.append(`<h2 class="title">${data.Title}</h2>`);

        if (data.Year !== "N/A") {
            info.append(`<p class="year">Sorti en ${data.Year}</p>`);
        }

        if (data.Plot !== "N/A") {
            info.append(`
                <div class="description">
                    <h3>Synopsis</h3>
                    <p>${data.Plot}</p>
                </div>
            `);
        }
        const button = $(`<button id="openDetailsButton" class="button">Voir la page du film </button>`);
        $(button).on('click', () => {
            window.open(`movie.html?id=${id}`);
        })

        info.append(button);
        container.append(img).append(info);
        element.append(container);
    });
}

function initSwiper() {
    swiper = new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },

        slidesPerView: 5,
        spaceBetween: 40,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            slideChange: function () {
                const currentFilmId = filmsId[this.realIndex];
                renderCurrentFilm(currentFilmId);
            }
        }
    });
}


renderTrendingProducts().then(r => console.log("Produits tendances chargés !"));




const slogans = Object.values(config.slogans);

let currentIndex = 0;
const textElement = document.getElementById('rotating-text');

function deleteText(callback) {
    let currentText = textElement.textContent;
    let length = currentText.length;

    const deleteInterval = setInterval(() => {
        if (length > 0) {
            currentText = currentText.slice(0, -1);
            textElement.textContent = currentText;
            length--;
        } else {
            clearInterval(deleteInterval);
            callback();
        }
    }, 50);
}

function typeText(text) {
    let index = 0;
    textElement.textContent = '';

    const typeInterval = setInterval(() => {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 80);
}

function changeText() {
    deleteText(() => {
        currentIndex = (currentIndex + 1) % slogans.length;
        setTimeout(() => {
            typeText(slogans[currentIndex]);
        }, 200);
    });
}
setInterval(changeText, 5000);
