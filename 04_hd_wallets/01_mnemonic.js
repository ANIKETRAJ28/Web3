import { generateMnemonic, mnemonicToSeedSync } from "bip39";

// 128 -> 12 words
// 256 -> 24 words
const mnemonic = generateMnemonic(128);
console.log(mnemonic.split(" ").join("\n"));

const seed = mnemonicToSeedSync(mnemonic);
console.log("seed...", seed);
