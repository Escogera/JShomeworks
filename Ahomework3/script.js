// Функция для добавления отзыва
function addReview() {
  const productName = document.getElementById("product-name").value;
  const reviewText = document.getElementById("review-text").value;

  if (productName && reviewText) {
    const review = {
      product: productName,
      text: reviewText,
    };

    // Получаем текущий список отзывов из LocalStorage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Добавляем новый отзыв в список
    reviews.push(review);

    // Сохраняем обновленный список отзывов в LocalStorage
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // Очищаем поля ввода
    document.getElementById("product-name").value = "";
    document.getElementById("review-text").value = "";

    // Обновляем список отзывов на странице
    loadReviews();
  }
}

// Функция для удаления отзыва
function deleteReview(product, review) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Ищем отзыв в списке
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].product === product && reviews[i].text === review) {
      // Удаляем отзыв из списка
      reviews.splice(i, 1);
      break;
    }
  }

  // Сохраняем обновленный список отзывов в LocalStorage
  localStorage.setItem("reviews", JSON.stringify(reviews));

  // Обновляем список отзывов на странице
  loadReviews();
}

// Функция для загрузки списка отзывов на страницу
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  // Создаем список продуктов с отзывами
  for (let i = 0; i < reviews.length; i++) {
    let product = reviews[i].product;
    let text = reviews[i].text;

    // Проверяем, если продукт уже есть в списке
    let productItem = productList.querySelector("#" + product);
    if (!productItem) {
      // Создаем элемент для нового продукта
      productItem = document.createElement("div");
      productItem.id = product;
      productItem.className = "product-list";
      productItem.innerHTML =
        "<h2 onclick=\"showReviews('" + product + "')\">" + product + "</h2>";
      productList.appendChild(productItem);
    }

    // Создаем элемент для отзыва
    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";
    reviewItem.innerHTML =
      "<p>" +
      text +
      '</p><button class="delete-button" onclick="deleteReview(\'' +
      product +
      "', '" +
      text +
      "')\">Удалить</button>";
    productItem.appendChild(reviewItem);
  }
}

// Функция для отображения списка отзывов по выбранному продукту
function showReviews(product) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const reviewList = document.getElementById("view-reviews");
  reviewList.innerHTML = "";

  // Создаем список отзывов по выбранному продукту
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].product === product) {
      let text = reviews[i].text;

      // Создаем элемент для отзыва
      const reviewItem = document.createElement("div");
      reviewItem.className = "review-item";
      reviewItem.innerHTML =
        "<p>" +
        text +
        '</p><button class="delete-button" onclick="deleteReview(\'' +
        product +
        "', '" +
        text +
        "')\">Удалить</button>";
      reviewList.appendChild(reviewItem);
    }
  }
}

// Загружаем список отзывов при загрузке страницы
loadReviews();
