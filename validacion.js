//Haz tú validación en javascript acá
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  // Aquí puedes agregar el código para enviar el formulario o realizar alguna otra acción

  form.reset();
});

function validateEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}
