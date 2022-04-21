import nav from './nav/nav';
import home from './home/welcome';
import menu from './menu/menu';
import contact from './contact/contact';
import './index.css';

const main = () => {
  const root = document.getElementById('content');
  root.appendChild(nav());
  root.appendChild(home());
  root.appendChild(menu());
  root.appendChild(contact());

  return root;
};

main();
