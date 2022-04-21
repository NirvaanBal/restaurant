import './contact.css';

const contact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  contact.setAttribute('id', 'contact');

  const heading = document.createElement('h2');
  heading.textContent = 'Contact Us';
  contact.appendChild(heading);

  const form = document.createElement('form');

  const emailField = document.createElement('input');
  emailField.setAttribute('type', 'email');
  emailField.setAttribute('placeholder', 'Enter your email...');
  emailField.setAttribute('required', true);
  form.appendChild(emailField);

  const msgField = document.createElement('textarea');
  msgField.setAttribute('placeholder', 'Enter your message');
  msgField.setAttribute('rows', 7);
  msgField.setAttribute('required', true);
  form.appendChild(msgField);

  const btn = document.createElement('button');
  btn.setAttribute('type', 'submit');
  btn.textContent = 'Send';
  form.appendChild(btn);

  contact.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent. We will reach you shortly');
    form.reset();
  });

  return contact;
};

export default contact;
