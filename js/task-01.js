// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).


const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);

itemEl.forEach(function (number, index) {
    console.log('Category:', number.firstElementChild.textContent);
    console.log('Elements', number.lastElementChild.children.length);
});


