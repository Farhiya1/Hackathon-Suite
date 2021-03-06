// User signup form handler sending through new user info to database through a click of  abutton.
const signupFormHandler = async function (event) {
  event.preventDefault();

  const useremailEl = document.querySelector("#email-input-signup");
  const usernameEl = document.querySelector("#username-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");
  const bioEl = document.querySelector("#bio-input-signup");
  fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      email: useremailEl.value,
      username: usernameEl.value,
      password: passwordEl.value,
      bio: bioEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
