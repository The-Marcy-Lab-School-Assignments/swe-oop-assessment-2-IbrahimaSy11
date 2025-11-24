class BankAccount {
  #balance = 0;

  static #totalNumberOfAccounts = 0; // i added that

  constructor(accountNumber, ownerName) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;

    BankAccount.#totalNumberOfAccounts++;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    return this.#balance;

    // missing multiple #. place them in balance
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Withdrawal failed. Insufficient funds.`);
    } else {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    }
    return this.#balance;

    // missing multiple #. place them in balance
  }

  getBalance() {
    console.log(`Your account balance is: $${this.#balance}`);
    return this.#balance;

    // missing the 'this' keyword. but not printing the balance
  }

  static getTotalNumberOfAccounts() {
    return BankAccount.#totalNumberOfAccounts;
  }
}

class Bank {
  accounts = [];

  constructor(name) {
    this.name = name;
  }

  addAccount(account) {
    this.accounts.push(account);
    // missing the this keyword
  }

  getTotalBalance() {
    let total = 0;
    this.accounts.forEach((account) => {
      total += account.getBalance();
    });
    return total;
  }

  findAccount(accountNumber) {
    return this.accounts.find(
      (account) => account.accountNumber === accountNumber,
      // use strictly equal not loose
    );
  }
}

// TEST YOUR CODE HERE

// DO NOT REMOVE
module.exports = { BankAccount, Bank };
