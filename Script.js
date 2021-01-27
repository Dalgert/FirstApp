"use sctrict";

let numberOfFilms,
     opisanieFilm = 'Один из последних просмотренных фильмов?',
     opisanieBall = 'На сколько оцениваете его?';

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
showMyDB();

function start() {
    numberOfFilms = +prompt("Сколько фильмоф вы уже посмотрели", "");

    while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмоф вы уже посмотрели", "");
    }
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert('Маловато смотришь');
    } else if (personalMovieDB.count < 30) {
        alert('Вы классный зритель');
        } else {
            alert('Вы киноман!');
            }
}

function showMyDB () {
    if (personalMovieDB.private == 0) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt ('Ваш любимый жанр под номером ' + (i+1));
    }
}

function  check (whatChecking, opisanie) {
    whatChecking = prompt(opisanie, '');

    while (whatChecking == null || whatChecking.length == 0 || whatChecking.length > 50) {
        alert('Наебать меня хочешь? Пиши нормально');
        whatChecking = prompt(opisanie, '');
    }
    return whatChecking;
}

function rememberMyFilms () {
    for ( let i=0; i < numberOfFilms; i++){
        
        personalMovieDB.movies[check ('', opisanieFilm)] = check ('', opisanieBall);
        // personalMovieDB.movies[film] = bal;
    }
    
}