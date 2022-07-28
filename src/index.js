// initialize library array to store all book objects in
let library = [];

// global & static query selectors
let bookSection = document.getElementById("book-section")
let btnAddBook = document.getElementById("add-book")
let overlay = document.getElementById("overlay")
let btnExitOverlay = document.getElementById("btn-exit")

//Event listener section

// add event listener for deleting a card...if delete card run refresh function to assign cards with new id's
// don't allow for edit capabilities -- remove pencil button
// focus on adding and deleting cards, then you can focus on updating with read or not

//Event listener for adding book to library
// btnAddBook.addEventListener("click", addBookToLibrary) // paused for overlay functionality

   btnAddBook.addEventListener("click",() => {
        overlay.classList.remove("hidden")
        overlay.classList.add("flex")
   });

   btnExitOverlay.addEventListener("click", () => {
    removeOverlay();
   });

   window.addEventListener("load", () => {
    document.getElementById("form").addEventListener("submit", (e)=> {
        e.preventDefault();

        let title = document.getElementById("book-title").value;
        let author = document.getElementById("author").value;
        let isRead = document.getElementById("read").checked;

        addBookToLibrary(title,author,isRead)

        //clear form after submission
        document.getElementById("form").reset();
        removeOverlay();
    })
   })



function addBookToLibrary(title,author, isRead){

    let id = generateID();

    let newBook = new Book(id, title, author, isRead);
  
    library.push(newBook)
    displayBook();
    
    return newBook
}

function generateID(){
    if(library.length === 0){
        return 1
    }
    else{
        return (library.length + 1)
    }
}

function Book(id, title, author, isRead){
    this.id = id
    this.title = title
    this.author = author 
    this.isRead = isRead
}

// add an updateID() function that gives that iterates over each book and gives the book a new id
function displayBook(){

    //Prevents duplication of displaying books
    bookSection.innerHTML = "";

    library.forEach(function (bookObject){
        addCard(bookObject)
    });
}

function removeOverlay(){
    overlay.classList.add("hidden")
    overlay.classList.remove("flex")
}


function addCard(bookObject){

    // Create card elements
    let newBookCard = document.createElement("div");
    let titleHeader = document.createElement("h5");
    let divAuthor = document.createElement("div");
    let divRead = document.createElement("div");
    let divBtns = document.createElement("div");
    let btnDelete = document.createElement("button")
    let btnRead = document.createElement("button");

    //Style card elements
    newBookCard.classList.add("bg-white", "rounded-lg", "pl-2", "space-y-4");
    titleHeader.classList.add("text-xl", "font-bold");
    divBtns.classList.add("space-x-2");
    btnDelete.classList.add("focus:outline-none", "text-white", "bg-purple-700", "hover:bg-purple-800", 
                            "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", 
                            "mb-2", "dark:bg-purple-600", "dark:hover:bg-purple-700");
    btnRead.classList.add("focus:outline-none", "text-white", "bg-purple-700", "hover:bg-purple-800",  
                          "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "mb-2", 
                          "dark:bg-purple-600", "dark:hover:bg-purple-700");
    
    //Manipulate card text
    titleHeader.innerText = "Title: " + bookObject.title;
    divAuthor.innerText = "Author: " + bookObject.author
    divRead.innerText = readCategoryText(bookObject.isRead)
    btnDelete.innerText = "Delete"
    btnRead.innerText = ReadBtnText(bookObject.isRead)

    //Create card
    divBtns.appendChild(btnDelete)
    divBtns.appendChild(btnRead)
    newBookCard.appendChild(titleHeader)
    newBookCard.appendChild(divAuthor)
    newBookCard.appendChild(divRead)
    newBookCard.appendChild(divBtns)
   
    //Add card to dashboard
    bookSection.appendChild(newBookCard)
}

// The read/not read button needs to say the opposite for toggle functionality
function ReadBtnText(isRead){
     return isRead ? "Not Read" : "Read"
}

function readCategoryText(isRead){
    return isRead ? "Read" : "Not Read"
}
