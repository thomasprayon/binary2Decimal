'use strict';
const inputValue = document.getElementById('binaryToDecimal');
const decimalBtn = document.querySelector('.btn');
const result = document.getElementById('resultToDecimal');

decimalBtn.addEventListener('click', () => {
    console.log('click happening');
    let totalDecimal = 0;
    const getValue = inputValue.value;
    const makeItArr = getValue
        .split('')
        .reverse()
        .forEach((element, index) => {
            if (element === '0' || element === '1') {
                const calcBinary = element * 2 ** index;
                totalDecimal += calcBinary;
                result.textContent = totalDecimal;
            } else {
                result.textContent = 'Please enter 1 or 0 characters';
            }
        });
});
