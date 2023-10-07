import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
const titleDiv = document.createElement("div");
const title = document.createElement("h1");
const divContent = document.createElement("div");

titleDiv.appendChild(title);
title.textContent = "Топ 10 лучших фильмов";
title.style.textAlign = "center";

divContent.style.display = "flex";
divContent.style.flexDirection = "row";
divContent.style.flexWrap = "wrap";
divContent.style.gap = "30px";

document.body.append(titleDiv, divContent);




data.forEach(({ movie, image, year, director, genre, timing, rating }) => {
    const cardBox = document.createElement("div");
    divContent.appendChild(cardBox);
    cardBox.className = "classBox";
    cardBox.style.padding = "10px";
    cardBox.style.boxShadow = "5px 5px 5px 5px rgb(220,220,220)";

    const movieImgBox = document.createElement("div");
    cardBox.appendChild(movieImgBox);

    const movieImg = document.createElement("img");
    movieImgBox.appendChild(movieImg);
    movieImg.src = image;
    movieImg.style.width = "250px"
    movieImg.style.height = "350px"

    const movieDescription = document.createElement("div");
    cardBox.appendChild(movieDescription);
    movieDescription.style.width = "250px"

    const movieName = document.createElement("h3");
    movieDescription.appendChild(movieName);
    movieName.textContent = movie;
    movieName.style.margin = "0";
    movieName.style.height = "50px";
    movieName.style.display = "flex";
    movieName.style.alignItems = "flex-start";
    movieName.style.justifyContent = "center";
    movieName.style.textAlign = "center";



    const movieYear = document.createElement("p");
    movieDescription.appendChild(movieYear);
    movieYear.textContent = `Год выпуска: ${year}`;
    movieYear.style.margin = "0";

    const movieDirector = document.createElement("p");
    movieDescription.appendChild(movieDirector);
    movieDirector.textContent = `Режиссер: ${director}`;
    movieDirector.style.margin = "0";

    const movieGenre = document.createElement("p");
    movieDescription.appendChild(movieGenre);
    movieGenre.textContent = `Жанр: ${genre}`;
    movieGenre.style.margin = "0";

    const movieTiming = document.createElement("p");
    movieDescription.appendChild(movieTiming);
    movieTiming.textContent = `Продолжительность: ${timing}`;
    movieTiming.style.margin = "0";

    const movieRating = document.createElement("p");
    movieDescription.appendChild(movieRating);
    movieRating.textContent = `Рейтинг: ${rating}`;
    movieRating.style.margin = "0";
});