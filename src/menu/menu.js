import './menu.css';

const menu = () => {
  const menubar = document.createElement('div');
  menubar.classList.add('menu');

  const title = document.createElement('h3');
  title.textContent = 'The Lemon Club';
  menubar.appendChild(title);

  const menu = document.createElement('ul');
  ['home', 'menu', 'contact'].forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    menu.appendChild(menuItem);
  });

  menubar.appendChild(menu);
  return menubar;
};

export default menu;
