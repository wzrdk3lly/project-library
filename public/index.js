// const { Input } = require("postcss");

let library = [];

function Book(title, author, isRead){
    this.title = title
    this.author = author 
    this.isRead = isRead
}
// Add some book id // mabye and id generator

function addBookToLibrary(){
    let toggle = true
   let title = prompt("What is the title of the book:  ")
    let author = prompt("What is the author of the book: ")
    let isRead = prompt("Have you read the the book: y/n")
    while(toggle){
        
        if(isRead === "y" || isRead === "Y"){
            isRead = true
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
   
    let newBook = new Book(title, author, isRead)
  
    library.push(newBook)
    
    return ("new book added: ", newBook)
}
// Test book
library.push((new Book("life of miles", "miles", true)))
console.log(library)

