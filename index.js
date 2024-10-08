const bookList = document.getElementById("bookList")
const module = document.getElementById("module")
const btn = document.getElementById("newBook");
const addBookBtn = document.getElementById("addBookBtn");
const clearAll = document.getElementById("clearAll");
let bookStorage = [];
const a = JSON.parse(localStorage.getItem("bookStorage"));



function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

if (a) {
    addBook()
}

function addBook() {

    console.log(a)
    bookStorage = JSON.parse(localStorage.getItem("bookStorage"));
    bookList.innerHTML = ''
    bookStorage.forEach((x) => {
        bookList.innerHTML += `
            <div class="card">
            <h3>Title : <p>&nbsp;${x.title}</p> </h3>
            <h3>Author :<p>&nbsp;${x.author}</p></h3>
            <h3>Pages : <p>&nbsp;${x.pages}</p></h3>
            <h3 id="status">Status : <p>&nbsp;${x.status}</p>
                <a><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>check-circle-outline</title>
                    <path
                        d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
                </svg>
            </a>
            </h3>
        </div>

        `;
    });
}


btn.addEventListener("click", function () {
    module.style.display = "flex"
})

module.addEventListener("submit", (event) => {
    event.preventDefault()
    const name = new Book(title.value, author.value, pages.value, (read.checked ? "Read" : "Not Yet Read"))
    bookStorage.push(name)
    localStorage.setItem("bookStorage", JSON.stringify(bookStorage));
    // console.log(title.value)
    // console.log(author.value)
    // console.log(pages.value)
    // console.log(read.checked);
    
    addBook()
    module.style.display = "none";
    title.value = ''
    author.value = ''
    pages.value = ''
    read.checked = ''
});

clearAll.addEventListener("click", () => { localStorage.clear(); addBook(); a=undefined})


/*
const hobbit = new Book("Hobbit", "J.R.R Tolkien", 295, "Read");
const hobbit2 = new Book("Hobbit the 2", "J.R.R ", 300, "Not yet read");
bookStorage.push(hobbit)
bookStorage.push(hobbit2)
console.log(bookStorage)
bookStorage.forEach((x) => { console.log(x.title) })
*/