"use strict"

let input = document.querySelector('.input')
let keys = document.querySelectorAll('.keyboard_key')
let caps = document.querySelector('.keyboard__caps')

keys.forEach(key => {
    key.addEventListener('click', e => {
        input.value += e.target.textContent
    })
});

caps.addEventListener('click', e => {
    input.value = input.value.toUpperCase()
})