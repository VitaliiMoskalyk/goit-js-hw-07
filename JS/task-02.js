// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй
// document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//получаю доступ к узлу <ul>
const ulElement = document.querySelector('#ingredients');

//Создаю ф-ию для создания <li> элемент массива </li>
function createTagsAndStrings(array) {
  const arrayOfTags = [];

  array.forEach(element => {
  const liTag= document.createElement('li');
  liTag.textContent = element;
  arrayOfTags.push(liTag);
  });
  
   return arrayOfTags;
};


//Присоединяю все <li>-шки к <ul>
ulElement.append(...createTagsAndStrings(ingredients));