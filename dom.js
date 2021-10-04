// EXAMINE THE DOCUMENT OBJECT

console.dir(document);

console.log(document.domain); // 127.0.0.1
console.log(document.URL);
console.log(document.title);

document.title = 'New Item Lister';

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

// document.all[10].textContent = 'New Item Lister';

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// GET ELEMENT BY ID

const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');

console.log(headerTitle.textContent); // Item Lister 123
console.log(headerTitle.innerText); // Item Lister [Consider Style]
console.log(headerTitle.innerHTML); // Item Lister <span style="display: none;">123</span>

// headerTitle.innerHTML = '<h3>Hello, Lister</h3>';

header.style.borderBottom = '7px solid #556655';

// GET ELEMENTS BY CLASS NAME

const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

// GET ELEMENTS BY TAG NAME

const li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[3].textContent = 'Goodbye 4';
li[3].style.fontWeight = 'bold';
li[3].style.backgroundColor = 'yellow';

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#f2f3f4';
}

// QUERY SELECTOR

const textInput = document.querySelector('input');
textInput.value = 'Hello World';

const submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

const firstItem = document.querySelector('.list-group-item:first-child');
firstItem.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERY SELECTOR ALL

const titles = document.querySelectorAll('.title');
console.log(titles);

console.log(titles[0].textContent);
console.log(titles[1].textContent);

titles[0].textContent = 'Add New Items';
titles[1].textContent = 'Listed Items';

const oddListItems = document.querySelectorAll(
    '.list-group-item:nth-child(odd)'
);

oddListItems.forEach((item) => {
    item.style.backgroundColor = '#fcfcfc';
});
