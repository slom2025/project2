"use strict";

let numberOfilms

function start() {
    numberOfilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfilms == '' || numberOfilms == null || isNaN(numberOfilms)) {
        numberOfilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}

start();

const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remembrMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Последний просмотренный фильм?');
        const b = prompt('На сколько оцените его?');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error');
            i--;
        }
    
    }
}

remembrMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('cредне');
    } else if (personalMovieDB.count >=30) {
        console.log('много');
    } else {
        console.log("произошла ошибка");
    }
    
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
        console.log("выводит")
    } else if (personalMovieDB.privat == true) {
        console.log('не выводит')
    }
    
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const a = prompt(`Ваш любимый  жанр под номером ${i}`);

        personalMovieDB.genres[i - 1] = a;
    } 
}

writeYourGenres();

// console.log(personalMovieDB);

