const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return console.log("Поле не заполнено!");
    } else
        console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
});
