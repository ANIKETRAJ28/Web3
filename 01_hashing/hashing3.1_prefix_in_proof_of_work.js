const crypto = require("crypto");

//    prefix   +    nonce ------> SHA256 ------> hash
// "100xdevs"     "2274885"                     00000b2d1dde70b56f41571855e268d140b304c7661c0ef04a8889bd83a88b06

// in this function we are trying to get the input string which starts with "100xdevs" followed
// by some random string with "00000" as the prefix
function getHashWithPrefix(value, prefix) {
    let input = 0;
    while(true) {
        let inputStr = value + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if(hash.startsWith(prefix)) {
            return {input: inputStr, hash: hash};
        }
        input++;
    }
}

const result = getHashWithPrefix("harkirat => raman | 100", "00000");
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);