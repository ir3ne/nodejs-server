const appContainer = document.getElementById('root');

fetch('/users')
  .then(function(r) {
    console.log(r.status);
    return r.json();
  })
  .then(function(datas) {
    datas.forEach(data => {
      const email = document.createElement('div');
      email.textContent = data.email;
      appContainer.appendChild(email);
    });
  })