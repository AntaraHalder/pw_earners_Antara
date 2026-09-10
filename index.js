

// code 1
let heading = document.getElementById("title");

heading.textContent = "Hello JavaScript";


//   code 2

let items = document.querySelectorAll(".item");
items.forEach(item => {
    item.style.color = "blue";
});


// code 3

let paragraph = document.querySelector(".description");
paragraph.textContent = "New Description";


// code 4

let messageElement = document.getElementById("message");
messageElement.textContent = "Welcome to JavaScript!";


// code 5


let container = document.getElementById("container");
container.innerHTML = ` `;


//   code 6

  let img = document.getElementById("profileImage");
  img.setAttribute("src", "new.jpg");
  img.setAttribute("alt", "New Image");



// code 7


let button = document.getElementById("btn");

button.classList.add("active");

button.classList.remove("active");

// code 8


let heading1 = document.getElementById("heading1");
heading1.style.color = "blue";
heading1.style.fontSize = "32px";
heading1.style.backgroundColor = "lightgray";



// code 9


let productButton = document.getElementById("productBtn");
let productId = productButton.dataset.id;

console.log(productId);



// code 10


let newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created using JavaScript.";

document.body.appendChild(newParagraph);



// code 11


let list1 = document.getElementById("skills");

let item1 = document.createElement("li");
item1.textContent = "HTML";
list1.appendChild(item1);

let item2 = document.createElement("li");
item2.textContent = "CSS";
list1.appendChild(item2);

let item3 = document.createElement("li");
item3.textContent = "JavaScript";
list1.appendChild(item3);



// code 12


let list2 = document.getElementById("list");


let firstItem = document.createElement("li");
firstItem.textContent = "HTML";

let lastItem = document.createElement("li");
lastItem.textContent = "React";


list2.prepend(firstItem);
list2.append(lastItem);



// code 13


let list = document.getElementById("skillsList");

let secondItem = document.getElementById("js");

let newItem = document.createElement("li");
newItem.textContent = "CSS";

list.insertBefore(newItem, secondItem);


// code 14

  
  const item = document.getElementById("itemToRemove");
  item.remove();


// code 15

  const originalBtn = document.getElementById("btn");

  const clonedBtn = originalBtn.cloneNode(true);

  document.body.appendChild(clonedBtn);
