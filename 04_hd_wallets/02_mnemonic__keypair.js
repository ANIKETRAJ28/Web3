import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const mnemonic =
  "confirm aspect angle average ready creek mosquito insect visit series novel wisdom";
const seed = mnemonicToSeedSync(mnemonic);

for (let i = 0; i < 4; i++) {
  // sol pub keys...
  const path = `m/44'/501'/${i}'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();
  console.log("public key...", publicKey);
}
