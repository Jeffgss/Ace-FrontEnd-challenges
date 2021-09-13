const mainCreets = document.querySelector(".creets");

const loadData = async () => {
  try {
    const url = "https://www.acefrontend.com/c/critter/feed.json";
    const response = await fetch(url);
    const data = await response.json();
    const feed = data.feed;
    return feed;
  } catch (err) {
    console.error(err);
  }
};

const createCard = (post) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src=${post.user.avatar}/>
    <div class="userContent">
    <h2>@${post.user.username} <span>· ${post.created_at.slice(
    4,
    10
  )}</span> </h2>
    <p> ${post.text} </p>
    <span> Likes: ${post.likes} </span>
    </div>
  `;
  mainCreets.appendChild(card);
};

(async () => {
  const feed = await loadData();
  feed.forEach((post) => {
    createCard(post);
  });
})();
