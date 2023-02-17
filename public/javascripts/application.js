const favButton = document.querySelector('#favoriteEntryButton');
const deleteButton = document.querySelector('.penis');
const div = document.querySelector('.entry-item pad-b-4');
const { loginForm } = document.forms;
const { registrationForm } = document.forms;

if (favButton) {
  favButton.addEventListener('click', async (event) => {
    const { entryid } = event.target.dataset;
    const response = await fetch(
      `/allnews/${entryid}`,
      {
        method: 'POST',
      },
    );
    const data = await response.json();
    if (data.created) {
      event.target.attributes.class.ownerElement.innerText = 'Успешно добавлено в "favorites"';
      event.target.attributes.class.ownerElement.disabled = true;
      event.target.attributes.class.ownerElement.style.textDecoration = 'none';
    }
    if (!data.created) {
      event.target.attributes.class.ownerElement.innerText = 'Уже было добавлено в "favorites"';
      event.target.attributes.class.ownerElement.disabled = true;
      event.target.attributes.class.ownerElement.style.textDecoration = 'none';
    }
  });
}

if (deleteButton) {
  deleteButton.addEventListener('click', async (event) => {
    if (event.target.tagName === 'BUTTON') {
      const z = event.target.id.slice(6);
      const response = await fetch(
        '/account',
        {
          method: 'delete',
          body: JSON.stringify({ z }),
          headers: { 'Content-Type': 'application/json' },
        },
      );
      const result = await response.json();
      if (result) {
        const li = document.getElementById(z);
        deleteButton.removeChild(li);
      }
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { userName, password } = loginForm;
    const value = { userName: userName.value, password: password.value };
    const response = await fetch(
      '/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value),
      },
    );
    if (response.status === 300) {
      document.location.assign('http://localhost:3000');
    }
  });
}

if (registrationForm) {
  registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, userName, password } = registrationForm;
    const value = { email: email.value, userName: userName.value, password: password.value };
    const response = await fetch('/registration',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(value),
      },
    );
    if (response.status === 300) {
      window.location.replace('/login');
    }
  })
}