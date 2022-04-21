import menu from './menu/menu';
import home from './home/welcome';
import './index.css';

const main = () => {
  const root = document.getElementById('content');
  root.appendChild(menu());
  root.appendChild(home());

  return root;
};

main();
