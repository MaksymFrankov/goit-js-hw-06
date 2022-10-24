let counterValue = 0;

const decrementCounter = document.querySelector('[data-action="decrement"]');
const incrementCounter = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

// console.log(valueEl);

decrementCounter.addEventListener('click', () => {
    counterValue -= 1;
    // console.log(counterValue);
    valueEl.textContent = counterValue;
});

incrementCounter.addEventListener('click', () => {
    counterValue += 1;
    // console.log(counterValue);
    valueEl.textContent = counterValue;
});
