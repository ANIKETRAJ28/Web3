import { ethers } from "ethers";

// generate a random wallet
const wallet = ethers.Wallet.createRandom();

const privateKey = wallet.privateKey;
const publicKey = wallet.address;
console.log("private key...", privateKey);
console.log("public key...", publicKey);

// create a message
const message = "hello world";

// sign the message
const signature = await wallet.signMessage(message);
console.log("signature...", signature);

const recoveryAddress = ethers.verifyMessage(message, signature);
console.log("recovery address...", recoveryAddress);
console.log("valid...", recoveryAddress === publicKey);
