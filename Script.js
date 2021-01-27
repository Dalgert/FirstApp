"use sctrict";

let numberOfFilms;

numberOfFilms = +prompt("Сколько фильмоф вы уже посмотрели", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count < 10) {
    alert('Маловато смотришь');
} else if (personalMovieDB.count < 30) {
    alert('Вы классный зритель');
    } else {
        alert('Вы киноман!');
        };

// for ( let i=1, film, bal; i<=numberOfFilms; i++) {

//     film = prompt ("Один из последних просмотренных фильмов?", "");

//         if (film.length == 0) {
//             alert('Наебать меня хочешь? Вводи фильм');
//             i--;
//             continue;
//         } else  if (film.length > 50){
//             alert('Наебать меня хочешь? Вводи фильм');
//             i--;
//             continue;
//             } else{
//     for (let i1=1, bal; i1 < 2; i1++) {

//     bal = prompt("На сколько оцениваете его?", "");
  
//         if (bal.length == 0) {
//             alert('Наебать меня хочешь? Вводи фильм');
//             i1--;
//             continue;
//         }
//         personalMovieDB.movies[film] = bal;
//     }
//             }
// }

for ( let i=1, film, bal; i<=numberOfFilms; i++) {
    film = prompt ("Один из последних просмотренных фильмов?", "");

        if (film != null && film.length != 0 && film.length < 50) {
            bal = prompt('На сколько оцениваете его?', '');
                if (bal != null && bal != 0){
                personalMovieDB.movies[film] = bal;
                } else {
                    alert('Наебать меня хочешь? Пиши нормально');
                    i--;
                }
        } else {
            alert('Наебать меня хочешь? Вводи фильм');
            i--;
        }
   
}

console.log(personalMovieDB);