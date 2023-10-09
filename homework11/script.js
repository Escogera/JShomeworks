"use strict";

fetch("data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const featuredBox = document.querySelector(".featured__box");
        data.forEach(
            ({ productName, productDescription, productPrice, productImgUrl }) => {
                const cardEl = `
        <div class="card">
          <div class="card__box">
            <div class="card__hover">
              <button class="card__button">
                Add to Cart
              </button>
            </div>
            <img src="${productImgUrl}" alt="${productName}" class="card__img" />
          </div>
          <div class="card__content">
            <a href="#" class="card__link">${productName}</a>
            <p class="card__text">${productDescription}</p>
            <p class="card__price">$ ${productPrice}</p>
          </div>
        </div>
      `;
                featuredBox.insertAdjacentHTML("beforeend", cardEl);
            }
        );
    });