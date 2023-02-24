//var li = document.getElementsByTagName('li');
//li[1].style.backgroundColor='red';

//var input = document.querySelector('input[type="submit"]');
//input.value="SEND";

//var items = document.querySelectorAll('li');
//items[0].style.backgroundColor='yellow';

//Traversing DOM

var itemList = document.querySelector('#items');

//console.log(itemList.parentNode.parentNode);
//itemList.parentNode.style.backgroudColor='red';
//console.log(itemList.previousSibling);
//console.log(itemList.parentElement);
//console.log(itemList.parentNode.parentElement);
//console.log(itemList.childNodes);
//console.log(itemList.childElementCount);
//itemList.children[1].style.backgroundColor='red';
//console.log(itemList.firstChild);
//itemList.lastElementChild.textContent='Item.........1';
//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);
//itemList.previousElementSibling.style.color='red';
var newdiv = document.createElement('div');
newdiv.className='Hello';
newdiv.id='Helloid';
newdiv.setAttribute('title','Hello Swe');

var newdivtext = document.createTextNode('Hello World');

newdiv.appendChild(newdivtext);

var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1);

