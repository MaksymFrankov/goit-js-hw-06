const formLogin = document.querySelector('.login-form');
let   data = {
        Email: null,
        Password: null,
}
formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Поле не заполнено!");
    }
    data = {
        Email: email.value,
        Password: password.value,
    }
    alert(JSON.stringify(data, null, 3));
    event.currentTarget.reset();

    
});
