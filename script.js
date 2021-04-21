// Library section
let myLibrary = [];
addBookToLibrary('Deadhouse Gate','Steven Eriksson',800,true);
addBookToLibrary('Tides of Midnight','Steven Eriksson',800,true);

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
    let text = '';
    let i = 0;
    myLibrary.forEach(book => {
        let values = Object.values(book);
        text += '<div class="book-card"><button type="button" class="remove-book" value='+i+'>x</button>'
        text += '<p class="titleCard">'+values[0]+'<p>';
        text += '<p class="authorCard">'+values[1]+'<p>';
        text += '<p class="pagesCard">'+values[2]+' pages<p>';        
        text += '<p>Status: <button type="button" class="read-button" value='+i+'>'+(book.readFlag? 'Read':'Not Read')+'</button></p></div>'
        i++;
    })
    bookDisplay.innerHTML = text;
    updateRemoveButton();
    updateToggleButton();
}
//  *add book button DOM
let addButton = document.getElementById('add-button');
addButton.addEventListener('click',() => form.style.display = 'initial');
//  *remove book button DOM
updateRemoveButton();
function updateRemoveButton() {
    let removeButton = document.querySelectorAll('.remove-book');
    removeButton.forEach(x => {
        x.addEventListener('click',function() {
            index = parseInt(x.value);
            console.log("index is " + index);
            myLibrary.splice(index,1);
            updateDisplay();
            console.table(myLibrary);
        })
    })
    console.log("remove button updated");
}
//  *Toggle book read status
Book.prototype.toggleRead = function() {
    this.readFlag = !this.readFlag;
}
updateToggleButton();
function updateToggleButton() {
    let toggleButton = document.querySelectorAll('.read-button');
    toggleButton.forEach(x => {
        console.log(x.value);
        x.addEventListener('click',function() {
            index = parseInt(x.value);
            console.log("index sekarang " + index);
            myLibrary[index].toggleRead();
            updateDisplay();
        })
    })
}