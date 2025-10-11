import { createMint } from "@solana/spl-token";
import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import dotenv from "dotenv";

dotenv.config();

const payer = Keypair.fromSecretKey(
  Uint8Array.from(JSON.parse(process.env.PRIVATE_KEY))
);
const mintAuthority = payer;
const connection = new Connection(clusterApiUrl("devnet"));

async function createMintForToken(payer, mintAuthority) {
  const mint = await createMint(connection, payer, mintAuthority, null, 6);
  console.log("Mint created at", mint.toBase58());
  return mint;
}

async function main() {
  const mint = await createMintForToken(payer, mintAuthority.publicKey);
}

main();
