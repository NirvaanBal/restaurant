import './menu.css';
import drink1 from '../assets/drink1.jpg';

const menu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.setAttribute('id', 'menu');

  const heading = document.createElement('h2');
  heading.textContent = 'Menu';

  menu.appendChild(heading);

  const drinks = document.createElement('ul');
  for (let i = 1; i <= 1; i++) {
    const drink = document.createElement('li');
    const image = new Image();
    image.src = drink1;
    drink.appendChild(image);
    drinks.appendChild(drink);
  }

  menu.appendChild(drinks);

  return menu;
};

export default menu;
