const button = document.querySelector('#hello2');button.addEventListener('click', () => {const h1 = document.createElement('h1');h1.textContent = 'Hello World 2!';document.body.appendChild(h1);});
