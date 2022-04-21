import Image from './restaurant.jpg';

const root = () => {
  const rootDiv = document.createElement('div');

  const heading = document.createElement('h1');
  heading.textContent = 'The Restaurant';
  rootDiv.appendChild(heading);

  const restaurantImage = document.createElement('img');
  restaurantImage.src = Image;
  rootDiv.appendChild(restaurantImage);

  const about = document.createElement('p');
  about.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolores quos provident architecto esse consequuntur natus ut numquam in porro unde quisquam, inventore deleniti aut labore! Fuga libero molestias molestiae.';
  rootDiv.appendChild(about);

  return rootDiv;
};

document.getElementById('content').appendChild(root());
