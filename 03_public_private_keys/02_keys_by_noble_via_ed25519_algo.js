import * as ed from "@noble/ed25519"; // for generating key-pair
import { sha512 } from "@noble/hashes/sha2.js"; // for hashing

// set the hasing algo
ed.hashes.sha512 = sha512;

async function main() {
  // generate secure random private key
  const privateKey = ed.utils.randomSecretKey();
  console.log("private key...", privateKey);

  // generate public key from the private key
  const publicKey = await ed.getPublicKey(privateKey);
  console.log("public key...", publicKey);

  // convert the message "hello world" into Uint8Array
  const message = new TextEncoder().encode("hello world");
  console.log("message...", message);

  // sign the message
  const signature = await ed.signAsync(message, privateKey);
  console.log("signature...", signature);

  // verify the signature
  const isValid = await ed.verifyAsync(signature, message, publicKey);

  console.log(isValid);
}

main();
