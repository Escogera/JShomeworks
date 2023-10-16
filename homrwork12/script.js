"use strict";

fetch("data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const featuredBox = document.querySelector(".featured__box");
        data.forEach(
            ({
                id,
                productName,
                productDescription,
                productPrice,
                productImgUrl,
                size,
                color,
            }) => {
                const cardEl = `
        <div class="card">
          <div class="card__box">
            <div class="card__hover">
              <button class="card__button" id=${id}>
                Add to Cart
              </button>
            </div>
            <img src="${productImgUrl}" alt="${productName}" class="card__img" />
          </div>
          <div class="card__content">
            <a href="#" class="card__link">${productName}</a>
            <p class="card__text">${productDescription}</p>
            <p class="card__price">${productPrice}</p>
            <p class="hidden__card__size">${size}</p>
            <p class="hidden__card__color"> ${color}</p>
          </div>
        </div>
      `;

                featuredBox.insertAdjacentHTML("beforeend", cardEl);
            }
        );
        const buttonsForAddingToCart = document.querySelectorAll(".card__button");
        buttonsForAddingToCart.forEach((el) => {
            el.addEventListener("click", () => {
                const itemForAddingToCart = el.closest(".card");

                const imgTag = itemForAddingToCart.querySelector(".card__img");
                const image = imgTag.attributes[0].textContent;
                const link = itemForAddingToCart.querySelector(".card__link").innerHTML;
                const price =
                    itemForAddingToCart.querySelector(".card__price").innerHTML;
                const size = itemForAddingToCart.querySelector(
                    ".hidden__card__size"
                ).innerHTML;
                const color = itemForAddingToCart.querySelector(
                    ".hidden__card__color"
                ).innerHTML;

                const cartItem = `
                <div class="new__card">                                                 
                    <img src="${image}" alt="#" class="new__card__img" />        
                    <div class="new__card__content">
                      <a href="#" class="new__card__link">${link}</a>                    
                      <p class="new__card__color">Color: ${color}</p>
                      <p class="new__card__price">Price: <span class="price__sapan">$${price}</span></p>
                      <p class="new__card__size">Size: ${size}</p>
                      <form action="#" class="cart_item_quantity">
                        <label for="item_quantity_value">Quantity:</label>
                        <input type="text" name="item_quantity_value" class="quantity__input__area" id="item_quantity_value">
                      </form>
                    </div>
                    <button class="close__btn" type="button">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                  </svg>     
                  </button>           
                </div>                
                `;

                const cartBox = document.querySelector(".cart__box");
                cartBox.insertAdjacentHTML("beforeend", cartItem);
                const cartHeading = document.querySelector(".cart__box__title");
                checkChild(cartBox, cartHeading);


                const removeButtons = document.querySelectorAll(".close__btn");

                removeButtons.forEach((el) => {
                    el.addEventListener("click", function() {
                        let revDiv = this.parentElement;
                        revDiv.remove();
                        checkChild(cartBox, cartHeading);
                    });
                });

                function checkChild(el, el2) {
                    el.lastElementChild == el2 ?
                        (el.style.display = "none") :
                        (el.style.display = "block");
                }


            });


        });

    });