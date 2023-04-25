// DOM 

// getElementById
// const heading = document.getElementById('main-heading');
// console.log(heading); 

// getElementsByClassName
// const listItem = document.getElementsByClassName('list-item');
// console.log(listItem);

// querySelector => class having same name then select only first class.
// const listItem = document.querySelector('.list-item');
// console.log(listItem);

// querySelectorAll
// const listItem = document.querySelectorAll('list-item');
// console.log(listItem); 


// Styling elements 
// const heading = document.querySelector('#main-heading');
// heading.style.color = 'red';
// console.log(heading);

// styling multiple elements 
// const listItem = document.querySelectorAll('.list-item');

// for (let i = 0; i < listItem.length; i++) {
//     listItem[i].style.fontSize = '2rem';
    
// }

// creating elements
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

//adding elements
// ul.append(li);

// modifying the text
// const firstListItem = document.querySelector('.list-item');
// console.log(firstListItem.innerText);
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.innerContent);

// li.innerText = 'x-men';

// modifying attributes
// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));
// li.classList.add('list-item');
// li.classList.remove('list-item')

// Remove elements 
// li.remove();


// traverse the DOM 
// parent node traversal 
// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement); //null


// child node traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// or you can also use below code for 
// better results
// console.log(ul.firstElementChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = 'red';

// console.log(ul.children)


// sibling node traversal  
// let ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes)
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


// ==========================
// Exercise-2: Event listener
// ========================== 

// different ways to use event listener 
// const btn = document.querySelector('.btn-2');
// function alertMsg() {
//     alert('i am also love js');
// }
// btn.addEventListener('click',alertMsg);

// const newBgColor = document.querySelector('.box-3');
// function changeBgColor(){
//     newBgColor.style.backgroundColor = 'red';
// }
// newBgColor.addEventListener('click',changeBgColor);


// ==========================
// event delegation
// ========================== 

// it allows users to append a SINGLE event listener 
// to a parent element that adds it to all of its
// present AND future descendants that match a selector

const sports = document.querySelector('#sports');
sports.addEventListener('click',function(e){
 console.log(e.target.getAttribute('id') + ' is clicked');
 const target = e.target;
 if (target.matches('li')) {
    target.style.backgroundColor = 'gray';
 }

})

// future descendants that match a selector
const newSport = document.createElement('li');
newSport.innerText = 'cricket';
newSport.setAttribute('id','cricket');
sports.append(newSport);
