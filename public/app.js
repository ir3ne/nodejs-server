const appContainer = document.getElementById('root');

// Here is where you can fetch the url you set in server.js for fetching your json file
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
  });
