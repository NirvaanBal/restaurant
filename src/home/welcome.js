import './home.css';

const home = () => {
  const rootDiv = document.createElement('div');
  rootDiv.classList.add('home');
  rootDiv.setAttribute('id', 'home');

  const heading = document.createElement('h1');
  heading.textContent = 'The Lemon Club';
  rootDiv.appendChild(heading);

  const about = document.createElement('p');
  about.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo velit similique earum nulla atque unde neque sequi dolorem facilis voluptate architecto, rem vitae dolore sunt libero molestias. Et, perspiciatis?<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum laudantium sit vero quidem quae dignissimos cumque eveniet ducimus eaque! Laudantium nesciunt ducimus, pariatur, totam magnam quos provident quaerat aut cum in odio, quisquam quia magni porro eaque quas eum quidem facere. Dolores cumque incidunt earum corporis perferendis quae tempore, autem voluptatem possimus voluptas eaque provident. Omnis maxime eveniet eos enim temporibus, neque velit expedita quae sed minima accusantium explicabo itaque ex iusto, id ad soluta laborum, eum voluptatibus quod.<br><br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quisquam quas consectetur modi quos, saepe similique eius aliquam, quia ex, cupiditate debitis voluptatibus natus at nobis repellendus sunt esse repellat omnis exercitationem. Eveniet qui hic dolorum iure ratione quis rem ipsa laudantium, at minima veritatis voluptates temporibus amet, repellat eum, maxime quisquam similique facere mollitia officiis animi magni dolores vel nostrum? Consequuntur tempora voluptatibus dolor, quisquam officia mollitia id perferendis iure corrupti. Nesciunt officia eum ullam necessitatibus non facere et provident magnam, beatae repellendus culpa voluptatem enim sapiente modi possimus similique sit, exercitationem rerum odio! Eligendi quaerat quis ipsum minus!';

  rootDiv.appendChild(about);

  return rootDiv;
};

export default home;
