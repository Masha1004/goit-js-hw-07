const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const form = e.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    const formValues = {
        email,
        password
    }
    
    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    } else {
         console.log(formValues);
         form.reset();
    }
});