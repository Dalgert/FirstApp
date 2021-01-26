"use sctrict";

let numberOfFilms = 0, film, bal, film2, bal2;

numberOfFilms = +prompt("Сколько фильмоф вы уже посмотрели", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

film = prompt("Один из последних просмотренных фильмов?", "");
bal = prompt("На сколько оцениваете его?", "");
film2 = prompt("Один из последних просмотренных фильмов?", "");
bal2 = prompt("На сколько оцениваете его?", "");

personalMovieDB.movies[film] = bal;
personalMovieDB.movies[film2] = bal2;

console.log(personalMovieDB);