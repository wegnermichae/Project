function getTotalBooksCount(books) {
  let amount = 0;
  const count = books.forEach((book) => amount++);
  return amount;
}

function getTotalAccountsCount(accounts) {
  let amount = 0;
  const count = accounts.forEach((account) => amount++);
  return amount;
}

function getBooksBorrowedCount(books) {
  let amount = 0;
  const count = books.forEach((book) => {
    if(book.borrows){
      amount++;
    }
  });
  return amount;
}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
