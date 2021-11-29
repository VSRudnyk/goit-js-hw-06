// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const controlContainerEl = document.querySelector('#controls');
const inputNumberEl = controlContainerEl.firstElementChild;
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

let amount = 0;
inputNumberEl.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

//  Переодически при генерации случайного цвета в HEX, генератор выдает вместо 6-ти символов 5!
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//  Альтернативный, рабочий, генератор случайного цвета.
function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

function createBoxes() {
  for (let i = 1; i <= amount; i += 1) {
    boxesEl.insertAdjacentHTML('beforeend', `<div style="width: ${i * 10 + 20 + 'px'}; height: ${i * 10 + 20 + 'px'}; background-color: ${colorGen()};"></div>`);
    
// ============== Альтернативный вариант ========================
    
    // const markup = document.createElement("div");
    // markup.style.width = (i * 10 + 20) + 'px';
    // markup.style.height = (i * 10 + 20) + 'px';
    // markup.style.backgroundColor = getRandomHexColor();
    // boxesEl.append(markup);
  };
};

function destroyBoxes() {
  boxesEl.innerHTML = '';
};

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);