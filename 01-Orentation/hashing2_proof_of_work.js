const crypto = require("crypto");

// this function finds the input whose hash starts with the given prefix and returns the hash and prefix
function getHashWithPrefix(prefix) {
    let input = 0;
    while(true) {
        let inputStr = input.toString();
        // finding hash for the inputStr
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if(hash.startsWith(prefix)) {
            return {input: inputStr, hash: hash};
        }
        input++;
    }
}

const result = getHashWithPrefix("00000");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);