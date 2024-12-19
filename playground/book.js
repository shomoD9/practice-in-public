/**
 * Book Constructor Function
 * Creates a new Book object with title, author, pages, and read status.
 * @param {string} title - The title of the book
 * @param {string} author - The author of the book
 * @param {number} pages - The number of pages in the book
 * @param {string} read - Reading status ('yes' or 'no')
 */
function Book(title, author, pages, read){
    // Initialize book properties
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.read = read;

    // Determine the reading status text
    let readOrNot;  // Declare variable to store reading status
    if(read === 'no'){
        readOrNot = "not read yet"
    } else if (read === 'yes'){
        readOrNot = "read already."
    } 
    
    /**
     * Returns a formatted string containing book information
     * @returns {string} Formatted book information
     */
    this.info = function (){
        return `${title} by ${author}, ${pages} pages, ${readOrNot}`
    }
}

// Create a new book instance
const inferno = new Book('Inferno', 'Dan Brown', 396, 'yes')

// Display book information
console.log(inferno.info())