const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('1aea1f5d53a748a0ab161dc5f1d0bdb7a089ed45828122a08ddc3f5c9c469c32');
const myWalletAddress = myKey.getPublic('hex');

 
//Hier werden nun die ersten beiden blöcke zur Kette hinzugefügt. Hinterlegt werden Index,Datum und die Menge.
let thwcoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'publickey vom Empfänger', 10);
tx1.signTransaction(myKey);
thwcoin.addTransaction(tx1);


// thwcoin.addTransaction(new Transaction('address1', 'address2', 100));
// thwcoin.addTransaction(new Transaction('address2', 'address1', 50));

console.log('\n Abbau wird gestartet...');
thwcoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance von adam ist', thwcoin.getBalanceOfAddress(myWalletAddress));



console.log('Ist die Kette verifiziert?', thwcoin.isChainValid());

// console.log('\n Abbau wird gestartet...');
// thwcoin.minePendingTransactions(myWalletAddress);

// console.log('\nBalance von adam ist', thwcoin.getBalanceOfAddress(myWalletAddress));

// console.log('Abgebauter Block 1... ');
// thwcoin.addBlock(new Block(1, "03.02.2021", { amount: 3}));
// console.log('Abgebauter Block 2... ');
// thwcoin.addBlock(new Block(2, "05.02.2021", { amount: 15}));

// console.log('Ist die Blockchain gültig? ' + thwcoin.isChainValid());

// thwcoin.chain[1].data = { amount: 100 };
// thwcoin.chain[1].hash = thwcoin.chain[1].calculateHash();

// console.log('Ist die Blockchain gültig? ' + thwcoin.isChainValid());

//console.log(JSON.stringify(thwcoin, null, 4));





















// const { Blockchain, Transaction } = require('./blockchain');
// const EC = require('elliptic').ec;
// const ec = new EC('secp256k1');

// // Your private key goes here
// const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

// // From that we can calculate your public key (which doubles as your wallet address)
// const myWalletAddress = myKey.getPublic('hex');

// // Create new instance of Blockchain class
// const savjeeCoin = new Blockchain();

// // Create a transaction & sign it with your key
// const tx1 = new Transaction(myWalletAddress, 'address2', 100);
// tx1.signTransaction(myKey);
// savjeeCoin.addTransaction(tx1);

// // Mine block
// savjeeCoin.minePendingTransactions(myWalletAddress);

// // Create second transaction
// const tx2 = new Transaction(myWalletAddress, 'address1', 50);
// tx2.signTransaction(myKey);
// savjeeCoin.addTransaction(tx2);

// // Mine block
// savjeeCoin.minePendingTransactions(myWalletAddress);

// console.log();
// console.log(`Balance of xavier is ${savjeeCoin.getBalanceOfAddress(myWalletAddress)}`);

// // Uncomment this line if you want to test tampering with the chain
// // savjeeCoin.chain[1].transactions[0].amount = 10;

// // Check if the chain is valid
// console.log();
// console.log('Blockchain valid?', savjeeCoin.isChainValid() ? 'Yes' : 'No');
