import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { TestAccount } from './class/TestAccount'

const companyAccount: CompanyAccount = new CompanyAccount("LeandroTech", 1);
console.log(companyAccount.getBalance());
console.log(companyAccount.deposit(10));
console.log(companyAccount.getBalance());
console.log(companyAccount.getName());
console.log(companyAccount.withdraw(5));
console.log(companyAccount.getBalance());
console.log(companyAccount.getLoan(15));
console.log(companyAccount.getBalance());

const peopleAccount: PeopleAccount = new PeopleAccount(1,"Leandro", 2);
console.log(peopleAccount.getBalance());
console.log(peopleAccount.deposit(10));
console.log(peopleAccount.getBalance());
console.log(peopleAccount.getName());
console.log(peopleAccount.withdraw(5));
console.log(peopleAccount.getBalance());

const testAccount: TestAccount = new TestAccount("LeandroTeste", 3);
console.log(peopleAccount.getBalance());
console.log(peopleAccount.deposit(10));
console.log(peopleAccount.getBalance());
console.log(peopleAccount.getName());
console.log(peopleAccount.withdraw(5));
console.log(peopleAccount.getBalance());