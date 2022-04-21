import './home.css';

const home = () => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('home');
  rootDiv.setAttribute('id', 'home');

  const heading = document.createElement('h1');
  heading.textContent = 'The Lemon Club';
  rootDiv.appendChild(heading);

  const about = document.createElement('p');
  about.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo velit similique earum nulla atque unde neque sequi dolorem facilis voluptate architecto, rem vitae dolore sunt libero molestias. Et, perspiciatis?';
  rootDiv.appendChild(about);

  return rootDiv;
};

export default home;
