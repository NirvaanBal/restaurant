import './contact.css';

const contact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  contact.setAttribute('id', 'contact');

  contact.textContent = 'CONTACT';

  return contact;
};

export default contact;
