// Constructor function for creating a Book object with properties: title, author, quantity, and edition
function Book(title, author, quantity, edition) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
    this.edition = edition;
}

// Prototype method to update the edition of the book
Book.prototype.setEdition = function(newEdition) {
    this.edition = newEdition;
}

// Prototype method to sell a book, reducing the quantity by 1 if there are any copies left
Book.prototype.sell = function() {
    if (this.quantity > 0) {
        this.quantity -= 1;
    }
}

// Constructor function for creating a ComicBook object, which is a specialized type of Book with an additional graphicArtist property
function ComicBook(title, author, quantity, graphicArtist) {
    // Call the parent Book constructor to initialize title, author, and quantity properties
    Book.call(this, title, author, quantity);
    this.graphicArtist = graphicArtist;  // Additional property specific to ComicBook
}

// Inherit the prototype methods from Book, ensuring ComicBook has the same methods (setEdition, sell)
ComicBook.prototype = Object.create(Book.prototype, {
    constructor: {
        value: ComicBook  // Set the constructor property to refer to ComicBook
    }
});

// Create instances of Book with specific titles, authors, quantities, and editions
const book = new Book('pride', 'stan lee', 3, '4th');
const book2 = new Book('pride', 'stan lee', 8, '6th');

// Log the initial state of the book instances
console.log(book, book2);

// Update the edition of the first book instance
book.setEdition('10000');

// Log the state of the book instances after updating the edition of the first book
console.log(book, book2);
