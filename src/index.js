import nav from './nav/nav';
import home from './home/welcome';
import './index.css';

const main = () => {
  const root = document.getElementById('content');
  root.appendChild(nav());
  root.appendChild(home());

  return root;
};

main();
