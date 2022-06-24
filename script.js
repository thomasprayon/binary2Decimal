'use strict';
const inputValue = document.getElementById('binaryToDecimal');
const decimalBtn = document.querySelector('.btn');
const result = document.getElementById('resultToDecimal');

decimalBtn.addEventListener('click', () => {
    const getValue = inputValue.value;
    let totalDecimal = 0;
    result.classList.remove('error-message');
    if (!getValue.match(/^[0-1]+$/)) {
        result.innerHTML = `<h2>Please enter valid character 0 or 1</h2>`;
        result.classList.add('error-message');
        return;
    } else {
        getValue
            .split('')
            .reverse()
            .map((element, index) => {
                totalDecimal += element * Math.pow(2, index);
                result.innerHTML = `<h2 class="total">Total: ${totalDecimal}</h2>`;
            });
    }
});
