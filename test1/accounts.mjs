
import Web3 from 'web3';
const web3 = new Web3();

// Create a new account
const account = web3.eth.accounts.create();

console.log('Private Key:', account.privateKey);
const derivedAccount = web3.eth.accounts.privateKeyToAccount(account.privateKey);

// Log the account address
console.log('Account Address:', derivedAccount.address);
