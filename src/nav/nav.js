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
    navItem.addEventListener('click', (e) => {
      return e.target.value;
    });
    navItem.textContent = item;
    navList.appendChild(navItem);
  });

  navbar.appendChild(navList);
  return navbar;
};

export default nav;
