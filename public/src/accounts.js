function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA,lastB) => 
    lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
