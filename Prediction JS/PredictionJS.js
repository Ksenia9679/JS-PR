"use strict"

const predictions = [
    "Стремитесь к успеху и выглядите так, словно вы его уже достигли.",
    "Лучшее всегда является врагом хорошего.",
    "Ничего не может быть смешнее, чем нравиться всем и каждому.",
    "Чем мы наполняем наши молитвы, то нам и причитается.",
    "Разница между победителем и побежденным только в том, что первый поднялся больше раз, чем упал.",
    "Каждый дарованный нам день является первым в том отрезке жизни, что нам остался.",
    "Не стоит тратить время и силы на мелочи, нужно думать о главном.",
    "Все не так гладко, как того бы хотелось, но намного лучше, чем могло бы быть.",
    "Нужно делать то, что ты должен делать. И пусть все будет так, как будет.",
    "Определитесь с конечной целью – и у вас появится шанс на победу.",
    "Обратной стороной каждого поражения являются открывающиеся новые возможности.",
    "Стать твоим другом дано не каждому, но каждому дано стать чьим-то учителем.",
    "Чтобы быть поистине счастливым – властвуй над своими помыслами.",
    "Каждому из нас дается столько блага, сколько он сам дал другим.",
    "День может начаться с неожиданных трудностей, но они будут преодолимы.",
    "Каким бы огромным ни было расстояние – оно начинается с первого шага.",
    "Пусть тебя не страшит неумение. Делая с желанием – научишься.",
    "Лучше сделать и пожалеть о сделанном, чем не сделать и сожалеть о не сделанном.",
    "Стоя на месте, двигаться можно только назад.",
    "Что бы ни случилось, все в конечном итоге приведет к лучшему."
];

const text = document.querySelector('#text')
const button_start = document.querySelector('#start')
const button_stop = document.querySelector('#stop')
const timer_text = document.querySelector('#timer')

let timerId

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startTimer() {
    timerId = setInterval(function() {
        let randomInt = getRandomInt(1, 21)

        timer_text.textContent = randomInt
    }, 100)

}

button_start.addEventListener('click', e => {
    button_start.classList.remove('active')
    button_stop.classList.add('active')

    startTimer()

})

button_stop.addEventListener('click', e => {
    clearInterval(timerId)
    button_stop.classList.remove('active')
    
    text.textContent = predictions[timer_text.textContent - 1]
})
