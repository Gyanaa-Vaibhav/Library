const bookList = document.getElementById("bookList")
let bookStorage = []

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}


const hobbit = new Book("Hobbit", "J.R.R Tolkien", 295, "Not yet read");
const hobbit2 = new Book("Hobbit the 2", "J.R.R ", 300, "Not yet read");

bookStorage.push(hobbit)
bookStorage.push(hobbit2)

console.log(bookStorage)

bookStorage.forEach((x) => { console.log(x.title) })

function addBook() {
    bookStorage.forEach((x) => {
        bookList.innerHTML += `<p>${x.title}</p>`
    });
}

addBook()

let x = document.getElementById("title")

