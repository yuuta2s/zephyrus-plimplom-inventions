console.log("contact_form.js loaded");
/*
    This file is responsible for handling the contact form.
*/

/*
    This function is responsible for handling the form submission.
    It gets the form data from the DOM and displays an alert if the form is submitted.
    TODO: Implement this function.
*/

function handleFormSubmit(event) {

  event.preventDefault();

  let formulaire = document.getElementById("formulaire");
  let name = formulaire.elements["name"].value;
  let email = formulaire.elements["email"].value;
  let message = formulaire.elements["message"].value;

  if (!name || !email || !message) {
    alert("Erreur, veuillez remplir les champs manquants");
    //error
  } else {
    alert(
      `Merci ${name} pour votre message! Nous vous contacterons bientôt sur l'adresse mail ${email}. !`
    );
  }
}

// Prevent the default form submission
// Get the form data from the DOM
// Check if the form data is valid (all fields are filled in)
// Send alert if the form data is valid and the form is submitted
// "Merci <Name> pour votre message! Nous vous contacterons bientôt sur l'adresse mail : <Email>. !"
// Clear the form fields
// Handle Error if the form data is not valid

