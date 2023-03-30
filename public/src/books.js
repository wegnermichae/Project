function findAuthorById(authors, id) {
  let auth = authors.find((author) => author.id === id); //determines if the id is equal to an id in the authors database and returns that object if true
  return auth;
}

function findBookById(books, id) {
  let bookId = books.find((book) => book.id === id); //determines if the id is equal to an id in the book database and returns if true
  return bookId;
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = [];
  let missingBooks = [];
  let foundBooks = books.forEach((book) => {
    if(!!book.borrows.returned == true){
      returnedBooks.push(book);
    }else{
      missingBooks.push(book);
    }
  });
  const bookArray = [returnedBooks, missingBooks];
  return bookArray;
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
