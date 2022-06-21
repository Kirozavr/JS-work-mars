'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
    ]};

    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          btn = document.querySelector('button'),
          newFilm = document.querySelector('.adding__input');

    adv.forEach(item => {
        item.remove();
    });

    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        movieDB.movies.push(newFilm.value);
        createMovieList(movieDB.movies, movieList);
    });

    function createMovieList(films, parent) {
        sortFilmByAlph(movieDB.movies);
        parent.innerHTML = "";
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    }

    function sortFilmByAlph(arr) {
        arr.sort();
    }

    createMovieList(movieDB.movies, movieList);
    sortFilmByAlph(movieDB.movies);
});
