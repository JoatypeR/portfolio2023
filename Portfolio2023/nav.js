//Hamburger Animation
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
});
//End of Hamburger Animation

//Menu Options Appear
$("#hamburger").click(function(){
  $(".menu-options").animate({
    width: 'toggle', 
    opacity: 'toggle',
    display: 'block'
  },300);
}); 
//End of Menu Options Appear

//transition
$(document).ready(function() {
  $('a').click(function(e) {
      e.preventDefault();
      var href = $(this).attr('href');
      $('.menu-options').fadeOut(1000, function() {
          window.location = href;
      });
  });
});

// Récupère les éléments du formulaire
const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitButton = document.getElementById('submit-button');
const statusMessage = document.getElementById('status-message');

// Validation du formulaire
function validateForm() {
  let isValid = true;

  // Vérifie si le nom est vide
  if (name.value.trim() === '') {
    statusMessage.textContent = 'Veuillez saisir votre nom.';
    isValid = false;
  }

  // Vérifie si l'adresse e-mail est valide
  if (email.value.trim() === '' || !isValidEmail(email.value.trim())) {
    statusMessage.textContent = 'Veuillez saisir une adresse e-mail valide.';
    isValid = false;
  }

  // Vérifie si le message est vide
  if (message.value.trim() === '') {
    statusMessage.textContent = 'Veuillez saisir votre message.';
    isValid = false;
  }

  return isValid;
}

// Vérifie si l'adresse e-mail est valide
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Envoie les données du formulaire
function sendFormData() {
  const formData = new FormData(form);

  fetch('submit.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Une erreur est survenue.');
    }
    statusMessage.textContent = 'Le formulaire a été envoyé avec succès !';
    form.reset();
  })
  .catch(error => {
    statusMessage.textContent = error.message;
  });
}

// Événement de soumission du formulaire
form.addEventListener('submit', event => {
  event.preventDefault();
  
  if (validateForm()) {
    submitButton.disabled = true;
    statusMessage.textContent = 'Envoi en cours...';
    sendFormData();
    submitButton.disabled = false;
  }
});
