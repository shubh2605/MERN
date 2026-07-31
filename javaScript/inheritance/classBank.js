function sendEmail(account, amount) {
  const template = `
  To : ${account.accountHolder},
  This is to inform you that an amount of ${amount} has been withdrawn.
  `;
  console.log(template);
}

class Bank {
  #balance;

  constructor(accountHolder, mobile, email, bal) {
    this.accountHolder = accountHolder;
    this.mobile = mobile;
    this.email = email;
    this.#balance = bal;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}. New Balance: ${this.#balance}`);
      sendEmail(this, amount);
    } else {
      console.log("Insufficient balance!");
    }
  }
}

class Sindbank extends Bank {
  constructor(accountHolder, mobile, email, amount) {
    super(accountHolder, mobile, email, amount); 
  }

  greetSindBankUser() {
    console.log(
      `Welcome ${this.accountHolder} to Sindh Bank! Thank you for your visit.\nWarm Regards (Sindh Bank)`
    );
  }
}

// Driver Code
let owner = new Sindbank("Vinay", "78965325641", "vinay@gmail.com", 120000);

console.log(owner.accountHolder); 

owner.greetSindBankUser();
owner.withdraw(5000);
