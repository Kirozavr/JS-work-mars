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
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkBox = addForm.querySelector('[type="checkbox"]');

    adv.forEach(item => {
        item.remove();
    });

    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (addInput.value.length > 21) {
            movieDB.movies.push(addInput.value.slice(0, 21) + '...');
        } else {
            movieDB.movies.push(addInput.value);
        }
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
    console.log(checkBox);
});
