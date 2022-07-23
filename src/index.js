console.log("oh snap")

let library = [];

function Book(id, title, author, isRead){
    this.id = id
    this.title = title
    this.author = author 
    this.isRead = isRead
}

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
// Test book
// library.push((new Book("life of miles", "miles", true)))
// console.log(library)