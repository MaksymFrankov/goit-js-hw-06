let counterValue = 0;

const incrementCounter = document.querySelector('[data-action="increment"]');
const decrementCounter = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrementCounter.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

decrementCounter.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

