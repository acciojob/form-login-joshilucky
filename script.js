function getFormvalue(event) {
  event.preventDefault(); // stop page refresh

  const firstName = document.querySelector('input[name="fname"]').value;
  const lastName = document.querySelector('input[name="lname"]').value;

  alert(firstName + ' ' + lastName);
}

// add listener properly to pass event
document.getElementById('myForm').addEventListener('submit', getFormvalue);
