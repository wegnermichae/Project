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

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {
  let genreCount = {};
  const g = books.forEach((book) => genreCount.set(book.genre, genreCount.get(book.genre)++));
  
}

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
