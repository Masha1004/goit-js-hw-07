const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value) {
    span.textContent = value;
  } else {
    span.textContent = "Anonymous";
  }
});
