const inputTag = document.querySelector('#validation-input');

// console.log(inputTag);

inputTag.addEventListener('blur', () =>
 { 
    if (inputTag.value.length === Number(inputTag.dataset.length)) {
        inputTag.classList.add('valid');
        inputTag.classList.remove('invalid');
        return
    }
    else inputTag.classList.add('invalid');
         inputTag.classList.remove('valid');
});
