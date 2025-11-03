function getFormvalue(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Retrieve input values and trim extra spaces
  const firstName = document.querySelector('input[name="fname"]').value.trim();
  const lastName = document.querySelector('input[name="lname"]').value.trim();

  // Combine first and last name
  const fullName = `${firstName} ${lastName}`.trim();

  // Handle edge cases
  if (!firstName && !lastName) {
    alert("Please enter your First and Last Name.");
    return;
  }

  // Display full name
  alert(fullName);
}
