let input = document.querySelector('#id');
let list = document.querySelector('#list');

input.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        let li = document.createElement('li');

        let task = document.createElement('span');
        task.classList.add('task');
        task.textContent = this.value;
        task.addEventListener('dblclick', function() {
            let inner_input = document.createElement('id')
            inner_input.textContent = task.textContent
            task.textContent = ''
            li.insertBefore(inner_input, remove)

            inner_input.addEventListener('keypress', e => {
                if (e.key == 'Enter') { 
                    inner_input.remove()
                    task.textContent = inner_input.value
                }
            })
        });
        li.appendChild(task);

        let remove = document.createElement('span');
        remove.classList.add('remove');
        remove.textContent = 'Удалить';
        remove.addEventListener('click', function () {
            li.remove()
        });

        li.appendChild(remove);

        let mark = document.createElement('span');
        mark.classList.add('mark');
        mark.textContent = 'Сделано';
        mark.addEventListener('click', function() {
            task.classList.toggle('done')
        });
        li.appendChild(mark);

        list.appendChild(li);

        this.value = '';
    }
});