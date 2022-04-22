import './menu.css';
import drink1 from '../assets/drink1.jpg';
import drink2 from '../assets/drink2.jpg';
import drink3 from '../assets/drink3.jpg';
import drink4 from '../assets/drink4.jpg';

const menu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.setAttribute('id', 'menu');

  const heading = document.createElement('h2');
  heading.textContent = 'Menu';

  menu.appendChild(heading);

  const drinksArray = [
    {
      drink: drink1,
      title: 'The Green Slush',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam!',
    },
    {
      drink: drink2,
      title: 'Blueberry Shake',
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      drink: drink3,
      title: 'The Royal Mango',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam!',
    },
    {
      drink: drink4,
      title: 'Virgin Mojito',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam!',
    },
    {
      drink: drink1,
      title: 'The Green Slush',
      about:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laboriosam!',
    },
  ];

  const drinks = document.createElement('ul');
  let counter = 1;
  for (let drink of drinksArray) {
    const drinkItem = document.createElement('li');
    const drinkImg = new Image();
    drinkImg.src = drink.drink;
    drinkItem.appendChild(drinkImg);

    const aboutDiv = document.createElement('div');

    const drinkTitle = document.createElement('h4');
    drinkTitle.textContent = drink.title;
    aboutDiv.appendChild(drinkTitle);

    const drinkCaption = document.createElement('p');
    drinkCaption.textContent = drink.about;
    aboutDiv.appendChild(drinkCaption);

    drinkItem.appendChild(aboutDiv);
    drinks.appendChild(drinkItem);
    counter++;
  }

  menu.appendChild(drinks);

  return menu;
};

export default menu;
