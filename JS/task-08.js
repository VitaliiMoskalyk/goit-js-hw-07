// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.При нажатии на
// кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число.Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes

const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');


renderRef.addEventListener('click', getNumber);
destroyRef.addEventListener('click',removeNumber)

//получаю введенное число и сразу вызываю ф-ию создания коробок
function getNumber() {
    renderRef.removeEventListener('click', getNumber);
    Number(inputRef.value) <= 100 && Number(inputRef.value) > 0 ? inputRef.value : inputRef.value = '';
    createBoxes();
};


//создаю коробки с размерами и случайными цветами
function createBoxes() {
    let startPx = 30;
for (let i = 0; i < Number(inputRef.value); i++){
    let el = document.createElement('div');
    
    el.style.width = startPx+'px';
    el.style.height = startPx+'px';
    startPx += 10;
    el.style.backgroundColor ='#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    
    boxesRef.append(el);
    };
};



//удаление числа и вызов удаления коробок
function removeNumber() {
    renderRef.addEventListener('click', getNumber);
    destroyBoxes();
    return inputRef.value = '';
};

//удаление коробок и перезагрузка страницы
function destroyBoxes() {
    boxesRef.remove();
    location.reload();

};




