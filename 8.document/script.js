
const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'hi ~~~~~~ ';

let lists = document.getElementsByTagName('li');
console.log(lists);

lists = Array.from(lists);
console.log(lists);

lists.forEach((list, index) => {
    list.textContent = `${index}. List`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li) => {
    li.style.background = 'black';
})
