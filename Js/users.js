const searchBar = document.querySelector('.users .search input'),
  searchBtn = document.querySelector('.users .search button'),
  usersList = document.querySelector('.users .users-list');

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('active');
  searchBtn.classList.toggle('active');
  searchBar.focus();
  searchBar.value = '';
});

searchBar.addEventListener('keyup', () => {
  let searchTerm = searchBar.value;
  if (searchTerm != '') {
    searchBar.classList.add('active');
  } else {
    searchBar.classList.remove('active');
  }
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'php/search.php', true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        let data = xhr.response;
        usersList.innerHTML = data;
      }
    }
  };
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send('searchTerm=' + searchTerm);
});

setInterval(() => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'php/users.php', true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status == 200) {
        let data = xhr.response;
        if (!searchBar.classList.contains('active')) {
          usersList.innerHTML = data;
        }
      }
    }
  };
  xhr.send();
}, 500);
