import { Keypair } from "@solana/web3.js"; // for generating the key-pair
import nacl from "tweetnacl"; // for hashing

// generate a new key-pair
const keypair = Keypair.generate();

// extract the public and private keys
const publicKey = keypair.publicKey;
const privateKey = keypair.secretKey;

console.log("private key...", privateKey);
console.log("public key...", publicKey.toBytes());

// convert message "hello world" into Uint8Array
const message = new TextEncoder().encode("hello world");
console.log("message...", message);

// sign the message
const signature = nacl.sign.detached(message, privateKey);

// verify the signature
const result = nacl.sign.detached.verify(
  message,
  signature,
  publicKey.toBytes()
);

console.log(result);
