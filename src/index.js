
let library = [];

// global query selectors
let bookSection = document.getElementById("book-section")
let btnAddBook = document.getElementById("add-book")



// add event listener for deleting a card...if delete card run refresh function to assign cards with new id's
// don't allow for edit capabilities -- remove pencil button
// focus on adding and deleting cards, then you can focus on updating with read or not


//Event listener for adding book to library
btnAddBook.addEventListener("click", addBookToLibrary)

function addBookToLibrary(){
    let toggle = true;
    let id = generateID();
    let title = prompt("What is the title of the book:  ");
    let author = prompt("What is the author of the book: ");
    let isRead = prompt("Have you read the the book: y/n");

    while(toggle){
        if(isRead === "y" || isRead === "Y"){
            isRead = true;
            toggle = false;
        }
        else if(isRead === "n" || isRead === "N"){
            isRead = false
            toggle = false;
        }
        else{
            isRead = prompt("Have you read the the book: y/n")
            continue
        }
    }
   
    let newBook = new Book(id, title, author, isRead);
  
    library.push(newBook)
    displayBook();
    
    return newBook
}

function Book(id, title, author, isRead){
    this.id = id
    this.title = title
    this.author = author 
    this.isRead = isRead
}

function generateID(){
    if(library.length === 0){
        return 1
    }
    else{
        return (library.length + 1)
    }
}

// add an updateID() function that gives that iterates over each book and gives the book a new id


function displayBook(){

    bookSection.innerHTML = "";

    library.forEach(function (bookObject){

        // Refactor to determineReadElements - include in addcard function
        let btnTitle = "";
        result = ""
        if(bookObject.isRead){
            btnTitle = "Not Read"
            result = "Read"
        }
        else{
            btnTitle = "Read"
            result = "Not Read"
        }

        // Refactor to addcard function
        let newBookCard = document.createElement("div");
        newBookCard.classList.add("bg-white", "rounded-lg", "pl-2", "space-y-4")

        let titleHeader = document.createElement("h5");
        titleHeader.classList.add("text-xl", "font-bold");
        titleHeader.innerText = "Title: " + bookObject.title;

        let divAuthor = document.createElement("div");
        divAuthor.innerText = "Author: " + bookObject.author

        let divRead = document.createElement("div");
        divRead.innerText = result

        let divBtns = document.createElement("div");
        divBtns.classList.add("space-x-2")

        let btnDelete = document.createElement("button")
        btnDelete.classList.add("focus:outline-none", "text-white", "bg-purple-700", "hover:bg-purple-800", 
                                     "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", 
                                     "mb-2", "dark:bg-purple-600", "dark:hover:bg-purple-700");
        btnDelete.innerText = "Delete"

        let btnRead = document.createElement("button");
        btnRead.classList.add("focus:outline-none", "text-white", "bg-purple-700", "hover:bg-purple-800",  
                                "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "mb-2", 
                                "dark:bg-purple-600", "dark:hover:bg-purple-700");
        btnRead.innerText = btnTitle

        divBtns.appendChild(btnDelete)
        divBtns.appendChild(btnRead)
        newBookCard.appendChild(titleHeader)
        newBookCard.appendChild(divAuthor)
        newBookCard.appendChild(divRead)
        newBookCard.appendChild(divBtns)
       
        bookSection.appendChild(newBookCard)
       
    });
}

