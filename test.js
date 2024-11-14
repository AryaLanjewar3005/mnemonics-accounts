const ethers = require('ethers');

const getAccount = (mnemonics, totalAccounts) => {
  const accounts = []
  for(let i = 0; i < totalAccounts; i++) {
    const account = ethers.HDNodeWallet.fromMnemonic(ethers.Mnemonic.fromPhrase(mnemonics)
, `m/44'/60'/2'/1/${i}`)
    accounts.push(account)
    console.log("Public Key", account.publicKey)
    console.log("Private-key" ,  account.privateKey)
  }
  return accounts;
}

const mn = ""
console.log(getAccount(mn, 1))
