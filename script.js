// Library section
let myLibrary = [];
addBookToLibrary('Deadhouse Gate','Steven Eriksson',800,true);

function Book(a,b,c,flag) {
    this.title = a;
    this.author = b;
    this.pageNum = c;
    this.readFlag = flag;
}
function addBookToLibrary(title, author, pageNum,readFlag) {
    let newBook = new Book(title, author, pageNum,readFlag);
    myLibrary.push(newBook);
    console.log(newBook);
}
// ***Javascript DOM below***
//   *Input DOM*
let form = document.getElementById('book-form');
let button = document.getElementById('button');
button.addEventListener('click', function() {
    let tempTitle = document.getElementById('title').value;
    let tempAuthor = document.getElementById('author').value;
    let tempPageNum = document.getElementById('pages').value;
    let tempFlag = false;
    if((!tempTitle=='') && (!tempAuthor=='') && (!tempPageNum=='')) {
        addBookToLibrary(tempTitle,tempAuthor,tempPageNum,tempFlag);
        form.style.display = 'none';
        updateDisplay();
    }
})
//  *main display DOM*
updateDisplay();
function updateDisplay() {
    let bookDisplay = document.getElementById('book-display');
    let text = "";
    myLibrary.forEach(book => {
        let values = Object.values(book);
        text += '<div class="book-card"><p class="titleCard">'+values[0]+'<p>';
        text += '<p class="authorCard">'+values[1]+'<p>';
        text += '<p class="pagesCard">'+values[2]+' pages<p></div>';
    })
    bookDisplay.innerHTML = text;
}
let bookCards = document.getElementsByClassName('book-card');
//  *add book button DOM
let addButton = document.getElementById('add-button');
addButton.addEventListener('click',() => form.style.display = 'initial');