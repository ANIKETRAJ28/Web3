function asciiToByte(asciiString) {
  return [...asciiString].map((ascii) => ascii.charCodeAt(0));
}

const asciiString = "Hello";
const byteArray = asciiToByte(asciiString);
console.log("byte array...", byteArray);
