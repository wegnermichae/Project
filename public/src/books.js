function findAuthorById(authors, id) {
  let auth = authors.find((author) => author.id === id); //determines if the id is equal to an id in the authors database and returns that object if true
  return auth;
}

function findBookById(books, id) {
  let bookId = books.find((book) => book.id === id); //determines if the id is equal to an id in the book database and returns if true
  return bookId;
}

function _filterBorrowed(books, status) {
  return books.filter(({ borrows }) => status === borrows[0].returned);
}

function partitionBooksByBorrowedStatus(books) {
  const returned = true;
  const borrowed = !returned;
  const borrowedBooks = _filterBorrowed(books, borrowed);
  const returnedBooks = _filterBorrowed(books, returned);
  return [[...borrowedBooks], [...returnedBooks]];
}

function _findElementById(elements, id) {
  return elements.find((element) => element.id === id);
}

function getBorrowersForBook({ borrows }, accounts) {
  const borrowers = [];
  for (let record in borrows) {
    const borrowId = borrows[record].id;
    const matchingAccount = _findElementById(accounts, borrowId);
    borrowers.push({ ...borrows[record], ...matchingAccount });
  }
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
