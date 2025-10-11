import dotenv from "dotenv";
import {
  Connection,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
  PublicKey,
} from "@solana/web3.js";

dotenv.config();

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

async function airdrop(publicKey, amount) {
  const airdropSignature = await connection.requestAirdrop(
    new PublicKey(publicKey),
    amount
  );

  await connection.confirmTransaction({ signature: airdropSignature });
  return airdropSignature;
}

airdrop(`${process.env.PUBLIC_KEY}`, LAMPORTS_PER_SOL).then((signature) => {
  console.log("Airdrop signature: ", signature);
});
