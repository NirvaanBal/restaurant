import './nav.css';

const nav = () => {
  const navbar = document.createElement('div');
  navbar.classList.add('nav');

  const title = document.createElement('h3');
  title.textContent = 'The Lemon Club';
  navbar.appendChild(title);

  const navList = document.createElement('ul');
  ['home', 'menu', 'contact'].forEach((item) => {
    const navItem = document.createElement('li');
    navItem.addEventListener('click', () => {
      if (item === 'home') {
        document.querySelector('#home').style.display = 'block';
        document.querySelector('#menu').style.display = 'none';
        document.querySelector('#contact').style.display = 'none';
      } else if (item === 'menu') {
        document.querySelector('#menu').style.display = 'block';
        document.querySelector('#home').style.display = 'none';
        document.querySelector('#contact').style.display = 'none';
      } else if (item === 'contact') {
        document.querySelector('#contact').style.display = 'block';
        document.querySelector('#home').style.display = 'none';
        document.querySelector('#menu').style.display = 'none';
      }
    });
    navItem.textContent = item;
    navList.appendChild(navItem);
  });

  navbar.appendChild(navList);
  return navbar;
};

export default nav;
