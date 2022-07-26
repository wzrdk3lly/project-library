
let library = [];

function Book(id, title, author, isRead){
    this.id = id
    this.title = title
    this.author = author 
    this.isRead = isRead
}

// Query selectors

let bookSection = document.getElementById("book-section")
// add code for deleting a card...if delete card run refresh function to assign cards with new id's
// don't allow for edit capabilities -- remove pencil button
// focus on adding and deleting cards, then you can focus on updating with read or not

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


function displayBook(){
    // for(book in library){
    //     console.log(book.title)
    //     // let newBook = document.createElement("div");
    //     // newBook.text = "book.title + book.author + book.isRead"
    //     // bookSection.appendChild(newBook)
    // }   

    library.forEach(function (bookObject){
        let newBook = document.createElement("div");
        newBook.innerText = bookObject.title;
       
    });
}

// $('#book-section').append(`
// <div class="p-4 flex flex-col border-4 rounded-lg shadow-lg bg-white w-52 ">
//   <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">${bookObject.title}</h5>
//   <p class="text-gray-700 text-base mb-4">
//     ${bookObject.author}
//   </p>
//   <p class="text-gray-700 text-base mb-4">
//   ${bookObject.isRead}
//   </p>
 
//   <div class="flex flex-row gap-10 self-center">
//     <a href="">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//           </svg>
//       </a>

//       <a href="">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//           </svg>
//       </a>
//   </div>
// </div>`)




// Test book
library.push((new Book("life of miles", "miles", true)))
// console.log(library)