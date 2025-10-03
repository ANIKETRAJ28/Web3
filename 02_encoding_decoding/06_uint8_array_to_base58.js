import bs58 from "bs58";

function uint8ArrayToBase58(uint8Array) {
  return bs58.encode(uint8Array);
}

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const base58String = uint8ArrayToBase58(uint8Array);
console.log("uint8 array to base58 string...", base58String);
