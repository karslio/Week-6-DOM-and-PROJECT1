function createAndAppend(child, append, text, elclass, src) {
  const el = document.createElement(child);
  append.appendChild(el);
  el.innerHTML = text;
  el.className = elclass;
  el.src = src;
  return el;
}

const container = createAndAppend("div", document.body, null, "container");
const cardRow = createAndAppend("div", container, null, "card row");
const cardHeader = createAndAppend(
  "div",
  cardRow,
  "Book Project",
  "card-header"
);
const cardBody = createAndAppend("div", cardRow, null, "card-body");
const form = createAndAppend("form", cardBody, null);

form.setAttribute("id", "book-form");
form.setAttribute("name", "form");

const formRow = createAndAppend("div", form, null, "form-row");

const formGroup = createAndAppend("div", formRow, null, "form-group col-md-4");
var input = createAndAppend("input", formGroup, null, "form-control");
input.setAttribute("type", "text");
input.setAttribute("name", "title");
input.setAttribute("id", "bookTitle");
input.setAttribute("placeholder", "Book Title");

const formGroup2 = createAndAppend("div", formRow, null, "form-group col-md-4");
var input = createAndAppend("input", formGroup2, null, "form-control");
input.setAttribute("type", "text");
input.setAttribute("name", "author");
input.setAttribute("id", "author");
input.setAttribute("placeholder", "Book Author");

const formGroup3 = createAndAppend("div", formRow, null, "form-group col-md-4");
var input = createAndAppend("input", formGroup3, null, "form-control");
input.setAttribute("type", "text");
input.setAttribute("name", "cover");
input.setAttribute("id", "cover");
input.setAttribute("placeholder", "Book Cover");

const button = createAndAppend("button", formRow, "Book Add", "btn btn-danger");
button.setAttribute("type", "submit");

const cardBody2 = createAndAppend("div", cardRow, null, "card-body");
cardBody2.appendChild(document.createElement("hr"));
const h5 = createAndAppend("h5", cardBody2, "Books", "card-title");
cardBody2.appendChild(document.createElement("hr"));


var listOfBooks = [
  "AnnaKarenina",
  "MadameBovary",
  "WarandPeace",
  "TheGreatGatsby",
  "Lolita",
  "Middlemarch",
  "Ulysses",
  "DonQuixote",
  "MobyDick",
  "Hamlet"
];

listOfBooks = listOfBooks.map(function(x) {
  return x.toLowerCase();
});
// console.log(listOfBooks);

function toDolist(arr) {
  let ul = document.createElement("ul");
  for (let i = 0; i < arr.length; i++) {
    li = ul.appendChild(document.createElement("li"));
    var textnode = document.createTextNode(arr[i]);
    li.setAttribute("id", arr[i]);
    li.appendChild(textnode);
  }
  return ul;
}
const list = toDolist(listOfBooks);
cardBody2.appendChild(list);




const table = createAndAppend("table", cardBody2, null, "table table-dark");
const thead = table.appendChild(document.createElement("thead"));
const tr = thead.appendChild(document.createElement("tr"));

const th = tr.appendChild(document.createElement("th"));
th.setAttribute("scope", "col");
th.textContent = "Book Title";

const th1 = tr.appendChild(document.createElement("th"));
th1.setAttribute("scope", "col");
th1.textContent = "Book Author";

const th2 = tr.appendChild(document.createElement("th"));
th2.textContent = "Book Cover";
th2.setAttribute("scope", "col");

const books = {
  book1: {
    title: "annakarenina",
    author: "leoTolstoy",
    link: "http://ecx.images-amazon.com/images/I/51vPf2CfSEL.jpg"
  },
  book2: {
    title: "annakarenina",
    author: "leoTolstoy",
    link: "http://ecx.images-amazon.com/images/I/51vPf2CfSEL.jpg"
  }
};

const tbody = table.appendChild(document.createElement("tbody"));

const tr1 = tbody.appendChild(document.createElement("tr"));
var td1 = tr1.appendChild(document.createElement("td"));
td1.textContent = books.book1.title
var td2 = tr1.appendChild(document.createElement("td"));
td2.textContent = books.book1.author
var td3 = tr1.appendChild(document.createElement("td"));
var img = td3.appendChild(document.createElement('img'))
img.setAttribute('class', 'img-fluid img-thumbnail');
img.setAttribute('src', books.book1.link)

const tr2 = tbody.appendChild(document.createElement("tr"));
var td1 = tr2.appendChild(document.createElement("td"));
td1.textContent = books.book1.title
var td2 = tr2.appendChild(document.createElement("td"));
td2.textContent = books.book1.author
var td3 = tr2.appendChild(document.createElement("td"));
var img = td3.appendChild(document.createElement('img'))
img.setAttribute('class', 'img-fluid img-thumbnail');
img.setAttribute('src', books.book1.link)


function booksObject(object) {

  for (let key in object) {

    let obj = object[key];

    for (let prop in obj) {
      console.log(prop + " = " + obj[prop]);
    }

  }
}

booksObject(books)