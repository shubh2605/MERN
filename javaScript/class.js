class Bank {
  // Private Properties and Methods
  #percentageInProfit = 1.5;
  #calculatePercentage() {
    console.log(
      `Your income will be calculated by ${this.#percentageInProfit} * ${this.balance}`
    );
  }
  // Private Properties and Methods

  static bankCode = 'CBIN0078';
  static getBankCode() {
    return `Bank Code: ${this.bankCode}`;
  }

  constructor(name, mobile, email, amount = 0) {
    this.__accountHolderName = name;
    this.mobile = mobile;
    this._email = email;
    this.balance = amount;
  }

  set email(email) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  deposit(amount) {
    this.balance += Number(amount);
    console.log(
      `Amount of Rs. ${amount} is Deposited by ${this._accountHolderName}`
    );

    // console.log(sendDepositEmail.call(this, amount));
  }
  checkBalance() {
    console.log(`Your balance is ${this.balance}`);
  }
  withdraw(amount) {
    if (this.balance <= 0 || this.balance < amount) {
      console.log('Insufficient Balance');
      // console.log(InsufficientFundEmail.call(this, amount));
    } else {
      this.balance -= amount;
      // sendWithdrawEmail.call(this, amount);
    }
  }
  getPercentage() {
    console.log(`The Percetage is ${this.#percentageInProfit}`);
    this.#calculatePercentage();
  }
  checkBankProfile() {
    const { _accountHolderName, mobile, email, balance } = this;
    console.log(`Account Holder = ${_accountHolderName} `);
    console.log(`Mobile no. = ${mobile}`);
    console.log(`Email = ${email}`);
    console.log(`Account Balance = ${Number(balance)}`);
  }
  /***
   *
   * set propertyname(){
   * this._propertyName

}
   */
  set accountHolderName(value) {
    this._accountHolderName = value;
  }
  get accountHolderName() {
    return this._accountHolderName;
  }
}

let obj1 = new Bank('Raj', '5959561000', 'raj45@gmail.com', 522000);
console.log(Bank.getBankCode());