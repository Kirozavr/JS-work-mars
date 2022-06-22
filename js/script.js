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

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortFilmByAlph = (arr) => {
        arr.sort();
    };

    const createMovieList = (films, parent) => {
        parent.innerHTML = "";
        sortFilmByAlph(movieDB.movies);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            // на кажую кнопку вешаем одно действие с помощью forEach
            btn.addEventListener('click', () => {
                // удаляем родителя
                btn.parentElement.remove();
                // удаляем из базы данных
                movieDB.movies.splice(i, 1);
                // рекурсия - вызов функции в самой себе, чтобы нумерация заново собралась
                createMovieList(films, parent);
            });
        });
    };

    addForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Проверка того, что передается не пустая строка
        if (addInput.value) {
            if (addInput.value.length > 21) {
                movieDB.movies.push(`${addInput.value.slice(0, 22)}...`);
            } else {
                movieDB.movies.push(addInput.value);
            }
            if (checkBox.checked) {
                console.log("Добавляем любимый фильм");
            }
            createMovieList(movieDB.movies, movieList);
            event.target.reset();
        }
    });

    createMovieList(movieDB.movies, movieList);
    deleteAdv(adv);
    makeChanges();
});
