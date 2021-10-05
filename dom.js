// // EXAMINE THE DOCUMENT OBJECT

// console.dir(document);

// console.log(document.domain); // 127.0.0.1
// console.log(document.URL);
// console.log(document.title);

// document.title = 'New Item Lister';

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// // document.all[10].textContent = 'New Item Lister';

// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// // GET ELEMENT BY ID

// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');

// console.log(headerTitle.textContent); // Item Lister 123
// console.log(headerTitle.innerText); // Item Lister [Consider Style]
// console.log(headerTitle.innerHTML); // Item Lister <span style="display: none;">123</span>

// // headerTitle.innerHTML = '<h3>Hello, Lister</h3>';

// header.style.borderBottom = '7px solid #556655';

// // GET ELEMENTS BY CLASS NAME

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// // GET ELEMENTS BY TAG NAME

// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[3].textContent = 'Goodbye 4';
// li[3].style.fontWeight = 'bold';
// li[3].style.backgroundColor = 'yellow';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f2f3f4';
// }

// // QUERY SELECTOR

// const textInput = document.querySelector('input');
// textInput.value = 'Hello World';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// const firstItem = document.querySelector('.list-group-item:first-child');
// firstItem.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// // QUERY SELECTOR ALL

// const titles = document.querySelectorAll('.title');
// console.log(titles);

// console.log(titles[0].textContent);
// console.log(titles[1].textContent);

// titles[0].textContent = 'Add New Items';
// titles[1].textContent = 'Listed Items';

// const oddListItems = document.querySelectorAll(
//     '.list-group-item:nth-child(odd)'
// );

// oddListItems.forEach((item) => {
//     item.style.backgroundColor = '#fcfcfc';
// });

// // TRAVERSING THE DOM

// const itemList = document.querySelector('#items');

// // PARENT NODE

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '#361224';
// itemList.style.color = '#361224';
// itemList.parentNode.style.color = '#fff';

// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode);

// // PARENT ELEMENT

// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement.parentElement);
// console.log(
//     itemList.parentElement.parentElement.parentElement.parentElement
//         .parentElement
// );

// // CHILD NODES

// console.log(itemList.childNodes); // Don't Use
// console.log(itemList.childElementCount);

// // CHILDREN

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FIRST CHILD

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello - 1';

// // LAST CHILD

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'GoodBye - 4';

// // NEXT SIBLING

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// // PREVIOUS SIBLING

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// // CREATE ELEMENT

// const newDiv = document.createElement('div');
// newDiv.className = 'hello'; // ADD CLASS
// newDiv.id = 'hello-1'; // ADD ID
// newDiv.style.fontSize = '30px';
// newDiv.setAttribute('title', 'Hello Div'); // ADD ATTRIBUTE

// // CREATE TEXT NODE

// const newDivText = document.createTextNode('Hello World');

// // ADD TEXT TO DIV

// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// console.log(newDiv);

// CLICK EVENT

// document.getElementById('button').addEventListener('click', (e) => {
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);

//     const output = document.querySelector('#output');
//     output.innerHTML = `<h3>${e.target.className}</h3>`;

//     console.log(e.type);
//     console.log(e.clientX, e.clientY);
//     console.log(e.offsetX, e.offsetY);

//     console.log(e.altKey); // ALT + CLICK => TRUE | CLICK => FALSE
//     console.log(e.ctrlKey); // CTRL + CLICK => TRUE | CLICK => FALSE
//     console.log(e.shiftKey); // SHIFT + CLICK => TRUE | CLICK => FALSE
// });

const button = document.querySelector('#button');
const box = document.querySelector('#box');
const output = document.querySelector('#output');
const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const select = document.querySelector('select');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // Only Over the Box Element Excluding Child Element
// box.addEventListener('mouseout', runEvent); // Only Out the Box Element Excluding Child Element

// box.addEventListener('mousemove', runEvent);

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent); // Input on TextBox, MailBox, Etc.

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    // console.log(e);
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    // document.body.style.display = 'none';
    // console.log(e.target.value + e.key);
    // output.innerHTML = `<h3>${e.target.value + e.key}</h3>`;
    // output.innerHTML = `<h3>X: ${e.offsetX} <br> Y: ${e.offsetY}</h3>`;
    // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
