const crypto = require("crypto");

const input = "100xdevs";

// sha-256 is the hashing algorithm which hashes the input in hex form
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(hash);