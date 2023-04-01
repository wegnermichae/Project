function sorter(arr, slicer = 5) {
  const newArr = [...arr];
  return newArr
    .sort(({ count: count1 }, { count: count2 }) => count2 - count1)
    .slice(0, slicer);
}

function authorBorrow(books, id) {
  return books.reduce((totalBorrows, { authorId, borrows }) => {
    if (authorId === id) totalBorrows += arrayCount(borrows);
    return totalBorrows;
  }, 0);
}

function arrayCount(item) {
  return item.length;
}


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
  return books.reduce((borrowCount, { borrows }) => {
    const mostRecent = borrows[0];
    if (!mostRecent.returned) borrowCount++;
    return borrowCount;
  }, 0);
}

function getMostCommonGenres(books) {
  return sorter(
    books
      .reduce((genres, book) => {
        const matchingGenre = genres.find((genre) => genre.name === book.genre);
        !matchingGenre
          ? genres.push({ name: book.genre, count: 1 })
          : matchingGenre.count++;
        return genres;
      }, [])
  );
}

function getMostPopularBooks(books) {
  return sorter(
    books.map(({ title, borrows }) => ({
      name: title, 
      count: arrayCount(borrows),
    }))
  );
}

function getMostPopularAuthors(books, authors) {
  return sorter(
    authors.map(({ name: { first, last }, id }) => ({
      name: `${first} ${last}`, 
      count: authorBorrow(books, id), 
    }))
  );
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
