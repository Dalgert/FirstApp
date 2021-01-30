'use strict';

let numberOfFilms,
     opisanieFilm = 'Один из последних просмотренных фильмов?',
     opisanieBall = 'На сколько оцениваете его?';

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function() {
        numberOfFilms = +prompt("Сколько фильмоф вы уже посмотрели", "");

        while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмоф вы уже посмотрели", "");
        }
        personalMovieDB.count = numberOfFilms;
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Маловато смотришь');
        } else if (personalMovieDB.count < 30) {
            alert('Вы классный зритель');
            } else {
                alert('Вы киноман!');
                }
    },
    showDB: function() {
        if (personalMovieDB.private == 0) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = check ('', 'Ваш любимый жанр под номером ' + (i+1));
        }
    },
    rememberMyFilms: function() {
        for ( let i=0; i < numberOfFilms; i++){
            personalMovieDB.movies[check ('', opisanieFilm)] = check ('', opisanieBall);
            }
        },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private == 0) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }
    },
    forEach: function() {
        for (let i = 0; i < personalMovieDB.genres.length; i++) {
            console.log(`Любимый жанр №${i+1} - это ${personalMovieDB.genres[i]}`);
        }
    }
    
};

function  check (whatChecking, opisanie) {
    whatChecking = prompt(opisanie, '');

    while (whatChecking == null || whatChecking.length == 0 || whatChecking.length > 50) {
        alert('Наебать меня хочешь? Пиши нормально');
        whatChecking = prompt(opisanie, '');
    }
    return whatChecking;
}
personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showDB();
personalMovieDB.forEach();