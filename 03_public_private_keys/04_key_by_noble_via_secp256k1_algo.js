import * as scep from "@noble/secp256k1";
import { sha256 } from "@noble/hashes/sha2.js";
import { randomBytes } from "crypto";

scep.hashes.hmacSha256 = (key, msg) => hmac(sha256, key, msg);
scep.hashes.sha256 = sha256;

async function main() {
  // generate random private key and its public key
  const privateKey = randomBytes(32);
  const publicKey = scep.getPublicKey(privateKey);
  console.log("private key...", privateKey);
  console.log("public key...", publicKey);

  // convert the message "hello world" into Uint8Array
  const message = new TextEncoder().encode("hello world");
  console.log("message...", message);

  // sign the message
  const signature = await scep.signAsync(message, privateKey);
  console.log("signature...", signature);

  const isValid = scep.verify(signature, message, publicKey);
  console.log(isValid);
}

main();
