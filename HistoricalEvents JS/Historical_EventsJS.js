"use strict"

const historicalEvents = {    
    1914: [
        {
            description: "28.07.1914г Начало Первой мировой войны."
        }
    ],

    1917: [
        {
            description: "Февраль - ноябрь 1917г Великая российская революция"
        },
        {
            description: "Февраль – март 1917г Февральский переворот и падение монархии"
        },
        {
            description: "26 февраля 1917г Расстрел демонстрации на Знаменской площади Петрограда, переход части воинских частей на сторону восставших"
        },
        {
            description: "1 сентября 1917г Провозглашение России республикой"
        }
    ],

    1918: [
        {
            description: "Январь 1918г Cоздание регулярной Красной Армии (РККА)"
        },
        {
            description: "3 марта 1918г Подписание советским правительством Брестского мира с Германией и выход России из Первой мировой войны"
        },
        {
            description: "1918г Признание советским правительством независимости Финляндии"
        }

    ],

    1920: [
        {
            description: "1920г Заключение Советской Россией мирных договоров с Литвой, Латвией и Эстонией."
        },
        {
            description: "Апрель – октябрь 1920г Боевые действия в ходе советско-польской войны"
        },
        {
            description: "Ноябрь 1920г Разгром армии П.Н. Врангеля в Крыму"
        }
    ],

    1921: [
        {
            description: "1921г Рижский мир с Польшей"
        },
        {
            description: "Март 1921г Восстание в Кронштадте"
        }
    ],

    1922: [
        {
            description: "30 декабря 1922 г Создание СССР"
        },
        {
            description: "29.04.1969' Начало конфликта на острове Тайвань между Китаем и Тайванем."
        }
    ],

    1924: [
        {
            description: "1924 г Принятие Конституции СССР"
        }
    ],
    1927: [
        {
            description: "1927г Учреждение звания «Герой Труда»"
        }
    ],

    1930: [
        {
            description: "1930г Ликвидация массовой безработицы, закрытие бирж труда"
        }
    ],

    1932: [
        {
            description: "1932г Введение паспортной системы"
        },
        {
            description: "1932-1933гг Голод в СССР"
        }
    ],

    1936: [
        {
            description: "1936г Принятие новой Конституции СССР"
        }
    ],
};

let table = document.querySelector('.events')
let input = document.querySelector('.input')

function printEvents() {
    let input_value = input.value.toLowerCase()

    let rows = document.querySelectorAll('.events__row')
    rows.forEach(row => {
        if (row) {
            row.remove()
        }
    });


    if (input_value.length > 0) {
        if (historicalEvents[input_value]) {
            let count = 1

            for (const events of historicalEvents[input_value]) {
                let tr = document.createElement('tr');
                tr.classList.add('events__row');
            
                let td_2 = document.createElement('td');
                td_2.classList.add('events__cell');
                td_2.textContent = events['description'];
                tr.appendChild(td_2);

                table.appendChild(tr)
            }
        } else {
            alert(`Попробуйте ввести другой год`)
        }

    }

}

input.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        printEvents()
    }
})