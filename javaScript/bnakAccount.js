function createBankAccount(accountHolder, mobile, email, bal) {
  let balance = bal;

  return {
    accountHolder,
    mobile,
    email,
    deposit(amount){
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${balance}`);
      }
    },
    withdraw(amount){
        if(amount <= balance){
            balance -= amount;
            console.log(`Withdrawn: ${amount}. New Balance: ${balance}`);
            sendEmail(this,amount);
        } else {
            console.log("Insufficient balance!");
        }
    },
  };
}


function sendEmail(account, amount){
  let template = `
To : ${account.accountHolder},

This is to inform you that amount of ${amount}
is withdrawn.
`;
  console.log(template);
}

const myAccount = createBankAccount("shubh", "749838393","shubh@gmail.com", 1000);
myAccount.deposit(500);
myAccount.withdraw(1000);
