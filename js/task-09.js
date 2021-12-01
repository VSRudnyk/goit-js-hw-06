// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const bodyEl = document.body;
const colorValueEl = document.querySelector('.color');


btnChangeColorEl.addEventListener('click', () => {
  
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = bodyEl.style.backgroundColor;
  
});
