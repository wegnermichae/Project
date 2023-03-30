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
  let bookArray = [];
  const stillOut = books.find((book) => {
    if(!!book.borrows.returned){
      missingBooks.push(book);
    }else{
      returnedBooks.push(book);
    }
  });
  bookArray.push(missingBooks, returnedBooks);
  console.log(bookArray);
  return bookArray;
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
