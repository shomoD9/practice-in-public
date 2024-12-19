/**
 * Library Management System
 * This script handles the creation, display, and management of a book library.
 */

// Array to store all books
const myLibrary = [];

/**
 * Book Constructor
 * Creates a new Book object with the specified properties
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 * @param {number} pages - Number of pages in the book
 * @param {string} read - Reading status ('yes' or 'no')
 */
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // Determine reading status text
    let readOrNot;
    if(read === 'no'){
        readOrNot = "not read yet";
    } else if (read === 'yes'){
        readOrNot = "read already.";
    } 
    
    /**
     * Returns a formatted string with book information
     * @returns {string} Formatted book details
     */
    this.info = function (){
        return `${title} by ${author}, ${pages} pages, ${readOrNot}`;
    }
}

/**
 * Adds a new book to the library array
 * @param {string} title - Book title
 * @param {string} author - Book author
 * @param {number} pages - Number of pages
 * @param {string} read - Reading status
 */
function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

/**
 * Displays all books in the library on the webpage
 * Creates a card for each book with its information and a remove button
 * @param {Array} myLibrary - Array containing all book objects
 */
function displayBooks(myLibrary){
    let bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Clear existing display
    
    // Create and append book cards
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.read}</p>
            <button class="remove-btn" data-index="${i}">Remove</button>
            <button class="toggle-read-btn" data-index="${i}">Toggle Read</button>
        `;
        bookList.appendChild(bookCard);
    }

    // Add click event listeners to all remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeBook);
    });

    // Add click event listeners to all toggle read buttons
    const toggleReadButtons = document.querySelectorAll('.toggle-read-btn');
    toggleReadButtons.forEach(button => {
        button.addEventListener('click', toggleRead);
    });
}

/**
 * Removes a book from the library
 * @param {Event} e - Click event object
 */
function removeBook(e) {
    const index = e.target.dataset.index;
    myLibrary.splice(index, 1); // Remove book from array
    displayBooks(myLibrary); // Refresh display
}

/**
 * Toggles the read status of a book
 * @param {Event} e - Click event object
 */
function toggleRead(e) {
    const index = e.target.dataset.index; // Get the index of the book to toggle
    myLibrary[index].read = myLibrary[index].read === 'yes' ? 'no' : 'yes'; // Toggle read status
    displayBooks(myLibrary); // Refresh display
}

// DOM Elements
const addBookButton = document.getElementById('addBookButton');
const addBookDialog = document.getElementById('addBookDialog');
const addBookForm = document.getElementById('addBookForm');
const cancelButton = document.getElementById('cancelButton');

// Event Listeners for Dialog Controls
addBookButton.addEventListener('click', () => {
    addBookDialog.showModal();
});

cancelButton.addEventListener('click', () => {
    addBookDialog.close();
});

/**
 * Form submission handler
 * Collects form data, creates new book, and updates display
 */
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh

    // Collect form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    // Add new book and update display
    addBookToLibrary(title, author, pages, read);
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    displayBooks(myLibrary);

    // Clean up form
    addBookForm.reset();
    addBookDialog.close();
});