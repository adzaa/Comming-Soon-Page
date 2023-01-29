function submit() {
  const email = document.querySelector(`input[name="email"]`).value;
  const input = document.querySelector(`input`);
  const error = document.getElementById("email-error");

  if (email === "") {
    input.style.border = "1px solid var(--secondary-light-red)";
    error.style.display = "block";
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    console.log("email sent");
    error.style.display = "none";
    input.style.border = "";
  } else {
    input.style.border = "1px solid var(--secondary-light-red)";
    error.innerHTML = "Please provide a valid email address";
    error.style.display = "block";
  }
}
