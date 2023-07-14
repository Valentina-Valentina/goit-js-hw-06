const validationInput = document.querySelector('#validation-input');
const validLength = validationInput.getAttribute("data-length");

validationInput.addEventListener("blur", () => {
    if (validationInput.value.length == validLength) {
        validationInput.classList.add('valid');
        
    } else {
        validationInput.classList.add('invalid');
    }    
});

validationInput.addEventListener("focus", () => {
    validationInput.classList.remove('valid', 'invalid');
});
