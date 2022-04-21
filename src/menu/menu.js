import './menu.css';

const menu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.setAttribute('id', 'menu');

  menu.textContent = 'MENU';

  return menu;
};

export default menu;
