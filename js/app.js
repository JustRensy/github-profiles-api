const API_URL = 'https://api.github.com/users/';
const card = document.querySelector('.card-container');
const form = document.querySelector('.search');

async function getUser(user) {
	const res = await fetch(API_URL + user);
	const data = await res.json();

	createCard(data);
}

function createCard(user) {
	const cardHTML = `
  <div class="card">
    <div class="card-content">
        <div>
          <img src="${user.avatar_url}" alt="${user.name}">
        </div>
        <div>
          <h2>${user.name}</h2>
          <p>${user.bio}</p>
  
          <ul>
            <li><i class="fas fa-heart"></i><strong>${user.followers}</strong></li>
            <li><i class="fas fa-undo"></i><strong>${user.following}</strong></li>
            <li><i class="fas fa-file-archive"></i><strong>${user.public_repos}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  `;

	card.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const user = search.value;

	if (user) {
		getUser(user);
		search.value = '';
	}
});
