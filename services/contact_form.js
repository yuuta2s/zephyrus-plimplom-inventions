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
  // Prevent the default form submission
  event.preventDefault();
  // console.log(event);

  // Get the form data from the DO

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // console.log(message);

  // Check if the form data is valid (all fields are filled in)

  if (name === ``) {
    alert(`Vous devez compléter votre nom`);
  } else if (email === ``) {
    alert(`Vous devez entrer votre email`);
  } else if (message === ``) {
    alert(`Vous devez entrer un message`); 
  }
  // Send alert if the form data is valid and the form is submitted
  // "Merci <Name> pour votre message! Nous vous contacterons bientôt sur l'adresse mail : <Email>. !"
  else {
    alert(`Merci ${name} pour votre message! Nous vous contacterons bientôt sur l'adresse mail : ${email} !`)
  }



  // Clear the form fields
  // Handle Error if the form data is not valid
}


