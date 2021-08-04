const api = "https://www.acefrontend.com/c/critter/feed.json";
const mainCreets = document.querySelector(".creets");

function init() {
  fetch(api)
    .then((response) => {
      response.json().then((data) => {
        feed = data.feed;

        function criaItem(feed) {
          const card = document.createElement("div");
          card.classList.add("card");

          card.innerHTML = `
            <img src=${feed.user.avatar}/>
            <div class="userContent">
              <h2>@${feed.user.username} <span>· ${feed.created_at.slice(
            4,
            10
          )}</span> </h2>
              <p> ${feed.text} </p>
              <span> Likes: ${feed.likes} </span>
            </div>
            `;
          mainCreets.appendChild(card);
        }

        feed.forEach((item) => {
          criaItem(item);
        });
      });
    })
    .catch((error) => {
      console.error(error);
      mainCreets.innerHTML = `
      <span class="errorMessage">${error.message}</span>
      `;
    });
}

init();
