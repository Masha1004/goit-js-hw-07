const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  if (e.target.value) {
    span.textContent = e.target.value.trim();
  } else {
    span.textContent = "Anonymous";
  }
});
