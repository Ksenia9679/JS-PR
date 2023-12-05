'use strict'

let wrapper = document.querySelector('.wrapper')
let date_arrow_left = document.querySelector('.date__arrow--left')
let date_arrow_right = document.querySelector('.date__arrow--right')
let date_info = document.querySelector('.month_year')

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", 
"Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

let delta = 0

const date = new Date()
const curMonth = date.getMonth()
const curYear = date.getFullYear()
const curDay = date.getDate()

function updateCalendar(delta = 0) {

    let uls = document.querySelector('.calendar')
    if (uls) {
        uls.remove()
    }

    let ul = document.createElement('ul')
    ul.classList.add('calendar')

    const lastDayOfMonth = new Date(curYear, curMonth + 1 + delta, 0);
    
    const nameOfMonth = lastDayOfMonth.getMonth()
    const yearOfMonth = lastDayOfMonth.getFullYear()
    const countDaysOfMonth = lastDayOfMonth.getDate();

    for (let i = 1; i <= countDaysOfMonth; i++) {
        let li = document.createElement('li')
        li.textContent = i
        li.classList.add('calendar__item')

        if (curMonth === lastDayOfMonth.getMonth() && curYear === lastDayOfMonth.getFullYear() && curDay === i) {
            li.classList.add('active')
        }

        ul.appendChild(li)

        wrapper.appendChild(ul)
    }

    date_info.textContent = `${months[nameOfMonth]} ${yearOfMonth}`
}

updateCalendar(0)

date_arrow_left.addEventListener('click', e => {
    updateCalendar(delta -= 1)
})

date_arrow_right.addEventListener('click', e => {
    updateCalendar(delta += 1)
})