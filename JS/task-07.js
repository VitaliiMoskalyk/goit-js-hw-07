// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании
// ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('span');

inputRef.addEventListener('input',changing);

function changing() {
    textRef.style.fontSize = `${inputRef.value*0.32}px`;
};