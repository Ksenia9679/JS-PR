'use strict';

let timeoutId; //Переменная для таймера 
const timer = document.querySelector('#timer') 
let remain_time = 50; 

//Таймер 
function DownTimer(remain_time, timer) { 
    timer.textContent = `${remain_time}`
    if (remain_time <= 0) { 
        alert('Вы проиграли') 
    } else { 
        timeoutId = setTimeout(() => { 
            remain_time--; 
            DownTimer(remain_time, timer); 
        }, 1000); 
    } 
} 

const game_board = document.querySelector('.game_board') 

//Случайные ячейки
const random_ceils_arr = [] 
while (random_ceils_arr.length < 11) { 
    const randomCell = Math.floor(Math.random() * 100) 
    if (!random_ceils_arr.includes(randomCell)) { 
        random_ceils_arr.push(randomCell) 
    } 
} 
let remain_click = 10; 

//Ячейки
DownTimer(remain_time, timer); 
for (let i = 0; i < 100; i++) { 
    const ceil = document.createElement('div') 
    ceil.className = 'ceil'; 
    ceil.dataset.id = i; 

    ceil.addEventListener('click', e => { 
        const ceil_event = e.target; 
        if (!ceil_event.classList.contains("clicked")) { 
            ceil_event.classList.add('clicked') 

            if (random_ceils_arr.includes(+ceil_event.dataset.id)) { 
                remain_click--; 
                if (remain_click === 0) { 
                    alert('Поздравляю, вы выиграли!') 
                    clearTimeout(timeoutId); 
                } else {
                    ceil_event.style.backgroundColor = 'green';
                }
            } 
        } 
    }) 

    game_board.appendChild(ceil); 
}