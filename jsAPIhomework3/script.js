function getRandomPhoto() {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=diaAKT7Gj6kU1ZEJyTzl-BCJThk4yCKYJ7wHO7jixq0"
    )
      .then((response) => response.json())
      .then((data) => {
        const photo = data.urls.regular;
        const photographerName = data.user.name;

        document.querySelector(".randomPhoto").setAttribute("src", photo);
        document.querySelector(".photographer").textContent = photographerName;
      })
      .catch((error) => console.error("Error fetching random photo:", error));
} 
document.querySelector('.likeButton').addEventListener('click', function () {
    let likeCount = parseInt(document.querySelector('.likeCount').textContent);
    likeCount += 1;
    document.querySelector('.likeCount').textContent = likeCount;
});
getRandomPhoto();
